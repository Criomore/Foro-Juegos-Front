import {
  Button,
  Nav,
  Navbar,
  Form,
  Collapse
} from 'react-bootstrap'
import style from './NavFeed.module.css'
import { SlOptions } from 'react-icons/sl'
import { useState } from 'react'

const NavFeed = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Navbar expand='xl' sticky='top'>
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
              className='mr-sm-2'
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

        <Button
          onClick={() => setOpen(!open)}
          aria-controls='example-collapse-text'
          aria-expanded={open}
        >
          <SlOptions />
        </Button>
        <Collapse in={open} className={style.collapse}>
          <div id='example-collapse'>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavFeed

{
  /* 
<NavDropdown title='' className={style.dropdown}>
          <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
          <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
          <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
        </NavDropdown>
       */
}
