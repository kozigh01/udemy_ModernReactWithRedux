import React from 'react';
import { connect } from 'react-redux';

import { createStream } from '../../actions/index';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.props.createStream} />
      </div>
    );
  }
}

export default connect(null, {createStream})(StreamCreate);

// class StreamCreate extends React.Component {
//   renderInput = ({ input, label, meta }) => {
//     const className = `field ${meta.touched && meta.error ? 'error' : ''}`
//     return (
//       <div className={className}>
//         <label htmlFor={input.name}>{label}</label>
//         <input {...input} autoComplete="off" placeholder={meta.touched && meta.error ? meta.error : ''} />
//         {this.renderErrorMessage(meta)}
//       </div>
//     )
//   }

//   renderErrorMessage = ({ error, touched }) => {
//     if (touched && error) {
//       return (
//         <div className="ui error message">
//           <div className="header">
//             {error}
//           </div>
//         </div>
//       );
//     }
//     return null;
//   }

//   onSubmit = (formValues) => {
//     this.props.createStream(formValues);
//   }

//   render = () => {
//     return (
//       <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
//         <Field name="title" component={this.renderInput} label="Enter Title" />
//         <Field name="description" component={this.renderInput} label="Enter Description" />
//         <button className="ui button primary">Submit</button>
//       </form>
//     );
//   }
// }

// const validate = (formValues) => {
//   const validation = {};

//   if (!formValues.title) {
//     validation.title = 'You must enter a title';
//   }

//   if (!formValues.description) {
//     validation.description = 'You must enter a description';
//   }

//   return validation;
// };

// const formWrapped = reduxForm({ form: 'streamCreate', validate})(StreamCreate);
// export default connect(null, {createStream})(formWrapped);