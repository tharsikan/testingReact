import React from 'react'
import ReactDom from 'react-dom'

function PortalDemo() {
    return ReactDom.createPortal(
        <div>
            <h2>Portals Demo</h2>
        </div>,
        document.getElementById('portals-root')
    )
}

export default PortalDemo