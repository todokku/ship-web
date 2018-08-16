import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import { Box, Flex, Heading, cx } from '@hackclub/design-system'
import React from 'react'
import ProjectCard from 'components/ProjectCard'

const Base = Box.extend`
    border-radius: ${({ theme }) => theme.radius};
    &:not(:first-of-type) {
        margin-top: ${({ theme }) => theme.space[4]}px;
        ${({ theme }) => theme.mediaQueries.md} {
            margin-top: ${({ theme }) => theme.space[5]}px;
        }
    }
`

const ProjectSection = ({ title, icon, iconColor, ...props }) => (
    <Base {...props}>
        <Heading.h2 mb={3}><FA icon={icon} color={cx(iconColor)} /> {title}</Heading.h2>
        <Flex style={{ margin: '-8px' }} wrap>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </Flex>
    </Base>
)

export default ProjectSection