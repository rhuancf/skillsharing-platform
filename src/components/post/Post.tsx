import styles from "./Post.module.css";
import { Trash } from "@phosphor-icons/react";
import Swal from 'sweetalert2';

const Post = (props:{id:number, title:string, message:string, createdAt:string , createdBy:string, currentUser:string|undefined, onDelete:(id:number)=>void}) => {

  const clickHandler = () => {
    Swal.fire({
      title: 'Deseja Excluir?',
      text: "Esta ação não poderá ser revertida!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'hsl(153 60.0% 53.0%)',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar',
      color: "#ffffff",
      background: "#242424"
    }).then((result) => {
      if (result.isConfirmed) {
        props.onDelete(props.id)
      }
    })
  };

  return (
    <div className={styles.container}>
      <div className={styles["title-container"]}>
        <h2 className={styles.h2}>{props.title}</h2>
        {props.createdBy === props.currentUser && <a className={styles["delete-button"]} title="Excluir" onClick={clickHandler}>{<Trash size={30} />}</a>}
      </div>
      <h3 className={styles["text-area"]} placeholder="Texto">{props.message}</h3>
    </div>
  );
};

export default Post;