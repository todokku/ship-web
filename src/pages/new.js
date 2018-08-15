import { Container, cx } from '@hackclub/design-system'
import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import Header from 'components/Header'
import ProjectForm from 'components/ProjectForm'

const New = () => (
    <Fragment>
        <Helmet title="Add a new project" />
        <Header />
        <style children={`
            body {
                background-color: ${cx('violet.3')};
                background-image: url(/pattern.svg);
                background-size: 20rem;
            }
        `} />
        <Container pt={6} pb={[4, null, 5]}>
            <ProjectForm />
        </Container>
    </Fragment>
)

export default New