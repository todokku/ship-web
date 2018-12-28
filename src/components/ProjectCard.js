import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import { Avatar, Box, Card, Flex, Heading, Text, cx } from '@hackclub/design-system'
import Link from 'gatsby-link'
import React, { Component, Fragment } from 'react'
import { CloseButton, Modal, Overlay } from 'components/Modal'
import UserCard from 'components/UserCard'

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

const Creators = Flex.extend.attrs({ bg: 'gray.1', p: 2 })`
    & ${Avatar} {
        vertical-align: top;
    }
    & > a:not(:first-child) {
        margin-left: ${({ theme }) => theme.space[1]}px;
    }
`

const HiddenCreatorCount = Text.span.extend.attrs({
    color: 'muted',
    f: 1,
    ml: 1
})`
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`

class ViewAllCreators extends Component {
    state = { active: false }

    toggleActive = () => {
        this.setState(state => ({ active: !state.active }))
    }

    render() {
        const { creators } = this.props
        const hiddenCreatorCount = creators.length - 4
        return (
            <Fragment>
                <HiddenCreatorCount onClick={this.toggleActive}>
                    + {hiddenCreatorCount} other{hiddenCreatorCount > 1 ? 's' : ''}
                </HiddenCreatorCount>
                {this.state.active && (
                    <Fragment>
                        <Modal align="left" my={4} p={[3, 4]} width="32rem">
                            <CloseButton onClick={this.toggleActive} />
                            <Heading.h2 mb={3}>Creators</Heading.h2>
                            {creators.map(creator => (
                                <UserCard data={creator} key={creator.id} />
                            ))}
                        </Modal>
                        <Overlay onClick={this.toggleActive} />
                    </Fragment>
                )}
            </Fragment>
        )
    }
}

const sampleData = {
    id: 1,
    name: 'Hack Club',
    slug: 'hack-club',
    main_image: {
        id: 1,
        url: 'https://ph-files.imgix.net/844b9bf2-f927-45fd-a231-d13ba092efa1'
    },
    tagline: 'Hack Club is a nonprofit network of computer science clubs where members learn to code through tinkering and building projects.',
    description: '',
    created_at: '',
    updated_at: '',
    creators: [
        {
            id: 1,
            username: 'zrl',
            name: 'Zach Latta',
            avatar_url: 'https://hackclub.com/team/zach.jpg'
        },
        {
            id: 2,
            username: 'msw',
            name: 'Max Wofford',
            avatar_url: 'https://hackclub.com/team/max.jpg'
        },
        {
            id: 3,
            username: 'lachlanjc',
            name: 'Lachlan Campbell',
            avatar_url: 'https://hackclub.com/team/lachlan.jpg'
        },
        {
            id: 4,
            username: 'athul',
            name: 'Athul Blesson',
            avatar_url: 'https://hackclub.com/team/athul.jpg'
        },
        {
            id: 5,
            username: 'itsmingjie',
            name: 'Mingjie Jiang',
            avatar_url: 'https://hackclub.com/team/mingjie.jpg'
        },
        {
            id: 6,
            username: 'orpheus',
            name: 'Prophet Orpheus',
            avatar_url: 'https://hackclub.com/team/orpheus.jpg'
        }
    ],
    images: [
        {
            id: 1,
            url: 'https://ph-files.imgix.net/844b9bf2-f927-45fd-a231-d13ba092efa1'
        }
    ],
    links: [],
    topics: []
}

const ProjectCard = ({ data = sampleData, ...props }) => (
    <Base {...props}>
        <Inner>
            <Photo src={data.main_image.url} />
            <Info to={`/projects/${data.slug}`}>
                <Heading.h3 regular={false} bold>{data.name}</Heading.h3>
                <Text mt={2}>{data.tagline}</Text>
            </Info>
            <Creators>
                {data.creators.slice(0, 4).map(creator => (
                    <Link to={`/users/${creator.username}`}>
                        <Avatar src={creator.avatar_url} size={24} key={creator.id} />
                    </Link>
                ))}
                {data.creators.length > 4 && <ViewAllCreators creators={data.creators} />}
            </Creators>
        </Inner>
    </Base>
)

export default ProjectCard