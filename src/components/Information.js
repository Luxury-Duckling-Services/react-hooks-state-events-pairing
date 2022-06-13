import React from 'react'

function Information ( { videoInfo }) {
    return (
        <>
            <h1>{videoInfo.title}</h1>
            <h2>{videoInfo.views} views | Uploaded {videoInfo.createdAt}</h2>
        </>
    )
}

export default Information