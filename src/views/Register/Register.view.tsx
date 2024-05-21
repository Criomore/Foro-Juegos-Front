import { useNavigate } from 'react-router-dom'
import style from './Register.module.css'
import { useState } from 'react'

export const Register = () => {
  const navigate = useNavigate()
  const [modal, setModal] = useState(false)

  return (
    <div className={style.bg}>
      {modal ? (
        <div className={style.modal_container}>
          <div className={style.modal_content}>
            <div className={style.modal_text}>
              <div className={style.modal_titulo}>
                ¡FELICIDADES, BIENVENIDO A CRIOMORE!
              </div>
              <div className={style.modal_opciones}>
              <div className={style.context}>Ya has creado tu cuenta pero hay otros pasos que debes seguir como:</div>
                <div className={style.opcion_0}><span className={style.guion}>- </span>Elegir tu foto de perfil y de portada.</div>
                <div className={style.opcion_1}><span className={style.guion}>- </span>Seleccionar tus temas de interes para conocerte mejor y crear una mejor experiencia para ti.
                </div>
                <div className={style.opcion_2}><span className={style.guion}>- </span>Escribir un status que te defina.</div>
                <div className={style.opcion_3}><span className={style.guion}>- </span>Hacer tus primeros seguimientos a los demas perfiles.</div>
                <div className={style.opcion_4}><span className={style.guion}>- </span>Y por ultimo realizar tu primera publicacion en nuestra comunidad.
                </div>
              </div>
              <div className={style.modal_pregunta}>
                Ahora que sabes cual es el siguiente paso para terminar tu
                registro, <span className={style.guion}>¿Quieres seguir o prefieres comenzar a explorar ahora
                nuestro foro?</span>
              </div>

              <div className={style.buttons}>
                <button className={style.button_cancel} onClick={e => {
                e.preventDefault()
                setModal(false)
              }}>Cancelar</button>
                <button className={style.button_accept} onClick={() => navigate('/profile')}>Aceptar</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
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

            <button
              className={style.btn}
              onClick={e => {
                e.preventDefault()
                setModal(true)
              }}
            >
              REGISTRARME
            </button>
          </form>

          <div className={style.text}>
            ¿Ya tienes una cuenta?
            <span onClick={() => navigate('/login')} className={style.option}>
              Iniciar Sesión.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
