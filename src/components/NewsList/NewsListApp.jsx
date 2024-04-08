import PropTypes from 'prop-types';
import { NewCardApp } from '../NewCardApp/NewCardApp';
export const NewsListApp = ({articles}) => {
  
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          { articles.map(article => 
            <NewCardApp key={article.title} article={article}/>
          )}
        </div>
      </div>
    </>
  )
}

NewsListApp.propTypes = {
  articles: PropTypes.array
}
