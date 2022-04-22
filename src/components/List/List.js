import styles from './List.module.scss';

const List = () => {
  return (
    <div className= {styles.list}>
      <header className={styles.header}>
        <div>
          <h2 className={styles.title}>Things to do <span>soon!</span></h2>
        </div>
        <div>
          <p className={styles.desciption} >Interesting Things I want to check out</p>
        </div>
      </header>
      <section className={styles.columns} >
        <article>
          <h2 className={styles.title}>Books</h2>
        </article>
        <article>
          <h2 className={styles.title}>Movies</h2>
        </article>
        <article>
          <h2 className={styles.title}>Games</h2>
        </article>
      </section>
    </div>
  )

};

export default List;