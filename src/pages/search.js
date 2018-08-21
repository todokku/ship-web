import { Container, Heading } from '@hackclub/design-system'
import qs from 'qs'
import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
import Header from 'components/Header'

class Search extends Component {
    state = { results: [], query: null }

    componentDidMount() {
        const { q } = qs.parse(this.props.location.search.slice(1))
        this.setState({ query: q })
        // TODO: Call API search endpoint and render results
    }

    render() {
        const { results, query } = this.state
        return (
            <Fragment>
                <Helmet title="Search" />
                <Header color="muted" />
                <Container px={[3, null, 4]} pt={[5, null, 6]}>
                    <Heading.h2>
                        {results.length} result{results.length !== 1 && 's'} for “{query}”
                    </Heading.h2>
                </Container>
            </Fragment>
        )
    }
}

export default Search