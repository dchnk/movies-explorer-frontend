import PromoPicture from "../images/text__COLOR_landing-logo.png"

function Promo({ componentRef, smoothScrolling}) {

  const handelClick = () => {
    smoothScrolling(componentRef)
  }

  return (
    <section className='promo'>
      <div className="promo__content">
        <h1 className="promo__heading">Учебный проект студента факультета Веб-разработки.</h1>
        <h2 className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</h2>
        <button className="promo__button" onClick={handelClick}>Узнать больше</button>
        <img className="promo__image" src={PromoPicture} alt="веб" />
      </div>
    </section>
  );
}

export default Promo;
