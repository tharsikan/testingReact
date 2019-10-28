import React from 'react'

const FChild = React.forwardRef((props, ref) => {
    return (
        <div>
            <input input="text" ref={ref}/>
        </div>
    )
})

export default FChild