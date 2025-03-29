import styles from './styles.module.css';

function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerInfo}>
            <div className={styles.containerText}>
            <nav className={styles.links}>
                    <a href="#about">О кафе</a>
                    <a href="#dignities">Достоинства</a>
                    <a href="#menu">Меню</a>
                    <a href="#delivery">Доставка</a>
                    <a href="#contacts">Контакты</a>
                </nav>
            </div>
            <div className={styles.containerContact}>
                <p>г. Москва, ул. Пушкина, д.8</p>
                <p>+7 (999) 999 99-99</p>
            </div>            
        </div>
        <p>© 2025 Вкусный мандарин</p>
      </div>
    </>
  );
}
export default Footer;
