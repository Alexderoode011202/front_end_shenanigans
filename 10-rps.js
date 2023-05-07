let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
}

document.querySelector('.js-score').innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;

document.querySelector()

function player_choice(p_input, c_input) {
  let def_c_input;
  let winner;
  // retrieve score

  score = JSON.parse(localStorage.getItem('score'))
  if (score === null) {
    score = {
      wins: 0,
      losses: 0,
      ties: 0
    };
  }

  // decide what c_input really is
  if (c_input <1/3) {
    def_c_input = 'Rock';
  } else if (c_input < 2/3) {
    def_c_input = 'Paper';
  } else {
      def_c_input = 'Scissor';
    }

  // check who wins
  if (def_c_input === p_input) {
    winner = 'no one. It is a tie';
    score.ties += 1;
  } else if ((def_c_input === 'Rock' && p_input === 'Scissor') || (def_c_input === 'Paper' && p_input === 'Rock') || (def_c_input === 'Scissor' && p_input === 'Paper')) {
    winner = 'the computer';
    score.losses += 1;
  } else {
    winner = 'you';
    score.wins += 1;
  }

  // notify the player/declare the winner
  // alert(`The winner is ${winner}. The score is:[wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}]`);
  console.log(`The winner is ${winner}. and the score is:`);
  console.log(`wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`);

  // save the score
  localStorage.setItem('score', JSON.stringify(score));
  
  // update score element
  document.querySelector('.js-score').innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;

  //update moves element
  document.querySelector('.js-moves').innerHTML = `Player move: ${p_input} | CPU move: ${def_c_input}`

  return undefined
}