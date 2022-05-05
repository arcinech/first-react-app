import {NavLink, Link} from 'react-router-dom'
import styles from './NavBar.module.scss'

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <Link to="/"><i className="fa fa-tasks" aria-hidden="true"></i></Link>
      </div>
      <ul className={styles.list}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/favorite">Favorite</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar;