import React from 'react';
import NavbarComponent from './components/NavbarComponent.jsx';
import ItemContainer from "./components/Itemcontainer";
import CartWidget from "./components/Cartwidget";
import { BrowserRouter as Router, Routes, Route, Navigate, } from 'react-router-dom';
import ItemListContainer from './components/ItemListcontainer';
import ItemDetailContainer from './components/Itemdetailcontainer';
import Contact from './components/contacto';
import Body from "./components/body.jsx"
import Perfumes from "./components/Perfumes.jsx"
import CartContextProvider from './components/context/CartContext.jsx';
import Cart from './components/cart.jsx';



function App() {
  return (
    <Router>
      <CartContextProvider>
        <NavbarComponent></NavbarComponent>
        <Routes>
          <Route path="/" element={<Body/>} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Navigate to="/" replace />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
        </Routes>
      </CartContextProvider>
    </Router>
  );
}

// function App() {
//   return (
//     <BrowserRouter>
//     <CartContextProvider>
    
//     <Router>
      
//       {/* <CartWidget /> */}

//       <div className="container mt-4">
        
        

//         {/* <img src="/images/le-male.webp" alt="Le Male" style={{ width: '200px', margin: '10px' }} />
//         <img src="/images/scandal.webp" alt="Scandal" style={{ width: '200px', margin: '10px' }} />
//         <img src="/images/tom-ford.webp" alt="Tom Ford" style={{ width: '200px', margin: '10px' }} /> */}

//         <Routes>
//           <Route path="/" element={<Body/>} />
//           <Route path="/category/:id" element={<Perfumes />} />
//           <Route path="/item/:id" element={<ItemDetailContainer />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/shop" element={<Navigate to="/" replace />} />
//         </Routes>
//       </div>
//     </Router>

//     </CartContextProvider>
//   );
// }


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


 