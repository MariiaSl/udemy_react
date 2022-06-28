import React, { Component } from 'react';

const UserForm = (props) => {
  // handleChange = (event) => {
  //   this.props.onChange(event);
  // };

  // render() {
  const { userData, onChange } = props;
  return (
    <form className="user-form">
      <input
        type="text"
        name="firstName"
        className="user-form__input"
        value={userData.firstName}
        onChange={onChange}
      />

      <input
        type="text"
        name="lastName"
        className="user-form__input"
        value={userData.lastName}
        onChange={onChange}
      />
    </form>
  );
};
// }

export default UserForm;
