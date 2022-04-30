import styles from './CardForm.module.scss';
import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';

const CardForm = ({ columnId }) => {

    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    const handleSubmin = e => {
        e.preventDefault();
        dispatch({type: 'ADD_CARD', payload: { title, columnId }});
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmin} className={styles.cardForm}>
            <TextInput value={ title } onChange= {e => setTitle(e.target.value)} />
            <Button >Add card</Button >
        </form>
    );
};

export default CardForm;