import React from 'react'
import './myStyles.css'

function FunctionalComponents(props){
    let applyStyle = props.apply?
    console.logg(props)
    let inlineStyle={
        color:'red',
        fontsize:'100px'
    }
    return (
        <div>
            <h1>class={'${applyStyle}
            font-style'}</h1>
        </div>
    )
}