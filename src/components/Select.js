import React from 'react'
import Base from 'react-select'

const styles = {
    control: base => ({
        ...base,
        background: 'transparent'
    })
}

const Select = props => (
    <Base styles={styles} {...props} />
)

export default Select