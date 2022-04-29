import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';

const Column = ({id, icon, title}) => {
  const search = useSelector(state => state.stringSearch)
  const cards = useSelector(state => state.cards).filter(card =>  card.columnId === id && card.title.toLowerCase().includes(search.toLowerCase()));
  
  return (
  <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + icon}></span>
      {title}
    </h2>
    <ul className={styles.cards}>
      {cards.map(card => <Card key={card.id} title={card.title} />)}
    </ul>
    <CardForm 
      columnId={id} 
      />
  </article>
  )
};

export default Column;