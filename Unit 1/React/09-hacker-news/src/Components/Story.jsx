import React, { useState } from "react";
import { useStoryContext } from "../util/context";


const Story = ({ story, id }) => {
  const {setStories, stories} = useStoryContext();
  return (
    <div className="story">
      <h2>{story.title || "Epic lol"}</h2>
      <p>{`${story.points || Math.floor(Math.random() * 1000)} points by ${
        story.author
      } | ${
        story.num_comments || Math.floor(Math.random() * 500)
      } comments `}</p>
      {/* <p>{`Created on ${story.created_at.split("T")[0]}`}</p> */}

      <div className="buttons">
        <a href={story.url || "https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>
          Read More
        </a>
        <button onClick={() => {setStories(stories.filter((story) => {
          return story.created_at !== id
        })) }} className="remove">Remove</button>
      </div>
    </div>
  );
};

export default Story;
