import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import SearchForm from '../SearchForm/SearchForm';
import { useSelector } from 'react-redux';
import { getColumnsByList} from '../../redux/columnsRedux';
import { getListById } from '../../redux/listsRedux';
import { useParams } from 'react-router';


const List = () => {

  const { listId } = useParams();
  const columns = useSelector(state => getColumnsByList(state, listId));
  const listData = useSelector(state => getListById(state, listId));

  return (
    <div className= {styles.list}>
      <header className={styles.header}>
        <div>
          <h2 className={styles.title}>{listData.title}<span>soon!</span></h2>
        </div>
      </header>
        <div>
          <p className={styles.description} >{listData.description}</p>
        </div>
      <SearchForm />
      <section className={styles.columns} >
        {columns.map(column => 
          <Column 
            key={column.id} 
            {...column}
          />
        )}
      </section>
        <ColumnForm listId={listId}/> 
    </div>
  )
};

export default List;