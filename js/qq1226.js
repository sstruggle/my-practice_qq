/**
 * Created by shen on 2017/12/18.
 */

 /*找到所有的H4，通过添加或移除class，实现点击切换效果，判断当下状态，显示的话，点击后即隐藏；
知识点：
show() 显示对象
hide() 隐藏对象
removeClass() 移除一个class
addClass() 添加一个class
hasClass() 是否存在某个class
 */

$(function(){
    i=0;
 $(".h4cls").data({"n":0});
 $(".h4cls").click(
    /* 第一种，利用添加或移除class*/
    /*function(){
        if($(this).next($(".ul2cls")).hasClass("show")){
            $(this).next($(".ul2cls")).hide().removeClass("show");   //找到当前h4的同级兄弟ul;
            $($(this)).css({"color":"#000"});
            $(this).children().attr({"src":"ico1.gif"});  //找到h4的孩子即img；
        }
        else{
            $(this).next($(".ul2cls")).show().addClass("show");
            $($(this)).css({"color":"red"});
            $(this).children().attr({"src":"ico2.gif"});  //找到h4的孩子即img；
        }
    }*/

    /*第二种，利用display:none|block； */
    /*function(){
        if($(this).next($(".ul2cls")).css("display")=="block"){
            $(this).next($(".ul2cls")).hide();   //找到当前h4的同级兄弟ul;
            $($(this)).css({"color":"#000"});
            $(this).children().attr({"src":"ico1.gif"});  //找到h4的孩子即img；
        }
        else{
            $(this).next($(".ul2cls")).show();
            $($(this)).css({"color":"red"});
            $(this).children().attr({"src":"ico2.gif"});  //找到h4的孩子即img；
        }
    }*/

    //第三种，有点儿问题！！！
    /*function(){
        if(i%2==0){
            $(this).next($(".ul2cls")).show();
            $($(this)).css({"color":"red"});
            $(this).children().attr({"src":"ico2.gif"});
        }
        else{
            $(this).next($(".ul2cls")).hide();   //找到当前h4的同级兄弟ul;
            $($(this)).css({"color":"#000"});
            $(this).children().attr({"src":"ico1.gif"});
        }

        i++;
    }*/

//第四种，用data();
    /*function(){
    n=$(this).data("n");
    if(n%2==0){
        $(this).next($(".ul2cls")).show();
        $($(this)).css({"color":"red"});
        $(this).children().attr({"src":"ico2.gif"});
    }else{
        $(this).next($(".ul2cls")).hide();   //找到当前h4的同级兄弟ul;
        $($(this)).css({"color":"#000"});
        $(this).children().attr({"src":"ico1.gif"});
    }
    $(this).data({"n":n+1});
    }
*/

     //第五种，用toggle();实现h4的显示隐藏效果
    /*function(){$(this).next($(".ul2cls")).toggle();}*/


    /*第6种，改进第2步；利用display:none|block； */
    function(){
        d=$(this).next($(".ul2cls")).css("display");
        if(d=="block"){
            $(this).next($(".ul2cls")).slideUp(600);   //向上滑动slideUp();此处也可用fadeOut();淡出，对比之下，滑动的效果更好；
            $($(this)).css({"color":"#000"});
            $(this).children().attr({"src":"./img/ico1.gif"});  //找到h4的孩子即img；
        }
        else{
            $(this).next($(".ul2cls")).slideDown(600);  //向下滑动slideUp();此处也可用fadeIn();淡入
            $($(this)).css({"color":"red"});
            $(this).children().attr({"src":"./img/ico2.gif"});  //找到h4的孩子即img；
        }
    }




);


/*注意：此处问题是最终获取的当前元素背景颜色是RGB格式的；*/
//鼠标移入时；
 $(".ul2cls li").mouseenter(function(){
    if($(this).css("background-color")=="rgb(192, 190, 190)"){
        $(this).css({"background-color":"#c0bebe"});
        $(".ul2cls li").not($(this)).css({"background-color":"#fff"});
     }
     else{
        $(this).css({"background-color":"#f2f2f2"});
     }
 });


//鼠标移出时；
$(".ul2cls li").mouseleave(function(){
    if($(this).css("background-color")=="rgb(192, 190, 190)"){
        $(this).css({"background-color":"#c0bebe"});
        $(".ul2cls li").not($(this)).css({"background-color":"#fff"});
    }else{
        $(this).css({"background-color":"#fff"});
     }
 });

 //鼠标点击时；
$(".ul2cls li").click(function(){
        $(this).css({"background-color":"#c0bebe"});
        $(".ul2cls li").not($(this)).css({"background-color":"#fff"});   //除了当前选中的那个元素；
        //alert($(this).css("background-color"));  //rgb(102, 102, 102)
 });

 });