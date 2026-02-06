import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleInput from './components/SimpleInput'
import Form from './components/Form'
import Formm from './components/Formm'
import Forms from './components/Forms'
import FormHook from './components/Formhook'
// import MemoParent from './components/MemoParent'
import MemoComputation from './components/MemoComputation'
import CallbackExample from './components/CallbackExample'
import Button from './components/Button'
import ParentComponent from './components/ParentComponents'




// import { ErrorBoundary } from "react-error-boundary";
// import ErrorFallback from"./components/ErrorFallback";
// import MyComponents from'./components/MyComponents';



function App() {

  return (
    <>  
      {/* <SimpleInput />
      <Form />
      <Formm />
      <Forms /> */}
      {/* <FormHook /> */}
      {/* <ErrorBoundary FallbackComponent={ErrorFallback}> */}
      {/* <MyComponents /> */}
      {/* </ErrorBoundary> */}
      {/* <MemoParent /> */}
      <MemoComputation />
      <CallbackExample />
      <Button />
      <ParentComponent />
    </>
  );
}

export default App;
