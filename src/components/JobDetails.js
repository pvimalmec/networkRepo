import React from 'react'
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardLink,
  CardText,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';

const JobDetails = (props) => {
  console.log(props.results);
  var jobd=props.results;
    // Build an array of items
    let array = [];
    const entries = Object.entries(jobd)
  for (const [fruit, count] of entries) {
    console.log(`There are ${count} ${fruit}s`)
    if(fruit!='triggers'){
      array.push(
        <span>{count}</span>
        
      );
    }

  }

  console.log(array);
  let display = array.map(function (NewsData, index) {
    return (
      <Row>
        {['', 'top', 'left', 'right'].map((color, index) => (
          <Col key={index} md={12} sm={12} xs={12} className="mb-3">
            <Card
              inverse
              className={`border-0 bg-gradient-theme${
                !!color ? '-' : ''
              }${color}`}
              style={{
                height: 200,
              }}
            >
              <CardBody className="d-flex flex-column justify-content-start align-items-start">
                <CardTitle>Job Status</CardTitle>
                <CardText>UUID</CardText>
                <Button style={{alignSelf: 'flex-end',marginTop: '-75px'}} variant="primary">Map</Button>
                <CardText>Status</CardText>
                <Button style={{alignSelf: 'flex-end'}} variant="primary">Refresh</Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

    )
});

  
    // Render it
    return (
      <div>
        {display}
      </div>
    );


//  return <ul>{tifOptionsES6}</ul>
}



export default JobDetails;