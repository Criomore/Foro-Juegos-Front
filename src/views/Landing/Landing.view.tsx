import Post from '../../components/Post/Post.component'
import NavLanding from '../NavLanding/NavLanding.view'
import style from './Landins.module.css'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'

const Landing = () => {
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <NavLanding />
        <div className={style.welcome_container}>
          <div className={style.welcome_cart}>
            <div className={style.welcome_title}>
              BIENVENIDO A CRIOMORE COMPANY
            </div>
            <div className={style.welcome_text}>
              Un lugar donde puedes compartir tus ideas, abrir debates sobre tus
              temas favoritos y adquirir nuevas experiencias y amigos. <br />
              <br />
              Explora un poco de lo que te podemos ofrecer en nuestra comunidad
            </div>
          </div>
          <a className={style.icon_container} href='#explorar'>
            <MdKeyboardDoubleArrowDown className={style.icon} />
          </a>
        </div>

        <div className={style.explorar_container}>
          <div id='explorar' className={style.explorar_text}>
            CONOCE LO QUE NUESTROS USUARIOS OPINAN
          </div>

          <div className={style.container_posts}>
            <div className={style.icon_post}>
              <MdArrowBackIos />
            </div>
            <Post />
            <div className={style.icon_post}>
              <MdArrowForwardIos />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing