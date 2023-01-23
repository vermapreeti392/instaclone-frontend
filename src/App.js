
import './App.css';
import Form from './components/form/form';
import Header from './components/header/header';
import Postview from './components/post-view/postview';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './components/landing-page/landingPage';
// import Localdata from './components/localdata'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/' element={<LandingPage />}/>
        <Route path='/postview' element={<Postview />}/>
        {/* <Route path='/postview' element={<Localdata />}/> */}
        <Route path='/addpost' element={<Form />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
