import { useState, useEffect } from 'react';
import { ChangeEvent } from 'react';
import './Form.css';
import { getData } from '../../services/getData';

const Form = () => {
  const [name, setName] = useState('');

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmitValue = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setName('');
  };

  useEffect(() => {
    const res = getData(name);
    console.log(res);
  }, [name]);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmitValue}>
        <label>
          Enter your name.
          <input type="text" value={name} onChange={handleChangeName}></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
