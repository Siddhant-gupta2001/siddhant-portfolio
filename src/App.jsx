// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// const App= () => {
//   const [count, setCount] = useState(0)

//   return (
//       <div>
//         3D Developer portfolio
//       </div>
//   )
// }

// export default App

// import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import {About , Contact, Experience, Feedbacks, Hero, Tech , StarsCanvas, Navbar, Works} from './components';

const App = () => {
  // const [count, setCount] = useState(0);

  return (
   <BrowserRouter>
    <div className='relative z-0  bg-primary'>
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Navbar/>
      <Hero/>
    </div>
    <About/>
    <Experience/>
    <Tech/>
    <Works/>
    <Feedbacks/>

    <div className='realative z-0'>
      <Contact/>
      <StarsCanvas/>
    </div>

    </div>
   </BrowserRouter>
  );
};

export default App;

