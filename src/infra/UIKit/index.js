import React, { useEffect } from 'react'

const UIKit = (props) => {

    useEffect(() => {

        if (typeof window !== "undefined") {
            const uikit = require("uikit");
            const icons = require("uikit/dist/js/uikit-icons.min");
            uikit.use(icons);
        }

    }, [])

    return (
        <div>{props.children}</div>
    )
}

export default UIKit