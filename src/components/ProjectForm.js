import { Box, Button, Field, Flex, Heading, Input, Label, cx } from '@hackclub/design-system'
import { withFormik } from 'formik'
import React from 'react'
import Select from 'react-select'
import styled, { css } from 'styled-components'
import * as yup from 'yup'
import MarkdownRenderer from 'components/MarkdownRenderer';

const InputTextarea = Input.withComponent('textarea')

const Form = Box.withComponent('form').extend.attrs({ bg: 'white' })`
    text-align: left;
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

// TODO: Abstract into component
const selectStyles = {
    control: base => ({
        ...base,
        background: 'transparent'
    })
}

// TODO: Pull from API instead of hardcoding
const tags = [
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
    status,
    touched,
    values,
    ...props
}) => (
    <Form onSubmit={handleSubmit} {...props}>
        <Heading.h1 mb={4}>Add a new project</Heading.h1>
        <Row>
            {/* TODO: Show uploaded image previews */}
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
                onChange={handleChange}
            />
        </Row>
        <Row>
            {/* TODO: Abstract into component */}
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
            {/* TODO: Create list input for links */}
            <Box>
                <Label>Links (if applicable)</Label>
            </Box>
            <Box>
                <Label>Tags</Label>
                <Select
                    name="tags"
                    options={tags}
                    placeholder="Help your project get discovered in relevant categories"
                    styles={selectStyles}
                    onChange={handleChange}
                    value={values.tags}
                    isMulti
                />
            </Box>
        </Row>
        {/* TODO: Add creator automatically */}
        <Label>Authors</Label>
        <Select
            name="authors"
            options={[{ label: 'Victor Truong', value: 'ifvictr' }]}
            placeholder="Who made this project?"
            styles={selectStyles}
            onChange={handleChange}
            value={values.authors}
            isMulti
        />
        <Row mt={4} grow={false}>
            <Button onClick={handleSubmit} disabled={isSubmitting} scale>Ship it!</Button>
            <Button bg="black" inverted>Cancel</Button>
        </Row>
    </Form>
)

const ProjectForm = withFormik({
    mapPropsToValues: props => ({
        name: '',
        tagline: '',
        description: '',
        tags: [],
        authors: []
    }),
    validationSchema: yup.object().shape({
        name: yup.string().required('required'),
        tagline: yup.string(),
        description: yup.string()
    }),
    enableReinitialize: true,
    handleSubmit: (data, { props, setSubmitting, setErrors }) => {
        console.log(data)
    }
})(InnerForm)

export default ProjectForm