import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider,Route,createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github,{githubLoader} from './components/Github/Github.jsx'
import User from './components/User/User.jsx'


//1st way to create router
// const router = createBrowserRouter([
//   {
//      path: '/',
//      element: <Layout />,

//      //for child elements
//      children: [
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       },
//       {
//         path:"github",
//         element:<Github/>
//       }
//     ]
//   }
// ])


//2nd way
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      {/* //nesting */}
      <Route path='' element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      {/* //taking the whatever value is passed in url dynamically  */}
      <Route path='user/:userid' element={<User />} />
      {/* //Inside loader we can directly fetch api */}
      <Route loader={githubLoader} path='/github' element={<Github />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
