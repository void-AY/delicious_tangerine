import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import 'swiper/css/virtual';
import styles from './styles.module.css';
import { useState } from 'react';
import { Slide } from './type';
import { filters, slides } from './mock';
import { CloseOutlined } from '@ant-design/icons';

function Menu() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedSlide, setSelectedSlide] = useState<Slide | null>(null)
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = (item: Slide) => {
    setSelectedSlide(item)
    setTimeout(() => {
      setIsPopupOpen(true);
    }, 10);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedSlide(null)
  };


  const handleFilterClick = (filterName: string) => {
    setActiveFilter(filterName)
  }

  const filteredSlides = slides.filter((slide) => activeFilter === 'all' || slide.filterName === activeFilter)

  return (
    <>
      <div className={styles.container}>
        <div className={styles.filterContainer}>
          {filters.map((filter) => <button key={filter.id} onClick={() => handleFilterClick(filter.name)}>{filter.title}</button>)}
        </div>
        <div className={styles.cardContainer}>
          <Swiper slidesPerView={'auto'} modules={[Virtual]} spaceBetween={20}>
            {filteredSlides.map((item) => (
              <SwiperSlide key={item.id} virtualIndex={item.id} className={styles.swiperSlide} onClick={() => openPopup(item)}>
                <div className={styles.cardImg}>
                  <img src={item.img} alt={item.name} />
                </div>
                <div className={styles.cardText}>
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {selectedSlide && (
        <div className={`${styles.popupWraper} ${isPopupOpen ? styles.open : ''}`} onClick={closePopup}>
          <div className={`${styles.popup} ${isPopupOpen ? styles.open : ''}`} onClick={(e) => e.stopPropagation()}>
            <div className={styles.buttonClose}>
              <button onClick={closePopup}>
                <CloseOutlined style={{ fontSize: '20px', color: '#FFCD88' }} />
              </button>
            </div>
            <div className={styles.popupMain}>
                <div className={styles.popupImg}>
                  <img src={selectedSlide.img} alt={selectedSlide.name} />
                </div>
                <div className={styles.popupText}>
                  <h2>{selectedSlide.name}</h2>
                  <p><strong>Описание:</strong> {selectedSlide.description}</p>
                  <p><strong>Калории:</strong> {selectedSlide.calories} ккал</p>
                  <p>
                    <strong>Ингредиенты:</strong> {selectedSlide.ingredients.join(', ')}
                  </p>
                  <p><strong>Время приготовления:</strong> {selectedSlide.preparationTime}</p>
                </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Menu;
