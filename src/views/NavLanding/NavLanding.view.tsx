import { useState } from 'react'
import style from './NavLanding.module.css'
import { useNavigate } from 'react-router-dom'

const NavLanding = () => {
  const [stateClickNav, setStateClickNav] = useState('')
  const navigate = useNavigate()
  return (
    <div className={style.container}>
      <div className={style.company}>
        CRIOMORE <br /> COMPANY
      </div>
      <div className={style.navButtons}>
        <a
          className={
            stateClickNav === 'Explorar'
              ? style.selectedButton
              : style.buttonNav
          }
          onClick={() => setStateClickNav('Explorar')}
          href='#explorar'
        >
          Explorar
        </a>
        <div
          className={
            stateClickNav === 'Info' ? style.selectedButton : style.buttonNav
          }
          onClick={() => setStateClickNav('Info')}
        >
          Info
        </div>
        <div
          className={
            stateClickNav === 'Nosotros'
              ? style.selectedButton
              : style.buttonNav
          }
          onClick={() => setStateClickNav('Nosotros')}
        >
          Nosotros
        </div>
      </div>
      <div className={style.sesionButtons}>
        <div onClick={() => navigate('/login')} className={style.inicioSesion}>
          Inicia Sesion
        </div>
        <div onClick={() => navigate('/register')} className={style.registrate}>
          Registrate
        </div>
      </div>
    </div>
  )
}

export default NavLanding
