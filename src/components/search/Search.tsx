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

  function submitHandler(event: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLInputElement>) {
    event.preventDefault();
    if(inputRef.current?.value.length) {
      props.onSearch(inputRef.current.value);
    }
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <input className={styles.input} type="search" ref={inputRef} onKeyDown={(e) => e.key === "Enter" && submitHandler(e)} required />
      <button type="submit" className={styles.fa}><MagnifyingGlass size={20} /></button>
      <a className={styles["clear-btn"]} onClick={clearHandler}>Limpar</a>
    </form>
  );
}
