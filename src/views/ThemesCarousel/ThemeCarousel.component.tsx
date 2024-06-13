import style from './ThemeCarousel.module.css'
import Card from '../../components/Card/Card.component'
import Carousel from '../../components/Carousel/Carousel.component'

const ThemeCarousel = () => {
  return (
    <div className={style.container}>
      <Carousel>
        <Card
          title='Tecnologia'
          list={['Hardware y software.', 'Programacion y desarrollo.']}
          image='https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        />
        <Card
          title='Arte visual'
          list={['Cine, television y streaming.', 'Musica y conciertos.']}
          image='https://images.unsplash.com/photo-1603739903239-8b6e64c3b185?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        />
        <Card
          title='Estilo de vida'
          list={['salud y bienestar.', 'Viajes y turismo.']}
          image='https://images.unsplash.com/photo-1502301197179-65228ab57f78?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        />
        <Card
          title='Educacion'
          list={['Consejos para estudios.', 'Oportunidades de formación']}
          image='https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        />
        <Card
          title='Deportes'
          list={['Fútbol, baloncesto, etc.', 'Discusiones deportivas.']}
          image='https://images.unsplash.com/photo-1471295253337-3ceaaedca402?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        />
      </Carousel>

      <Carousel invert={true}>
        <Card
          title='Economia'
          list={[
            'Inversiones y mercados.',
            'Ahorro y planificación.'
          ]}
          image='https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        />
        <Card
          title='Creatividad'
          list={['Pintura, escultura, etc.', 'Diseño grafico y multimedia.']}
          image='https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        />
        <Card
          title='Juegos'
          list={['Videojuegos y consolas.', 'Competitivo.']}
          image='https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        />
        <Card
          title='Comunidades'
          list={['Tendencias y discuciones.', 'Temas de interes.']}
          image='https://images.unsplash.com/photo-1675352161865-27816c76141a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        />
        <Card
          title='Moda'
          list={['Nuevas tendecias', 'Patronaje y diseño']}
          image='https://images.unsplash.com/photo-1557777586-f6682739fcf3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        />
      </Carousel>
    </div>
  )
}

export default ThemeCarousel
