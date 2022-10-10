import { useState, useEffect, useCallback } from 'react';
import styles from './search-bar.module.scss';
import { SearchIcon } from 'assets/icons';
import { useDispatch } from 'react-redux';
import { searchData } from 'actions/search';
import { searchActions } from 'store/search-slice';
import debounce from 'functions/debounce';

const SearchBar = () => {
  const dispatch = useDispatch();

  const onSubmitHandler = e => {
    e.preventDefault();
  };

  const search = useCallback(debounce((query) => {
    if (query === '') {
      dispatch(searchActions.removeSearch());
    } else if (query) {
      dispatch(searchData(query));
    }
  }, 500));

  const onInputChangeHandler = e => {
    search(e.target.value);
  };

  useEffect(() => {
    return () => {
      dispatch(searchActions.removeSearch());
    };
  }, [dispatch]);

  return (
    <form className={styles.search} onSubmit={onSubmitHandler}>
      <span>
        <SearchIcon />
      </span>
      <input
        type='search'
        onChange={onInputChangeHandler}
        placeholder='Artists, songs, or podcasts'
      />
    </form>
  );
};

export default SearchBar;
