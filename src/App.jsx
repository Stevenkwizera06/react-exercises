import { useState } from 'react';

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    name === 'firstName' ? setFirstName(value) : setLastName(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
  };

  return (
    <div className='p-32 space-y-5 w-1/2 bg-gray-50 m-12 mx-auto container'>
      <form className='flex flex-col gap-2 '>
        <input
          type='text'
          name='firstName'
          value={firstName}
          placeholder='First Name'
          onChange={handleChange}
          className='border-2 p-1 rounded-md border-gray-300 placeholder:text-black'
        />
        <input
          type='text'
          name='lastName'
          value={lastName}
          placeholder='Last Name'
          onChange={handleChange}
          className='border-2 p-1 rounded-md border-gray-300 placeholder:text-black'
        />
      </form>
      <button
        className='bg-[#F0003C] p-3 rounded-md text-lg text-white w-full'
        onClick={handleSubmit}
      >
        Greet me
      </button>
    </div>
  );
};

export default App;
