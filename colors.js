var Links = {
    setColor: function (color) {
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while (i < alist.length) {
        //     alist[i].style.color = color;
        //     i = i + 1;
        // }

        $('a').css('color',color);
        //jQuery 태그 $
    }
}
var Body = {
    setColor: function (color) {
        //document.querySelector('body').style.color = color;
        $('body').css('color',color);
    },
    setBackgruondColor: function (color) {
        //document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor',color);
    }
}
//객체는 객체와 프로퍼티와 프로퍼티를 구분할 때 콤마가 필요하다.
function nightDayHandler(self) {
    var target = document.querySelector('body');
    if (self.value === 'night') {
        Body.setBackgruondColor('black');
        Body.setColor('white');
        self.value = 'day';
        Links.setColor('powderblue');
    } else {
        Body.setBackgruondColor('white');
        Body.setColor('black');
        self.value = 'night';
        Links.setColor('blue');
    }
}