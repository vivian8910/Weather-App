import React from 'react';

export default function CityInput(props) {
    return (
        <input 
            className = 'input-control'
            id = 'cityname'
            placeholder = 'St.George, Utah'
            type="text"
            autoComplete = 'off'
            value = {props.value}
            onChange = {props.onChange}
        />  
    )
}