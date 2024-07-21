import SignUpPage from './components/SignUpPage'
import LoginPage from './components/LoginPage'
import Main from './components/Main'
import Home from './components/Home'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import './assets/style/App.scss'
import CardList from './components/CardList'
import CustomerRoute from './services/CustomerRoute'


function App() {

  return (
    <>
 
        <AuthProvider>
          <BrowserRouter>
            <Routes>

              <Route path='/' element={<Home/>}>

                  <Route path='/' element={<CustomerRoute element={<Main/>}/>}>

                    <Route path='/main' element={<Main/>}/> 
                    <Route path='/card-list' element={<CardList/>}/> 
                  
                  </Route>

              </Route>

   
              <Route path='/signup'element={<SignUpPage/>}/>
              <Route path='/login' element={<LoginPage/>}/>


            </Routes>

            <ToastContainer />
            
          </BrowserRouter>

        </AuthProvider>

    </>
  )
}

export default App
