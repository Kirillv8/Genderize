import { useState } from 'react';
import { ChangeEvent } from 'react';
import './Form.css';
import { createUrl } from '../../utils/createUrl';

const Form = () => {
  const [name, setName] = useState('');

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    handleAddParamInUrl(event.target.value);
  };

  const handleSubmitValue = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setName('');
  };

  const handleAddParamInUrl = (name: string) => {
    const result = createUrl(name);
    console.log(result);
  };

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
