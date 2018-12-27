import { Avatar, Box, Flex, Link as A, cx } from '@hackclub/design-system'
import Link from 'gatsby-link'
import React, { Component } from 'react'
import { css } from 'styled-components'
import Search from 'components/Search'

const Base = Flex.withComponent('header').extend.attrs({
    align: 'center',
    justify: 'space-between',
    px: [null, 3, 4],
    pt: 0,
    w: 1
})`
    position: absolute;
    top: 0;
    transition: background ${({ theme }) => theme.transition}, border ${({ theme }) => theme.transition};
    will-change: background, border, color, position;
    z-index: 1;
    ${props =>
        props.fixed &&
        css`
            background: rgba(255, 255, 255, 0.95);
            border-bottom: 1px solid rgba(51, 51, 51, 0.1);
            color: ${cx('slate')};
            position: fixed;
            top: 0;
        `}
`

const Flag = A.withComponent(Link).extend.attrs({ to: '/' })`
    background: url(/flag.svg) no-repeat;
    background-position: top center;
    flex-shrink: 0;
    height: 3rem;
    transform-origin: top;
    transition: height ${({ theme }) => theme.transition}, transform ${({ theme }) => theme.transition};
    width: 8rem;
    will-change: height transform, width;
    z-index: 0;
    ${({ theme }) => theme.mediaQueries.md} {
        height: 4rem;
        width: 10rem;
    }
    ${props =>
        props.fixed &&
        css`
            height: 54px;
            transform: scale(0.75);
        `}
`

const NavBar = Flex.withComponent('nav').extend`
    overflow-x: auto;
    transition: color ${({ theme }) => theme.transition};
    will-change: color;
    -webkit-overflow-scrolling: touch;
`

const Item = A.extend.attrs({
    bold: true,
    my: [1, 0],
    px: [2, 3]
})`
    color: inherit;
`

const GatsbyItem = Item.withComponent(Link)

class Header extends Component {
    state = { scrolled: false }

    componentDidMount() {
        this.bindScroll(true)
    }

    componentWillUnmount() {
        this.bindScroll(false)
    }

    render() {
        const { color, fixed, ...props } = this.props
        const { scrolled } = this.state
        return (
            <Base role="banner" fixed={scrolled || fixed} {...props}>
                <Flex align="center" flex={1}>
                    <Flag fixed={scrolled || fixed} />
                    <Search ml={2} />
                </Flex>
                <NavBar role="navigation" ml={-2} py={[1, 0]} color={(scrolled || fixed) ? 'inherit' : color} align="center">
                    <GatsbyItem to="/new" children="New project" />
                    <GatsbyItem to="/login" children="Login" />
                    {/* <Avatar src="https://hackclub.com/team/orpheus.jpg" size={32} /> */}
                </NavBar>
            </Base>
        )
    }

    bindScroll = add => {
        if (typeof window !== 'undefined') {
            const fn = add ? 'addEventListener' : 'removeEventListener'
            window[fn]('scroll', this.onScroll)
        }
    }

    onScroll = () => {
        const newState = window.scrollY >= 16
        const { scrolled: oldState } = this.state

        if (newState !== oldState) {
            this.setState({ scrolled: newState })
        }
    }
}

Header.defaultProps = {
    color: 'white',
    fixed: false
}

export default Header