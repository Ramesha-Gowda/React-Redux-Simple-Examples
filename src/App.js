import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeConatiner from './components/HooksCakeConatiner';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <UserContainer></UserContainer> */}
        {/* <ItemContainer cake></ItemContainer> */}
        {/* <ItemContainer></ItemContainer> */}
        {/* <CakeContainer></CakeContainer> */}
        {/* <HooksCakeConatiner></HooksCakeConatiner> */}
        <IceCreamContainer></IceCreamContainer>
        {/* <NewCakeContainer></NewCakeContainer> */}
        
      </div>
    </Provider>
  );
}

export default App;
