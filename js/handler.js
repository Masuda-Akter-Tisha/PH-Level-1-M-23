// console.log('event handler');
//1
const btnUpdateTitle = document.getElementById ('btn-update-title');
btnUpdateTitle.addEventListener ('click', function () {
    // console.log('page title is updated');
    const pageTitleElement = document.getElementById ('page-title');
    // console.log(pageTitleElement);
    pageTitleElement.innerText = 'updated page title text';
})
//2
const btnLogin = document.getElementById ('btn-login');
btnLogin.addEventListener ('click', function () {
    // console.log('btn clicked');
    const userEl = document.getElementById ('user-info');
    userEl.innerText = 'user logged In successfully';
})
//3
const btnUpdate = document.getElementById ('btn-update');
btnUpdate.addEventListener ('click', function () {
     //console.log('button clicked');
    const inputName = document.getElementById ('input-name');
    // console.log(inputName);
    const name = inputName.value;
    // console.log(name);
    const userName = document.getElementById ('user-name');
    userName.innerText = name;
  })

