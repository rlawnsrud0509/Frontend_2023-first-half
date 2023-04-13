import { useState } from "react";

export default function Form() {
  const [text, setText] = useState();

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <h1>{text}</h1>
    </form>
  );
}
