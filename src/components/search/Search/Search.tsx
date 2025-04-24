import { useState } from 'react';
import LoopIcon from '../../svg-components/Loop';
import CloseIcon from '../../svg-components/Cross';  
import styles from './Search.module.scss';

const Search = () => {
    const [inputValue, setInputValue] = useState('');
    const clearInputValue = () => {
        setInputValue('');
    };

    return (
        <div className={styles.wrapper}>
            <LoopIcon className={styles.icon} />
            <input 
            type="text" 
            className={styles.input} 
            placeholder="Enter city"
            value={inputValue}
            onChange={ (e) => setInputValue(e.target.value)}
            />
            {inputValue && (
                <button className={styles.clearInput} onClick={clearInputValue} aria-label="Clear search" >
                    <CloseIcon className={`${styles.icon} ${styles.close}`} />
                </button>
            )}
       </div> 
    );
};

export default Search;