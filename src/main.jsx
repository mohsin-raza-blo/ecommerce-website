import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './Context/CartContext.jsx'
import { FilterProvider } from './Context/SearchContext.jsx'



createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <CartProvider>
            <FilterProvider>
                <App />
            </FilterProvider>
        </CartProvider>
    </BrowserRouter>
)