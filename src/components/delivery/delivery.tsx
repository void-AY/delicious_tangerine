import styles from './styles.module.css';
import aboutImg from '../../assets/about.jpg'

function Delivery() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerText}>
           <p>Доставка занимает от 30 минут в зависимости от места доставки.
            <br /><br />При заполнении всех полей с вами свяжется сотрудник для уточнения информации.</p> 
        </div>
        <div className={styles.containerForm}>
          <h1>Заполните поля:</h1>
          <form action="">
            <input type="text" placeholder='Имя'/>
            <input type="tel" placeholder='Номер телефона'/>
            <input type='text' placeholder='Адрес'/>
            <input type="email" placeholder='e-mail'/>
            <button type='submit'>Заказать</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Delivery;
