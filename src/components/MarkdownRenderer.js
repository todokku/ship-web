import { Heading, Image, Link as A, Text } from '@hackclub/design-system'
import React from 'react'
import Markdown from 'react-markdown'

const CustomHeading = ({ level, ...props }) => {
    const Component = Heading['h' + level]
    return <Component {...props} />
}

const renderers = {
    heading: CustomHeading,
    image: Image,
    link: A,
    paragraph: Text
}

const MarkdownRenderer = ({ source, ...props }) => (
    <Markdown source={source} renderers={renderers} {...props} />
)

export default MarkdownRenderer