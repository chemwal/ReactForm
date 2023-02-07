import React from 'react';
export default function Validation(props) {
  let errors = {};
  if (!props.userName) {
    errors.userName = 'User Name is Required';
  }
  return errors;
}
