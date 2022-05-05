import { useDispatch } from 'react-redux';
import styles from './Card.module.scss';
import { toggleFavorite } from '../../redux/cardsRedux';

const Card = ({title, id ,isFavorite}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleFavorite(id));
  };

    return (
        <li className={styles.card}>{title}<i className={isFavorite ? 'fa fa-star' :'fa fa-star-o'} onClick={handleClick}></i></li>
    )
}

export default Card;