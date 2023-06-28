import logo from '../../public/img/logo80pngx117.png';

export const NavBar = () => `
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

        <div class="navBar"><!--inicia navBar-->

          <div class="navFirst">
            <div id="navFirst">
               <div id="hrFirst"><hr></div>
                 <div id="navAbout"><nav><a href="#">ABOUT</a></nav></div>
               <div id="hrSecond"><hr></div>
            </div>
          </div>

          <div class="logo">
             <div id="logo"><img src="img/logo80pngx117.png" alt="logo">
             </div>
          </div>

          <div class="navSecond">
             <div id="navSecond">
                 <div id="hrThird"><hr></div>
                   <div id="navServices"><nav><a href="#">SERVICES</a></nav></div>
                 <div id="hrForth"><hr></div>
             </div>
          </div>

        </div><!--termina navBar-->
`;
