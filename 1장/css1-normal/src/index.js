import React from 'react'
import ReactDOM from 'react-dom'
import Box from './box.js'
import Button from './Button.js'

ReactDOM.render(
    <div>
        <Button size='big' />
        <Button size='small' />
        <Box size='big' />
        <Box size='small' />
    </div>,
    document.getElementById('root')
)