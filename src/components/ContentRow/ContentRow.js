import React from 'react'

const ContentRow = ({left, right}) => {
    return(
        <div className = 'row pl-3 pr-3 mt-3 justify-content-between'>
            {left}
            {right}
        </div>
    )
}

export default ContentRow