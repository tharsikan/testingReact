import React from 'react'
import ReactDOM from 'react-dom'

function Test() {
    return ReactDOM.createPortal(
        <div>
            HEllo
        </div>,
        document.getElementById('test')
    )
}

export default Test
