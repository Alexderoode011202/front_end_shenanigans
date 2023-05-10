// time to get some user input
let username;

document.getElementById('my_button').onclick = function(){
  username = document.getElementById("myText").value;
  console.log(username);
  document.getElementById("my_label").innerHTML = `hello: ${username}`;
}
