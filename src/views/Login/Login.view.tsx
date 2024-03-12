import { useNavigate } from 'react-router-dom'
import style from './Login.module.css'

export const Login = () => {
  const navigate = useNavigate()
  return (
    <div className={style.bg}>
      <div className={style.bgBlack}>
        <div className={style.container}>
          <div className={style.title}>INICIA SESIÓN</div>

          <form className={style.form}>
            <label className={style.labelInput}>
              Correo
              <input
                className={style.input}
                type='text'
                placeholder='Ejemplo@ejemplo.com'
              />
            </label>

            <label className={style.labelInput}>
              Contraseña
              <input
                className={style.input}
                type='password'
                placeholder='Contraseña'
              />
            </label>

            <button className={style.buttonLogin}> ENTRAR</button>
          </form>

          <div className={style.sepadorContainer}>
            <span className={style.guion}></span>
            <span className={style.circulo}></span>
            <span className={style.guion}></span>
          </div>
          <div className={style.iniciarSesion}>inicia sesión con</div>
          <div className={style.containerIcons}>
            <span className={style.googleIcon}>gulugu</span>
            <span className={style.fbIcon}>fb</span>
          </div>
          <span className={style.register}>
            No tienes una cuenta?{' '}
            <span
              className={style.resaltado}
              onClick={() => navigate('register')}
            >
              Registrate
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}
