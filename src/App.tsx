import React from 'react';
import TextField from './components/TextField';

const App: React.FC = () => {
  return (
    <div className="App">
      <TextField name={'name'} handleInput={handleInput} age={14} ok={true} fn={() => console.log('test function')} />
    </div>
  );
}

function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
  console.log('name:', e.target.name)
  console.log('value: ', e.target.value)
}

export default App;
