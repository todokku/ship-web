import { Box, Button, Field, Flex, Heading, Input, Label, Text, cx } from '@hackclub/design-system'
import { withFormik } from 'formik'
import React from 'react'
import Select from 'react-select'
import styled, { css } from 'styled-components'
import * as yup from 'yup'
import MarkdownRenderer from 'components/MarkdownRenderer';
import api from 'api'

const Error = Text.extend.attrs({
    className: 'error',
    color: 'error',
    f: 1,
    ml: 1,
    my: 0
})`
    font-weight: normal;
    &:before {
        content: '— ';
    }
`
const InputTextarea = Input.withComponent('textarea')

const Form = Box.withComponent('form').extend.attrs({ bg: 'white', p: 4 })`
    box-shadow: rgba(0, 0, 0, 0.063) 0px 8px 32px;
    text-align: left;
    will-change: border-radius;
    ${({ theme }) => theme.mediaQueries.md} {
        border-radius: ${({ theme }) => theme.radii[3]};
    }
`

const Row = Flex.extend.attrs({
    flexDirection: ['column', null, 'row'],
    mb: 1
})`
    ${({ theme }) => theme.mediaQueries.md} {
        & > *:not(:first-child) {
            margin-left: ${({ theme }) => theme.space[2]}px;
        }
        ${props =>
            props.grow &&
            css`
                & > * {
                    flex: 1;
                }
            `}
    }
`

Row.defaultProps = {
    grow: true
}

const DescriptionField = styled(InputTextarea)`
    font-family: ${({ theme }) => theme.mono};
    max-width: none;
`

const DescriptionPreview = Box.extend.attrs({
    bg: 'snow',
    p: 2,
    children: props => <MarkdownRenderer source={props.source} />
})`
    border-radius: ${({ theme }) => theme.radius};
    height: 100%;
    overflow: auto;
`

const selectStyles = {
    control: base => ({
        ...base,
        background: 'transparent'
    })
}

const topics = [
    { label: 'Web', value: 'web' },
    { label: 'Mobile', value: 'mobile' },
    { label: 'AI', value: 'ai' },
    { label: 'Virtual reality', value: 'virtual-reality' },
    { label: 'Hardware', value: 'hardware' },
    { label: 'Blockchain', value: 'blockchain' },
    { label: 'Big data', value: 'big-data' },
    { label: 'Game', value: 'game' },
    { label: 'Tool', value: 'tool' },
    { label: 'Art', value: 'art' },
]

const InnerForm = ({
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    setFieldTouched,
    setFieldValue,
    status,
    touched,
    values,
    ...props
}) => (
    <Form onSubmit={handleSubmit} {...props}>
        <Heading.h1 mb={4}>Add a new project</Heading.h1>
        <Row>
            <Box>
                <Label>Images</Label>
            </Box>
        </Row>
        <Row>
            <Field
                label="Name"
                name="name"
                type="text"
                placeholder="My Litty Project"
                value={values.name}
                error={touched.name && errors.name}
                onChange={handleChange}
            />
            <Field
                label="Tagline"
                name="tagline"
                type="text"
                placeholder="Fixing problem X with code"
                value={values.tagline}
                error={touched.tagline && errors.tagline}
                onChange={handleChange}
            />
        </Row>
        <Row>
            <Box mb={2} style={{ maxHeight: '24rem', overflow: 'hidden' }}>
                <Label>Description</Label>
                <DescriptionField
                    label="Description"
                    name="description"
                    placeholder="This project was made to…"
                    rows={14}
                    value={values.description}
                    onChange={handleChange}
                />
            </Box>
            <Box mb={2} style={{ maxHeight: '24rem', overflow: 'hidden' }}>
                <Label>Preview</Label>
                <DescriptionPreview source={values.description} />
            </Box>
        </Row>
        <Row>
            <Box>
                <Label>Link to your project (live demo, source code, video demo, etc…)</Label>
            </Box>
            <Label mb={2}>
                <Flex align="center" mb="2px" wrap>
                    Help your project get discovered with relevant topic tags
                    {touched.topics && errors.topics && <Error children={errors.topics} />}
                </Flex>
                <Select
                    name="topics"
                    options={topics}
                    styles={selectStyles}
                    onBlur={() => setFieldTouched('topics', true)}
                    onChange={option => setFieldValue('topics', option)}
                    value={values.topics}
                    isMulti
                />
            </Label>
        </Row>
        <Label mb={2}>
            <Flex align="center" mb="2px" wrap>
                Who made this project?
                {touched.creators && errors.creators && <Error children={errors.creators} />}
            </Flex>
            <Select
                name="creators"
                options={[{ label: 'Victor Truong', value: 'ifvictr' }]}
                styles={selectStyles}
                onBlur={() => setFieldTouched('creators', true)}
                onChange={option => setFieldValue('creators', option)}
                value={values.creators}
                isMulti
            />
        </Label>
        <Row mt={4} grow={false}>
            <Button onClick={handleSubmit} disabled={isSubmitting} scale>Ship it!</Button>
            <Button bg="black" mt={[2, null, 0]} inverted>Cancel</Button>
        </Row>
    </Form>
)

const ProjectForm = withFormik({
    mapPropsToValues: ({ params }) => ({
        name: '',
        tagline: '',
        description: '',
        topics: [],
        creators: [],
        ...params
    }),
    validationSchema: yup.object().shape({
        name: yup.string().required('required'),
        tagline: yup.string().required('required'),
        description: yup.string(),
        topics: yup.array(),
        creators: yup.array().min(1, 'project must have at least one creator')
    }),
    enableReinitialize: true,
    handleSubmit: (data, { setSubmitting }) => {
        const formattedData = { ...data }
        formattedData.creators = data.creators.map(creator => creator.value)
        formattedData.topics = data.topics.map(topic => topic.value)

        api.post('v1/projects', { data: formattedData })
            .then(res => {
                // TODO
            })
            .catch(e => {
                setSubmitting(false)
                console.log(e)
            })
    }
})(InnerForm)

export default ProjectForm