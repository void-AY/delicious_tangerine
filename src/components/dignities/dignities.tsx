import styles from './styles.module.css';
import productImg from '../../assets/product.jpg'

function Dignities() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerImg}>
            <img src={productImg} alt="about" /> 
        </div>        
        <div className={styles.containerText}>
           <ul>
                <li><span>Свежие ингредиенты</span><span className={styles.containerTextSpan}><br /> – только отборные овощи, натуральные специи и ароматные травы.</span></li>
                <li><span>Аутентичный вкус</span><span className={styles.containerTextSpan}><br /> – традиционные мексиканские рецепты с заботой о вашем комфорте.</span> </li>
                <li><span>Натуральные продукты</span><span className={styles.containerTextSpan}><br /> – без искусственных добавок, только польза и удовольствие.</span> </li>
                <li><span>Уют и забота</span><span className={styles.containerTextSpan}><br /> – тёплая атмосфера, где каждый гость чувствует себя как дома.</span> </li>
           </ul>
        </div>
      </div>
    </>
  );
}
export default Dignities;
