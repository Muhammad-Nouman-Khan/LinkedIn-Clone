import React, { useEffect, useState } from "react";
import "./Feed.css";
import ImageIcon from "@mui/icons-material/Image";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import { Avatar } from "@mui/material";
import Post from "./Post";
import { db } from "../../firebase";
import FlipMove from "react-flip-move";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";

const Feed = () => {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    const postsRef = collection(db, "posts");
    const postsQuery = query(postsRef, orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(postsQuery, (querySnapshot) => {
      const postData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setPosts(postData);
    });

    return unsubscribe;
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    const docRef = addDoc(collection(db, "posts"), {
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="publish">
        <div className="input__container">
          <Avatar className="publish__avatar" src="" />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start a post,try writing with AI"
            />
            <button onClick={sendPost} type="submit">
              Submit
            </button>
          </form>
        </div>

        <div className="actions">
          <div className="action">
            <ImageIcon className="icon" style={{ color: "green" }} />
            <p>Media</p>
          </div>
          <div className="action">
            <EventNoteIcon className="icon" style={{ color: "orange" }} />
            <p>Event</p>
          </div>
          <div className="action">
            <CalendarViewDayIcon className="icon" style={{ color: "red" }} />
            <p>Write article</p>
          </div>
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
