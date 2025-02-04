import Navbar from "./Navbar";
import Bg from "./public/hskoweb_bg_black.webp";
import aboutImg from "./public/about_img.webp"
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import contactImg from "./public/contact-img.webp"

function App() {
  return (
    <>
      <Navbar />

      <div id="main" className="flex">
        <img src={Bg} className="z-0 bg-img absolute" />
        <div className="line1" />
        <div className="mline1" />
        <div className="flex-col flex mx-auto ">
          <h1 className=" z-0 flex text-3xl md:text-7xl pr-40 mt-auto main-text font-bold">S námi dosáhnete</h1>
          <h2 className=" z-0 flex text-2xl md:text-6xl mb-auto main-text fonnt-light">vašeho cíle</h2>
        </div>
      </div>
      <div id="about">
        <div className="flex gap-4 my-auto mx-auto w-2/3 flex-col pt-60 text-center">
          <h1 className="main_text_aubout text-3xl md:text-7xl flex font-bold mx-auto z-20 ">O mně</h1>
          <h1 className="main_text_aubout2 text-xl md:text-2xl flex z-20 ">
            Tvořím profesionální portfolia na zakázku, která nejen dobře vypadají, ale taky prodávají. Ať už jsi designer, vývojář, fotograf nebo
            kdokoliv, kdo chce ukázat světu svou práci, postarám se o to, aby tvoje portfolio zaujalo na první pohled. Žádné generické šablony – jen
            originální a funkční design, který tě odliší od ostatních. Chceš web, co tě posune dál? Napiš mi. 🚀
          </h1>
        </div>
          <img src={aboutImg} className="md:w-1/3 w-1/2 about-img absolute -left-20 top-230 md:left-230 md:top-260 z-10 md:rotate-70 rotate-330" />

          <div className="line2" />
          <div className="mline2" />
      </div>
      <div id="port">
        <Portfolio />
      </div>
      <div id="contact">
        <Contact />
        <img src={contactImg} className="md:w-1/3 contact-img w-1/2 absolute left-43 left-250 md:top-500 z-0" />
        <img src={contactImg} className="md:w-1/3 contact-img2 w-1/2 absolute -left-20 left-40 md:top-600 z-0" />
      </div>
    </>
  );
}

export default App;
