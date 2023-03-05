
import { useState, useEffect } from "react";
import products from "../../products/products";
import { useParams } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';


function getSingleItemFromDatabase (idItem) {
  return new Promise((resolve, reject) => {
  setTimeout (() => {
    let encontrado = products.find((item) => item.id === Number(idItem));
    
    resolve(encontrado);
  } , 1000 );
});


}

function ItemDetailContainer({ greeting }) {
  const [user, setUser] = useState({});


  getSingleItemFromDatabase ()
  const params = useParams();
  const idUser = params.idUser;

  /*   useEffect(() => {
    fetch("https://reqres.in/api/users/" + idUser)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log("respuesta", json);
        setUser(json.data);
      });
  }, []); */

  useEffect(() => {
   getSingleItemFromDatabase(idUser).then(respuesta => {setUser(respuesta)})
  }, []);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={user.avatar} />
        <Card.Body>
          <Card.Title>{`${user.first_name} ${user.last_name}`}</Card.Title>
          <Card.Text>
          <small>{user.price}</small>
          <button>Agregar al carrito</button> 
          </Card.Text> 
        </Card.Body>
      </Card>
    </>
  );
}

export default ItemDetailContainer;