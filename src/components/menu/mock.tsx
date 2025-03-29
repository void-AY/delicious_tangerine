import TakoImg from '../../assets/tako.webp'
import GuacamoleImg from '../../assets/S600xU_2x.webp'
import ChiliKonKarneImg from '../../assets/chili-kon-karne.jpg'
import TressImg from '../../assets/tress.jpg'
import MenudoImg from '../../assets/menudo.webp'
import NopalesSaladImg from '../../assets/Nopales_salad.jpg'
import AguadeHamaykaImg from '../../assets/Agua_de_Hamayka.jpg'
import QuesadillaImg from '../../assets/chicken-and-avocado-quesadillas.jpg'
import EnchiladasImg from '../../assets/Enchiladas.jpg'
import FajitasImg from '../../assets/Fajitas.jpg'
import ChurrosImg from '../../assets/Churros.webp'
import PozoleImg from '../../assets/Pozole.webp'
import HorchataImg from '../../assets/Horchata.webp'
import CevicheImg from '../../assets/Ceviche.jpeg'
import { Slide } from './type'

export const filters = [
    {name: 'all', title: 'Все', id: 1}, //all
    {name: 'snacks', title: 'Закуски', id: 2}, //snacks
    {name: 'mainDishes', title: 'Основные блюда', id: 3}, //mainDishes
    {name: 'soups', title: 'Супы', id: 4}, //soups
    {name: 'salads', title: 'Салаты', id: 5}, //salads
    {name: 'desserts', title: 'Десерты', id: 6}, //desserts
    {name: 'drinks', title: 'Напитки', id: 7}, //drinks
  ]

export const slides: Slide[] = [
    {
      id: 1,
      filterName: 'snacks',
      img: TakoImg,
      name: 'Тако',
      description: 'Традиционное блюдо мексиканской кухни. Представляет собой лепёшку тортилью с начинкой.',
      calories: 250,
      ingredients: ['тортилья', 'говядина', 'сальса', 'сыр', 'салат'],
      preparationTime: '20 минут',
    },
    {
      id: 2,
      filterName: 'snacks',
      img: GuacamoleImg,
      name: 'Гуакамоле',
      description: 'Холодная закуска из пюрированной мякоти авокадо.',
      calories: 180,
      ingredients: ['авокадо', 'лайм', 'помидоры', 'лук', 'кинза'],
      preparationTime: '10 минут',
    },
    {
      id: 3,
      filterName: 'mainDishes',
      img: ChiliKonKarneImg,
      name: 'Чили кон карне',
      description: 'Основным компонентом является острый перец и измельчённое мясо.',
      calories: 350,
      ingredients: ['говядина', 'фасоль', 'чили', 'томаты', 'лук', 'чеснок'],
      preparationTime: '45 минут',
    },
    {
      id: 4,
      filterName: 'desserts',
      img: TressImg,
      name: 'Трес лечес',
      description: 'Десерт, пропитанный тремя видами молока: сгущённым молоком, топлёным молоком и сливками.',
      calories: 300,
      ingredients: ['молоко', 'сгущёнка', 'сливки', 'ваниль', 'печенье'],
      preparationTime: '30 минут',
    },
    {
      id: 5,
      filterName: 'soups',
      img: MenudoImg,
      name: 'Менудо',
      description: 'Традиционный мексиканский суп из говяжьего желудка с красным чили, подается с лаймом и нарезанным луком.',
      calories: 400,
      ingredients: ['говяжий желудок', 'чили', 'лук', 'лайм', 'чеснок'],
      preparationTime: '90 минут',
    },
    {
      id: 6,
      filterName: 'salads',
      img: NopalesSaladImg,
      name: 'Салат из нопалес',
      description: 'Свежий салат с листьями кактуса нопалес, помидорами, луком и кинзой, заправленный лимонным соком.',
      calories: 120,
      ingredients: ['нопалес', 'помидоры', 'лук', 'кинза', 'лимон'],
      preparationTime: '15 минут',
    },
    {
      id: 7,
      filterName: 'drinks',
      img: AguadeHamaykaImg,
      name: 'Агуа де Хамайка',
      description: 'Освежающий холодный напиток из цветков гибискуса с сахаром, характерный для мексиканской кухни.',
      calories: 80,
      ingredients: ['гибискус', 'вода', 'сахар', 'лайм'],
      preparationTime: '10 минут',
    },
    {
      id: 8,
      filterName: 'snacks',
      img: QuesadillaImg,
      name: 'Кесадилья',
      description: 'Лепёшка с сыром и различными начинками, обжаренная на сковороде.',
      calories: 300,
      ingredients: ['тортилья', 'сыр', 'курица', 'перец', 'лук'],
      preparationTime: '15 минут',
    },
    {
      id: 9,
      filterName: 'mainDishes',
      img: EnchiladasImg,
      name: 'Энчиладас',
      description: 'Рулетики из тортильи с начинкой, покрытые соусом чили.',
      calories: 400,
      ingredients: ['тортилья', 'курица', 'соус чили', 'сыр', 'сметана'],
      preparationTime: '30 минут',
    },
    {
      id: 10,
      filterName: 'mainDishes',
      img: FajitasImg,
      name: 'Фахитас',
      description: 'Жареное мясо с овощами, подаваемое с тортильей.',
      calories: 380,
      ingredients: ['говядина', 'перец', 'лук', 'тортилья', 'соус'],
      preparationTime: '25 минут',
    },
    {
      id: 11,
      filterName: 'desserts',
      img: ChurrosImg,
      name: 'Чуррос',
      description: 'Хрустящие палочки из теста, обжаренные во фритюре и посыпанные корицей и сахаром.',
      calories: 250,
      ingredients: ['мука', 'вода', 'сахар', 'корица', 'масло'],
      preparationTime: '20 минут',
    },
    {
      id: 12,
      filterName: 'soups',
      img: PozoleImg,
      name: 'Позоле',
      description: 'Традиционный мексиканский суп с кукурузой и мясом.',
      calories: 350,
      ingredients: ['кукуруза', 'свинина', 'чили', 'лайм', 'авокадо'],
      preparationTime: '60 минут',
    },
    {
      id: 13,
      filterName: 'salads',
      img: CevicheImg,
      name: 'Севиче',
      description: 'Маринованная рыба с лаймом, луком и кинзой.',
      calories: 150,
      ingredients: ['рыба', 'лайм', 'лук', 'кинза', 'томаты'],
      preparationTime: '20 минут',
    },
    {
      id: 14,
      filterName: 'drinks',
      img: HorchataImg,
      name: 'Орчата',
      description: 'Напиток из риса, корицы и ванили.',
      calories: 120,
      ingredients: ['рис', 'вода', 'корица', 'ваниль', 'сахар'],
      preparationTime: '15 минут',
    },
  ];