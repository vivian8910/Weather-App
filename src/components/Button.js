import React from 'react';

export default function Button(props) {
    return (
        <button
            className = 'button'
            type = 'submit'
            disabled = {props.disabled}>
            Get Weather
        </button>
    )
}