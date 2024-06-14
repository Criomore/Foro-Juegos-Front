import { Image } from 'react-bootstrap'
import style from './Profile.module.css'

export const Profile = () => {
  return (
    <div className={style.profile_container}>
      <div className={style.container_portada}>
        <Image
          src='https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          className={style.portada}
        />
      </div>
      <div className={style.contain_image}>
        <Image
          src='https://img.freepik.com/vector-premium/lindo-bebe-nutria-dibujos-animados_970901-11.jpg'
          className={style.image_profile}
        />
      </div>
      <div className={style.user_info}>
        <div className={style.contain_names}>
          <div className={style.apodo}>NutriaAguada</div>
          <div className={style.name}>Marian Sofia</div>
        </div>
        <div className={style.contain_info}>
          <div className={style.nac}>
            <span>🇨🇴 </span>Colombia
          </div>
          <div className={style.cum}>
            <span>🎂 </span>31/05/2003
          </div>
        </div>

        <div className={style.contain_status}>
          <div className={style.nac}>
            "La inteligencia me persigue pero soy mas rapida"
          </div>
        </div>
      </div>
      <div className={style.totales}>
        <div className={style.topic}>
          <div className={style.title}>TEMAS DE INTERES</div>
          <div className={style.description}>
            Juegos - Redes sociales - Estilo de vida
          </div>
        </div>
        <div className={style.hashtag}>
          <div className={style.title}>HASHTAGS MAS USADOS</div>
          <div className={style.description}>
            #LADAWLDKM - #OAIDWOD - #MAINCRA
          </div>
        </div>
        <div className={style.total_posts}>
          <div className={style.title}>PUBLICACIONES</div>
          <div className={style.numbers}>10</div>
        </div>
        <div className={style.total_followers}>
          <div className={style.title}>SEGUIDORES</div>
          <div className={style.numbers}>31</div>
        </div>
        <div className={style.total_followed}>
          <div className={style.title}>SEGUIDOS</div>
          <div className={style.numbers}>13</div>
        </div>
      </div>
      
    </div>
  )
}
