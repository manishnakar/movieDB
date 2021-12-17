import React, {Suspense, lazy} from 'react';
import Header from './components/header/Header'
import {Container} from '@material-ui/core'
import SimpleBottomNavigation from './components/navigation/Navigation'
import './App.css';
import { BrowserRouter,  Routes ,Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'

//Lazy loading of react components
const Trending = lazy(() => import('./pages/trending'));
const Search = lazy(() => import('./pages/search'));
const Movies = lazy(() => import('./pages/movies'));
const Series = lazy(() => import('./pages/series'));


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
     <Suspense fallback={<div>Loading...</div>}>
     <Header></Header>         
    <div className="App">
      <Container>
        <Routes>          
           <Route path="/" element={<Trending />} exact />            
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/search" element={<Search />} />
        </Routes>
      </Container>      
      <SimpleBottomNavigation></SimpleBottomNavigation>
    </div>
    </Suspense>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
