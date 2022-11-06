import { useRef, useState } from "react";
import classes from "./LiveChat.module.css";

const LiveChat = (props) => {
  const [isShowBoxChat, setIsShowBoxChat] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [messageInput, setMessageInput] = useState("");
  const [history, setHistory] = useState([
    { author: "unknown", message: "Xin chào" },
    { author: "unknown", message: "Làm thế nào để xem các sản phẩm" },
  ]);
  const enteredMessageHandler = (event) => {
    setMessageInput(event.target.value);
  };

  const toggleBoxChatHandler = () => {
    setIsShowBoxChat((state) => !state);
  };
  const sendMessageHandler = () => {
    const message = messageInput;
    setHistory((state) => [...state, { author: "ADMIN", message: message }]);
    setMessageInput("");
  };
  const renderHistory = history.map((mess) => {
    if (mess.author == "ADMIN")
      return (
        <div className={classes["admin-message"]}>
          <span className="me-2">
            <i class="fa-solid fa-user"></i>
          </span>
          <p>ADMIN: {mess.message}</p>
        </div>
      );
    else return <div className={classes["user-message"]}>{mess.message}</div>;
  });
  return (
    <div className={classes.box}>
      {isShowBoxChat && (
        <div className={classes.chat}>
          <div
            className={`rounded-top border-bottom p-3 d-flex justify-content-between align-items-center`}
          >
            <p className="fw-bold m-0">Customer Support</p>
            <div className={classes["mini-logo"]}>
              <p>Let's Chat App</p>
            </div>
          </div>
          <div className={classes["message-container"]}>{renderHistory}</div>
          <div
            className={`bg-light rounded-bottom p-3 d-flex gap-1 align-items-center`}
          >
            <span className="col-1">
              <i class="fa-solid fa-user"></i>
            </span>
            <input
              className="col-6 border-0"
              type="text"
              placeholder="Enter Message!"
              value={messageInput}
              onChange={enteredMessageHandler}
            ></input>

            <button className={classes.effect}>
              <i class="fa-solid fa-paperclip"></i>
            </button>
            <button className={classes.effect}>
              <i class="fa-solid fa-face-smile"></i>
            </button>
            <button className={classes.send} onClick={sendMessageHandler}>
              <i class="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
      <button
        className={`${classes["toggle-mess"]}`}
        onClick={toggleBoxChatHandler}
      >
        <i className="fa-brands fa-facebook-messenger text-white fs-3"></i>
      </button>
    </div>
  );
};

export default LiveChat;
