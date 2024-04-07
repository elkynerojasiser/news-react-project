import { useState, useEffect } from 'react'

export const HomePage = () => {
  const [articles,setArticles] = useState([])
  const fetcNews = async () => {
    try {
      const response = await fetch("https://newsapi.org/v2/top-headlines?category=entertainment&country=co&apiKey=92b08b652b0340dca3ca92b2939a3a29")
      const data = await response.json()
      setArticles([...articles, data.articles])
    }catch( error ) {
      console.log(error)
    }
    
  }

  useEffect(() => {
    fetcNews()
  },[])
  return (
    <>
      <h1>Noticias</h1>
      <ul>
        
      </ul>
    </>
  )}
