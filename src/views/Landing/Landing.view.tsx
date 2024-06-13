import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import { Carousel } from 'react-bootstrap'

import style from './Landing.module.css'
import Post from '../../components/Post/Post.component'
import NavLanding from '../NavLanding/NavLanding.view'
import ThemeCarousel from '../ThemesCarousel/ThemeCarousel.component'
import CardInfo from '../../components/CardInfo/CardInfo.component'

const Landing = () => {
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <NavLanding />
        <div className={style.welcome_container}>
          <div className={style.welcome_cart}>
            <div className={style.welcome_title}>
              <img src='src/assets/camaleon1.gif' className={style.camaleon} />
              BIENVENIDO A CRIOMORE COMPANY
              <a className={style.icon_container} href='#explorar'>
                <MdKeyboardDoubleArrowDown className={style.icon} />
              </a>
            </div>
            <div className={style.welcome_text}>
              Un lugar donde puedes compartir tus ideas, abrir debates sobre tus
              temas favoritos y adquirir nuevas experiencias y amigos. <br />
              <br />
              Explora un poco de lo que te podemos ofrecer en nuestra comunidad
            </div>
            <img src='src/assets/camaleon1.gif' className={style.camaleon1} />
          </div>
        </div>

        <div className={style.explorar_container}>
          <div id='explorar' className={style.subtitle}>
            CONOCE LO QUE NUESTROS USUARIOS OPINAN
          </div>
          <Carousel
            className={style.carousel}
            interval={5000}
            indicators={false}
          >
            <Carousel.Item>
              <Post />
            </Carousel.Item>
          </Carousel>

          <div className={style.explorar_temas}>
            <div className={style.subtitle}>
              PODRAS ENCONTRAR DIFERENTES TEMAS DE <br /> CONVERSACION COMO
            </div>

            <ThemeCarousel />
          </div>
        </div>

        <div className={style.info_container}>
          <div className={style.subtitle}>¿COMO FUNCIONA NUESTRO FORO?</div>

          <div id='info' className={style.container_cardInfo}>
            <CardInfo
              image='https://plus.unsplash.com/premium_photo-1683842189634-df5b18bf9e9d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              title='Crea'
              description='Puedes crear tus publicaciones, añadir fotos o videos, categorizarlo con un hastag para que las personas conozcan sobre que tema estas hablando.'
            />

            <CardInfo
              image='https://images.unsplash.com/photo-1700072356638-1bbf03138a15?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              title='Vota'
              description='Cada publicacion tendra un campo de votos rojos y votos verdes, los votos rojos se le restaran a los votos verdes y este sera tu ‘score’ que entre mayor sea el numero mas visibilidad tendras.'
            />

            <CardInfo
              image='https://plus.unsplash.com/premium_photo-1677252438450-b779a923b0f6?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              title='Crea'
              description='Puedes crear tus publicaciones, añadir fotos o videos, categorizarlo con un hastag para que las personas conozcan sobre que tema estas hablando.'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
