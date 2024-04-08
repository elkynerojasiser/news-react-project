import { useState, useEffect } from 'react'
import { useFetch } from '../hooks/useFetch'


export const HomePage =  () => {
  const { data, isLoading, errors } = useFetch(`?category=general&country=co`)
  
  return (
    <>
      <h1>Noticias</h1>
      {
        isLoading ? <h4>Cargando ... </h4>
        : <ul>
        { data.articles.map(article => <li className='m-2' key={article.title} >{ article.title }</li>) }
        </ul>
      }
    </>
  )}
