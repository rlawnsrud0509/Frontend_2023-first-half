import "./style.css";
import { useState } from "react";

export default function App() {
  const [messages, setMessages] = useState(["안녕", "뭐해"]);

  return (
    <div className="container">
      <h1>
        {messages.length === 0
          ? "You are all caught up!!"
          : messages.length >= 2
          ? `You have ${messages.length} unread messages.`
          : "You have a unread message."}
      </h1>
    </div>
  );
}
