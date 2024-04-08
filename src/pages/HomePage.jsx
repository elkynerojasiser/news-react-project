import { useState, useEffect } from 'react'
import { useFetch } from '../hooks/useFetch'
import { NewsListApp } from '../components/NewsList/NewsListApp'


export const HomePage =  () => {
  const { data, isLoading, errors } = useFetch(`?category=general&country=co`)
  
  return (
    <>
      <div className="row">
        <div className="col-sm-12 d-flex justify-content-center">
          <h1 className="text-primary">Noticias</h1>
        </div>
      </div>
      {
        isLoading ? <h4>Cargando ... </h4>
        : 
        <NewsListApp articles={data.articles} />
      }
    </>
  )}
