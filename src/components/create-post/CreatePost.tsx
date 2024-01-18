import { useRef } from "react";
import styles from "./CreatePost.module.css";
import { ArrowBendUpLeft, PlusCircle } from "@phosphor-icons/react";

const CreatePost = (props: {
  onCreatePost: (title: string, message: string) => void,
  display: boolean,
  setDisplay: (display: boolean) => void
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

  if (!props.display) {
    return (
      <div className={`${styles.container} ${styles.pointer}`} onClick={()=>props.setDisplay(true)}>
        <h1 style={{margin: "0px"}}>Compartilhar um novo conhecimento {<PlusCircle className={styles.plusIcon} size={20} />}</h1>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles["share-tile-container"]}>
        <h2 className={styles.h2}>Compartilhe um Conhecimento</h2>
        <ArrowBendUpLeft size={30} onClick={() => props.setDisplay(false)} style={{ cursor: 'pointer' }} />
      </div>
      <input className={styles.input} type="text" placeholder="Título" ref={titleRef}></input>
      <textarea className={styles["text-area"]} placeholder="Texto" ref={messageRef}></textarea>
      <button className={styles.button} onClick={clickHandler}>Enviar</button>
    </div>
  );
};

export default CreatePost;
