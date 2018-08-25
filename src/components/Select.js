import React from 'react'
import Base, { Async as AsyncBase } from 'react-select'

const styles = {
    control: base => ({
        ...base,
        background: 'transparent'
    })
}

const Select = props => (
    <Base styles={styles} {...props} />
)

const AsyncSelect = props => (
    <AsyncBase styles={styles} {...props} />
)

export default { Select, AsyncSelect }