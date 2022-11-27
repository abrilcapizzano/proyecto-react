import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import tvimg from "./img/tv.jpg";
import iphone14 from "./img/iphone14.jpg"
import parlantesjbl from "./img/parlantesjbl.jpg"
import macpro from "./img/macbookpro.jpg"
import Button from 'react-bootstrap/esm/Button';
import "./cards.css"
function Cards() {
      const productos = [
        {nombre: "Televisión LG",
         descripcion:"Televisión 40 pulgadas",
        precio:"$150.000",
      img:tvimg, 
    id:1},
        {nombre: "Iphone 14",
        descripcion:"Nuevo Iphone",
       precio:"$300.000",
     img:iphone14,
    id:2},
        {nombre: "Parlantes JBL",
      descripcion:"Parlantes lorem ips",
    precio:"$40.000",
  img:parlantesjbl,
id:3},
  {nombre: "MacBook Pro",
  descripcion:"MacBook Pro 13inch",
precio:"$250.000",
img:macpro,
id:4}
    ] 
  return (
productos.map((producto)=>(
      <div key={producto.nombre + producto.id}>
      <Card className='card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.img} />
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