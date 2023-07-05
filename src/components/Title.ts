export const TitleComponent = (title: string, titleWhite = false): string => `

        <article class="title">
             <div class="title__container">
                <div class="title__ln"><hr class="title__line"></div>
                  <div class="title__tl"><h2 class="${
                    titleWhite ? 'title__title title__title--white' : 'title__title'
                  }">${title}</h2></div>
                <div  class="title__ln"><hr class="title__line"></div>
             </div>
        </article>
`;
