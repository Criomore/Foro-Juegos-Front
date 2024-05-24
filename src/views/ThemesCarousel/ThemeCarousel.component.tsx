import style from './ThemeCarousel.module.css'
import Card from '../../components/Card/Card.component'
import Carousel from '../../components/Carousel/Carousel.component'

const ThemeCarousel = () => {
  return (
    <div className={style.container}>
      <Carousel>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Carousel>

      <Carousel invert={true}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Carousel>

      <Carousel>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Carousel>
    </div>
  )
}

export default ThemeCarousel
