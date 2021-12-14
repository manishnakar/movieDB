import Header from './components/header/Header'
import {Container} from '@material-ui/core'
import SimpleBottomNavigation from './components/navigation/Navigation'
import './App.css';
import { BrowserRouter,  Routes ,Route } from 'react-router-dom';

import Trending from './pages/trending'
import Search from './pages/search'
import Movies from './pages/movies'
import Series from './pages/series'

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
