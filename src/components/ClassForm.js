import React, { Component } from 'react';

class ClassForm extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
      email: '',
      city: '',
      country: '',
      students: [],
    };
  }
  handleRegister = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      students: [
        ...this.state.students,
        {
          name: this.state.name,
          email: this.state.email,
          city: this.state.city,
          country: this.state.country,
        },
      ],
      name: '',
      email: '',
      city: '',
      country: '',
    });
  };
  render() {
    return (
      <>
        <form className='form'>
          <label className='required'>Name:</label> <br />
          <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.handleRegister}
          />
          <br />
          <label className='required'>Email:</label> <br />
          <input
            type='text'
            name='email'
            value={this.state.email}
            onChange={this.handleRegister}
          />
          <br />
          <label className='required'>City:</label> <br />
          <input
            type='text'
            name='city'
            value={this.state.city}
            onChange={this.handleRegister}
          />
          <br />
          <label className='required'>Country:</label> <br />
          <input
            type='text'
            name='country'
            value={this.state.country}
            onChange={this.handleRegister}
          />
          <br />
          <button className='submit-btn' onClick={this.handleSubmit}>
            Submit
          </button>
        </form>

        {this.state.students.map((student, index) => {
          return (
            <div key={index}>
              <h1>name:{student.name}</h1>
              <h2>email : {student.email}</h2>
              <h3>city : {student.city}</h3>
              <h4>country : {student.country}</h4>
              <hr />
            </div>
          );
        })}
      </>
    );
  }
}

export default ClassForm;
