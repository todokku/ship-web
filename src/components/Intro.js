import { Heading, Section, Text, cx } from '@hackclub/design-system'
import React from 'react'

const Base = Section.extend`
    background-image: linear-gradient(
        -24deg,
        ${cx('cyan.6')},
        ${cx('teal.6')}
    );
    clip-path: polygon(0% 0%, 100% 0px, 100% 100%, 0px 95%);
    min-height: 28rem;
    text-shadow: rgba(0, 0, 0, 0.376) 0px 1px 2px;
    will-change: clip-path;
    ${({ theme }) => theme.mediaQueries.md} {
        clip-path: polygon(0% 0%, 100% 0px, 100% 100%, 0px 90%);
    }
`

const Intro = props => (
    <Base {...props}>
        <Heading.h1 f={7}>Let’s get shipping!</Heading.h1>
        <Text f={4} mt={3}>Share your latest project with other hackers in the community.</Text>
    </Base>
)

export default Intro