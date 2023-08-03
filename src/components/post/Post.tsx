import styles from "./Post.module.css";
import { Trash } from "@phosphor-icons/react";

const Post = (props:{id:number, title:string, message:string, createdAt:string , createdBy:string, currentUser:string|undefined, onDelete:(id:number)=>void}) => {

  return (
    <div className={styles.container}>
      <div className={styles["title-container"]}>
        <h2 className={styles.h2}>{props.title}</h2>
        {props.createdBy === props.currentUser && <a className={styles["delete-button"]} title="Excluir" onClick={()=>props.onDelete(props.id)}>{<Trash size={30} />}</a>}
      </div>
      <h3 className={styles["text-area"]} placeholder="Texto">{props.message}</h3>
    </div>
  );
};

export default Post;