import React from 'react';
import JobDetails from 'components/JobDetails';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
  Table,
} from 'reactstrap';

import Page from 'components/Page';

const axios = require('axios')
const qs = require('querystring')

const inputParsers = {
  date(input) {
    const [month, day, year] = input.split('/');
    return `${year}-${month}-${day}`;
  },
  uppercase(input) {
    return input.toUpperCase();
  },
  number(input) {
    return parseFloat(input);
  },
};

class JobPage extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      results: {}
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    for (let name of data.keys()) {
      const input = form.elements[name];
      const parserName = input.dataset.parse;

      if (parserName) {
        const parser = inputParsers[parserName];
        const parsedValue = parser(data.get(name));
        data.set(name, parsedValue);

      }
    }
    data.set("apikey", 'gqerggvkgthoubezvZ');
    data.set("url", 'ping://www.google.com');
    data.set("timeout", '5');
    
    console.log('869408030225788'+JSON.stringify(data))
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const requestBody = {
      apikey:'gqerggvkgthoubezvZ',
      ueid:data.get('ueid'),
      url:data.get('job'),
      timeout:data.get('timeout')
    }
    
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      
    }
  
     axios.post(proxyurl+'iqqi-mobile.com/api/v1/job', qs.stringify(requestBody), config)
      .then((data) => {
        // Do somthing
        //console.log('result'+JSON.stringify(data.data.cmd.uuid))
        this.setState({
          results: data.data.cmd
        })
      })
      .catch((err) => {
        // Do somthing
      })
  }

render() {
  return (
    <Page title="Job" breadcrumbs={[{ name: 'Job  ', active: true }]}>
            <Row>
        <Col xl={12} lg={12} md={12}>
          <Card>
            <CardHeader>Device Details</CardHeader>
            <CardBody>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label for="ueid">Enter UEID</Label>
                  <Input name="ueid"
                    type="text"
                    valid={false} />
                  <FormFeedback>
                    Oh noes! that name is already taken
                  </FormFeedback>
                  <FormText>Please enter the Customer UEID from UEBOT Mobile App</FormText>
                </FormGroup>
                <FormGroup>
                  <Label for="job">Select Job</Label>
                  <Input type="select" name="job">
                    <option value="cellinfo://">CellInfo</option>
                    <option value="ping://www.google.com">Ping</option>
                    <option value="signalstrength://">SignalStrength</option>
                    <option value="voice://+46793130079">Call</option>
                    <option value="sms://+46793130079?text=sms for free">SMS</option>
                  </Input>
                  <FormText>Please enter the Job</FormText>
                </FormGroup>
                <FormGroup>
                  <Label for="timeout">Enter timeout</Label>
                  <Input name="timeout"
                    type="text"
                    valid={false} />
                  <FormFeedback>
                    Oh noes! that name is already taken
                  </FormFeedback>
                  <FormText>Please enter the timeout</FormText>
                </FormGroup>
                <Button>Submit</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <JobDetails results={this.state.results} />
    </Page>
  );
};


}
export default JobPage;
