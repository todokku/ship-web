import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import { Box } from '@hackclub/design-system'
import React, { Fragment } from 'react'
import ScrollLock from 'react-scrolllock'
import styled, { keyframes } from 'styled-components'
import Sheet from 'components/Sheet'

const modalKeyframes = keyframes`
    0% {
        transform: translate(-50%, -50%) scale(0);
    }
    85% {
        transform: translate(-50%, -50%) scale(1.025);
    }
    100% {
        transform: translate(-50%, -50%) scale(1);
    }
`

export const Modal = styled(Sheet).attrs({ bg: 'white' })`
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.0625), 0 16px 32px rgba(0, 0, 0, 0.125) !important;
    left: 50%;
    max-height: 95vh;
    max-width: 95vw;
    margin: 0 auto;
    overflow-y: auto;
    position: fixed;
    top: 50%;
    transform: translate(-50%, -50%);
    width: ${props => props.w || props.width || '36rem'};
    z-index: 1100;
    -webkit-overflow-scrolling: touch;
    ${({ theme }) => theme.mediaQueries.md} {
        animation: ${modalKeyframes} ease-in 0.25s;
    }
    & > button:first-child {
        position: fixed;
        right: 0;
        top: 0;
    }
`

export const Overlayer = styled(Box)`
    backdrop-filter: blur(6px);
    background-color: rgba(255, 255, 255, 0.75);
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1024;
`

export const Overlay = props => (
    <Fragment>
        <Overlayer {...props} />
        <ScrollLock />
    </Fragment>
)

const ButtonReset = styled(Box.withComponent('button')).attrs({
    p: 3,
    role: 'button'
})`
    appearance: none;
    background: transparent;
    border: 0;
    border-radius: ${({ theme }) => theme.pill};
    cursor: pointer;
`
export const CloseButton = props => (
    <ButtonReset aria-label="Close" color="muted" {...props}>
        <FA icon="times" />
    </ButtonReset>
)