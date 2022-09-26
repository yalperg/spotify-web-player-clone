import { useLocation } from 'react-router';
import { useState, useRef, useEffect } from 'react';
import { DownIcon, UpIcon, UserIcon } from 'assets/icons/icons';
import styles from './header.module.scss';
import Dropwdown from 'components/Dropdown';
import CollectionNav from 'components/Header/components/CollectionNav';
import PreviousBtn from 'components/Header/components/PreviousBtn';
import NextBtn from 'components/Header/components/NextBtn';
import SearchBar from 'components/Header/components/SearchBar';

import hexToRgb from 'functions/hext-to-rgb';

import { useSelector } from 'react-redux';

const Header = ({ opacity, bgColor }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { info } = useSelector(state => state.user);
  const dropdownRef = useRef();
  const btnRef = useRef();
  const location = useLocation();
  const collectionPath = location.pathname.replace(/[^/]*$/, '');
  const searchPath = location.pathname;

  // Convert hex to rgb to change background opacity
  bgColor = hexToRgb(bgColor);

  const dropdownOpenHandler = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    function outsideClickHandler(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !btnRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', outsideClickHandler);
    return () => {
      document.removeEventListener('mousedown', outsideClickHandler);
    };
  }, [dropdownRef, isDropdownOpen]);

  return (
    <header
      className={styles.header}
      style={{ backgroundColor: `rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b},${opacity})` }}>
      <div className={styles.nav}>
        <PreviousBtn />
        <NextBtn />
        {collectionPath === '/collection/' && <CollectionNav />}
        {searchPath === '/search' && <SearchBar />}
      </div>
      <button ref={btnRef} className={styles.dropdown} onClick={dropdownOpenHandler}>
        <div className={styles.user}>
          {info.images?.length ? <img src={info.images[0]?.url} alt='user' /> : <UserIcon />}
        </div>
        <span>{info.display_name}</span>
        {!isDropdownOpen ? <DownIcon /> : <UpIcon />}
      </button>
      {isDropdownOpen && <Dropwdown dropdownRef={dropdownRef} />}
    </header>
  );
};

export default Header;
