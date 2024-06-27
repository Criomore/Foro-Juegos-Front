import { Button, Nav, Navbar, Form, NavDropdown } from 'react-bootstrap'
import style from './NavFeed.module.css'

const NavFeed = () => {
  return (
    <div>
      <Navbar fixed='top' className={style.contain}>
        <img
          src='https://i.ibb.co/5F1PjJz/criomore-logo.jpg'
          width='40'
          height='40'
          alt='Criomore logo'
          className={style.logo}
        />
        <Navbar.Brand className={style.brand}>Criomore</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse
          id='basic-navbar-nav'
          className='d-flex align-items-center justify-content-around'
        >
          <Nav className={style.nav}>
            <Nav.Link href='#explorar' className={style.navbtn}>
              Explorar
            </Nav.Link>
            <Nav.Link href='#info' className={style.navbtn}>
              Mi Feed
            </Nav.Link>
          </Nav>
          <Form className={style.form}>
            <Form.Control
              type='text'
              placeholder='Buscar'
              className={style.input}
            />
            <Button variant='none' className={style.search}>
              Search
            </Button>
          </Form>
          <Nav.Link href='#explorar' className={style.score}>
            Mi Score: 1000
          </Nav.Link>
        </Navbar.Collapse>
        <img
          src='https://i.ibb.co/5F1PjJz/criomore-logo.jpg'
          width='45'
          height='45'
          alt='profile'
          className={style.img}
        />

        <NavDropdown title='' className={style.dropdown} drop={'start'}>
          <NavDropdown.Item href='#action/3.1' className={style.item}>
            Action
          </NavDropdown.Item>
          <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
          <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
        </NavDropdown>
      </Navbar>
    </div>
  )
}

export default NavFeed
