const section1= document.querySelector('.movement')
const section2 = document.querySelector('.cart-information')

const inputName = document.getElementById('name') 
const inputEmail = document.getElementById('email') 
const inputUserNameGithub = document.getElementById('user-name-git') 

const nameP = document.querySelector('.if-have-problem-name')
const emailP = document.querySelector('.if-have-problem-email')
const userName = document.querySelector('.if-have-problem-username')

const userNamepro = document.querySelector('.user-name')
const userNameGIthub = document.querySelector('.usernamegithub')

const title = document.querySelector('.title1')
const paragraph = document.querySelector('.paragraph1')

const poeplenameB = document.querySelector('.spa-poeple-name')
const poeplename = document.querySelector('.poeplename')
///////////
const spaParagraph = document.querySelector('.spa-paragraph')
const addrMail = document.querySelector('.addr-mail')




const problemName = document.querySelector('.if-have-problem-name')
const problemEmail = document.querySelector('.if-have-problem-email')
const problemUsername= document.querySelector('.if-have-problem-username')
function ticketBnt(){
    var inputNameValue = inputName.value
    var inputEmailValue =inputEmail.value
    var inputUserNameGithubValue = inputUserNameGithub.value
userNamepro.textContent = inputNameValue
userNameGIthub.textContent = `@${inputUserNameGithubValue}`
console.log(inputNameValue,inputEmailValue,inputUserNameGithubValue)
poeplename.textContent = `${inputNameValue}!`
addrMail.textContent = `${inputEmailValue}`



let isValid = true



    
if(inputEmailValue.endsWith("@gmail.com") ){

inputEmail.classList.remove('red-border')
problemEmail.classList.add('hidden')
}else{
    inputEmail.classList.add('red-border')
   problemEmail.classList.remove('hidden')
   isValid = false
}
  if(/\d/.test(inputNameValue)   ||  inputNameValue.length <= 9){
inputName.classList.add('red-border')
problemName.classList.remove('hidden')
isValid = false
    }else{
        inputName.classList.remove('red-border')
        problemName.classList.add('hidden')
    } 

 if( inputUserNameGithubValue.includes("@") || inputUserNameGithubValue.length <= 9){
    inputUserNameGithub.classList.add('red-border')
    problemUsername.classList.remove('hidden')
    isValid = false
 }else{
    inputUserNameGithub.classList.remove('red-border')
    problemUsername.classList.add('hidden')
 }
 if((isValid)){
    section1.classList.add('hidden')
    section2.classList.remove('hidden')
    title.classList.add('hidden')
    paragraph.classList.add('hidden')
    poeplenameB.classList.remove('hidden')
    spaParagraph.classList.remove('hidden')
 }

}

































const form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {
  event.preventDefault(); 
  const email = document.getElementById('email').value;
  console.log(email);

});



