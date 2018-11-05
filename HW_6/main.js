;
(function () {


    var area = document.querySelector('#area');

    area.addEventListener('click', function (e) {
        console.log(e);
        var circleClassName = 'circle';
        var target = e.target;
        var circle = document.createElement('div');
        circle.className = circleClassName;

        var circle_width = 0;
        circle_width = prompt('Enter width: ');
        var circle_height = circle_width;

        console.log(area.offsetWidth);

        if (circle_width > area.offsetWidth) {
            console.log('radius too big!');
        }

        circle.style.height = circle_height + 'px';
        circle.style.width = circle_width + 'px';
        circle.style.left = e.offsetX + 'px';
        circle.style.top = e.offsetY + 'px';
       
        target.appendChild(circle);
        console.log(circle);
    })


}());