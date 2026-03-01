const inputDelete = document.getElementById ('input-delete');
inputDelete.addEventListener ('keyup', function (event) {
    const inputValue = event.target.value;
    const btnDelete = document.getElementById ('btn-delete');
    if(inputValue === 'delete') {
        btnDelete.removeAttribute ('disabled');
        btnDelete.addEventListener ('click',function () {
            const secretInfo = document.getElementById ('secret-info');
            secretInfo.style.display = 'none';
        })
    }
    else {
         btnDelete.setAttribute ('disabled', 'true');
    }
})