function ShowBig(name,path){
	var url=path+name
		if(IsNull(name)){url=""+path}
	if(!IsNull(url)){
		url="./"+path
		window.open(url,"_blank","width=600,height=500,left=0,top=0")
	}
	
}

function Init_page(Gur_page){
	var Ar=Data,Gur_page,Col=Colcumn;
	var Table_strml="<table width='100%' cellspacing=0 cellpadding=3 border=0>"
	if(IsNull(Col)){Col=2}
	if(IsNull(Gur_page)){Gur_page=1}

	var StarI=(Gur_page-1)*PageSize
	var EndI=StarI+PageSize
		if(EndI>Ar.length){EndI=Ar.length}

	for(StarI;StarI<EndI;StarI++){
       var ii=(StarI+1)%Col
		   var td_info="<td  align=center width='"+Math.ceil(100/Col)+"%'><img src=."+Ar[StarI][1]+" border=1 style='cursor:hand' onclick=ShowBig('','"+Ar[StarI][2]+"')><br>"+Ar[StarI][0]+"</td>"

	   if(ii>1){Table_strml += td_info}
	   else if(ii==1){Table_strml += "<tr>"+td_info;}
	   else if(ii==0){Table_strml += td_info+"</tr>";}
	}

	Table_strml += "</table>"	
    
	info.innerHTML=(Table_strml)
    Bar.innerHTML=getPage(Ar,PageSize,Gur_page)

}

function getPage(Ar_obj,PageSize,Gur_page){
	var MaxPages=Math.ceil((Ar_obj.length)/PageSize),strml="";

		for(var i=1;i<=MaxPages;i++){
			var i_page="["+i+"]"
			if(i==Gur_page){i_page="<font color=red>"+i_page+"</font>"}

			strml += "<a href=javascript:Init_page("+i+")>"+i_page+"</a>&nbsp;"
		}
		return strml
}

function IsNull(ve){
	var ve=""+ve
	if(ve=="" || ve =="null" || ve=="undefined"){
		return true
	}else{
		return false
	}
}

function O_tpr(){ //产品系列名称,只能为字符和数字
    var Ar_total=new Array(),i=0;


Ar_total[i++]=new Array("QS-木尺1.8-2.8米","/tiyu/s1.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-皮尺20-50m","/tiyu/s2.jpg","big/s2.jpg")
Ar_total[i++]=new Array("QS-实心球","/tiyu/s3.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-垒球","/tiyu/s4.jpg","big/s2.jpg")
Ar_total[i++]=new Array("QS-气筒（带储气罐）","/tiyu/s5.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-体操棒（木质90cm）","/tiyu/s6.jpg","big/s2.jpg")
Ar_total[i++]=new Array("QS-短绳250-280cm","/tiyu/s7.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-长绳500cm","/tiyu/s8.jpg","big/s2.jpg")
Ar_total[i++]=new Array("QS-拔河绳白棕","/tiyu/s9.jpg","big/s1.jpg")
//Ar_total[i++]=new Array("QS-C2 单杠","/tiyu/s10.jpg","big/s2.jpg")
Ar_total[i++]=new Array("QS-B2 双杠","/tiyu/s11.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-K5 山羊","/tiyu/s12.jpg","big/s2.jpg")
Ar_total[i++]=new Array("QS-H2 跳箱","/tiyu/s13.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-H16 助跳板（80cm*50cm贴橡胶板）","/tiyu/s14.jpg","big/s2.jpg")
//Ar_total[i++]=new Array("QS-H5 体操垫（小）","/tiyu/s15.jpg","big/s2.jpg")
//Ar_total[i++]=new Array("QS-H6 大体操垫","/tiyu/s16.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-肋木","/tiyu/s17.jpg","big/s2.jpg")
//Ar_total[i++]=new Array("QS-D1 平梯","/tiyu/s18.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-排球","/tiyu/s19.jpg","big/s2.jpg")
Ar_total[i++]=new Array("QS-排球（奥力健）","/tiyu/s21.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-B3 简易活动式排球柱","/tiyu/s22.jpg","big/s2.jpg")
Ar_total[i++]=new Array("QS-足球","/tiyu/s23.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-皮尺20-50m","/tiyu/s23.jpg","big/s2.jpg")
Ar_total[i++]=new Array("QS-发令枪（双环牌）","/tiyu/s24.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-铅球","/tiyu/s25.jpg","big/s2.jpg")
Ar_total[i++]=new Array("QS-铁饼","/tiyu/s26.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-钉鞋","/tiyu/s27.jpg","big/s2.jpg")
Ar_total[i++]=new Array("QS-标志杆","/tiyu/s28.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-QS-H7 海绵包（跳高用）","/tiyu/s29.jpg","big/s2.jpg")
Ar_total[i++]=new Array("QS-篮球","/tiyu/s30.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-K6 乒乓球桌","/tiyu/s31.jpg","big/s2.jpg")
Ar_total[i++]=new Array("QS-羽毛球拍（红双喜C13）","/tiyu/s32.jpg","big/s1.jpg")

Ar_total[i++]=new Array("QS-立定跳远垫","/tiyu/s34.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-呼啦圈","/tiyu/s35.jpg","big/s2.jpg")
Ar_total[i++]=new Array("QS-塑料羽毛球","/tiyu/s36.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-羽毛球","/tiyu/s37.jpg","big/s2.jpg")
Ar_total[i++]=new Array("QS-铝合金接力棒","/tiyu/s38.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-K03 跳高架","/tiyu/s39.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-跨栏架 升降最低70cm","/tiyu/s40.jpg","big/s2.jpg")
Ar_total[i++]=new Array("QS-铁环","/tiyu/s41.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-秒表","/tiyu/s42.jpg","big/s1.jpg")


this.Ar_data=Ar_total //不要更改

}


