import React from 'react'

function Thumbs( { videoInfo , handleLikes , handleDislikes }) {
    

    
    return (
        <>
            <button onClick={handleLikes}>{videoInfo.upvotes}👍</button>
            <button onClick={handleDislikes}>{videoInfo.downvotes}👎</button>
        </>
    )
}

export default Thumbs