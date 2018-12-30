import { Container, cx } from '@hackclub/design-system'
import { navigateTo } from 'gatsby-link'
import qs from 'qs'
import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
import Header from 'components/Header'
import LoginForm from 'components/LoginForm'
import api from 'api'
import storage from 'storage'

class Login extends Component {
    state = { status: 'loading' }

    componentDidMount() {
        const params = qs.parse(this.props.location.search.substring(1))

        // Initial state: at /login without a stored token
        if (!params.auth_token && !storage.get('authToken')) {
            this.setState({ status: 'ready' })
            return
        }

        switch (params.status) {
            case 'success':
                storage.set('authToken', params.auth_token)
                this.setState({ status: 'success' })
                break
            case 'failed':
                this.setState({ status: 'failed' })
                return
            default:
                this.setState({ status: 'loading' })
                break
        }
        // Auth token found, verify it
        api.get('v1/users/current', { headers: { Authorization: `Bearer ${storage.get('authToken')}` } })
            .then(({ data }) => {
                if (!storage.get('userId')) {
                    storage.set('userId', data.id)
                    setTimeout(() => navigateTo('/'), 2000) // Imitate loading effect
                    return
                }
                navigateTo('/')
            })
            .catch(e => {
                this.setState({ status: e.response.status === 401 ? 'ready' : 'error' })
            })
    }

    render() {
        return (
            <Fragment>
                <Helmet title="Login" />
                <Header />
                <style children={`
                    body {
                        background: linear-gradient(
                            48deg,
                            ${cx('orange.5')},
                            ${cx('red.4')},
                            ${cx('pink.3')}
                        );
                    }
                `} />
                <Container maxWidth={32} pt={6} pb={[4, null, 5]}>
                    <LoginForm status={this.state.status} />
                </Container>
            </Fragment>
        )
    }
}

export default Login