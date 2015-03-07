 $("form").submit(function() {
    //取值
    var a = $("#radar_A").val();
    var b = $("#radar_B").val();
    var c = $("#radar_C").val();
    var d = $("#radar_D").val();
    var e = $("#radar_E").val();
     var f = $("#radar_F").val();
    //限制值
    a = a >= 4 ? 4 : a;
    b = b >= 4 ? 4 : b;
    c = c >= 4 ? 4 : c;
    d = d >= 4 ? 4 : d;
    e = e >= 4 ? 4 : e;
    if(a < 0){a = 0;}
    if(b < 0){b = 0;}
    if(c < 0){c = 0;}
    if(d < 0){d = 0;}
    if(e < 0){e = 0;}
    //设置4方向各点坐标
    var ax = 250;
    var ay = 250-a*50;
    var bx = 250+50*b;
    var by = 250;
    var cx = 250;
    var cy = 250+c*50;
    var dx = 250-d*50;
    var dy = 250;
    //获得4方向canvas，连结各点画图
    var myradar = document.getElementById("radar_cv").getContext("2d");
    myradar.clearRect(0,0,500,500);     //清空上次图表
    myradar.beginPath();
    myradar.moveTo(ax,ay);
    myradar.lineTo(bx,by);
    myradar.lineTo(cx,cy);
    myradar.lineTo(dx,dy);
    myradar.lineTo(ax,ay);
    myradar.closePath();
    myradar.fillStyle = "rgba(255,128,0,0.75)";
    myradar.strokeStyle = "rgba(0,0,0,1)";
    myradar.fill();
    myradar.stroke();
    //设置5方向各点坐标
    ax = 250+a*50*Math.sin(0*Math.PI/180);
    ay = 250-a*50*Math.cos(0*Math.PI/180);
    bx = 250+b*50*Math.sin(72*Math.PI/180);
    by = 250-b*50*Math.cos(72*Math.PI/180);
    cx = 250+c*50*Math.sin(144*Math.PI/180);
    cy = 250-c*50*Math.cos(144*Math.PI/180);
    dx = 250+d*50*Math.sin(216*Math.PI/180);
    dy = 250-d*50*Math.cos(216*Math.PI/180);
    ey = 250-e*50*Math.cos(288*Math.PI/180);
    ex = 250+e*50*Math.sin(288*Math.PI/180);
    //5方向雷达图canvas绘制
    var myradar = document.getElementById("radar_cv2").getContext("2d");
    myradar.clearRect(0,0,500,500);     //清空上次图表
    myradar.beginPath();
    myradar.moveTo(ax,ay);
    myradar.lineTo(bx,by);
    myradar.lineTo(cx,cy);
    myradar.lineTo(dx,dy);
    myradar.lineTo(ex,ey);
    myradar.lineTo(ax,ay);
    myradar.closePath();
    myradar.fillStyle = "rgba(255,128,0,0.75)";
    myradar.strokeStyle = "rgba(0,0,0,1)";
    myradar.fill();
    myradar.stroke();
    return false;       //禁用提交
});
