const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Name Required';
  }

  if (!values.phone) {
    errors.phone = 'MobileNumber Required';
  } else if (values.phone && !/^([6-9]\d{9})$/i.test(values.phone)) {
    errors.phone = 'Invalid mobile number, must be 10 digits';
  }

  if (!values.aadhaar) {
    errors.aadhaar = 'Aadhaar Number Required';
  } else if(values.aadhaar && !/^\d{12}$/i.test(values.aadhaar)) {
    errors.aadhaar = 'Invalid Aadhaar no';
  }

  if (!values.pan) {
    errors.pan = 'Pan Number Required';
  }

  if (!values.address) {
    errors.address = 'Address Required';
  }

  return errors;
};

export default validate;
