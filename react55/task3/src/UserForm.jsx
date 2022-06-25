import React, { Component } from 'react';

class UserForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

    const referenceToTheFormDomElem = this.formRef;
    console.log(referenceToTheFormDomElem);

    const formDataInstance = new FormData(referenceToTheFormDomElem);
    console.log(formDataInstance);
    window.formDataInstance = formDataInstance;

    const formDataList = Array.from(formDataInstance.entries());
    // const formDataList = [...formDataInstance];
    console.log(formDataList);

    // const formData = formDataList.reduce((acc, formDataEntry) => {
    //   const [fieldName, fieldValue] = formDataEntry;
    //   console.log(formDataEntry);
    //   console.log(acc);
    //   return {
    //     ...acc,
    //     [fieldName]: fieldValue,
    //   };
    // }, {});

    //var Obj poniatno
    const formDataObj = {};
    formDataList.forEach((formDataEntry) => {
      const [fieldName, fieldValue] = formDataEntry;
      formDataObj[fieldName] = fieldValue;
    });
    console.dir(formDataObj);

    // var Map
    //  const formDataMap = new Map();
    //  formDataList.forEach((formDataEntry) => {
    //    const [fieldName, fieldValue] = formDataEntry;
    //    formDataMap.set(fieldName, fieldValue);
    //  });
    //  console.log(formDataMap);

    // var hard
    //  const formData = [...new FormData(this.formRef)].reduce(
    //    (acc, [name, value]) => ({ ...acc, [name]: value }),
    //    {}
    //  );
    // console.log(formData);
  };

  setRef = (node) => {
    // this.setState({
    //   formRef: node,
    // });
    this.formRef = node;
    console.log(node);
  };

  render() {
    return (
      <form
        ref={this.setRef}
        className="login-form"
        onSubmit={this.handleSubmit}
      >
        <h1 className="form-title">Profile</h1>
        <div className="form-control">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-input" type="text" id="name" name="name" />
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="student">
            Student
          </label>
          <input
            className="form-input"
            type="checkbox"
            id="student"
            name="student"
          />
        </div>
        <div className="form-control">
          <label className="form-label" id="occupation" htmlFor="occupation">
            Occupation
          </label>
          <select name="occupation" className="form-input">
            <option value="london">London</option>
            <option value="new-york">New York</option>
            <option value="sidney">Sidney</option>
            <option value="berlin">Berlin</option>
          </select>
        </div>
        <div className="form-control">
          <label className="form-label" id="about" htmlFor="about">
            About
          </label>
          <textarea name="about" className="form-input" />
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default UserForm;
