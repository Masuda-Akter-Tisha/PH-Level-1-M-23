 //2no
 function makeYellow () {
    document.body.style.backgroundColor = 'grey';
 }
//3no
const btnMakePink = document.getElementById ('btn-make-pink');
btnMakePink.onclick = function makePink () {
    document.body.style.backgroundColor = 'pink'; 
}
const btnMakePurple = document.getElementById ('btn-make-purple');
btnMakePurple.onclick = makePurple;

function makePurple () {
    document.body.style.backgroundColor = 'purple';
}
//4no
  const btnMakeEvent = document.getElementById ('btn-make-event')
   btnMakeEvent.addEventListener ('click',function () {
  btnMakeEvent.classList.add ('btn-style');
})

//...
const btnUpdateTitle = document.getElementById ('btn-update-title');
btnUpdateTitle.addEventListener ('click', function () {
    const pageTitle = document.getElementById ('page-title');
    pageTitle.innerText = 'Event Handler Updated'
    pageTitle.classList.add ('page-style');
})
//...
const btnLogin = document.getElementById ('btn-login');
btnLogin.addEventListener ('click', function () {
    const userInfo = document.getElementById ('user-info');
    userInfo.innerText = 'Tisha';
})
//...
const btnUpdate = document.getElementById ('btn-update');
btnUpdate.addEventListener ('click', function () {
    const inputName = document.getElementById ('input-name');
    const value = inputName.value;

    const userName = document.getElementById ('user-name');
    userName.innerText = value;
    userName.classList.add ('page-style');

    inputName.value = '';
})
//...
const btnPost = document.getElementById ('btn-post');
btnPost.addEventListener ('click', function () {
    const commentBox = document.getElementById ('comment-box');
    const text = commentBox.value;

    const commentsContainer = document.getElementById ('comments-container');
     
    const newEl = document.createElement ('p');
    newEl.innerText = text;
    newEl.classList.add ('comment');
    newEl.setAttribute ('class', 'comment');

    commentsContainer.appendChild (newEl);

    commentBox.value = '';
})
//...
const deleteInfo = document.getElementById ('delete-info');
deleteInfo.addEventListener ('keyup', function (event) {
    const value = event.target.value;
    const btnDelete = document.getElementById ('btn-delete');
    if ( value === 'delete') {
        btnDelete.removeAttribute ('disabled');
        btnDelete.addEventListener ('click', function () {
            const secretInfo = document.getElementById ('secret-info');
            secretInfo.innerText = 'Delete';
            secretInfo.style.color = 'olive';
        })
    }
    else {
        btnDelete.setAttribute ('disabled', 'true');
    }
})
