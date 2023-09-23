import { useLocation } from "react-router-dom";

function Footer() {

  const location = useLocation();

  return (
    <>
      {location.pathname !== "/signin" && location.pathname !== "/profile" && location.pathname !== "/signup" && location.pathname !== "/404" && <footer className='footer'>
        <div className="footer__content">
          <p className="footer__name">Учебный проект Яндекс.Практикум х BeatFilm.</p>
          <div className="footer__container">
            <p className="footer__project-name">© {new Date().getFullYear()} Graduate work of DENIS DIACHENKO</p>
            <ul className="footer__links">
              <li className="footer__item">
                <a className="footer__link" target="_blank" rel="noreferrer" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
              </li>
              <li className="footer__item">
                <a className="footer__link" target="_blank" rel="noreferrer" href="https://github.com/dchnk">Github</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>}
    </>
  );
}

export default Footer;
