import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm'
import { useSelector } from 'react-redux';
import { getAllColumns } from '../../redux/store';


const List = () => {
  const columns = useSelector(getAllColumns);

  return (
    <div className= {styles.list}>
      <header className={styles.header}>
        <div>
          <h2 className={styles.title}>Things to do <span>soon!</span></h2>
        </div>
        <div>
          <p className={styles.description} >Interesting Things I want to check out</p>
        </div>
      </header>
      <section className={styles.columns} >
        {columns.map(column => 
          <Column 
            key={column.id} 
            {...column}/>
        )}
      </section>
        <ColumnForm /> 
    </div>
  )
};

export default List;