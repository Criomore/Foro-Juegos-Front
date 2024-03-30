import { useNavigate } from 'react-router-dom'
import style from './Register.module.css'

export const Register = () => {
  const navigate = useNavigate()
  return (
    <div className={style.bg}>
      <div className={style.bgNegro}>
        <div className={style.container}>
          <div className={style.title}>REGISTRATE</div>

          <form className={style.form}>
            <div className={style.campos}>
              <label className={style.label}>
                Nombre completo
                <input
                  className={style.input}
                  type='text'
                  placeholder='Nombre de usuario'
                />
              </label>

              <label className={style.label}>
                Nombre de usuario <span className={style.obl}>*</span>
                <input
                  className={style.input}
                  type='text'
                  placeholder='Escribe tu apodo aqui'
                />
              </label>
            </div>

            <div className={style.campos}>
              <label className={style.label}>
                Correo <span className={style.obl}>*</span>
                <input
                  className={style.input}
                  type='text'
                  placeholder='Ejemplo@ejemplo.com'
                />
              </label>

              <label className={style.label}>
                Contraseña <span className={style.obl}>*</span>
                <input
                  className={style.input}
                  type='password'
                  placeholder='Contraseña'
                />
              </label>

              <label className={style.label}>
                Confirmar contraseña <span className={style.obl}>*</span>
                <input
                  className={style.input}
                  type='password'
                  placeholder='Confirmar contraseña'
                />
              </label>
            </div>

            <div className={style.campos}>
              <label className={style.label}>
                País
                <input className={style.input} type='text' placeholder='País' />
              </label>

              <label className={style.label}>
                Fecha de Nacimiento <span className={style.obl}>*</span>
                <input className={style.input} type='date' />
              </label>
            </div>

            <button className={style.btn}>REGISTRARME</button>
          </form>

          <div className={style.text}>
            ¿Ya tienes una cuenta?
            <span onClick={() => navigate('/login')}  className={style.option}>
              Iniciar Sesión.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
