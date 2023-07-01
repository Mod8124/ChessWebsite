export const CardComponent = (type: string): string => {
  return `
              <article class="card">
                <figure class="card__imgContainer">
                        <img class="card__img" src="../../public/img/icons/icon-${type}.svg" alt="icon-${type}">
                </figure>
                 <h3 class="card__title">${type}</h3>
                    <p class="card__para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                <button class="btn">More</button>
             </article>

`;
};
