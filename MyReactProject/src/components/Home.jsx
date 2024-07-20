import React from 'react'
import Header from './Header'
import CardList from './CardList'
import { Outlet } from 'react-router-dom'
import Search from './Search'

const Home = () => {
  return (
    <>
        <Header/>

        <Outlet/>

        <Search/>

        <CardList/>
    </>
  )
}

export default Home