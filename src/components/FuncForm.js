import React, { useState } from 'react';

function FuncForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [students, setStudents] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents(
      [...students, { name, email, city, country }],
      setName(''),
      setEmail(''),
      setCity(''),
      setCountry('')
    );
  };
  return (
    <>
      <form className='form'>
        <label className='required'>Name:</label> <br />
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label className='required'>Email:</label> <br />
        <input
          type='text'
          name='email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <label className='required'>City:</label> <br />
        <input
          type='text'
          name='city'
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <br />
        <label className='required'>Country:</label> <br />
        <input
          type='text'
          name='country'
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
        <br />
        <button className='submit-btn' onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {students.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.name}</h1>
            <h2>{item.email}</h2>
            <h3>{item.city}</h3>
            <h3>{item.country}</h3>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default FuncForm;
