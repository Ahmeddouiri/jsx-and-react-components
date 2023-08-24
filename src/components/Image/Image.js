import Card from 'react-bootstrap/Card';

function Image({image}){
    return(
        <>
        <Card.Img variant="top" src={image} />
        </>
    )
}

export default Image