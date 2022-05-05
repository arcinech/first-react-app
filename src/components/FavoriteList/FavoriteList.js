import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getCardsByFavorites } from '../../redux/store';
import styles from './FavoriteList.module.scss';

const FavoriteList = () => {

  const cards = useSelector(state => getCardsByFavorites(state));

  return (
    <article className={styles.column}>
      <ul className={styles.cards}>
        {cards.map(card => <Card key={card.id} title={card.title} id={card.id} isFavorite={card.isFavorite}/>)}
      </ul>
    </article>
  );
};

export default FavoriteList;