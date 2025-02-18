import logo from './logo.svg';
import './App.css';
import Title from './components/Title.js';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const Api = lazy(() => import('./components/api.js'));

/**
const router = createBrowserRouter(createRoutesFromElements(
   <Route path='/' element={ <Api/> } />,
  <Route path='/:search' element={ <Search/> } />

));
*/


const appStyle = {
  display: 'block',
  fontFamily: '"Goudy Bookletter 1911", sans-serif',
  backgroundColor: 'grey',
  margin:'0px',
  padding:'0px',
  width:'100%',
  height: '100%'
};

function App() {
  return (
    <div className="App" style={appStyle}>
      <header className="body" >
        <Title />
        <Suspense>
          <Api /> 
        </Suspense>
      </header>
      {/** <RouterProvider router={ router } />*/}
      
      
    </div>
    
  );
}

export default App;
