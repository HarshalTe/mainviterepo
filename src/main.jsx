import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Hmain from './Hmain.jsx'
import { Provider } from 'react-redux'
import store from './Redux/store'
createRoot(document.getElementById('root')).render(
  
    <Provider store={store} >
        <StrictMode>
      <Hmain/>
    {/* <App /> */}
     </StrictMode>,
    </Provider>

)
