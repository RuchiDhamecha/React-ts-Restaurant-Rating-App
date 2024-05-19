import React from 'react';
import HomePage from './component/HomePage/HomePage'
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup';
import Main from './component/Restaurant/Main/Main';
// import { PageProvider } from './component/HomePage/PageContext';

function App() {
  // const [currentPage, setCurrentPage] = useState('home');
  // const renderPage = () => {
  //   switch (currentPage) {
  //     case 'home':
  //       return <HomePage handlePageChange={setCurrentPage}/>;
  //     case 'about':
  //       return <Login  handlePageChange={setCurrentPage}/>;
  //     case 'contact':
  //       return <Signup />;
  //     default:
  //       return <HomePage />;
  //   }
  // };

  // const navigateTo = (page) => {
  //   setCurrentPage(page);
  // };

  return (
   <>
   
    <HomePage/>
    {/* <Main/> */}
    </>
  );


}

export default App;