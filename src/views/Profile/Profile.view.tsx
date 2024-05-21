import style from './Profile.module.css'

export const Profile = () => {
  return (
    <div className={style.profile_container}>
      <div className={style.container_goodluck}>
        Aqui podras seguir configurando tu perfil. ¡Buena suerte!
      </div>
      <div className={style.container_portada}>
        <div
          style={{
            backgroundImage:
              'https://images.unsplash.com/photo-1707343843982-f8275f3994c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8.png'
          }}
          className={style.portada_img}
        ></div>
      </div>
    </div>
  )
}
;<div></div>
