import forumStyles from "./Forum.module.css";
import { useState } from "react";
import TopContent from "../Global/TopContent";
import axios from "axios";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ForumCreation() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  function submitForum(event) {
    event.preventDefault();
    axios
      .post("http://localhost:4000/api/createforum", {
        user: user.username,
        title: title,
        date: Date(),
        body: content,
        likes: 0,
        dislikes: 0,
        score: 0,
        tags: "",
        comments: [],
        image: image,
      })
      .then((res) => {
        if (res.data.status === "error") {
          alert("Error: Duplicate title");
        } else {
          navigate("../Forum");
        }
      })
      .catch((err) => console.log(err));
    /* 
    axios
      .post("http://localhost:4000/api/uploadimage/" + title, {
        image: image
      })
      .then((res) => {
        if (res.data.status === "error") {
          alert("error");
        } else {
          window.location.href = "./";
        }
      })
      .catch((err) => console.log(err));
      window.location.href = "./"; */
  }

  return (
    <>
      <TopContent />
      <div>
        <form
          action="/uploadimage"
          encType="multipart/form-data"
          onSubmit={(e) => {
            submitForum();
          }}
        >
          <div className={forumStyles.title}>
            <input
              type="text"
              placeholder="Title of forum"
              value={title}
              id="formInput"
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>
          <div className={forumStyles.content}>
            <input
              type="text"
              placeholder="Content"
              className={forumStyles.contentInput}
              value={content}
              id="formInput"
              onChange={(e) => setContent(e.target.value)}
            ></input>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.value)}
            ></input>
            <button className={forumStyles.buttonCreation}>Cancel</button>
            <button
              className={forumStyles.buttonCreation}
              onClick={submitForum}
            >
              Create forum
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ForumCreation;
