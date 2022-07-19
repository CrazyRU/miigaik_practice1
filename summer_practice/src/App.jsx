// import logo from './logo.svg';
// import './App.css';
// import Header from './components/Header.jsx';

// const App = () =>{

//   return(
//     <div>
//       <Header menu={["Москва", "Санкт-Петербург"]}/>
//       <h1>Привет Всем</h1>
//       <p>Я реакт приложение!</p>
//     </div>
//   )
  
// }

// function App() {
//   let title = 'Миигаик - лучший ВУЗ!'
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {title}
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import { Routes, Route } from 'react-router-dom';

import {Home} from './Pages/Home';
import {Articles} from './Pages/Articles';
import {Stories} from './Pages/Stories';
import {Account} from './Pages/Account';
import {NotFound} from './Pages/NotFound';
import {CowLevel} from './Pages/CowLevel';
import {Advice} from './Pages/Advice';
import { Socials } from './Pages/Socials';

import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <div class='wrapper'>

      <Header/>

      <div class='content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/stories' element={<Stories />} />
          <Route path='/advice' element={<Advice />} />
          <Route path='/account' element={<Account />} />
          <Route path='/cowlevel' element={<CowLevel />} />
          <Route path='/socials' element={<Socials />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>

      <Footer/>

      </div>
    </>
  );
}

export default App;