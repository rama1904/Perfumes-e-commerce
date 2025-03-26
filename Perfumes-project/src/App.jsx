import React from 'react';
import Navbar from './components/Navbar';
import ItemContainer from "./components/Itemcontainer";
import CartWidget from "./components/Cartwidget";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h1>Perfumes</h1>
        <ItemContainer />
      </div>
      <CartWidget />
    </div>
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


 