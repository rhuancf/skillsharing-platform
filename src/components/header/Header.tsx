import style from './Header.module.css';
import icon from '../../assets/icon2.png';


const Header = () => {
  return (
    <div className={style["header-container"]}>
      <img className={style.icon} src={icon} />
      <h1>Habilite+</h1>
    </div>
  );
};

export default Header;
