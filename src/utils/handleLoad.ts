import gsap from 'gsap';

export const handleLoadAnimation = () => {
  const div = document.createElement('div');
  div.classList.add('square__container');

  const numCols = 8;
  const numRows = 8;

  const numSquares = numCols * numRows;

  let squares = <HTMLDivElement[]>[];

  function createSquares() {
    for (let i = 0; i < numSquares; i++) {
      const square = document.createElement('div');
      square.classList.add('square');

      const rowNumber = Math.floor(i / numCols);
      if (rowNumber % 2 === 0) {
        if (i % 2 === 0) {
          square.classList.add('square--white');
          squares.push(square);
        }
      } else {
        if (i % 2 !== 0) {
          square.classList.add('square--white');
          squares.push(square);
        }
      }
      div.appendChild(square);
    }
  }

  function startSecondAnimation() {
    gsap.to(div, {
      delay: 0.3,
      opacity: 0,
    });
  }

  function animateSquares() {
    gsap.fromTo(
      squares,
      {
        background: 'white',
      },
      {
        opacity: 1,
        background: 'black',
        delay: 0.2,
        duration: 0.0008,
        stagger: {
          each: 0.03,
          from: 'random',
        },
        onComplete: startSecondAnimation,
      },
    );
  }

  createSquares();
  animateSquares();

  document.body.appendChild(div);
};
