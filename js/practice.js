//option 2 for onclick event
function makePink () {
    document.body.style.backgroundColor = 'pink';
}

function makeConsole () {
    console.log(10);
}

//option 3 for onclick handling
const btnMakeOlive = document.getElementById ('btn-make-olive');
btnMakeOlive.onclick = function makeOlive () {
    document.body.style.backgroundColor = 'olive';
}

//option 3 khalato vai
const btnMakeGold = document.getElementById ('btn-make-golden');
btnMakeGold.onclick = makeGolden;
function makeGolden () {
    document.body.style.backgroundColor = 'gold';
}

// option 4 for onclick handling
const btnMakePurple = document.getElementById ('btn-make-purple');
btnMakePurple.addEventListener ('click', function makePurple () {
    document.body.style.backgroundColor = 'purple';
})

//option 4 khlato vai

document.getElementById ('btn-make-grey').addEventListener ('click',makeGrey);

function makeGrey () {
    document.body.style.backgroundColor = 'grey';
}