import { Image } from 'react-bootstrap'
import style from './Comment.module.css'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const Comment = () => {
  return (
    <div className={style.container}>
      <div className={style.info_user}>
        <div className={style.avatar}>
          <Image
            fluid
            src='https://images.unsplash.com/photo-1597378609416-47cc937b294c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
        </div>
        <div className={style.nickname}>NutriaAguada</div>
        <div className={style.date}>12/12/2012</div>
      </div>
      <div className={style.reactions}>
        <div className={style.likes}>
          <IoIosArrowUp />
          20
        </div>
        <div className={style.dislikes}>
          <IoIosArrowDown /> 12
        </div>
      </div>
      <div className={style.comment}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, aliquid
        dolorem. Aliquid tenetur adipisci et sit odit nihil, assumenda deserunt
        esse facere, obcaecati alias repellendus officia sequi qui deleniti
        quibusdam.
      </div>
    </div>
  )
}

export default Comment
