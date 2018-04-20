/**
 * Created by Administrator on 2016/12/30.
 */

var date=new Date();
showDate(date);
function showDate(date){
    date.setDate(1);
    var firstWeek=date.getDay();
    firstWeek=firstWeek==0?7:firstWeek;
    date.setMonth(date.getMonth()+1);
    date.setDate(0);//判断这个月的最后一天，然后添加数字日历
    var lastWeek=date.getDay();  //判断最后一天是不是周日
    lastWeek=lastWeek==0?7:lastWeek;  //判断最后一天是星期几
    var maxDate=date.getDate();
    var html='';
    for(var i=1;i<firstWeek;i++)
    {
        html+="<li></li>"
    }
    for(var j=1;j<=maxDate;j++)
    {
        (function(j){
            html+="<li id="+j+">" +
                "<span>"+j+"</span>"+"" +
                "<p class='price' contenteditable='true'>"+"123"+"</p>"+
                "</li>";
        })(j)
    }
    for(var k=lastWeek;k<7;k++)
    {
        html+="<li></li>"
    }
    $(".date_list ul").html(html);
    $('.oYear').html(date.getFullYear()+"年");
    //alert(date.getFullYear())
    $('.oMonth').html(date.getMonth()+1+'月');

    $(".date_list li").mousedown(function(e){
        start=parseInt($(this).prop("id"));
        drag_flag=1;
        if($(this).text()=='')
        {
            $(this).css("backgroundColor",'rgba(40,164,176,0.1)')
        }
        else{
            $(this).css({"backgroundColor":'rgba(40,164,176,0.3)',"box-shadow":'1px 1px 1px 1px rgba(40,164,176,0.5)'});
            $(this).siblings().css({"backgroundColor":'rgba(40,164,176,0.1)',"box-shadow":'none'});

        }
        return false;
    });
    $(".date_list li").mouseenter(function(){

        if(1==drag_flag)
        {
            grid_arr.push($(this).prop("id"));
            end=parseInt(grid_arr[grid_arr.length-1]);
            sp="#";
            console.log(start);
            console.log(end);
            $(this).siblings().css({"backgroundColor":'rgba(40,164,176,0.1)',"box-shadow":'none'});
            if(end>start)
            {
                for(var j=start;j<=end;j++)
                {
                    $("#"+j+"").css({"backgroundColor":'rgba(40,164,176,0.3)',"box-shadow":'1px 1px 1px 1px rgba(40,164,176,0.5)'});
                    console.log($("#"+j+"").text())
                }
            }else{
                for(var k=end;k<=start;k++)
                {
                    $("#"+k+"").css({"backgroundColor":'rgba(40,164,176,0.3)',"box-shadow":'1px 1px 1px 1px rgba(40,164,176,0.5)'});
                    //console.log($("#"+k+"").find("span").text());
                    if(k==9)
                    {
                        $("#"+k+"").find("span").text()
                    }
                }
            }
        }else{
            return;
        }
        return false;
    });
    $(".date_list li").mouseup(function(){
        drag_flag=0;
        for(var i=0;i<$(".date_list li").length;i++)
        {
            $(".date_list li").eq(i).unbind("mouseover")
        }
    });



}
$(".pre").click(function(){
    date.setDate(0);
    showDate(date);
});
$(".last").click(function(){
    date.setMonth(date.getMonth()+1);
    showDate(date);
});
var start,end,grid_arr=[],sp,drag_flag=0;
//$("#picker .date_list").on("click","li",function() {
//    $(this).find(".price").focus();
//    $(this).css("backgroundColor", "rgba(40, 164, 176, 0.2)");
//});















