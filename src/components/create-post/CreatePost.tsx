import { useRef } from "react";
import styles from "./CreatePost.module.css";

const CreatePost = (props: {
  onCreatePost: (title: string, message: string) => void;
}) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  function clickHandler() {
    if (titleRef.current?.value.length && messageRef.current?.value.length) {
      props.onCreatePost(titleRef.current.value, messageRef.current.value);
      titleRef.current.value = '';
      messageRef.current.value = '';
    }
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Compartilhe um Conhecimento</h2>
      <input className={styles.input} type="text" placeholder="Título" ref={titleRef}></input>
      <textarea className={styles["text-area"]} placeholder="Texto" ref={messageRef}></textarea>
      <button className={styles.button} onClick={clickHandler}>Enviar</button>
    </div>
  );
};

export default CreatePost;
