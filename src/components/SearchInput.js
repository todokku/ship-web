import { Input, cx } from '@hackclub/design-system'
import React from 'react'

const Base = Input.extend.attrs({ py: 1, px: 3 })`
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

const SearchInput = props => (
    <Base type="search" placeholder="Search projects, topics, and users…" {...props} />
)

export default SearchInput