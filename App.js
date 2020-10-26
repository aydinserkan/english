import React from 'react';
import Store from './store/GenelStore';
import Rooter from './components/Rooter';

const App = () => {
  return (
    <Store>
      <Rooter />
    </Store>
  );
};

export default App;
