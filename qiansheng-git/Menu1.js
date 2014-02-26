// JavaScript Document
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

Ar_total[i++]=new Array("HF-03上玻下铁宽移门柜","/small/60.jpg","big/60b.jpg")
Ar_total[i++]=new Array("HF-05通玻对开柜","/small/61.jpg","big/61b.jpg")
Ar_total[i++]=new Array("HF-09中四斗玻璃柜","/small/62.jpg","big/62b.jpg")
Ar_total[i++]=new Array("HF-14玻璃保险柜","/small/63.jpg","big/63b.jpg")
Ar_total[i++]=new Array("HF-22等体分双节柜","/small/64.jpg","big/64b.jpg")
Ar_total[i++]=new Array("HF-23暗二斗密码双节柜","/small/65.jpg","big/65b.jpg")
Ar_total[i++]=new Array("HF-29底图柜","/small/66.jpg","big/66b.jpg")
Ar_total[i++]=new Array("HF-39下档期刊柜","/small/67.jpg","big/67b.jpg")
Ar_total[i++]=new Array("HF-40双柱双面书柜/一列两组","/small/68.jpg","big/68b.jpg")

Ar_total[i++]=new Array("垃圾桶A","/small/69.jpg","")
Ar_total[i++]=new Array("垃圾桶B","/small/72.jpg","")
Ar_total[i++]=new Array("垃圾桶C","/small/75.jpg","")
Ar_total[i++]=new Array("垃圾桶D","/small/78.jpg","")
Ar_total[i++]=new Array("垃圾桶E","/small/70.jpg","")


Ar_total[i++]=new Array("室外椅子1","/small/73.jpg","")
Ar_total[i++]=new Array("室外椅子2","/small/76.jpg","")
Ar_total[i++]=new Array("课桌椅","/small/71.jpg","")
Ar_total[i++]=new Array("四人餐桌","/small/74.jpg","")
Ar_total[i++]=new Array("八人餐桌","/small/77.jpg","")
Ar_total[i++]=new Array("双人钢床","/small/79.jpg","")

this.Ar_data=Ar_total //不要更改

}


