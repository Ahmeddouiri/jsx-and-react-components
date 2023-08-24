import Card from 'react-bootstrap/Card';
function Price({price}){
    return(
        <>
        <Card.Footer className="text-muted">{price}</Card.Footer>
        </>
    )
}

export default Price