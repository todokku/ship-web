import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import { Flex, Heading, LargeButton, Text } from '@hackclub/design-system'
import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import Header from 'components/Header'

const NotFound = () => (
    <Fragment>
        <Helmet title="404" />
        <Header color="muted" />
        <Flex align="center" justify="center" flexDirection="column" maxWidth={48} style={{ minHeight: '100vh' }}>
            <Heading.h1 color="primary" f={[5, 6]}>
                404!
            </Heading.h1>
            <Text f={4} mt={2} mb={3} color="muted">
                We couldn’t find that page.
            </Text>
            <LargeButton href="/">
                Go home <FA icon="home" />
            </LargeButton>
        </Flex>
    </Fragment>
)

export default NotFound