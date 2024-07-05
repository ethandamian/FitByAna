import './App.css'
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';

import { BrowserRouter } from 'react-router-dom'
import Nav from './layout/Nav';
import Footer from './layout/Footer';
import MainContent from './layout/MainContent';

function App() {


  return (
    <BrowserRouter>

      <div className="absolute top-0 z-[-2] h-fit w-full bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">

        <Nav />
        <MainContent />
        <Footer />

      </div>

    </BrowserRouter>

  )
}

export default App
