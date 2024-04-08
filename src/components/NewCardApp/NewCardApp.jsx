import PropTypes from 'prop-types';
import defaultImage from '../../assets/default.jpg'

export const NewCardApp = ({article}) => {
  return (
    <>
      <div key={article.title} className="col-sm-12 col-md-6 col-lg-4">
        <div className="card m-3">
          <img src={article.urlToImage != null ? article.urlToImage : defaultImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{article.title}</h5>
            <p className="card-text">{article.description}</p>
            <a href={article.url} target='_blank' className="btn btn-primary">Ver Noticia</a>
          </div>
        </div>
      </div>
    </>
    
  )
}

NewCardApp.propTypes = {
  article: PropTypes.object
}
