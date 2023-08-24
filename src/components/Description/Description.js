import Card from 'react-bootstrap/Card';

function Description({description}){
    return(
        <>
        <Card.Text>
            {description}
          </Card.Text>
        </>
    )
}

export default Description