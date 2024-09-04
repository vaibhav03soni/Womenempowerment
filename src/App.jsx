
import Home from './Home'
import AboutUs from './AboutUs'
import Event from './Event'
import Gallary from './Gallary'
import Contact from './Contact'
import Login from './Login'
import Resiter from './Resiter'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import What from './What '



function App() {
  return (
<>

<BrowserRouter>
<Routes>
  <Route path='/'  element={<Home/>}></Route>
  <Route path='/AboutUs' element={<AboutUs/>}></Route>
  <Route path='/what' element={<What/>}></Route>
<Route path='/Evente'element={<Event/>}></Route>
  <Route path='/Gallary'  element={<Gallary/>}></Route>
  <Route path='/Contact' element={<Contact/>}></Route>
  <Route path='/Login' element={<Login/>}></Route>
  <Route path='/Register' element={<Resiter/>}></Route>
 

</Routes>
</BrowserRouter>


</>
  )
}

export default App