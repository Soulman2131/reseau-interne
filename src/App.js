import React from "react";
import AddPost from "./components/AddPost";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="app-container">
      <h1> Le réseau interne d'une entreprise de trois salariées.</h1>
      <AddPost />
      <Posts />
    </div>
  );
}

export default App;
