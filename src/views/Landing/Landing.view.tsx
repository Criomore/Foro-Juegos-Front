import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import Post from '../../components/Post/Post.component'
import NavLanding from '../NavLanding/NavLanding.view'
import style from './Landing.module.css'
import { Carousel } from 'react-bootstrap'

import Card from 'react-bootstrap/Card'
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

            <Carousel
              className={style.carousel}
              interval={5000}
              indicators={false}
            >
              <Carousel.Item>
                <Card style={{ width: '16rem' }}>
                  <Card.Img
                    variant='top'
                    src='https://phantom-expansion.unidadeditorial.es/c619f3b628ab45e19cc80ceef95ddd69/f/jpg/assets/multimedia/imagenes/2020/12/15/16080660925480.jpg'
                  />
                  <Card.Body>
                    <Card.Text className='text-center fs-5'>
                      Tecnologia
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
