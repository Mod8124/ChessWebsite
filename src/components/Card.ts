const text: { [key: string]: string } = {
  peon: 'Master the game with our comprehensive tutorials led by experienced instructors. From basic concepts to advanced strategies, our lessons provide the knowledge you need to excel on the chessboard',
  king: 'Engage in thrilling online matches against players worldwide. Challenge opponents of varying skill levels and experience the excitement of competitive play from the comfort of your home',
  tower:
    'Sharpen your tactical skills with our collection of chess puzzles. From beginner-friendly to mind-bending, these challenges will test your ability to strategize and make the right moves',
  knight:
    'Get valuable insights into your games with our advanced analysis tools. Upload your game recordings and receive detailed feedback to understand your strengths, weaknesses, and areas for improvement',
  bishop:
    'Join our vibrant chess community and take part in exciting tournaments. Compete against fellow enthusiasts, showcase your skills, and experience the camaraderie of the chess community.',
};

const getImg = (img: string) => new URL('/img/icons/icon-' + img + '.svg', import.meta.url).href;

export const CardComponent = (type: string): string => {
  return `
              <article class="card">
                <figure class="card__imgContainer">
                        <img class="card__img" src="${getImg(type)}" alt="icon-${type}">
                </figure>
                 <h3 class="card__title">${type}</h3>
                    <p class="card__para">${text[type]} </p>
                <button class="btn">More</button>
             </article>

`;
};
