import styles from './styles.module.css';
import contactImg from '../../assets/contact.jpg'

function Contact() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerText}>
           <p>Номер для контакта:<br /> 
            +7 (999) 999 99-99
            <br />
            <br />
            Адрес:<br />
            г. Москва, ул. Пушкина, д.8</p> 
        </div>
        <div className={styles.containerImg}>
            <img src={contactImg} alt="contactImg" /> 
        </div>
      </div>
    </>
  );
}
export default Contact;
