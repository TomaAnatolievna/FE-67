;
(function () {


    var area = document.querySelector('#area');

    area.addEventListener('click', function (e) {
        console.log(e);
        var circleClassName = 'circle';
        var target = e.target;
        var circle = document.createElement('div');
        circle.className = circleClassName;
        circle.setAttribute('top', e.pageY);
        circle.setAttribute('left', e.pageX);
        target.appendChild(circle);
    })


}());