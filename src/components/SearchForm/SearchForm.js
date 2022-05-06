import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearch } from '../../redux/searchStringRedux';

const SearchForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateSearch(''));

  }, [dispatch])
  
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(updateSearch(text));
    setText('');
  }

  return (
      <form className={styles.searchForm} onSubmit={handleSearch}>
          <TextInput value={text} placeholder="Search..." onChange={(e)=> setText(e.target.value)}/>
          <Button>
              <span className="fa fa-search" />
          </Button>
      </form>
  );
};
export default SearchForm;