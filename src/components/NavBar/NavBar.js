import {NavLink} from 'react-router-dom'
import styles from './NavBar.module.scss'

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <NavLink to="/"><i className="fa fa-tasks" aria-hidden="true"></i></NavLink>
      </div>
      <div>
        <NavLink className={styles.link} to="/">Home</NavLink>
        <NavLink className={styles.link} to="/favorite">Favorite</NavLink>
        <NavLink className={styles.link} to="/about">About</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;