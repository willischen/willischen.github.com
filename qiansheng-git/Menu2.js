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


Ar_total[i++]=new Array("QS-ľ��1.8-2.8��","/tiyu/s1.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-Ƥ��20-50m","/tiyu/s2.jpg","big/s2.jpg")
Ar_total[i++]=new Array("QS-ʵ����","/tiyu/s3.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-����","/tiyu/s4.jpg","big/s2.jpg")
Ar_total[i++]=new Array("QS-��Ͳ���������ޣ�","/tiyu/s5.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-��ٰ���ľ��90cm��","/tiyu/s6.jpg","big/s2.jpg")
Ar_total[i++]=new Array("QS-����250-280cm","/tiyu/s7.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-����500cm","/tiyu/s8.jpg","big/s2.jpg")
Ar_total[i++]=new Array("QS-�κ�������","/tiyu/s9.jpg","big/s1.jpg")
//Ar_total[i++]=new Array("QS-C2 ����","/tiyu/s10.jpg","big/s2.jpg")
Ar_total[i++]=new Array("QS-B2 ˫��","/tiyu/s11.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-K5 ɽ��","/tiyu/s12.jpg","big/s2.jpg")
Ar_total[i++]=new Array("QS-H2 ����","/tiyu/s13.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-H16 �����壨80cm*50cm���𽺰壩","/tiyu/s14.jpg","big/s2.jpg")
//Ar_total[i++]=new Array("QS-H5 ��ٵ棨С��","/tiyu/s15.jpg","big/s2.jpg")
//Ar_total[i++]=new Array("QS-H6 ����ٵ�","/tiyu/s16.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-��ľ","/tiyu/s17.jpg","big/s2.jpg")
//Ar_total[i++]=new Array("QS-D1 ƽ��","/tiyu/s18.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-����","/tiyu/s19.jpg","big/s2.jpg")
Ar_total[i++]=new Array("QS-���򣨰�������","/tiyu/s21.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-B3 ���׻ʽ������","/tiyu/s22.jpg","big/s2.jpg")
Ar_total[i++]=new Array("QS-����","/tiyu/s23.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-Ƥ��20-50m","/tiyu/s23.jpg","big/s2.jpg")
Ar_total[i++]=new Array("QS-����ǹ��˫���ƣ�","/tiyu/s24.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-Ǧ��","/tiyu/s25.jpg","big/s2.jpg")
Ar_total[i++]=new Array("QS-����","/tiyu/s26.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-��Ь","/tiyu/s27.jpg","big/s2.jpg")
Ar_total[i++]=new Array("QS-��־��","/tiyu/s28.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-QS-H7 ������������ã�","/tiyu/s29.jpg","big/s2.jpg")
Ar_total[i++]=new Array("QS-����","/tiyu/s30.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-K6 ƹ������","/tiyu/s31.jpg","big/s2.jpg")
Ar_total[i++]=new Array("QS-��ë���ģ���˫ϲC13��","/tiyu/s32.jpg","big/s1.jpg")

Ar_total[i++]=new Array("QS-������Զ��","/tiyu/s34.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-����Ȧ","/tiyu/s35.jpg","big/s2.jpg")
Ar_total[i++]=new Array("QS-������ë��","/tiyu/s36.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-��ë��","/tiyu/s37.jpg","big/s2.jpg")
Ar_total[i++]=new Array("QS-���Ͻ������","/tiyu/s38.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-K03 ���߼�","/tiyu/s39.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-������ �������70cm","/tiyu/s40.jpg","big/s2.jpg")
Ar_total[i++]=new Array("QS-����","/tiyu/s41.jpg","big/s1.jpg")
Ar_total[i++]=new Array("QS-���","/tiyu/s42.jpg","big/s1.jpg")


this.Ar_data=Ar_total //��Ҫ����

}


