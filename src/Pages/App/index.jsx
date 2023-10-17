import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import './App.css'
import NavBar from '../../Components/NavBar'


const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/my-account', element: <MyAccount/>},
    {path: '/my-order', element: <MyOrder/>},
    {path: '/my-orders', element: <MyOrders/>},
    {path: '/*', element: <NotFound/>},
    {path: '/my-account', element: <MyAccount/>},
    {path: '/sign-in', element: <SignIn/>}
  ])
  return routes
}

function App() {

  return (
    <>
    <ShoppingCartProvider>
      <BrowserRouter>
        <NavBar></NavBar>
        <AppRoutes/>
      </BrowserRouter>
    </ShoppingCartProvider>
    </>
  )
}

export default App
