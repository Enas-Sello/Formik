import React from 'react';
import TextError from '../Components/TextError';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
const Forms = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.number().required('Required'),
  });

  const validate = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Required';
    }
    return errors;
  };

  const initialValues = {
    name: '',
    email: '',
    password: '',
    phoneNumber: [''],
  };
  // const formik = useFormik({
  //   initialValues,
  //   onSubmit: (values) => {},
  //   YupSchema,
  //   validate,
  // });
  const onSubmit = (values) => {};
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
      // validateOnMount
    >
      {(formik) => {
        console.log(formik);
        return (
          <Form className="app ">
            <label htmlFor="name">name</label>
            <Field type="text" name="name" id="name" />
            <ErrorMessage name="name" component={TextError} />

            <label htmlFor="email">e-mail</label>
            <Field type="email" name="email" id="e_mail" />
            <ErrorMessage name="email" component={TextError} />
            {/* noo@g.co */}
            <label htmlFor="password">password</label>
            <Field type="password" name="password" id="password" />
            <ErrorMessage name="password" component={TextError} />

            <label htmlFor="note">nots</label>
            <Field as="textarea" name="note" id="note"></Field>
            <div>
              <label htmlFor="">phone nubmer</label>
              <FieldArray name="phoneNumber">
                {(props) => {
                  // console.log(props)
                  const { push, remove, form } = props;
                  const { values } = form;
                  const { phoneNumber } = values;
                  return (
                    <div>
                      {phoneNumber.map((ph, i) => (
                        <div key={i}>
                          <Field name={`${ph[i]}`} />
                          <button type="button" onClick={() => push('')}>
                            +
                          </button>
                          <button type="button" onClick={() => remove(i)}>
                            -
                          </button>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
            </div>

            <button disabled={!(formik.dirty && formik.isValid)} type="submit">
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Forms;
