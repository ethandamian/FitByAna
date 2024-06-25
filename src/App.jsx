import './App.css'
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';

import Background from './layout/Background';
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
import Nav from './layout/Nav';
import Footer from './layout/Footer';
import MainContent from './layout/MainContent';

function App() {


  return (
    <BrowserRouter>
      <Background>
        <div className=' grid h-screen'>
          <Nav />
          <MainContent />
          <Footer />
        </div>
      </Background>
    </BrowserRouter>

  )
}

export default App
