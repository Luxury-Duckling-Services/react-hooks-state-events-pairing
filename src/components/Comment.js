import React , { useState } from "react";

function Comment ( { comments }) {
    
    const [ showStatus , setShowStatus ] = useState(true)

    function swapShowStatus() {
        setShowStatus(!showStatus)
    }

    return (
        <div>
            <button onClick={swapShowStatus}>{ showStatus ? 'Hide Comments' : 'Show Comments'}</button>
            { showStatus ? comments.map( (comment) => {
                return (
                    <div key={comment.id}>
                        <h3>{comment.user}</h3>
                        <p>{comment.comment}</p>
                    </div>
                ) 
        }) : <></> }
        </div>
    )
}


export default Comment