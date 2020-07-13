import React, { useEffect, useState } from 'react';
import Routes from './routes'
// import Loader from './components/Loader'

function App() {
  
  // const [isLoading, setLoading] = useState(true)
  
  // function fakeRequest() {
  //   return new Promise(resolve => setTimeout(() => resolve(), 1500));
  // }
  // useEffect(() => {
  //   fakeRequest().then(() => {
  //     setLoading(!isLoading);
  //   });
  // }, [isLoading])

  return (
    <>
      {/* <Loader isLoading={isLoading} /> */}
      <Routes />
    </>
  )
}

export default App;
