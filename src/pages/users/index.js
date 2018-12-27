import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
import Footer from 'components/Footer'
import Header from 'components/Header'
import LoadingBar from 'components/LoadingBar'
import NotFound from 'components/NotFound'
import api from 'api'

class Users extends Component {
    state = {
        projects: [],
        status: 'loading',
        user: {}
    }

    componentDidMount() {
        const pathPortions = this.props.location.pathname
            .split('/')
            .filter(v => v)
        // Path is /users/:username
        if (pathPortions.length > 1) {
            const username = pathPortions[pathPortions.length - 1]
            api.get(`v1/users/username/${username}`)
                .then(res => {
                    this.setState({ user: res.data, status: 'userLoaded' })
                    return res.data.id
                })
                .then(id => api.get(`v1/users/${id}/projects`))
                .then(res => {
                    this.setState({ projects: res.data, status: 'projectsLoaded' })
                })
                .catch(() => {
                    this.setState({ status: 'error' })
                })
        }
        // Path is just /users
        else {
            this.setState({ status: 'error' })
        }
    }

    render() {
        const { projects, status, user } = this.state
        switch (status) {
            case 'loading':
                return (
                    <Fragment>
                        <Header color="muted" />
                        <LoadingBar fill />
                    </Fragment>
                )
            case 'userLoaded':
            case 'projectsLoaded':
                return (
                    <Fragment>
                        <Helmet title={user.name} />
                        <Header color="muted" />
                        <Footer />
                    </Fragment>
                )
            case 'error':
                return <NotFound />
        }
    }
}

export default Users