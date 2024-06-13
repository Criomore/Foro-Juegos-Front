import { Image } from 'react-bootstrap'
import style from './CarInfo.module.css'

const CardInfo = ({ image, title, description }) => {
  return (
    <div className={style.container}>
      <Image src={image} className={style.image} />
      <div className={style.title}>{title}</div>
      <div className={style.description}>{description}</div>
    </div>
  )
}
export default CardInfo
