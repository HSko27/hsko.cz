import Logo from "./public/white png.png";

function Navbar() {
  return (
    <>
      <nav className=" bg-nav fixed w-full z-50 top-0 start-0 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <img src={Logo} class="h-8" alt="Flowbite Logo" />
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a href="https://www.instagram.com/_.stejsky.__/?hl=cs" target="_blank">
              <button
                type="button"
                className="consult-btn text-white ease-in-out duration-300 font-bold rounded-lg text-sm px-4 py-2 text-center"
              >
                Konzultovat
              </button>
            </a>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 font-bold" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-nav md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              <li>
                <a href="#" className="block font-bold ease-in-out duration-300 py-2 px-3 rounded-sm md:p-0" aria-current="page">
                  Domů
                </a>
              </li>
              <li>
                <a href="#about" className="block font-bold ease-in-out duration-300 py-2 px-3 rounded-sm md:p-0">
                  O mně
                </a>
              </li>
              <li>
                <a href="#port" className="block font-bold ease-in-out duration-300 py-2 px-3 rounded-sm md:p-0">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="block font-bold ease-in-out duration-300 py-2 px-3 rounded-sm md:p-0">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
