import { useState } from "react";

export default function Form() {
  const [text, setText] = useState({
    first: "",
    last: "",
    email: "",
    name: "",
    isFriendly: true,
    employment: "unemployed",
    favColor: "white",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setText((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  //   e.target.name === "first"
  //   ? (text.firstName = e.target.value)
  //   : e.target.name === "last"
  //   ? (text.lastName = e.target.value)
  //   : (text.email = e.target.value)

  function handleSubmit(event) {
    event.preventDefault();
    console.log(text);
  }

  return (
    <form onSubmit={handleSubmit}>
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
      <input
        name="isFriendly"
        id="isFriendly"
        type="checkbox"
        value={text.isFriendly}
        onChange={handleChange}
      />

      <textarea name="name" onChange={handleChange}>
        {text.name}
      </textarea>

      <select
        id="favColor"
        value={text.favColor}
        onChange={handleChange}
        name="favColor"
      >
        <option value="" hidden>
          {" "}
          choose your color
        </option>
        <option value="red"> red</option>
        <option value="orange"> orange</option>
        <option value="yellow"> yellow</option>
        <option value="green"> green</option>
        <option value="blue"> blue</option>
        <option value="indigo"> indigo</option>
        <option value="violet"> violet</option>
      </select>
      <h1>
        Name : {text.first} {text.last}
      </h1>
      <h1>Email : {text.email}</h1>
      <h1>니이름 : {text.name}</h1>
      <h1>체크됨 : {text.isFriendly ? "체크됨" : "체크안됨"}</h1>

      <br />
      <br />
      <fieldset>
        <legend>Currend employment status</legend>
        인풋을 라디오로 만든다. 3개를 만들어서 하나를 선택하도록 만든다. name은
        employment고 각각value와 id, 표시될 글자는 unemployed part-time,
        full-time 이다. handleChange 함수를 활용해서 값이 state에 잘 적용되도록
        하기 state값 이름도 employment이다. 백수
        <input
          type="radio"
          name="employment"
          value="unemployed"
          id="unemployed"
          onChange={handleChange}
        ></input>
        알바
        <input
          type="radio"
          name="employment"
          value="part-time"
          id="part-time"
          onChange={handleChange}
        ></input>
        정규직
        <input
          type="radio"
          name="employment"
          value="full-time"
          id="full-time"
          onChange={handleChange}
        ></input>
        <h1>
          니고용정보 :{" "}
          {text.employment === "unemployed"
            ? "백수"
            : text.employment === "part-time"
            ? "알바"
            : "정규직"}
        </h1>
      </fieldset>
      <br />
      <br />
      <button>Submit</button>
      <h1>색깔 : {text.favColor}</h1>
    </form>
  );
}
