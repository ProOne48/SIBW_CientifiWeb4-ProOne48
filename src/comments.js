
class Comments {

    constructor(){
        this.comments = [
            {author: 'John Doe',date: new Date(2021, 10, 8), content: 'This is my first comment'},
            {author: 'John Doe',date: new Date(2021, 10, 16), content: 'This web is very accurate historycally'},
        ]
    }

    getComments(){
        return this.comments;
    }

    addComment(comment){
        this.comments.push(comment);
    }

    deleteComment(id){
        this.comments = this.comments.filter(comment => comment.id!== id);
    }

    updateComment(id, commentupdated){
        this.comments = this.comments.map(comment => comment.id === id? comment : commentupdated);
    
        return this.comments;
    }
}

function showComments(){
    const comments = new Comments();
    
    let commentList = document.getElementById('comment-list-id');

    commentList.classList.remove('hidden');
    document.getElementById("add-comment-btn-id").classList.remove('hidden');
    document.getElementById("comment-form").classList.remove('hidden');

    comments.comments.forEach(comment => {
        let item = createCommentItem(comment.author, comment.content, comment.date);
        commentList.appendChild(item);
    })

}

function createCommentItem (author, content, date){
    let commentItem = document.createElement('li');
        commentItem.classList.add('comment-item');

        let commentAuthor = createElement('p', 'comment-author', author);

        let authorHeader = createElement('h4', 'author-header', 'Author: ');

        let commentDate = createElement('p', 'comment-date-p', date.toUTCString());
        
        let dateHeader = createElement('h4', 'date-header', 'Date: ');

        let commentContent = createElement('p', 'comment-content-p', content);

        let contentHeader = createElement('h4', 'content-header', 'Content: ');

        commentItem.appendChild(authorHeader);
        commentItem.appendChild(commentAuthor);
        commentItem.appendChild(dateHeader);
        commentItem.appendChild(commentDate);
        commentItem.appendChild(contentHeader);
        commentItem.appendChild(commentContent);
        console.log(commentItem);
        return commentItem;
}

function addComment(){
    if(emptyValue("content-input") || emptyValue("author-input") || emptyValue("email-input")){
        alert("Please fill all the fields");
        return;
    }
    let commentList = document.getElementById('comment-list-id');
    const author = document.getElementById('author-input').value;
    const content = document.getElementById('content-input').value;
    const email = document.getElementById('email-input').value;
    const date = new Date(Date.now());

    if(!validateEmail(email)){
        alert("Please enter a valid email");
        return;
    }

    let item = createCommentItem(author, content, date);
    
    commentList.appendChild(item);
    
}

function createElement(tag, className, textContent){
    let element = document.createElement(tag);
    element.classList.add(className);
    element.textContent = textContent;
    return element;
}


function emptyValue(id){
    if(document.getElementById(id).value == ""){
        return true;   
    }else{
        return false;
    }
}

function validateEmail(input){
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(validRegex.test(input)){
        return true;
    }else{
        return false;
    }
}