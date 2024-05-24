import style from './Carousel.module.css'

const Carousel = ({ children, invert = false }) => {
  if (!invert) {
    return (
      <div className={style.carousel}>
        <div className={style.container}>{children}</div>
        <div className={style.container}>{children}</div>
      </div>
    )
  } else {
    return (
      <div className={style.carousel}>
        <div className={style.container_invert}>{children}</div>
        <div className={style.container_invert}>{children}</div>
      </div>
    )
  }
}

export default Carousel
