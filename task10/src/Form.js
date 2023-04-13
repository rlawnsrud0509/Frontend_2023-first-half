import { useState } from "react";

export default function Form() {
  const [text, setText] = useState({
    first: "",
    last: "",
    email: "",
  });

  function handleChange(event) {
    setText((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }
  //   e.target.name === "first"
  //   ? (text.firstName = e.target.value)
  //   : e.target.name === "last"
  //   ? (text.lastName = e.target.value)
  //   : (text.email = e.target.value)

  return (
    <form>
      <input
        name="first"
        type="text"
        placeholder="First Name"
        onChange={handleChange}
      />
      <input
        name="last"
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
      />
      <input
        name="email"
        type="text"
        placeholder="Email"
        onChange={handleChange}
      />
      <h1>
        Name : {text.first} {text.last}
      </h1>
      <h1>Email : {text.email}</h1>
    </form>
  );
}
