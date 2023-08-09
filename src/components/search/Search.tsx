import { MagnifyingGlass } from "@phosphor-icons/react";
import styles from "./Search.module.css";
import { useRef } from "react";

export default function Search(props:{onSearch:(value:string)=>void}) {
  const inputRef = useRef<HTMLInputElement>(null);
  function clearHandler() {
    if(inputRef.current?.value.length) {
      inputRef.current.value = '';
      props.onSearch(inputRef.current.value);
    }
  }

  function clickHandler() {
    if(inputRef.current?.value.length) {
      props.onSearch(inputRef.current.value);
    }
  }

  return (
    <form className={styles.form} action="">
      <input className={styles.input} type="search" ref={inputRef} required />
      <i className={styles.fa} onClick={clickHandler}><MagnifyingGlass size={20} /></i>
      <a className={styles["clear-btn"]} onClick={clearHandler}>Limpar</a>
    </form>
  );
}
