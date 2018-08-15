import { Container, cx } from '@hackclub/design-system'
import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import Header from 'components/Header'
import LoginForm from 'components/LoginForm'

const Login = () => (
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
            <LoginForm />
        </Container>
    </Fragment>
)

export default Login