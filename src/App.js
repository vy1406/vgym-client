
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { myRouter } from './routerConfig';



function App() {
    return <RouterProvider router={myRouter}/>
}

export default App;