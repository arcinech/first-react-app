import { useDispatch } from 'react-redux';
import styles from './Card.module.scss';
import { toggleFavorite, deleteCard } from '../../redux/cardsRedux';

const Card = ({title, id ,isFavorite}) => {
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(toggleFavorite(id));
  };

  const handleDelete = () => {
    dispatch(deleteCard(id));
  };

    return (
        <li className={styles.card}>
          {title}
          <i className={isFavorite ? 'fa fa-star' :'fa fa-star-o'} onClick={handleFavorite}></i>
          <i className='fa fa-trash' onClick={handleDelete}></i>
        </li>
    )
}

export default Card;