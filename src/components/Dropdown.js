import { Box, Card, Flex } from '@hackclub/design-system'
import styled, { css } from 'styled-components'

export const DropdownContainer = styled(Box)`
    position: relative;
`

export const DropdownMenu = styled(Card.withComponent(Flex))`
    align-items: stretch;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.boxShadows[2]};
    flex-direction: column;
    left: 0;
    max-width: 95vw;
    overflow-y: auto;
    padding: ${({ theme }) => theme.space[2]}px 0;
    position: absolute;
    right: 0;
    text-align: left;
    transform-origin: center top;
    width: 100%;
    z-index: 4;
    -webkit-overflow-scrolling: touch;
`

export const DropdownMenuOption = styled(Box)`
    cursor: pointer;
    padding: ${({ theme }) => theme.space[2]}px ${({ theme }) => theme.space[3]}px;
    width: 100%;
    ${props =>
        props.active &&
        css`
            background-color: ${({ theme }) => theme.colors.smoke};
            font-weight: ${({ theme }) => theme.bold};
        `}
    &:hover {
        background-color: ${({ theme }) => theme.colors.blue[0]};
        transition: background-color ${({ theme }) => theme.transition};
    }
`