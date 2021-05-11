import React from 'react'
import './Box.js'

export default function Box({size}) {
    if(size === 'big') {
        return <div className='box big'>BIG</div>
    } else {
        return <div className='box small'>Small</div>
    }
}