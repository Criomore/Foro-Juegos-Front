import style from './Card.module.css'

const Card = () => {
  return (
    <div className={style.card}>
      <div className={style.card_body}>
        <div className={style.card_title}>Tecnologia</div>
        <ul className={style.list_container}>
          <li className={style.item_list}>Hardware y software</li>
          <li className={style.item_list}>Programacion y desarrollo</li>
        </ul>
      </div>
    </div>
  )
}

export default Card
