import {NavLink, Link} from 'react-router-dom'
import styles from './NavBar.module.scss'

const NavBar = () => {
  const links = [
    {
      id:"home",
      toLink: "/",
      name: "Home"
    },
    {
      id:"favorite",
      toLink: "/favorite",
      name: "Favorite"
    },
    {
      id:"about",
      toLink: "/about",
      name: "About"
    }
  ];

  return (
    <nav className={styles.nav}>
      <div>
        <Link to="/"><i className="fa fa-tasks" aria-hidden="true"></i></Link>
      </div>
      <ul className={styles.list}>
        {links.map(link => 
        <li>
          <NavLink 
            key={link.id} 
            className={({isActive}) => isActive ? styles.linkActive : undefined} 
            to={link.toLink}>
              {link.name}
          </NavLink>
        </li>)}
      </ul>
    </nav>
  );
};

export default NavBar;