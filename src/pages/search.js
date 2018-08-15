import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
import Header from 'components/Header'

class Search extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <Fragment>
                <Helmet title="Search term here" />
                <Header />
            </Fragment>
        )
    }
}

export default Search