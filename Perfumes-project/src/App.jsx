import React from 'react';
import Navbar from './components/NavbarComponent';
import ItemContainer from "./components/Itemcontainer";
import CartWidget from "./components/Cartwidget";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ItemListContainer from './components/ItemListcontainer';
import ItemDetailContainer from './components/Itemdetailcontainer';
import Contact from './components/contacto';

function App() {
  return (
    <Router>
      <Navbar />
      <CartWidget />

      <div className="container mt-4">
        <h1>Perfumes</h1>

        {/* <img src="/images/le-male.webp" alt="Le Male" style={{ width: '200px', margin: '10px' }} />
        <img src="/images/scandal.webp" alt="Scandal" style={{ width: '200px', margin: '10px' }} />
        <img src="/images/tom-ford.webp" alt="Tom Ford" style={{ width: '200px', margin: '10px' }} /> */}

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;








// function App() {
//   const [count, setCount] = useState(0)

//   return (
//    <>
    
//      <div>
//        <a href="https://vite.dev" target="_blank">
//         <img src={viteLogo} className="logo" alt="Vite logo" />
//        </a>
//        <a href="https://react.dev" target="_blank">
//          <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </> )}
 
// export default App


 