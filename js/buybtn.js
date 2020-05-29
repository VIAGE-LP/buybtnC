var second = 0;
var minute = 0;
var hour = 0;
var minute30 = 0;
var branumber_black = 26;
var branumber_pink = 20;
var branumber_purple = 24;
var branumber_lightblue = 18;
var branumber_blue = 22;
window.setTimeout("interval();", 1000);
function interval() {
    second++;
    if (second == 60) {
        second = 0; minute += 1;
        minute30++;
    }
    if (minute == 60) {
        minute = 0; hour += 1;
    }
    if (minute30 == 5) {
        minute30 = 0;
        if(branumber_black>1){
            branumber_black-=1;
        }
        if(branumber_pink>2){
            branumber_pink-=1;
        }
        if(branumber_purple>3){
            branumber_purple-=1;
        }
        if(branumber_lightblue>0){
            branumber_lightblue-=1;
        }
        if(branumber_blue>2){
            branumber_blue-=1;
        }
    }
    document.form1.textarea.value = hour + "時" + minute + "分" + second + "秒";
    document.querySelector('.number_black').innerText = branumber_black;
    document.querySelector('.number_pink').innerText = branumber_pink;
    document.querySelector('.number_purple').innerText = branumber_purple;
    document.querySelector('.number_lightblue').innerText = branumber_lightblue;
    document.querySelector('.number_blue').innerText = branumber_blue;
    window.setTimeout("interval();", 1000);
}