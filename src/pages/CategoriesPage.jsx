import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { NewsListApp } from '../components/NewsList/NewsListApp'
import { useState } from 'react'
export const CategoriesPage = () => {
  const params = useParams()
  
  const [selectedCountry, setSelectedCountry] = useState({name: 'Colombia',code: 'co'})
  const { data, isLoading, errors } = useFetch(`?category=${params.category}&country=${selectedCountry.code}`)
  const countries = [
    {
      name: 'Colombia',
      code: 'co'
    },
    {
      name: 'Brasil',
      code: 'br'
    },
    {
      name: 'Canadá',
      code: 'ca'
    },
    {
      name: 'Estados Unidos',
      code: 'us'
    },
    {
      name: 'Argentina',
      code: 'ar'
    },
    {
      name: 'México',
      code: 'mx'
    },
  ]
  const onChangeCountry = (event, country) => {
    setSelectedCountry(country)
  }
  return (
    <>
      <div className="row">
        <div className="col-sm-12 text-center">
          <h1 className='text-primary'>
            { params.category == 'business' ? 'Negocios en ' : '' }
            { params.category == 'entertainment' ? 'Entretenimiento en ' : '' }
            { params.category == 'health' ? 'Salud en ' : '' }
            { params.category == 'science' ? 'Ciencia en ' : '' }
            { params.category == 'sports' ? 'Deportes en ' : '' }
            { params.category == 'technology' ? 'Tecnología en ' : '' }

            <span>
              {  selectedCountry.name }
            </span>
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2">
          <div className="row">
            <div className="col-sm-10 d-flex justify-content-center flex-column">
              <h4 className='text-primary text-center'>Paises</h4>
              <ul className="list-group align-self-center">
              {
                countries.map( country => 
                  <li onClick={ (event) => {onChangeCountry(event, country)} } key={country.code} className="list-group-item text-center">{country.name}</li>
                )
              }
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-9">
        {
          isLoading ? <h4>Cargando ... </h4>
          : 
          <NewsListApp articles={data.articles} />
        }
        </div>
      </div>
    </>
  )
}
