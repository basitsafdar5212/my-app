import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


export function BodyShorthandExample({text}) {
    return <Card body>{text}</Card>;
  }


export function CardExample() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://static.toiimg.com/thumb/msid-96865237,imgsize-778107,width-400,resizemode-4/96865237.jpg" />
        <Card.Body>
          <Card.Title>Flight Reservation</Card.Title>
          <Card.Text>
            Basit Safdar 
          </Card.Text>
          <Button variant="primary"> For Bookings Connect with us</Button>
        </Card.Body>
      </Card>
    );
}