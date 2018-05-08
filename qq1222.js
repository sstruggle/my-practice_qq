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
    function(){
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
    }

   );

//鼠标移入时；
 $(".ul2cls li").mouseenter(function(){
    if(!($(this).attr("background")=="#666")){
        $(this).css({"background":"#ccc"});
    $(".ul2cls li").not($(this)).css({"background":"#fff"});
    }
 });

/*//鼠标移出时；
 $(".ul2cls li").mouseleave(function(){
    $(this).css({"background":"#fff"});
 });*/

 //鼠标点击时；
$(".ul2cls li").click(function(){
    $(this).css({"background":"#666"});
    $(".ul2cls li").not($(this)).css({"background":"#fff"});   //除了当前选中的那个元素；
 });

 });