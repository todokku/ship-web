import { Box } from '@hackclub/design-system'
import React from 'react'
import Topic from 'components/Topic'

const Base = Box.extend.attrs({ mt: -1 })``

const TopicList = ({ topics = [], ...props }) => (
    <Base {...props}>
        {topics.map(topic => (
            <Topic name={topic} key={topic} />
        ))}
    </Base>
)
export default TopicList