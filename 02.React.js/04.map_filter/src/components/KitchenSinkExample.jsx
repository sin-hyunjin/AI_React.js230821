import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { useState } from 'react'
import coffeeMenu from '../data/coffee_menu.json'

function KitchenSinkExample() {
  const [menus, setMenus] = useState(coffeeMenu)
  console.log(menus)
  return (
    <Card style={{ width: '18rem' }}>
      {menus.map((Item) => (
        <div>
          <Card.Img variant="top" src="logo192.png" />
          <Card.Body>
            <Card.Title>메뉴</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{Item.category}</ListGroup.Item>
            <ListGroup.Item>{Item.name}</ListGroup.Item>
            <ListGroup.Item>{Item.price}</ListGroup.Item>{' '}
          </ListGroup>

          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </div>
      ))}
    </Card>
  )
}

export default KitchenSinkExample
