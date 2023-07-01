import logo from '../../public/img/logo80pngx117.png';

export const NavComponent = () => `
  <header class="nav">
     <article class="navHidden">

            <div class="logoHidden">
               <div id="logoHidden"><img src="${logo}" alt="logo"></div>
            </div>

            <div class="navHambu">
               <div class="device"><!--inicia menu hambu-->
                  <div class="container">
                      <button id="burger" class="open-main-nav">
                          <span class="burger"></span>
                      </button>
                      <nav class="main-nav" id="main-nav">
                          <ul>
                              <li>
                                  <a href="html.html">ABOUT</a>
                              </li>
                              <li>
                                  <a href="servicios.html">SERVICES</a>
                              </li> 
                          </ul>
                      </nav>
                  </div>
                  </div><!--termian menu hambu-->
            </div>
         </article>

        <article class="navBar"><!--inicia navBar-->

        <div class="title title--nav">
             <div class="title__container title__container--left">
                <div class="title__ln"><hr class="title__line title__line--nav"></div>
                   <nav class="title__lk"><a class="title__link" href="#">About</a></nav>
                <div  class="title__ln"><hr class="title__line title__line--nav"></div>
             </div>
        </div>

          <div class="logo">
             <div class="logo__container"><img src="img/logo80pngx117.png" alt="logo">
             </div>
          </div>

          <div class="title title--nav">
             <div class="title__container title__container--right">
                <div class="title__ln"><hr class="title__line title__line--nav"></div>
                    <nav class="title__lk"><a class="title__link" href="#">Services</a></nav>
                <div  class="title__ln"><hr class="title__line title__line--nav"></div>
             </div>
        </div>

        </article><!--termina navBar-->
      </header>
`;
