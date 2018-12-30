import { Input, cx } from '@hackclub/design-system'
import Link from 'gatsby-link'
import React from 'react'
import {
    InstantSearch,
    connectHits,
    connectSearchBox,
    connectStateResults
} from 'react-instantsearch-dom'
import {
    DropdownContainer,
    DropdownMenu,
    DropdownMenuOption
} from 'components/Dropdown'
import { ALGOLIA_APP_ID, ALGOLIA_SEARCH_API_KEY } from '../constants'

const SearchInput = Input.extend.attrs({ py: 1, px: 3 })`
    appearance: none;
    background: ${cx('snow')};
    border-radius: ${({ theme }) => theme.pill};
    opacity: 0.75;
    outline: 0;
    transition: opacity ${({ theme }) => theme.transition};
    will-change: opacity;
    &:hover,
    &:focus {
        opacity: 1;
    }
`

const BaseSearchBox = ({ currentRefinement, refine, ...props }) => (
    <SearchInput
        type="search"
        value={currentRefinement}
        onChange={e => refine(e.target.value)}
        {...props}
    />
)
const SearchBox = connectSearchBox(BaseSearchBox)

const Hit = ({ hit }) => (
    <Link to={`/projects/${hit.slug}`}>
        <DropdownMenuOption>{hit.name}: {hit.tagline}</DropdownMenuOption>
    </Link>
)

const BaseHits = ({ hits }) => (
    <DropdownMenu style={{ maxWidth: '32rem' }}>
        {hits.map(hit => (
            <Hit hit={hit} />
        ))}
    </DropdownMenu>
)
const Hits = connectHits(BaseHits)

const BaseContent = ({ searchState, searchResults }) => {
    const hasResults = searchResults && searchResults.nbHits !== 0
    return searchState.query && hasResults ? <Hits /> : null
}
const Content = connectStateResults(BaseContent)

const Search = props => (
    <DropdownContainer w={1} {...props}>
        <InstantSearch
            appId={ALGOLIA_APP_ID}
            apiKey={ALGOLIA_SEARCH_API_KEY}
            indexName="projects"
        >
            <SearchBox placeholder="Search projects, topics, and users…" />
            <Content />
        </InstantSearch>
    </DropdownContainer>
)

export default Search