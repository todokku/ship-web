import { Box } from '@hackclub/design-system'

const SidebarSection = Box.extend.attrs({ bg: 'snow', p: 3 })`
    border-radius: ${({ theme }) => theme.radius};
    &:not(:first-child) {
        margin-top: ${({ theme }) => theme.space[4]}px;
    }
`

const Sidebar = Box.extend``

export default { Sidebar, SidebarSection }