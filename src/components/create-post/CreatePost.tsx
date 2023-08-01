import { useRef} from "react";

const CreatePost = (props:{onCreatePost: (title:string, message:string) => void}) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);

  function clickHandler() {
    if(titleRef.current?.value.length && messageRef.current?.value.length) {
      props.onCreatePost(titleRef.current.value, messageRef.current.value);
    }
  }

  return (
    <div>
      <input placeholder="Titulo" ref={titleRef}></input>
      <input placeholder="Mensagem" ref={messageRef}></input>
      <button onClick={clickHandler}>Enviar</button>
    </div>
  );
}

export default CreatePost;