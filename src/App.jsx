import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Users from './Pages/Users'
import Shirts from './Allproducts/Shirts'
import Tshirt from './Allproducts/Tshirt'
import User1 from './Alluser/User1'
import User2 from './Alluser/User2'
import Notfound from './Pages/Notfound'

function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path='/'   element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />}>
          <Route path='shirt/:id' element={<Shirts />} />
          <Route path='tshirt/:id' element={<Tshirt />} />
        </Route>
        <Route path='/users' element={<Users />} >
                  <Route path='user1/:id' element={<User1 />} />
                 <Route path='user2/:id' element={<User2 />} />
        </Route>
        <Route path='*' element={<Notfound/>} />
      </Routes>
    </BrowserRouter>
   

  )
}

export default App
