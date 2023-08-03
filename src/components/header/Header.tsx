import style from './Header.module.css';
import icon from '../../assets/icon2.png';


const Header = (props:{currentUser: string | undefined, onLogout: () => void}) => {
  return (
    <div className={style["header-container"]}>
      <div className={style["logo-container"]}>
        <img className={style.icon} src={icon} />
        <h1>Habilite+</h1>
      </div>
      <div className={style["logout-container"]}>
        <label className={style["email-label"]}>Bem vindo, {props.currentUser}</label>
        <button onClick={props.onLogout} className={style["logout-button"]}>Desconectar</button>
      </div>
    </div>
  );
};

export default Header;
