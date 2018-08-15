import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import { Box, Button, Divider, Field, Heading, cx } from '@hackclub/design-system'
import React from 'react'

const Form = Box.withComponent('form').extend.attrs({ bg: 'white', p: 4 })`
    border-radius: ${({ theme }) => theme.radii[3]};
    text-align: left;
`

const TextDivider = Divider.extend`
    background: none;
    height: 1.5rem;
    line-height: 1rem;
    position: relative;
    text-align: center;
    &:before {
        background: ${cx('muted')};
        content: '';
        height: 1px;
        left: 0;
        position: absolute;
        top: 50%;
        width: 100%;
    }
    &:after {
        background: ${cx('white')};
        color: ${cx('muted')};
        content: '${props => props.text}';
        display: inline-block;
        font-size: ${({ theme }) => theme.fontSizes[1]}px;
        line-height: 1.5rem;
        padding: 0 ${({ theme }) => theme.space[2]}px 0 ${({ theme }) => theme.space[2]}px;
        position: relative;
        text-transform: uppercase;
    }
`

const LoginForm = props => (
    <Form {...props}>
        <Heading.h2 mb={4}>Login</Heading.h2>
        <Box>
            <Field label="Email" name="email" type="email" placeholder="orpheus@hackclub.com" />
            <Button w={1}>Get login code</Button>
        </Box>
        <TextDivider my={3} text="or" />
        <Box>
            <Button bg="black" w={1} inverted><FA icon={['fab', 'slack-hash']} color={cx('primary')} /> Login with Slack</Button>
            <Button bg="#333" mt={3} w={1}><FA icon={['fab', 'github']} /> Login with GitHub</Button>
        </Box>
    </Form>
)

export default LoginForm