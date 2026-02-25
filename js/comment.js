//step1-set an event handler to the button
  const btnPostComment = document.getElementById ('btn-post-comment');
  btnPostComment.addEventListener ('click', function () {
    // console.log('clicked button');

    //step2-get the text written in the textarea
    const commentTextBox = document.getElementById ('comment-text-box');
    // console.log(commentTextBox);
    const newComment = commentTextBox.value;
    // console.log(newComment);

    //step3-get the parent node where to publish
    const commentContainer = document.getElementById ('comment-container');
    // console.log('commentContainer');

    // step4-create a comment p and set the innerText
    const newPara = document.createElement ('p');
    newPara.innerText = newComment;
    newPara.setAttribute ('id','comment');
    newPara.classList.add ('comment-style');

    //step5-append the new p tag to the parent node
    commentContainer.appendChild (newPara);
    
    //step6-clean the text area
    commentTextBox.value = '';
  })