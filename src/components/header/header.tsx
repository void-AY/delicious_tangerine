import React, { useState } from 'react';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import styles from './styles.module.css';
import logo from '../../assets/logo.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => {
    setMenuVisible(true);
    setTimeout(() => {
      setIsMenuOpen(true);
    }, 10);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setTimeout(() => {
      setMenuVisible(false);
    }, 300);
  };

  return (
    <>
      <header className={styles.container}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="tangerine" />
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={openMenu}>
            <MenuOutlined style={{ fontSize: '30px', color: '#FFCD88' }} />
          </button>
        </div>
        <nav className={styles.links}>
            <a href="#about">О кафе</a>
            <a href="#dignities">Достоинства</a>
            <a href="#menu">Меню</a>
            <a href="#delivery">Доставка</a>
            <a href="#contacts">Контакты</a>
        </nav>
      </header>
      {menuVisible && (
        <div className={`${styles.menuContainer} ${isMenuOpen ? styles.open : ''}`}>
          <div className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
            <div className={styles.menuButtonClose}>
              <button onClick={closeMenu}>
                <CloseOutlined style={{ fontSize: '30px', color: '#FFCD88' }} />
              </button>
            </div>
            <nav className={styles.menuLinks} onClick={closeMenu}>
              <a href="#about">О кафе</a>
              <a href="#dignities">Достоинства</a>
              <a href="#menu">Меню</a>
              <a href="#delivery">Доставка</a>
              <a href="#contacts">Контакты</a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
