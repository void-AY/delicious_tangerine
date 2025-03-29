import styles from './styles.module.css';

function SubHeader() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
            <h1>
              Вкусный мандарин
            </h1>      
            <p>
              Съешь, сколько сможешь!
            </p>      
        </div> 
      </div>
    </>
  );
}

export default SubHeader;
