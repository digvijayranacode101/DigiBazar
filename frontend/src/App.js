import {  Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from  './components/Header'
import Footer from  './components/Footer'
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';




function App() {
  return (
    <>
    <Header/>
    <main className='py-3'>
      <Container>
        <Route path= '/' component={HomeScreen} exact/>
        <Route path= '/product/:id' component={ProductScreen} />
      </Container>
    </main>
    <Footer/>
    </>
  );
}

export default App;
