export default function Test(props) {
  return (
    <div>
      <h1>Hello, This is {props.name}</h1>
      <p>My hobby is {props.hobby}</p>
      <p>My mbit is {props.mbti}</p>
      {props.군대 && <p>나는 군필이다.</p>}
    </div>
  );
}

//properties => props
//props.type = Object(Json file);
