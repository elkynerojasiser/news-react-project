import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { NewDetail } from './pages/NewDetail'
import { NavBarApp } from './components/NavBarApp'
export const App = () => {
  return (
    <>
      <NavBarApp/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/new/:id' element={<NewDetail/>}/>
      </Routes>
    </>
  )
}
