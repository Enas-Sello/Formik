import React, { useState } from 'react';
import FormikControl from '../Components/FormikControl';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const FormContainer = () => {
  const [val, setVal] = useState('');
  console.log();
  const SelectOptions = [
    { key: 'select', value: '' },
    { key: 'option1', value: '1' },
    { key: 'option1', value: '2' },
  ];
  const radioOptions = [
    { key: 'Option 1', value: 'rOption1' },
    { key: 'Option 2', value: 'rOption2' },
    { key: 'Option 3', value: 'rOption3' },
  ];
  const checkboxOptions = [
    { key: 'Option 1', value: 'cOption1' },
    { key: 'Option 2', value: 'cOption2' },
    { key: 'Option 3', value: 'cOption3' },
  ];
  const initialValues = {
    email: '',
    name: '',
    description: '',
    select: '',
    radio: '',
    checkbox: [],
    date: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().required('required'),
    name: Yup.string().required('required'),
    description: Yup.string().required('required'),
    select: Yup.string().required('required'),
    radio: Yup.string().required('required'),
    checkbox: Yup.array().required('required'),
    date: Yup.date().required('required').nullable(),
  });
  const onSubmit = (values) => {
    setVal(values);
    console.log(values);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
              control="input"
              type="text"
              label="name"
              name="name"
            />
            <FormikControl
              control="textarea"
              label="description"
              name="description"
            />
            <FormikControl
              control="select"
              label="options"
              name="select"
              options={SelectOptions}
            />
            <FormikControl
              control="radio"
              label="radio"
              name="radio"
              options={radioOptions}
            />
            <FormikControl
              control="checkbox"
              label="checkbox"
              name="checkbox"
              options={checkboxOptions}
            />
            <FormikControl control="data" label="data" name="date" />
            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
      <div>
        {val.email}
        {val.description}
        {val.select}
        {val.radio}
        {val.checkbox}
        {/* {val.radio} */}
      </div>
    </>
  );
};

export default FormContainer;
