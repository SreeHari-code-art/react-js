// import Message from './components/message'
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
// import ListGroup from './components/ListGroup'
// import Alert from './components/Alert'
// import Button from './components/Button'


// function App(){
//   // const name = 'Cherry'
//   // return <div><Message></Message></div>
//   // return <h1>Hey I'm {name}</h1>
//   // return <div><ListGroup></ListGroup></div>
//   // const cityItems = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
//   // const handleSelectItem = (item: string) => {
//   //   console.log(item);
//   // };

//     // return (
//     // <div>
//     //   <ListGroup
//     //     items={cityItems}
//     //     heading="Cities"
//     //     onSelectItem={handleSelectItem}
//     //   />
//     // </div>

//   //   return (
//   //     <>
//   //     {Alert}
//   //     </>
//   // );

//   const [alertVisible, setAlertVisibility] = useState(false);
  
//   return (
//     <div>
//       {alertVisible && (
//         <Alert>
//           opende next
//         </Alert>
//       )}
//       <Button color="primary" onClick={() => setAlertVisibility(true)}>
//         next page
//       </Button>
//     </div>
//   );
// }

// export default App
// App.tsx
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Button from './components/Button';
import NextPage from './nextPage';

// Home Component (Your original view)
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Home Page</h1>
      <Button color="primary" onClick={() => navigate('/next-page')}>
        Next Page
      </Button>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/next-page" element={<NextPage />} />
    </Routes>
  );
}

export default App;