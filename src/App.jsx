import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { NewDetail } from './pages/NewDetail'
import { CategoriesPage } from './pages/CategoriesPage'
import { NavBarApp } from './components/NavBarApp'
export const App = () => {
  const categories = [
    {
      id: 1,
      key: 'business',
      title: 'Negocios'
    },
    {
      id: 2,
      key: 'entertainment',
      title: 'Entretenimiento'
    },
    {
      id: 3,
      key: 'healt',
      title: 'Salud'
    },
    {
      id: 4,
      key: 'science',
      title: 'Ciencia'
    },
    {
      id: 5,
      key: 'sports',
      title: 'Deportes'
    },
    {
      id: 6,
      key: 'technology',
      title: 'Tecnología'
    }
  ]
  return (
    <>
      <NavBarApp/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/categoria/:category' element={<CategoriesPage/>}/>
        <Route path='/new/:id' element={<NewDetail/>}/>
      </Routes>
    </>
  )
}
