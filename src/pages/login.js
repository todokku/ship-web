import { Flex, cx } from '@hackclub/design-system'
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
        <Flex flexDirection="column" align="center" justify="center" style={{ minHeight: '100vh' }}>
            <LoginForm />
        </Flex>
    </Fragment>
)

export default Login