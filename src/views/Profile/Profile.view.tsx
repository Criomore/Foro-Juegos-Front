import { Image } from 'react-bootstrap'
import style from './Profile.module.css'

export const Profile = () => {
  return (
    <div className={style.profile_container}>
      <div className={style.container_goodluck}>
        Aqui podras seguir configurando tu perfil. ¡Buena suerte!
      </div>
      <div className={style.container_portada}>
        <Image src='src/assets/portada1.jpg' className={style.portada} />
      </div>
    </div>
  )
};
