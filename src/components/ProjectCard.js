import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import { Avatar, Box, Card, Flex, Heading, Text, cx } from '@hackclub/design-system'
import Link from 'gatsby-link'
import React from 'react'

const Base = Flex.extend.attrs({ p: 2 })`
    width: 100%;
    ${({ theme }) => theme.mediaQueries.sm} {
        width: 50%;
    }
    ${({ theme }) => theme.mediaQueries.lg} {
        width: 33.3333%;
    }
`

const Inner = Card.withComponent(Flex).extend.attrs({
    boxShadowSize: 'sm',
    bg: 'snow',
    color: 'black',
    flexDirection: 'column',
    w: 1
})`
    position: relative;
`

const Photo = Box.extend.attrs({
    style: props => ({
        backgroundImage: `url(${props.src})`
    })
})`
    background-color: ${cx('gray.1')};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: ${({ theme }) => theme.radius} ${({ theme }) => theme.radius} 0 0;
    display: block;
    margin: 0;
    padding-top: 66.6666%;
    position: relative;
`

const Info = Flex.withComponent(Link).extend.attrs({
    flex: 1,
    flexDirection: 'column',
    justify: 'flex-start',
    p: 3
})``

const Authors = Flex.extend.attrs({ bg: 'gray.1', p: 2 })`
    & > ${Avatar}:not(:first-child) {
        margin-left: ${({ theme }) => theme.space[1]}px;
    }
`

const ProjectCard = props => (
    <Base {...props}>
        <Inner>
            <Photo src="https://ph-files.imgix.net/844b9bf2-f927-45fd-a231-d13ba092efa1" />
            <Info to="/projects/hack-club">
                <Heading.h3 regular={false} bold>Hack Club</Heading.h3>
                <Text mt={2}>Hack Club is a nonprofit network of computer science clubs where members learn to code through tinkering and building projects.</Text>
            </Info>
            <Authors>
                <Avatar src="https://hackclub.com/team/zach.jpg" size={24} />
                <Avatar src="https://hackclub.com/team/max.jpg" size={24} />
                <Avatar src="https://hackclub.com/team/lachlan.jpg" size={24} />
                <Avatar src="https://hackclub.com/team/athul.jpg" size={24} />
                <Text.span color="muted" f={1} ml={1}>+ 2 more</Text.span>
            </Authors>
        </Inner>
    </Base>
)

export default ProjectCard