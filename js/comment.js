//1
  const btnPostComment = document.getElementById ('btn-post-comment');
  btnPostComment.addEventListener ('click', function () {
    // console.log('clicked button');
    const commentBox = document.getElementById ('comment-box');
    console.log(commentBox);
    const commentText = commentBox.value;
    console.log(commentText);
    const sectionElement = document.getElementById ('section-container');
    const para = document.createElement ('p');
    para.innerText = commentText;
    para.setAttribute ('id','comment');
    para.classList.add ('comment-style');
    sectionElement.appendChild (para);
  })