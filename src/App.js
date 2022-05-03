import Home from './pages/Home/Home';
import About from './pages/About/About';
import Favorite from './pages/Favorite/Favorite';
import WrongPage from './pages/WrongPage/WrongPage';
import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <Container >
        <Routes>
          <Route path='/' element ={<Home />}/>
          <Route path='/about' element={<About />} />
          <Route path='/favorite' element={<Favorite />}/>
          <Route path='/*' element={<WrongPage />}/>
        </Routes>
      </Container>
    </>
  );
}

export default App;
