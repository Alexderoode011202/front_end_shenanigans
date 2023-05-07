let tasks_array = [];

function add_todo() {
  const input = document.querySelector(".input");
  console.log(input.value)
  tasks_array.push(input.value)
  console.log(tasks_array)

  // empty input field
  input.value = ""
}

function second_add_todo () {
  /*
  make the elements of the list show up above each other
  */

  const input = document.querySelector(".second_input").value;

  tasks_array.push(input);

  let output = "";

  for (let index = 0;index < tasks_array.length;index +=1) {
    output = output + `<p class = 'output-p'>${index+1}. ${tasks_array[index]}</p>`;
    console.log(`test ${tasks_array}`)
  }
  console.log(`test: ${output}`)
  document.querySelector('.container').innerHTML = output;
  document.querySelector(".second_input").value = ""

  return undefined
}
