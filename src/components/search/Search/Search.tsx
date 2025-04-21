// import React from 'react';
import { useState } from 'react';
import LoopIcon from '../../../assets/icons/search.svg';
// import { ReactComponent as LoopIcon } from '../../../assets/icons/search.svg';
import CloseIcon from '../../../assets/icons/cross-small.svg';  
import styles from './Search.module.scss';
// import classNames from 'classnames';

const Search = () => {
    const [inputValue, setInputValue] = useState('');
    const clearInputValue = () => {
        setInputValue('');
    };

    return (
        <div className={styles.wrapper}>
            <img 
            src={LoopIcon} 
            alt="Loop icon" 
            className={styles.icon}
            />
            {/* <LoopIcon className={styles.icon} /> */}
            <input 
            type="text" 
            className={styles.input} 
            placeholder="Enter city"
            value={inputValue}
            onChange={ (e) => setInputValue(e.target.value)}
            />
            {inputValue && (
                <button className={styles.clearInput} onClick={clearInputValue} aria-label="Clear search" >
                   <img src={CloseIcon} alt="Close icon" className={styles.close} />
                    {/* <CloseIcon className={classNames(styles.icon, styles.close)} /> */}
                </button>
            )}
       </div> 
    );
};

export default Search;