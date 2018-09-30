import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate  from '../validation/validation';
import FormInput from '../components/FormInput';
import {
  captialize,
  age,
  salary,
} from '../validation/normalize';
import {
  Button,
  Card,
  CardBody,
  Col,
  FormGroup,
  Input,
  Label
} from 'reactstrap';

const NomineeDetailsForm = (props) => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Col xs="12" sm="12">
        <Card className="card-border">
          <CardBody>
            <FormGroup row>
              <Col xs="12" lg="6">
                <Field
                  name="nominee"
                  type="text"
                  component={FormInput}
                  label="Nominee Name"
                  inputPlaceHolder="Enter Nominee Name"
                  normalize={captialize}
                />
              </Col>
              <Col xs="12" lg="6">
                <Field
                  name="relationship"
                  type="text"
                  component={FormInput}
                  label="Nominee Relationship"
                  inputPlaceHolder="Enter Nominee Relationship"
                  normalize={captialize}
                />
              </Col>
            </FormGroup>
            <FormGroup row className="my-0">
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
            <br />
            <FormGroup row>
              <Col xs="12" lg="6">
                <Field
                  name="occupation"
                  type="text"
                  component={FormInput}
                  label="Nominee Occupation"
                  inputPlaceHolder="Enter Nominee Occupation"
                />
              </Col>
              <Col xs="12" lg="6">
                <Field
                  name="income"
                  type="text"
                  component={FormInput}
                  label="Nominee Annual Income"
                  inputPlaceHolder="Enter Nominee Annual Income"
                  normalize={salary}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col xs="12" lg="6">
                <Label htmlFor="textarea-input">Comments</Label>
              </Col>
              <Col xs="12" lg="12">
                <Input
                  type="textarea"
                  name="textarea-input"
                  id="textarea-input"
                  rows="3"
                  placeholder="Content..."
                />
              </Col>
            </FormGroup>
          </CardBody>
          <div style={{ paddingBottom: 30 }}>
            <Button color="primary" className="btn-pill pull-left" onClick={previousPage} style={{marginLeft: '20px'}}>
              <i className="fa fa-chevron-left" />
                &nbsp; Previous
            </Button>
            <Button color="primary" className="btn-pill pull-right" type="submit" style={{marginRight: '20px'}} disabled={pristine || submitting}>
               Save &nbsp;
              <i className="fa fa-check" />
            </Button>
          </div>
        </Card>
      </Col>
    </form>
  );
};

NomineeDetailsForm.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  previousPage: PropTypes.func,
  submitting: PropTypes.bool
};

export default reduxForm({
  form: 'wizardForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(NomineeDetailsForm);
