var bars = document.querySelector('.hamburger-menu-bar');
var times = document.querySelector('.hamburger-menu-times');
var signin = document.querySelector('.signIn');
var signup = document.querySelector('.signUp');
var signContainer = document.querySelector('.sign--container');
var signIcon = document.querySelector('.fa-lock');
var signIcon2 = document.querySelector('.fa-user');
var signContent = document.querySelector('.sign__box--content');
var signContent2 = document.querySelector('.sign__box--content2');
var close = document.querySelectorAll('.cancelIcon');
var check = document.getElementById('check');
var forms = document.querySelectorAll('.form__input--2');
var gifAnimation = document.querySelector('.sign__gif');
bars.addEventListener('click', function () {
    document.getElementById('navBar').style.height = '28rem';
    bars.style.display = 'none';
    times.style.display = 'block';
});

times.addEventListener('click', function () {
    document.getElementById('navBar').style.height = '0';
    times.style.display = 'none';
    bars.style.display = 'block';
});

function openBox() {
    signContainer.style.visibility = 'visible';
    signContainer.style.opacity = '1';
}

function closeBox() {
    signContainer.style.visibility = 'hidden';
    signContainer.style.opacity = '0';
}

check.addEventListener('click', function (event) {
    if (forms[0].value === "") {
        forms[0].style.border = "2px solid red";
        event.preventDefault();
    }  else if (forms[1].value === "") {
        forms[1].style.border = "2px solid red";
        event.preventDefault();
    } else {
        forms[0].style.border = '1px solid green';
        forms[1].style.border = '1px solid green';
        gifAnimation.style.visibility = 'visible';
        gifAnimation.style.opacity = '1';     
        gifAnimation.style.transform = 'scale(1)';        
    }   
});

signin.addEventListener('click', function () {
    openBox();
    signContent.style.left = '50%';
    signContent2.style.left = '150%';
});
signup.addEventListener('click', function () {
    openBox();
    signContent.style.left = '-100%';
    signContent2.style.left = '50%';
    gifAnimation.style.visibility = 'hidden';
    gifAnimation.style.opacity = '0';
});
signIcon.addEventListener('click', function () {
    openBox();
    signContent.style.left = '50%';
    signContent2.style.left = '150%';
});
signIcon2.addEventListener('click', function () {
    openBox();
    signContent.style.left = '-100%';
    signContent2.style.left = '50%';
    gifAnimation.style.visibility = 'hidden';
    gifAnimation.style.opacity = '0';
});

for (var i = 0; i < close.length; i++) {
    close[i].addEventListener('click', closeBox);    
}