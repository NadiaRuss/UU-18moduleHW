// import { useState } from 'react'
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";

const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;