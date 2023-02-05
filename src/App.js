import { 
  BrowserRouter, 
  Link, 
  Navigate, 
  Route,
  Routes
  // Switch 
} from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import { useState } from 'react'

function App() {

  const [cartIsEmpty] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>The Ninja Clothing Company</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
        <Routes>
          {/* <Route path="/" component={Home} /> */}
          <Route path="/" element={<Home />} />

          <Route path="/about/*" element={<About />}/>

          <Route path="/products/:id/*" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          {/* In line JSX */}
          <Route path="/test" element={
            <div>
              <h2>Test Page</h2>
              <p>hello!</p>
            </div>
          } />
          {/* v5 <Route path="/redirect" element={<Redirect to="/about" />} /> */}
          <Route path="/redirect" element={<Navigate to="/about" />} />
          <Route 
            path="/checkout"
            // ternary expression
            element={ cartIsEmpty ? <Navigate to="/products" /> : <p>Checkout</p> }
          />
        </Routes> 
      </BrowserRouter>
    </div>
  )
}

export default App