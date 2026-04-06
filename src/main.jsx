import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Hmain from './Hmain.jsx'
import { Provider } from 'react-redux'
import store from './Redux/store'
import Dataprovider from './CONTEXT/Dataprovider.jsx'
import Mainroute from './Main/Mainroute.jsx'
import Master from './Master.jsx'

createRoot(document.getElementById('root')).render(
  
    <Provider store={store} >
        <StrictMode>
            {/* <Hmain/> */}
            <Master/>
      
              
     
    {/* <App /> */}
     </StrictMode>
    </Provider>

)
