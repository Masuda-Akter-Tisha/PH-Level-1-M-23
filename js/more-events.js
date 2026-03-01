//mouse event
// const btnMouse = document.getElementById ('btn-mouse');
// btnMouse.addEventListener ('mouseenter', function () {
//     console.log('event triggered');
// })

// const btnMouse = document.getElementById ('btn-mouse');
// btnMouse.addEventListener ('mousedown', function () {
//     console.log('event triggered');
// })

// const btnMouse = document.getElementById ('btn-mouse');
// btnMouse.addEventListener ('mouseleave', function () {
//     console.log('event triggered');
// })

// const btnMouse = document.getElementById ('btn-mouse');
// btnMouse.addEventListener ('mousemove', function () {
//     console.log('event triggered');
// })

// const btnMouse = document.getElementById ('btn-mouse');
// btnMouse.addEventListener ('mouseover', function () {
//     console.log('event triggered');
// })
const btnMouse = document.getElementById ('btn-mouse');
btnMouse.addEventListener ('mouseup', function () {
    console.log('event triggered');
})

// form event
// const userName = document.getElementById ('user-name');
// userName.addEventListener ('focus', function () {
//     console.log('user about to write name');
// })
// const userEmail = document.getElementById ('user-email');
// userEmail.addEventListener ('focus', function () {
//     console.log('user about to write email');
// })
// const userName1 = document.getElementById ('user-name');
// userName.addEventListener ('blur', function () {
//     console.log('user done with name');
// })
// const userEmail2 = document.getElementById ('user-email');
// userEmail.addEventListener ('blur', function () {
//     console.log('user done with email');
// })
//keyboard event
// const userEmail2 = document.getElementById ('user-email');
// userEmail2.addEventListener ('keydown', function (event) {
//     console.log('typing',event.target.value);
// })
const userEmail2 = document.getElementById ('user-email');
userEmail2.addEventListener ('keyup', function (event) {
    console.log('typing',event.target.value);
})
