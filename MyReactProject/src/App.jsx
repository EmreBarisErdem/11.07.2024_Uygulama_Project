import Header from './components/Header'
import Main from './components/Main'
import CardList from './components/CardList'
import './assets/style/App.scss'
import Search from './components/Search'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>

      <ToastContainer/>

      <Header />

      <Main />

      <Search/>

      <CardList/>

    </>
  )
}

export default App
