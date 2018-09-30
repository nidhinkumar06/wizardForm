import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from '../validation/validation';
import FormInput from '../components/FormInput'
import {
  mobile,
  captialize,
  age
} from '../validation/normalize';
import {
  Button,
  Card,
  CardBody,
  Col,
  FormGroup
} from 'reactstrap';


const GeneralForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Col sm="12">
        <Card className="card-border">
          <CardBody>
            <Field
              name="name"
              type="text"
              component={FormInput}
              label="Name *"
              inputPlaceHolder="Enter Name"
              normalize={captialize}
            />
            <FormGroup row>
              <Col xs="12" lg="6">
                <Field
                  name="fatherName"
                  type="text"
                  component={FormInput}
                  label="FatherName"
                  inputPlaceHolder="Enter Father Name"
                  normalize={captialize}
                />
              </Col>
              <Col xs="12" lg="6">
                <Field
                  name="phone"
                  type="text"
                  component={FormInput}
                  label="Mobile No *"
                  inputPlaceHolder="+91"
                  normalize={mobile}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col xs="12" lg="6">
                <Field
                  name="dob"
                  type="date"
                  component={FormInput}
                  label="Date of Birth"
                />
              </Col>

              <Col xs="12" lg="6">
                <Field
                  name="age"
                  type="text"
                  component={FormInput}
                  label="Age"
                  inputPlaceHolder="Enter Age"
                  normalize={age}
                />
              </Col>
            </FormGroup>
          </CardBody>
          <div style={{ paddingBottom: 30 }}>
            <Button color="primary" className="btn-pill pull-right" type="submit" style={{marginRight: '20px'}}>
               Next &nbsp;
              <i className="fa fa-chevron-right" />
            </Button>
          </div>
        </Card>
      </Col>
    </form>
  );
};

GeneralForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: 'wizardForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(GeneralForm);
