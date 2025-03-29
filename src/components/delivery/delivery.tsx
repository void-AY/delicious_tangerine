import { useState } from 'react';
import styles from './styles.module.css';

function Delivery() {
  const [openInfoPopup, setOpenInfoPopup] = useState(false)

  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerText}>
           <p>Доставка занимает от 30 минут в зависимости от места доставки.
            <br /><br />При заполнении всех полей с вами свяжется сотрудник для уточнения информации.</p> 
        </div>
        <div className={styles.containerForm}>
          <h1>Заполните поля:</h1>
          <form action={() => setOpenInfoPopup(true)}>
            <input required type="text" placeholder='Имя'/>
            <input required type="tel" placeholder='Номер телефона'/>
            <input required type='text' placeholder='Адрес'/>
            <input required type="email" placeholder='e-mail'/>
            <button type='submit'>Заказать</button>
          </form>
        </div>
      </div>
      {openInfoPopup && 
      <div className={styles.infoWrapper}>
        <div className={styles.infoPopup}>
          Заказ успешно создан
        </div>
      </div>}
    </>
  );
}
export default Delivery;
