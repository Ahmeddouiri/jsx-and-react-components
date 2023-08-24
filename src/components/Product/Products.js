import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Price from '../Price/Price';
import { useState } from 'react';
import Image from '../Image/Image';
import Description from '../Description/Description';
import Name from '../Name/Name';
function Products() {
const [products,setProducts] = useState( [
    {
      name: "Product 1",
      price: 19.99,
      description:
        "This is the description for Product 1. It's a high-quality item that provides great value.",
      image:
        "https://lesportif.com.tn/35142-home_default/casquette-nike-jordan-h86-jm.jpg",
    },
    {
      name: "Product 2",
      price: 29.99,
      description:
        "Product 2 is a versatile option that can meet various needs. Its features make it stand out.",
      image:
        "https://www.tuttosport.com.tn/19142-large_default/adidas-casquette-aeroready.jpg",
    },
    {
      name: "Product 3",
      price: 9.99,
      description:
        "Affordable and reliable, Product 3 is perfect for everyday use. Customers love its simplicity.",
      image:
        "https://lesportif.com.tn/35184-home_default/casquette-nike-u-nk-h86-cap-me.jpg",
    },
  ]);
  return (
    <>
    {products.map(product=>
        <Card style={{ width: '18rem' }}>
        <Image image={product.image}/>
        <Card.Body>
          <Name name={product.name} />
          <Description description={product.description}/>
        </Card.Body>
        <Price price={product.price} />
      </Card>


    )}
    
    </>
  );
}
export default Products;