import logo from '../../public/img/logo80pngx117.png';

export const NavComponent = () => `
  <header class="nav">

     <article class="navHidden"><!-- nav mobile -->

            <div class="logoHidden">
               <div class="logoHidden__container"><img class="logoHidden__img" src="${logo}" alt="logo"></div>
            </div>

            <div class="navHambu">
      
                  <div class="containerMobile">

                      <div class="burger"></div>

                      <nav class="nav__menu">
                          <ul>
                              <li>
                                  <a href="#">ABOUT</a>
                              </li>
                              <li>
                                  <a href="#s">SERVICES</a>
                              </li> 
                          </ul>
                      </nav>

                  </div>
            </div>

         </article> <!-- nav mobile -->

        <article class="navBar">

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

        </article>
      </header>
`;
