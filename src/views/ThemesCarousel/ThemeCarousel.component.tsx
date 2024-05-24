import style from './ThemeCarousel.module.css'
import Card from '../../components/Card/Card.component'
import Carousel from '../../components/Carousel/Carousel.component'

const ThemeCarousel = () => {
  return (
    <div className={style.container}>
      <Carousel>
        <Card title='Tecnologia' list={["paiwdjowadowad", "odnwowadnowad"]} image='https://phantom-expansion.unidadeditorial.es/c619f3b628ab45e19cc80ceef95ddd69/f/jpg/assets/multimedia/imagenes/2020/12/15/16080660925480.jpg' />
        <Card title='Tecnologia' list={["paiwdjowadowad", "odnwowadnowad"]} image='https://phantom-expansion.unidadeditorial.es/c619f3b628ab45e19cc80ceef95ddd69/f/jpg/assets/multimedia/imagenes/2020/12/15/16080660925480.jpg' />
        <Card title='Tecnologia' list={["paiwdjowadowad", "odnwowadnowad"]} image='https://phantom-expansion.unidadeditorial.es/c619f3b628ab45e19cc80ceef95ddd69/f/jpg/assets/multimedia/imagenes/2020/12/15/16080660925480.jpg' />
        <Card title='Tecnologia' list={["paiwdjowadowad", "odnwowadnowad"]} image='https://phantom-expansion.unidadeditorial.es/c619f3b628ab45e19cc80ceef95ddd69/f/jpg/assets/multimedia/imagenes/2020/12/15/16080660925480.jpg' />
        <Card title='Tecnologia' list={["paiwdjowadowad", "odnwowadnowad"]} image='https://phantom-expansion.unidadeditorial.es/c619f3b628ab45e19cc80ceef95ddd69/f/jpg/assets/multimedia/imagenes/2020/12/15/16080660925480.jpg' />
      </Carousel>

      <Carousel invert={true}>
        <Card title='Tecnologia' list={["paiwdjowadowad", "odnwowadnowad"]} image='https://phantom-expansion.unidadeditorial.es/c619f3b628ab45e19cc80ceef95ddd69/f/jpg/assets/multimedia/imagenes/2020/12/15/16080660925480.jpg' />
        <Card title='Tecnologia' list={["paiwdjowadowad", "odnwowadnowad"]} image='https://phantom-expansion.unidadeditorial.es/c619f3b628ab45e19cc80ceef95ddd69/f/jpg/assets/multimedia/imagenes/2020/12/15/16080660925480.jpg' />
        <Card title='Tecnologia' list={["paiwdjowadowad", "odnwowadnowad"]} image='https://phantom-expansion.unidadeditorial.es/c619f3b628ab45e19cc80ceef95ddd69/f/jpg/assets/multimedia/imagenes/2020/12/15/16080660925480.jpg' />
        <Card title='Tecnologia' list={["paiwdjowadowad", "odnwowadnowad"]} image='https://phantom-expansion.unidadeditorial.es/c619f3b628ab45e19cc80ceef95ddd69/f/jpg/assets/multimedia/imagenes/2020/12/15/16080660925480.jpg' />
        <Card title='Tecnologia' list={["paiwdjowadowad", "odnwowadnowad"]} image='https://phantom-expansion.unidadeditorial.es/c619f3b628ab45e19cc80ceef95ddd69/f/jpg/assets/multimedia/imagenes/2020/12/15/16080660925480.jpg' />
      </Carousel>
    </div>
  )
}

export default ThemeCarousel
