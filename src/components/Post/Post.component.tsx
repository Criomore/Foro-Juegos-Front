import style from './Post.module.css'
import { GrSend } from 'react-icons/gr'
import { BiRepost } from 'react-icons/bi'

const Post = () => {
  return (
    <div className={style.post_container}>
      <div className={style.post_userdata}>
        <img
          className={style.userdata_img}
          src='https://pbs.twimg.com/profile_images/689170748418711554/-RGSBLf9_400x400.jpg'
          alt='img'
        />
        <div className={style.userdata_info}>
          <div className={style.info_name}>NutriaAguada</div>
          <div className={style.info_category}>#Soy_Nuti</div>
        </div>
        <div className={style.userdata_date}>19 MAR 2024</div>
      </div>
      <div className={style.post_body}>
        <div className={style.body_description}>
          "Conectando ideas para inspirar conversaciones. Explora, aprende y
          conecta en nuestra comunidad virtual. Descubre conocimiento sin
          límites y comparte tus pensamientos. Bienvenidos al foro/blog donde
          tus ideas cobran vida."
          <br />
          <span className={style.body_desciption_author}>-ChatGPT.</span>
        </div>
      </div>
      <div className={style.post_interactions}>
        <div className={style.post_interactions_reactions}>
          <div className={style.interactions_like}>+ 1.200</div>
          <div className={style.interactions_dislike}>- 300</div>
        </div>
        <div className={style.post_interactions_score}>
          <div className={style.score}>Score: 900</div>
        </div>
        <div className={style.post_interactions_share}>
          <div className={style.share_repost}>
            <BiRepost />
            Repost
          </div>
          <div className={style.share_send}>
            <GrSend className={style.icon} />
            Enviar
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
