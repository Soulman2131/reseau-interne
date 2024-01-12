import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "../features/postSlice";
import { selectedAllUsers } from "../features/userSlice";

function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();
  const users = useSelector(selectedAllUsers);

  const handleAddPost = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
      setUserId("");
    }
  };

  //   SELECT FUNCTION
  const userOptions = users.map((user, index) => (
    <option key={index} value={user.id}>
      {user.name}
    </option>
  ));

  //   I CAN SAVE ENREGISTRER
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  return (
    <div className="addpost-container">
      <h2>Ajouter un post </h2>
      <form action="#" onSubmit={handleAddPost}>
        <label htmlFor="title">Titre</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/*  */}
        <label htmlFor="author">Auteur</label>
        <select
          name="author"
          id="author"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          <option value=""></option>
          {userOptions}
        </select>

        {/*  */}
        <label htmlFor="content">Message</label>
        <textarea
          name="content"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <input type="submit" value="Enregistrer" disabled={!canSave} />
      </form>
    </div>
  );
}

export default AddPost;
