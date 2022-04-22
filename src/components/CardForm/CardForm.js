import styles from './CardForm.module.scss';
import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const CardForm = props => {

    const [title, setTitle] = useState('');

    const handleSubmin = e => {
        e.preventDefault();
        props.action({ title: title}, props.columnId);
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