import style from './Pots.module.css'
import { Carousel } from 'react-bootstrap'
import { SlOptions } from 'react-icons/sl'
import { BiRepost } from 'react-icons/bi'
import { IoIosArrowUp, IoIosArrowDown, IoIosSend } from 'react-icons/io'
import CommentContainer from '../CommentContainer/CommentContainer.component'

const Post = ({
  avatar = 'https://images.unsplash.com/photo-1597378609416-47cc937b294c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  nickname = 'NutriaAguada31',
  date = '25/06/2024',
  caption = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus placeat assumenda suscipit dolores eum?',
  images = [
    'https://images.unsplash.com/photo-1597378609416-47cc937b294c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D '
  ],
  like = 17,
  dislike = 5,
  score = 12
}) => {
  return (
    <div className={style.container}>
      <div className={style.info_user}>
        <div className={style.avatar_container}>
          <img className={style.avatar} src={avatar} alt='' />
        </div>
        <div className={style.info}>
          <div className={style.nickname}>{nickname}</div>
          <div className={style.date}>{date}</div>
        </div>
        <div className={style.options}>
          <SlOptions />
        </div>
      </div>
      <div className={style.body}>
        <div className={style.caption}>{caption}</div>
        <Carousel className={style.carousel}>
          {images?.map((img, i) => (
            <Carousel.Item key={i} className={style.img_container}>
              <img src={img} className={style.img} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className={style.interactions}>
        <div className={style.container_ld}>
          <div className={style.likes}>
            <IoIosArrowUp />
            {like}
          </div>
          <div className={style.dislikes}>
            <IoIosArrowDown /> {dislike}
          </div>
        </div>
        <div className={style.score}>Score: {score}</div>
        <div className={style.container_rs}>
          <div className={style.repost}>
            <BiRepost />
          </div>
          <div className={style.send}>
            <IoIosSend />
          </div>
        </div>
      </div>

      <CommentContainer />

      <div className={style.see_more}>Ver más</div>
    </div>
  )
}

export default Post
