import { useState } from 'react';
import Input from './Input.jsx';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <Input handleChange={handleChange} hint="Enter something:" />
    </div>
  );
}

export default App;
