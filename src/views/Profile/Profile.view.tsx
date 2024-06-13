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
    </div>
  )
}
