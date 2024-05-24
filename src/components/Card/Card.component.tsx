import { CardProps } from '../../interfaces/card.interface'
import style from './Card.module.css'

const Card = ({ title, image, list }: CardProps) => {
  return (
    <div className={style.card} style={{
      backgroundImage: `url(${image})`
    }}>
      <div className={style.card_body}>
        <div className={style.card_title}>{title}</div>
        <ul className={style.list_container}>
          {list?.map((item, i) => <li key={i} className={style.item_list}>{item}</li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Card
