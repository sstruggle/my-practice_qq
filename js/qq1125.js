/**
 * Created by shen on 2017/11/25.
 */
/*找到h4*/
window.onload=function() {
    var oulobj = document.getElementById('ulid');
    var ah4obj = oulobj.getElementsByTagName('h4');
    var aul2obj = oulobj.getElementsByTagName('ul');
    var arrLi = [];
    var arrLi2 = [];
    var arrLi3 = [];


    /*h4的效果*/
    for (i = 0; i < ah4obj.length; i++) {
        ah4obj[i].setAttribute('num', 0);
        ah4obj[i].setAttribute('line', i);
        aul2obj[i].id = i;

        ah4obj[i].onclick = function () {
            num = parseInt(this.getAttribute('num'));
            line = this.getAttribute('line');
            nextul = document.getElementById(line);

            for (i = 0; i < ah4obj.length; i++) {
                if (num % 2 == 1) {
                    //下面的ul消失
                    nextul.style.display = 'none';
                    this.className = 'h4cls';
                }
                else {
                    //下面的ul显示
                    nextul.style.display = 'block';
                    this.className = 'active';
                }

                this.setAttribute('num', num + 1);
            }
        }
    }
    /*

     /!*鼠标移入移出效果*!/
     for(j=0;j<aul2obj.length;j++) {
     var aliobjs = aul2obj[j].getElementsByTagName('li');
     for (i = 0; i < aliobjs.length; i++) {
     aliobjs[i].onOff = true;
     /!*aliobjs[i].onmouseover=function(){
     this.style.background='#ccc';
     }

     aliobjs[i].onmouseout=function(){
     this.style.background='#fff';
     }*!/

     aliobjs[i].onclick = function () {
     for (i = 0; i < aliobjs.length; i++) {
     if (this != aliobjs[i]) {
     aliobjs[i].className = '';
     aliobjs[i].onOff = true;
     }
     if (this.className == '') {
     this.className = 'active1';
     this.onOff = 'false';
     }
     else {
     this.className = '';
     this.onOff = 'true';
     }

     }

     }


     }

     }*/


    /*将循环找到的li存入一个新数组中*/
    for (i = 0; i < aul2obj.length; i++) {
        aLi = aul2obj[i].getElementsByTagName('li');     //通过aul2obj[i]来找到变化的li;
        for (var j = 0; j < aLi.length; j++) {
            arrLi.push(aLi[j]);                        //往arrLi中添加一个数组aLi[j],用来循环li的；
            //alert(aLi.length);  //此处为li的长度；
        }
    }
    /*遍历新数组arrLi[]，对li做特效*/
    for(i=0;i<arrLi.length;i++){
        arrLi[i].onOff=true;
        arrLi[i].onmouseover=function(){
            if(this.onOff){
                this.style.background='#dad9d9';
            }
        }

        arrLi[i].onmouseout=function(){
            if(this.onOff){
                this.style.background='#fff';
            }
            else{
                this.style.background='#b6b3b0';   //上一个离开的时候还是有颜色，下一个点击后颜色消失；
            }
        }

        arrLi[i].onclick=function(){
            for(i=0;i<arrLi.length;i++){
                if(this!=arrLi[i]){  /*鼠标当前点击的跟前一个不一致时，前一个的效果消失，当前加上效果*/
                    arrLi[i].style.background='#fff';
                    arrLi[i].onOff=true;
                }
            }

            if(this.onOff){
                this.style.background='#b6b3b0';   /*当前鼠标点击的li加上背景颜色*/
                this.onOff=false;
            }
            else{
                this.style.background='#fff';
                this.onOff=true;
            }

        }
    }


    /*给img加效果*/
    for(i=0;i<aul2obj.length;i++){
        aimgs=aul2obj[i].getElementsByClassName('imgcls');
        aimgbox=aul2obj[i].getElementsByClassName('imgbox');
        for(j=0;j<aimgs.length;j++){
            arrLi2.push(aimgs[j]);
        }
        for(j=0;j<aimgbox.length;j++){
            arrLi3.push(aimgbox[j]);
            //alert(aimgbox);
        }
    }

    for(i=0;i<arrLi3.length;i++){
        arrLi3[i].onmouseover=function(){
            aimgbox[this].style.display='block';
        }
    }

}