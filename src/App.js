import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
        <>
          <Nav/>
          <Header/>
          <Main/>
          {/*<Header/>
          <Main/>
          <Footer/>*/}
        </>
    </div>
  );
}

export default App;
