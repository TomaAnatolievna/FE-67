;
(function () {

    // var btns = document.getElementsByTagName('button');
    // var btns = document.getElementsByClassName('btn');
    // console.dir(btns);

    // var btn = document.getElementById('btn1');
    // console.dir(btn);

    // console.log(btn1);

    // var inBoxBtns = document.querySelectorAll('.box .btn-in-box');
    // console.log(inBoxBtns);

    // var inBoxBtn = document.querySelector('.box .btn-in-box');
    // console.log(inBoxBtn);

    var area = document.querySelector('#area');

    // area.onclick = function () {
    //     alert('1111');
    // }

    // area.onclick = function () {
    //     alert('2222');
    // }

    // area.addEventListener('click', function () {
    //     alert('11111');
    // })

    // area.addEventListener('click', function () {
    //     alert('22222');
    // })


    area.addEventListener('click', function (e) {
        console.log(e);
        var circleClassName = 'circle';
        var target = e.target;
        var circle = document.createElement('div');
        circle.className = circleClassName;
        circle.setAttribute('top', e.pageY);
        circle.setAttribute('left', e.pageX);
        var attrs = circle.attributes; // (4) можно получить коллекцию атрибутов
        target.appendChild(circle);
    })



}());