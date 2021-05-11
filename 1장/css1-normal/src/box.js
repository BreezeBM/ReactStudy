import React from 'react'
import './Box.css'

export default function Box({size}) {
    if(size === 'big') {
        return <div className='box big'>Big BOX</div>
    } else {
        return <div className='box small'>Small Box</div>
    }
}