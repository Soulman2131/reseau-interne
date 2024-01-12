import React from "react";
import { useSelector } from "react-redux";
import { selectedAllPosts } from "../features/postSlice";
import AuthorPost from "./AuthorPost";
import TimeAgo from "./TimeAgo";
import Emojis from "./Emojis";

function Posts() {
  const posts = useSelector(selectedAllPosts);

  return (
    <div className="posts-container">
      <h2>La liste des posts</h2>
      {posts
        .slice()
        .sort((a, b) => b.date.localeCompare(a.date))
        .map((post, index) => (
          <article key={index}>
            <div>
              <h3> {post.title} </h3>
              <p> {post.content.substring(0, 100)} </p>
            </div>
            <div className="posts-infos">
              <AuthorPost userId={post.userId} />
              <TimeAgo timestamp={post.date} />
            </div>
            <Emojis post={post} />
          </article>
        ))}
    </div>
  );
}

export default Posts;
