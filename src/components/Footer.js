import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import { Box, Link, Text, colors } from '@hackclub/design-system'
import React from 'react'

const Base = Box.withComponent('footer').extend.attrs({
    bg: 'snow',
    color: 'black',
    p: 4
})`
    background-image: url(/pattern.svg);
    background-size: 20rem;
`

const Footer = props => (
    <Base {...props}>
        <Text align="center" f={3}>
            Made with <FA icon="code" color={colors.info} /> and <FA icon="heart" color={colors.primary} /> by{' '}
            <Link href="https://ifvictr.com" target="_blank">Victor Truong</Link>
        </Text>
    </Base>
)
export default Footer