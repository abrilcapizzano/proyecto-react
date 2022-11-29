import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import campera1 from "./img/campera1.jpg";
import camisa from "./img/camisa.jpg"
import remera3 from "./img/remera-vans2.jpg"
import remera2 from "./img/remera-vans.jpg"
import remera1 from "./img/remera-wooodo.jpg"
import buzo from "./img/buzovans.jpg"
import Button from 'react-bootstrap/esm/Button';
import "./cards.css"
function Cards() {
      const productos = [
        {nombre: "Campera NIKE SB",
         descripcion:"ANORAK - BARELY GREEN",
        precio:"$150.000",
      img:campera1, 
    id:1},
        {nombre: "Camisa de hombre",
        descripcion:"HURLEY RINCON SS",
       precio:"$30.000",
     img:camisa,
    id:2},
        {nombre: "Remera de hombre VANS",
      descripcion:"CLASSIC LOGO - GRIS",
    precio:"$40.000",
  img:remera3,
id:3},
  {nombre: "Remera de hombre VANS",
  descripcion:"FULL PATCH BACK - VERDE",
precio:"$24.000",
img:remera2,
id:4},
{nombre: "Remera WOODOO",
descripcion:"HALLOWEEN CALABAZA PACK - NEGRO",
precio:"$25.000",
img:remera1,
id:5},
{nombre: "Buzo de hombre",
descripcion:"VANS CLASSIC FULL ZIP II - NEGRO",
precio:"$21.300",
img:buzo,
id:6}
    ] 
  return (
productos.map((producto)=>(
      <div key={producto.nombre + producto.id}>
      <Card className='card' style={{ width: '18rem' }}>
      <Card.Img className='imagenCard' variant="top" src={producto.img} />
      <Card.Body> 
      <Card.Title>{producto.nombre}</Card.Title>
      <Card.Text>
      {producto.descripcion}
      </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
      <ListGroup.Item>{producto.precio}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button id={producto.id}>Comprar</Button>
      </Card.Body>
    </Card>
</div>))
     
  );}

export default Cards