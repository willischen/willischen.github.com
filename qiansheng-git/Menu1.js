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

function O_tpr(){ //��Ʒϵ������,ֻ��Ϊ�ַ�������
    var Ar_total=new Array(),i=0;

Ar_total[i++]=new Array("HF-03�ϲ����������Ź�","/small/60.jpg","big/60b.jpg")
Ar_total[i++]=new Array("HF-05ͨ���Կ���","/small/61.jpg","big/61b.jpg")
Ar_total[i++]=new Array("HF-09���Ķ�������","/small/62.jpg","big/62b.jpg")
Ar_total[i++]=new Array("HF-14�������չ�","/small/63.jpg","big/63b.jpg")
Ar_total[i++]=new Array("HF-22�����˫�ڹ�","/small/64.jpg","big/64b.jpg")
Ar_total[i++]=new Array("HF-23����������˫�ڹ�","/small/65.jpg","big/65b.jpg")
Ar_total[i++]=new Array("HF-29��ͼ��","/small/66.jpg","big/66b.jpg")
Ar_total[i++]=new Array("HF-39�µ��ڿ���","/small/67.jpg","big/67b.jpg")
Ar_total[i++]=new Array("HF-40˫��˫�����/һ������","/small/68.jpg","big/68b.jpg")

Ar_total[i++]=new Array("����ͰA","/small/69.jpg","")
Ar_total[i++]=new Array("����ͰB","/small/72.jpg","")
Ar_total[i++]=new Array("����ͰC","/small/75.jpg","")
Ar_total[i++]=new Array("����ͰD","/small/78.jpg","")
Ar_total[i++]=new Array("����ͰE","/small/70.jpg","")


Ar_total[i++]=new Array("��������1","/small/73.jpg","")
Ar_total[i++]=new Array("��������2","/small/76.jpg","")
Ar_total[i++]=new Array("������","/small/71.jpg","")
Ar_total[i++]=new Array("���˲���","/small/74.jpg","")
Ar_total[i++]=new Array("���˲���","/small/77.jpg","")
Ar_total[i++]=new Array("˫�˸ִ�","/small/79.jpg","")

this.Ar_data=Ar_total //��Ҫ����

}


