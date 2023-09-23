import { Link } from 'react-router-dom';

export const PageNotFound = () => {

  
  return (
    <div className="page-not-found">
      <p className="page-not-found__error-number">404</p>
      <p className="page-not-found__error-text">Страница не найдена</p>
      <Link to={-1} className="page-not-found__link">Назад</Link>
    </div>
  );
}