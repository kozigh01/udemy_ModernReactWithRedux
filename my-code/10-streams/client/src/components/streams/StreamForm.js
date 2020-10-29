import React from 'react';
import { Field, reduxForm } from 'redux-form';


class StreamForm extends React.Component {
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.touched && meta.error ? 'error' : ''}`
    return (
      <div className={className}>
        <label htmlFor={input.name}>{label}</label>
        <input {...input} autoComplete="off" placeholder={meta.touched && meta.error ? meta.error : ''} />
        {this.renderErrorMessage(meta)}
      </div>
    )
  }

  renderErrorMessage = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">
            {error}
          </div>
        </div>
      );
    }
    return null;
  }

  // onSubmit = (formValues) => {
  //   this.props.onSubmit(formValues);
  // }

  render = () => {
    return (
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const validation = {};

  if (!formValues.title) {
    validation.title = 'You must enter a title';
  }

  if (!formValues.description) {
    validation.description = 'You must enter a description';
  }

  return validation;
};

export default reduxForm({ form: 'streamForm', validate})(StreamForm);