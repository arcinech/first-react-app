import Hero from './components/Hero/Hero';
import SearchForm from './components/SearchForm/SearchForm';
import List from './components/List/List';
import Container from './components/Container/Container';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <Container >
      <Hero />
      <SearchForm />
      <List />
    </Container>
  );
}

export default App;
