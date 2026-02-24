console.log('external file');
   //option 2 for click event handler 
        function makeYellow () {
            document.body.style.backgroundColor = 'yellow';
        }
        function makePink () {
            document.body.style.backgroundColor = 'pink';
        }
    
        //3rd option get element by id and set onclick
        const btnMakeBlue = document.getElementById ('btn-make-blue');
        btnMakeBlue.onclick = function makeBlue () {
        document.body.style.backgroundColor = 'blue';
       }
       //same same but different
       const btnMakePurple = document.getElementById ('btn-make-purple');
        btnMakePurple.onclick = makePurple;
        function makePurple () {
            document.body.style.backgroundColor = 'purple';
        }

        //option 4: addEventListener () 
        // document.getElementById().addEventListener('event type',handler)
        document.getElementById ('btn-make-skyblue').addEventListener ('click',function makeSkyBlue () {
            document.body.style.backgroundColor = 'skyBlue'
        })

        //same same but different
        const btnMakeOrange = document.getElementById ('btn-make-orange');
        btnMakeOrange.addEventListener ('mouseout',makeOrange)
        function makeOrange () {
            document.body.style.backgroundColor = 'orange';
        }