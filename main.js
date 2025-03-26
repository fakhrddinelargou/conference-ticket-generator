const ifHaveProblemName = document.querySelector(".if-have-problem-name");
const ifHaveProblemEmail = document.querySelector(".if-have-problem-email");
const ifHaveProblemgit = document.querySelector(".if-have-problem-git");

const Name = document.getElementById("name");
const email = document.getElementById("email");
const userGithubName = document.getElementById("user-github-name");

function ticketBnt() {
  var nameValue = Name.value;
  var emailValue = email.value;
  var userGithubNameValue = userGithubName.value;
  console.log(nameValue, emailValue, userGithubNameValue);

  if (!emailValue.endsWith("@gmail.com")) {
    ifHaveProblemEmail.classList.remove("hidden");
    email.classList.add("red-border");
  } else {
    ifHaveProblemEmail.classList.add("hidden");
    email.classList.remove("red-border");
  }

  if (userGithubNameValue === "@") {
    ifHaveProblemgit.classList.remove("hidden");
  } else {
    ifHaveProblemgit.classList.add("hidden");
  }

  if (nameValue === " ") {
    ifHaveProblemName.classList.remove("hidden");
    Name.classList.add("red-border");
  } else {
    ifHaveProblemName.classList.add("hidden");
    Name.classList.remove("red-border");
  }
}

let picter = document.getElementById("picter");

console.log(picter);
let inputFile = document.getElementById("input-file");

inputFile.onchange = function () {
  picter.src = URL.createObjectURL(inputFile.files[0]);
  picter.classList.remove("uploed");
  //picter2.src = URL.createObjectURL(inputFile.files[0])
};

// let isValid = true

// if(inputEmailValue.endsWith("@gmail.com") ){

// inputEmail.classList.remove('red-border')
// problemEmail.classList.add('hidden')
// }else{
//     inputEmail.classList.add('red-border')
//    problemEmail.classList.remove('hidden')
//    isValid = false
// }
//   if(/\d/.test(inputNameValue)   ||  inputNameValue.length <= 9){
// inputName.classList.add('red-border')
// problemName.classList.remove('hidden')
// isValid = false
//     }else{
//         inputName.classList.remove('red-border')
//         problemName.classList.add('hidden')
//     }

//  if( inputUserNameGithubValue.includes("@") || inputUserNameGithubValue.length <= 9){
//     inputUserNameGithub.classList.add('red-border')
//     problemUsername.classList.remove('hidden')
//     isValid = false
//  }else{
//     inputUserNameGithub.classList.remove('red-border')
//     problemUsername.classList.add('hidden')
//  }
//  if((isValid)){
//     //section1.classList.add('hidden')
//   //  section2.classList.remove('hidden')
//    //  title.classList.add('hidden')
//    //  paragraph.classList.add('hidden')
//    //  poeplenameB.classList.remove('hidden')
//    //  spaParagraph.classList.remove('hidden')
//     container.classList.add('height')
//     document.querySelector('.paragraph').classList.add('max-width')
//  }

// }
