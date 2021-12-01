import React from 'react'

const Container = (props) => {
    return (
        <div className="uk-container" {...props}>
            {props.children}
        </div>
    )
}

export default Container