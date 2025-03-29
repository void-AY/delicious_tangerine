import styles from './styles.module.css';
import aboutImg from '../../assets/about.jpg'

function AboutUs() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerText}>
           <p>Мы являемся кафе, которое готовит и распространяет мексиканскую кухню.
           <br />Наш основной продукт готовится из свежих ингредиентов. </p> 
        </div>
        <div className={styles.containerImg}>
            <img src={aboutImg} alt="about" /> 
        </div>
      </div>
    </>
  );
}
export default AboutUs;
