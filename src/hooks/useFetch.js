import { useEffect, useState } from 'react'

export const useFetch = (url) => {
  const apiKey = '92b08b652b0340dca3ca92b2939a3a29'
  const urlBase = 'https://newsapi.org/v2/top-headlines'
  const [state,setState] = useState({
    data: null,
    isLoading: true,
    errors: null
  })
  const getFetch = async () => {
    try {
      const response = await fetch(`${urlBase}${url}&apiKey=${apiKey}`)
      const data = await response.json()
      console.log('data', data)
      setState({
        data: data,
        isLoading: false,
        errors: null
      })
    }catch(errors) {
      setState({
        data: null,
        isLoading: false,
        errors: errors
      })
    }
  }
  useEffect(()=> {
    getFetch(url)
  },
  [
    url
  ])
  return {
    data: state.data,
    isLoading: state.isLoading,
    errors: state.errors
  }
}