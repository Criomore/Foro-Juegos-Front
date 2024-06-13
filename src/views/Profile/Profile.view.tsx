import { Image } from 'react-bootstrap'
import style from './Profile.module.css'

export const Profile = () => {
  return (
    <div className={style.profile_container}>
      <div className={style.container_portada}>
        <Image src='src/assets/portada1.jpg' className={style.portada} />
        <div className={style.portada_info}>
          <div className={style.contain_names}>
            <div className={style.apodo}>NutriaAguada</div>
            <div className={style.name}>Marian Sofia</div>
          </div>
          <div className={style.contain_names}>
            <div className={style.nac}>NutriaAguada</div>
            <div className={style.cum}>Marian Sofia</div>
          </div>
          <Image/>
          <div className={style.contain_names}>
            <div className={style.nac}>NutriaAguada</div>
            <div className={style.cum}>Marian Sofia</div>
          </div>
        </div>
      </div>
    </div>
  )
}
