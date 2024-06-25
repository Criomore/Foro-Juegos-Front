import { Navbar, Nav, Button, Form } from 'react-bootstrap'
import style from './NavLanding.module.css'

const NavLanding = () => {
  return (
    <div>
      <Navbar expand='lg' fixed='top' className={style.navbar}>
        <img
          src='https://i.ibb.co/5F1PjJz/criomore-logo.jpg'
          width='35'
          height='35'
          className={style.logo}
          alt='Criomore logo'
        />
        <Navbar.Brand className='text-light mx-5'>
          Criomore
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse
          id='basic-navbar-nav'
          className='d-flex align-items-center justify-content-around'
        >
          <Nav className='ml-auto'>
            <Nav.Link href='#explorar' className='text-light mx-3'>
              Explorar
            </Nav.Link>
            <Nav.Link href='#info' className='text-light mx-3'>
              Info
            </Nav.Link>
            <Nav.Link href='#sobre-nosotros' className='text-light mx-3'>
              Nosotros
            </Nav.Link>
          </Nav>
          <Form className='d-flex'>
            <Button
              href={'login'}
              variant='outline-secondary'
              className={style.inicioSesion}
            >
              Inicia Sesion
            </Button>
            <Button
              href={'register'}
              variant='outline-secondary'
              className={style.registrate}
            >
              Registrate
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavLanding
