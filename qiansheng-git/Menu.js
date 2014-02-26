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


Ar_total[i++]=new Array("QS-A6固定式单臂篮球架","/small/13-2.jpg","big/13-2.jpg")
Ar_total[i++]=new Array("QS-综合","/small/13-3.jpg","big/13-3.jpg")
//Ar_total[i++]=new Array("QS-","/small/13-4.jpg","big/13-4.jpg")
Ar_total[i++]=new Array("QS-A8固定式单柱双臂篮球架","/small/13-5.jpg","big/13-5.jpg")

Ar_total[i++]=new Array("QS-A5移动式双臂篮球架","/small/13-6.jpg","big/13-6.jpg")
Ar_total[i++]=new Array("QS-A1电动液压篮球架","/small/13-7.jpg","big/13-7.jpg")
Ar_total[i++]=new Array("QS-A2手动液压篮球架","/small/13-8.jpg","big/13-8.jpg")
Ar_total[i++]=new Array("QS-A3移动单臂篮球架(有机面板)","/small/13-9.jpg","big/13-9.jpg")
Ar_total[i++]=new Array("QS-A4移动式单臂篮球架(复合面板)","/small/13-10.jpg","big/13-10.jpg")


//户外体育器材
Ar_total[i++]=new Array("QS-K9室外乒乓球桌","/small/31.jpg","big/31b.jpg")
Ar_total[i++]=new Array("QS-T01户外器械","/small/32.jpg","big/32b.jpg")
Ar_total[i++]=new Array("QS-T02梅花桩","/small/33.jpg","big/33b.jpg")
Ar_total[i++]=new Array("QS-T03跑跳横木","/small/34.jpg","big/34b.jpg")
Ar_total[i++]=new Array("QS-T04秋千","/small/35.jpg","big/35b.jpg")
Ar_total[i++]=new Array("QS-T05跑步机","/small/36.jpg","big/36b.jpg")
Ar_total[i++]=new Array("QS-T06太空休闲椅","/small/37.jpg","big/37b.jpg")
Ar_total[i++]=new Array("QS-T07功能训练器","/small/38.jpg","big/38b.jpg")
Ar_total[i++]=new Array("QS-T08划船器","/small/39.jpg","big/39b.jpg")
//幼儿器材
Ar_total[i++]=new Array("QS-R01","/small/40.jpg","big/340b.jpg")
Ar_total[i++]=new Array("QS-R02","/small/41.jpg","big/41b.jpg")
Ar_total[i++]=new Array("QS-R03","/small/42.jpg","big/42b.jpg")
Ar_total[i++]=new Array("QS-R04","/small/43.jpg","big/43b.jpg")
Ar_total[i++]=new Array("QS-R05","/small/44.jpg","big/44b.jpg")
Ar_total[i++]=new Array("QS-R06","/small/45.jpg","big/45b.jpg")
Ar_total[i++]=new Array("QS-R07","/small/46.jpg","big/46b.jpg")
Ar_total[i++]=new Array("QS-R08","/small/47.jpg","big/47b.jpg")
Ar_total[i++]=new Array("QS-R09","/small/48.jpg","big/48b.jpg")
Ar_total[i++]=new Array("QS-R10","/small/49.jpg","big/49b.jpg")
Ar_total[i++]=new Array("QS-R11","/small/50.jpg","big/50b.jpg")
Ar_total[i++]=new Array("QS-R12","/small/51.jpg","big/51b.jpg")
Ar_total[i++]=new Array("QS-R13","/small/52.jpg","big/52b.jpg")



Ar_total[i++]=new Array("QS-A15球车","/small/0.jpg","big/0.jpg")
Ar_total[i++]=new Array("QS-A16球类","/small/1.jpg","big/1.jpg")
//Ar_total[i++]=new Array("QS-A17球类","/small/2.jpg","big/2.jpg")
Ar_total[i++]=new Array("QS-B1地插式排球柱","/small/3.jpg","big/3.jpg")
Ar_total[i++]=new Array("QS-B2双杠","/small/4.jpg","big/4.jpg")
Ar_total[i++]=new Array("QS-B4移动式排球柱","/small/5.jpg","big/5.jpg")
Ar_total[i++]=new Array("QS-C1移动式网球架","/small/6.jpg","big/6.jpg")
Ar_total[i++]=new Array("QS-C2单杠","/small/7.jpg","big/8.jpg")
Ar_total[i++]=new Array("QS-D1平梯","/small/8.jpg","big/8.jpg")
Ar_total[i++]=new Array("QS-D2足球门","/small/9.jpg","big/9.jpg")
Ar_total[i++]=new Array("QS-E1肋木","/small/10.jpg","big/10.jpg")

Ar_total[i++]=new Array("QS-E2活动羽毛球架","/small/11.jpg","big/11.jpg")
Ar_total[i++]=new Array("QS-F1比赛跳高架","/small/12.jpg","big/12.jpg")
Ar_total[i++]=new Array("QS-F2简易跳高架","/small/14.jpg","big/14.jpg")
Ar_total[i++]=new Array("QS-H1山羊","/small/15.jpg","big/15.jpg")
Ar_total[i++]=new Array("QS-H2跳箱","/small/16.jpg","big/16.jpg")
Ar_total[i++]=new Array("QS-H4弹性跳板","/small/17.jpg","big/17.jpg")
Ar_total[i++]=new Array("QS-H5小体操垫","/small/18.jpg","big/18.jpg")
Ar_total[i++]=new Array("QS-H6大体操垫","/small/19.jpg","big/19.jpg")
Ar_total[i++]=new Array("QS-H7跳高用海绵包","/small/20.jpg","big/20.jpg")

Ar_total[i++]=new Array("QS-H8凸型跳高垫","/small/21.jpg","big/21.jpg")
Ar_total[i++]=new Array("QS-i哑铃","/small/22.jpg","big/22.jpg")
//Ar_total[i++]=new Array("QS-i111哑铃","/small/23.jpg","big/23.jpg")
//Ar_total[i++]=new Array("QS-i11哑铃","/small/24.jpg","big/24.jpg")
//Ar_total[i++]=new Array("QS-i1哑铃","/small/25.jpg","big/25.jpg")
Ar_total[i++]=new Array("QS-i2杠铃","/small/26.jpg","big/26.jpg")
Ar_total[i++]=new Array("QS-K5跨栏架","/small/27.jpg","big/27.jpg")
Ar_total[i++]=new Array("QS-K6乒乓球棹","/small/28.jpg","big/28.jpg")
Ar_total[i++]=new Array("QS-K7投掷靶","/small/29.jpg","big/29.jpg")
Ar_total[i++]=new Array("QS-K8钻圈架","/small/30.jpg","big/30.jpg")

//Ar_total[i++]=new Array("QS-","/small/13-1.jpg","big/13-1.jpg")

this.Ar_data=Ar_total //不要更改

}


