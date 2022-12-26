import React, { Fragment } from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

const Radio = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
              { ( { field } ) =>
              {
          return options.map((option) => (
            <Fragment key={option.value}>
              <input
                type="radio"
                id={option.value}
                {...field}
                {...rest}
                value={option.value}
                checked={field.value === option.value}
              />
              <label htmlFor={option.value}>{option.key}</label>
            </Fragment>
          ));
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Radio;
