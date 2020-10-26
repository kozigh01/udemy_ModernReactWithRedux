import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { createStream } from '../../actions/index';

class StreamCreate extends React.Component {
  renderInput = (formProps) => {
    return (
      <input value={formProps.input.value} onChange={formProps.input.onChange} />
    );
  }

  renderInput2 = ({ input, label, meta }) => {
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

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  }

  render = () => {
    return (
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput2} label="Enter Title" />
        <Field name="description" component={this.renderInput2} label="Enter Description" />
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

const formWrapped = reduxForm({ form: 'streamCreate', validate})(StreamCreate);
export default connect(null, {createStream})(formWrapped);