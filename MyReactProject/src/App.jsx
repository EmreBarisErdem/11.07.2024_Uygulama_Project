import SignUpPage from './components/SignUpPage'
import LoginPage from './components/LoginPage'
import Main from './components/Main'
import Home from './components/Home'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoute from './services/PrivateRoute'
import 'react-toastify/dist/ReactToastify.css';
import './assets/style/App.scss'


function App() {

  return (
    <>
 
        <AuthProvider>
          <BrowserRouter>
            <Routes>

              <Route path='/' element={<Home/>}>

                  <Route path='/' element={<PrivateRoute element={<Main/>}/>}/>

              </Route>

              <Route path='/login' element={<LoginPage/>}/>

              <Route path='/signup'element={<SignUpPage/>}/>

            </Routes>

            <ToastContainer />
          </BrowserRouter>

        </AuthProvider>

    </>
  )
}

export default App
