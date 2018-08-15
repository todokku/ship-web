import { } from '@hackclub/design-system'
import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import Header from 'components/Header'

const Topic = ({ pathContext }) => (
    <Fragment>
        <Helmet title="Topic here" />
        <Header />
    </Fragment>
)

export default Topic