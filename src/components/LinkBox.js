import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import { Box, Flex, Link, Text, cx } from '@hackclub/design-system'
import React from 'react'
import url from 'url'

const icon = domain => ({
    'github.com': ['fab', 'github-alt'],
    'gitlab.com': ['fab', 'gitlab']
})[domain.toLowerCase()] || 'link'

const Base = Flex.withComponent(Link).extend.attrs({
    align: 'center',
    bg: 'white',
    color: 'muted',
    justify: 'space-between',
    p: 2
})`
    border: 1px solid ${cx('smoke')};
    border-radius: ${({ theme }) => theme.radius};
    &:not(:first-of-type) {
        margin-top: ${({ theme }) => theme.space[2]}px;
    }
`

const LinkBox = ({ href, ...props }) => {
    const { hostname } = url.parse(href)
    return (
        <Base href={href} {...props}>
            <Box>
                <FA icon={icon(hostname)} />
                <Text.span ml={2}>{hostname}</Text.span>
            </Box>
            <FA icon="chevron-right" />
        </Base>
    )
}

export default LinkBox