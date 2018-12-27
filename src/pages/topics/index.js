import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
import Footer from 'components/Footer'
import Header from 'components/Header'
import LoadingBar from 'components/LoadingBar'
import NotFound from 'components/NotFound'
import api from 'api'

class Topics extends Component {
    state = {
        projects: [],
        status: 'loading',
        topic: {}
    }

    componentDidMount() {
        const pathPortions = this.props.location.pathname
            .split('/')
            .filter(v => v)
        // Path is /topics/:slug
        if (pathPortions.length > 1) {
            const slug = pathPortions[pathPortions.length - 1]
            api.get(`v1/topics/slug/${slug}`)
                .then(res => {
                    this.setState({ topic: res.data, status: 'topicLoaded' })
                    return res.data.id
                })
                .then(id => api.get(`v1/topics/${id}/projects`))
                .then(res => {
                    this.setState({ projects: res.data, status: 'projectsLoaded' })
                })
                .catch(() => {
                    this.setState({ status: 'error' })
                })
        }
        // Path is just /topics
        else {
            this.setState({ status: 'error' })
        }
    }

    render() {
        const { projects, status, topic } = this.state
        switch (status) {
            case 'loading':
                return (
                    <Fragment>
                        <Header color="muted" />
                        <LoadingBar fill />
                    </Fragment>
                )
            case 'topicLoaded':
            case 'projectsLoaded':
                return (
                    <Fragment>
                        <Helmet title={topic.name} />
                        <Header color="muted" />
                        <Footer />
                    </Fragment>
                )
            case 'error':
                return <NotFound />
        }
    }
}

export default Topics