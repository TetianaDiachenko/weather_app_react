import { useState } from 'react';
import LoopIcon from '../../svg-components/Loop';
import CloseIcon from '../../svg-components/Cross';  
import styles from './Search.module.scss';

const Search = () => {
    const [inputValue, setInputValue] = useState('');
    const clearInputValue = () => {
        setInputValue('');
    };
    const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {  // type for change event in input
        setInputValue(e.target.value);
    };

    return (
        <div className={styles.search}>
            <LoopIcon className={styles.icon} />
            <input 
            type="text" 
            className={styles.input} 
            placeholder="Enter city"
            value={inputValue}
            onChange={changeValue}
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