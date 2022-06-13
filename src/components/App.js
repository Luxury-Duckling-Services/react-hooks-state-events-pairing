import video from "../data/video.js";
import React , { useState } from 'react'
import Information from "./Information.js";
import Thumbs from "./Thumbs.js";
import Comment from "./Comment.js"

function App() {
  const [videoInfo , setVideoInfo] = useState(video)

  function like() {
    const newVideoInfo = { ...videoInfo}
    newVideoInfo.upvotes += 1
    setVideoInfo(newVideoInfo)
  }

  function dislike() {
    const newVideoInfo = { ...videoInfo}
    newVideoInfo.downvotes += 1
    setVideoInfo(newVideoInfo)
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Information videoInfo={videoInfo} handleLikes/>

      <Thumbs videoInfo={videoInfo} handleLikes={like} handleDislikes={dislike}/>
      
      <Comment comments={videoInfo.comments}/>
    </div>
  );
}

export default App;
