//no use



/*
========================
FOR NGACN ONLY
------------
(c) 2005 Zeg All Rights Reserved
========================
bbs.ngacn.cc 广告列表 v1.00
written by zeg 20051010
========================

/* 总表 
if(!window.ngaAds)
	ngaAds = [];

ngaAds.objClone = function(o){
	if(o == null || typeof(o) != 'object')return o;
	var oo = new o.constructor();
	for(var k in o)oo[key] = this.objClone(o[key]);
	return oo;
	}
ngaAds.ckurl = function(url){
	return location.pathname==url ? true : false
	}
ngaAds.clear = function (){
var s = this
for (var k in s){
	if(k.match(/^bbs_ads\d+$/))
		delete s[k]
	}
}


ngaAds.push( {
	date: "01/5/2015-01/30/2015",
	id: "bbs_ads32",
	rate: "33",
	title: "风暴英雄国服测试发码活动",
	url: "/read.php?tid=7758611"
	})
ngaAds.push( {
	date: "01/5/2015-01/30/2015",
	id: "bbs_ads32",
	rate: "33",
	title: "欢乐甲午年 2014年终盘点",
	url: "/read.php?tid=7727592"
	})
ngaAds.push( {
	date: "01/5/2015-01/30/2015",
	id: "bbs_ads32",
	rate: "33",
	title: "小窗大世界 旅游攻略征集",
	url: "/read.php?tid=7756429"
	})



ngaAds.count32 = 0
/*bbs_ads32 一二楼上文字 */
ngaAds.bbs_ads32_gen = function(){
if(__SETTING.bit & 4)
	return ''
if ((this.count32++ <= 1) && this.bbs_ads32)
	return "<span class='bbs_ds32 small_colored_text_btn'>"+this.genAds(this.bbs_ads32)+"</span> "
return ''
}

ngaAds.count31 = 0
/*主题阅读页中通栏 900×60
 * bbs_ads1 一楼上（保留）
 * bbs_ads31 一楼上
 * bbs_ads40 一楼上左半
 * bbs_ads41 一楼上右半
 * bbs_ads33 十楼上
 * bbs_ads42 十楼上左半
 * bbs_ads43 十楼上右半
 */
ngaAds.bbs_ads31_gen = function(id){
if((__SETTING.bit & 4))
	return
ngaAds.count31++
if ((ngaAds.count31 == 1) && (this.bbs_ads31 || this.bbs_ads1 || this.bbs_ads40 || this.bbs_ads41)){
	var x='', z=$(id).parentNode
	x+="<div class='adsc adsch' id='bbs_ds31'>"
	if(this.bbs_ads1)
		x+=this.genAds(this.bbs_ads1)
	if(this.bbs_ads40 || this.bbs_ads41)
		x+='<table cellspacing=0 cellpadding=0><tr><td>'+this.genAds(this.bbs_ads40)+'</td><td>'+this.genAds(this.bbs_ads41)+'</td></tr></table>'
	else if(this.bbs_ads31)
		x+=this.genAds(this.bbs_ads31)
	x+="<div class='clear'></div></div>"
	if(z.nodeName!='TABLE')z = z.parentNode
	z.parentNode.insertBefore(_$('/span').$0('innerHTML',x), z.nextSibling) 
	}
if ((ngaAds.count31 == 10) && (this.bbs_ads33 || this.bbs_ads42 || this.bbs_ads43)){
	var x='', z=$(id).parentNode
	x+="<div class='adsc adsch' id='bbs_ds33'>"
	if(this.bbs_ads42 || this.bbs_ads43)
		x+='<table cellspacing=0 cellpadding=0><tr><td>'+this.genAds(this.bbs_ads42)+'</td><td>'+this.genAds(this.bbs_ads43)+'</td></tr></table>'
	else if(this.bbs_ads33)
		x+=this.genAds(this.bbs_ads33)
	x+="<div class='clear'></div></div>"
	if(z.nodeName!='TABLE')z = z.parentNode
	z.parentNode.insertBefore(_$('/span').$0('innerHTML',x), z.nextSibling) 
	}
}



/* 
bbs_ads26 论坛首页右1 140*550~1100
bbs_ads27 论坛首页右2 140*550~1100 
*/

function bbs_ads26_27(){
if(__SETTING.bit & 8)
	return
var x = ngaAds
if (x.bbs_ads26)
	put(x.genAds(x.bbs_ads26));

if (x.bbs_ads27){
	if(x.bbs_ads26)put("<div style='width:auto;border:none;padding:0;margin:0;float:none;height:20px;font-size:0px;line-height:0px'></div>")
	put(x.genAds(x.bbs_ads27));
	}

}

/*
 bbs_ads8 论坛阅读帖子页面（看帖）第1贴右侧190*400
 bbs_ads24 论坛阅读帖子页面（看帖）第1贴右侧190*400 优先级高于bbs_ads24

 bbs_ads21 论坛阅读帖子页面（看帖）第2贴右侧190*400
 bbs_ads25 论坛阅读帖子页面（看帖）第2贴右侧190*400 优先级高于bbs_ads21

 bbs_ads17 论坛阅读帖子页面（看帖）第3贴右侧190*400
 */
ngaAds.bbs_ads8_preload = function(){

}//fe

ngaAds.bbs_ads8_load_new = function(o,i,fid){
if(o.parentNode.tagName!='TR' || o.parentNode.offsetWidth<1200)
	return
var a;
if (this.bbs_ads8 && i==0)
	a = this.bbs_ads8
if (this.bbs_ads24 && i==0)
	a = this.bbs_ads24
if (this.bbs_ads21 && i==1)
	a = this.bbs_ads21
if (this.bbs_ads25 && i==1)
	a = this.bbs_ads25
if (this.bbs_ads17 && i==2)
	a = this.bbs_ads17
if (a)
	{
	if (typeof(a.file)=='object'){
		if (a.file['f'+fid])
			a.file = a.file['f'+fid];
		else
			a.file = a.file['default'];
		}
	o.innerHTML=this.genAds(a);
	_$(o).$0('style',{background:'#444',padding:'5px',width:'192px',textAlign:'center',verticalAlign:'top'},'className',null)
	}
}//fe




/*论坛全页面上通栏 900×60		bbs_ads1*/
ngaAds.bbs_ads1_gen=function(x){
if(__SETTING.bit & 4)
	return '';

if (this.bbs_ads1)
	return "<div id='adsc1' class='adsc' "+(x?"style='margin-top:"+x+"'":'')+">"+this.genAds(this.bbs_ads1)+'</div>'
return ''
}

/*论坛全页面上通栏 900×60		bbs_ads1*/
/*论坛帖子列表页面（版面）中通栏 900*60		bbs_ads9 bbs_ads23*/
/*-7帖子列表页面（版面）中通栏 900*60		bbs_ads28 */
function bbs_ads9(){
if((__SETTING.bit & 4) || !window.__CURRENT_FID || window.__CURRENT_TID)
	return
var n=window.ngaAds, w = window.put
if (n.bbs_ads1 || n.bbs_ads9 || n.bbs_ads23 || (n.bbs_ads28 && window.location.search.match(/(?:\?|&)fid=-7(?:&|$)/i))){
	w("<div id='adsc9' class='adsc adsch' style='margin-bottom:8px;'>");
	if(n.bbs_ads1)
		w(n.genAds(n.bbs_ads1));
	if(n.bbs_ads9)
		w(n.genAds(n.bbs_ads9));
	if(n.bbs_ads23)
		w(n.genAds(n.bbs_ads23));
	if(n.bbs_ads28)
		w(n.genAds(n.bbs_ads28));
	w("</div>");
	}
	
}//fe

ngaAds.open_69124=function(e,u,h){
if(!this.open_69124.w){
	this.open_69124.w = commonui.createCommmonWindow()
	this.open_69124.w._.addContent(null)._.addContent(
		_$('/iframe').$0('src',u,'style',{margin:'0px',overflow:'hidden',width:'100%',height:h+'px',border:'none'})
		)
	}
this.open_69124.w._.show(null,null,2)
}//fe

ngaAds.bbs_ads30 = function(){
if(__SETTING.bit & 4)
	return
//window.put("<div class='catenew'><ifra"+"me src='http://wow.178.com/201407/t_198270781239.html' style='margin:0px;overflow:hidden;width:100%;height:175px;border:none' scrolling='no' frameborder='0' allowTransparency='true'></ifr"+"ame></div>");

}//fe

/*通栏组合B 900×60 快速发帖下通栏
 * 论坛全页面	bbs_ads14 (保留)
 * 主题列表页bbs_ads35
 * 主题列表页左半bbs_ads36
 * 主题列表页右半bbs_ads37
 * 主题阅读页bbs_ads34
 * 主题阅读页左半bbs_ads38
 * 主题阅读页右半bbs_ads39
 * */
ngaAds.bbs_ads14_gen = function(){
if(__SETTING.bit & 4)
	return
var x=''
if (this.bbs_ads14)
	x+=this.genAds(this.bbs_ads14)

if(window.__CURRENT_TID){
	if(this.bbs_ads38 || this.bbs_ads39)
		x+='<table cellspacing=0 cellpadding=0><tr><td>'+this.genAds(this.bbs_ads38)+'</td><td>'+this.genAds(this.bbs_ads39)+'</td></tr></table>'
	else if(this.bbs_ads34)
		x+=this.genAds(this.bbs_ads34)
	}
else{
	if(this.bbs_ads36 || this.bbs_ads37)
		x+='<table cellspacing=0 cellpadding=0><tr><td>'+this.genAds(this.bbs_ads36)+'</td><td>'+this.genAds(this.bbs_ads37)+'</td></tr></table>'
	else if(this.bbs_ads35)
		x+=this.genAds(this.bbs_ads35)
	}

if(x){
	put("<div class='adsc' id='bbs_ads14'>")
	put(x)
	put("<div class='clear'></div></div>");
	}
}

/*论坛全页面中转			bbs_ads12*/
//代码在js_default.js


/*半擎天柱组合A 论坛帖子列表页面（版面）底部快速发帖右侧 190*400 bbs_ads16*/
/*阅读帖子页面底部快速发帖右侧 190*400 bbs_ads22*/
ngaAds.bbs_ads16_gen=function(){
if(__SETTING.bit & 4)
	return null

/*
var ad = null
if (this.ckurl('/thread.php')){
	if (this.bbs_ads24)
		this.bbs_ads16=this.bbs_ads24
	if (this.bbs_ads16)
		ad = this.genAds(this.bbs_ads16)
	}
if (this.bbs_ads22 && this.ckurl('/read.php'))
	ad = this.genAds(this.bbs_ads22)
if (ad)
	return _$('/td').$0('id','bbs_ads16','className','adsh','innerHTML',ad)
*/
if (this.bbs_ads22)
	return _$('/td').$0('id','bbs_ads16','className','adsh','innerHTML',this.genAds(this.bbs_ads22))
return null
}

/**/
ngaAds.bbs_ads29_gen = function(id){
if((__SETTING.bit & 8)==0 && id==1 && this.bbs_ads29)
	return "<div class='adsc' id='bbs_ads29' style='margin-top:1em'><span class='dslabel'>ADVERTISEMENT</span><br/>"+this.genAds(this.bbs_ads29)+"<div class='clear'></div></div>"
return ''
}


/*特殊广告加载*/
ngaAds.loadCustomAds=function(arg)
{/*
if (arg.uid && parseInt(arg.uid,10)==3213167){
ngaAds['bbs_ads23'] = {
	'id':'bbs_ads23',
	'file': __IMG_BASE+'/misc/self/tmp090903.jpg',
	'url':'',
	'title':'',
	'width':'900',
	'height':'60',
	'date':'8/4/2009-8/30/2009',
	'rate':100,
	'nolog':1,
	'type':''
	}
}*/
}//fe











/*
ngaAds.push({
	'id':'bbs_ads21',				//广告位ID
	'file':'http://xin.178.com/s/zt/sc2.html',		//文件 图片 或 flash 或 嵌入页面地址 如果为空则使用文字链接 文字为.title
	'url':'',			//链接地址 如flash自带链接则不必填写
	'title':'178新游推荐',			//图片说明 flash不必填写
	'width':'190',				//宽度(像素数，比如190)
	'height':'400',				//高度(像素数，比如400)
	'date':'3/17/2009-11/1/2009',	//日期(留空不显示此条广告) 比如 2/15/2006 7/1/2006-7/31/2006 8/1/2006-8/31/2006 意为在2月15日和7月与8月显示 如填all则为一直显示
	'rate':25,					//显示的几率（百分比），同一个广告位的所有当天显示的广告显示几率相加应不超过100，如超出100，则排在前面的优先（比如第一个70第二个60第三个20，实际则为第一个70第二个30第三个不显示）
	'nolog':1,					//为1时不统计点击数 0时统计点击数
	'type':'iframe'					//类型 如图片或flash广告留空 嵌入页面广告填iframe
});
*/
/*
ngaAds.push({
	'id':'bbs_ads21',
	type:'baidu',
	'width':'190',
	'height':'400',
	'date':'all',
	cpro_id:'u1447674',
	rate:100
});

ngaAds.push({
	'id':'bbs_ads14',
	type:'baidu',
	'width':'900',
	'height':'60',
	'date':'all',
	cpro_id:'u1449408',
	rate:100
});





ngaAds.push({
	'id':'bbs_ads17',
	'file':'http://wow.178.com/s/zt/sjk4.html',
	'url':'',
	'date':'all',
	'rate':15,
	'width':'190',
	'height':'400',
	'nolog':1,
	'type':'iframe'
});

// baidu
ngaAds.push({
	id:'bbs_ads14',
	//'file':'http://cpro.baidu.com/cpro/ui/cp.js',//cpro_client
	type:'baidu',
	date:'all',
	rate:100,
	cpro_id:'u1365489',
	ifShow:function(){
		if(window.__CURRENT_FID && (__CURRENT_FID==-7 || __CURRENT_FID==-152678) && location.pathname.indexOf('/thread.php')===0)
			return true
		}
});

// taobao

ngaAds.push({
	id:'bbs_ads29',
	'file':'http://p.tanx.com/ex?i=mm_44474956_4200394_13764006',//cpro_client
	type:'taobao',
	date:'all',
	rate:100,
	mmid:'tanx-a-mm_44474956_4200394_13764006'
});
*/
/*

ngaAds.push({
	'id':'bbs_ads13',
	'file':__IMG_BASE+'/misc/self/20060830.jpg',
	'url':'',
	'title':'提高防范意识，保护帐号安全',
	'width':'',
	'height':'',
	'date':'all',
	'rate':2,
	'nolog':1
});

ngaAds.push({
	'id':'bbs_ads13',
	'file':__IMG_BASE+'/misc/self/20060829.jpg',
	'title':'停止购买金币，让盗号无利可图',
	'date':'all',
	'rate':4,
	'nolog':1
});


*/


//版面

/*
(function(){
var fAds = []
//插件区
fAds.push({
	'file':__IMG_BASE+'/misc/self/f/f1.jpg',
	'url':'/thread.php?fid=200'
});
//作家
fAds.push({
	'file':__IMG_BASE+'/misc/self/f/f2.jpg',
	'url':'/thread.php?fid=102'
});
//圣光
fAds.push({
	'file':new Array(__IMG_BASE+'/misc/self/f/f184a.jpg',__IMG_BASE+'/misc/self/f/f3.jpg'),
	'url':'/thread.php?fid=184'
});
//魔法
fAds.push({
	'file':__IMG_BASE+'/misc/self/f/f4.jpg',
	'url':'/thread.php?fid=182'
});
//猎手
fAds.push({
	'file':new Array(__IMG_BASE+'/misc/self/f/f187a.jpg',__IMG_BASE+'/misc/self/f/f5.jpg'),
	'url':'/thread.php?fid=187'
});
//牧师
fAds.push({
	'file':__IMG_BASE+'/misc/self/f/f6.jpg',
	'url':'/thread.php?fid=183'
});
//术士
fAds.push({
	'file':__IMG_BASE+'/misc/self/f/f7.jpg',
	'url':'/thread.php?fid=188'
});
//der
fAds.push({
	'file':__IMG_BASE+'/misc/self/f/f8.jpg',
	'url':'/thread.php?fid=186'
});
//地精
fAds.push({
	'file':__IMG_BASE+'/misc/self/f/f9.jpg',
	'url':'/thread.php?fid=191'
});
//竞技
fAds.push({
	'file':__IMG_BASE+'/misc/self/f/f10.jpg',
	'url':'/thread.php?fid=272'
});
//战士
fAds.push({
	'file':new Array(__IMG_BASE+'/misc/self/f/f12.jpg',__IMG_BASE+'/misc/self/f/f181a.jpg'),
	'url':'/thread.php?fid=181'
});
//萨满
fAds.push({
	'file':__IMG_BASE+'/misc/self/f/f185.jpg',
	'url':'/thread.php?fid=185'
});
//贼
fAds.push({
	'file':new Array(__IMG_BASE+'/misc/self/f/f189a.jpg',__IMG_BASE+'/misc/self/f/f189.jpg'),
	'url':'/thread.php?fid=189'
});
//任务
fAds.push({
	'file':__IMG_BASE+'/misc/self/f/f11.jpg',
	'url':'/thread.php?fid=190'
});
var j = Math.floor(Math.random()*(fAds.length));
if (typeof(fAds[j]['file'])=='object')
	fAds[j].file = fAds[j].file[ Math.floor(Math.random()*fAds[j]['file'].length)]
ngaAds.push({
	'file':fAds[j]['file'],
	'url':fAds[j]['url'],
	'id':'bbs_ads13',
	'date':'all',
	'rate':5,
	'nolog':1
});
})()
*/
;(function(){
var tmp = window.navigator.userAgent.toLowerCase()
if(tmp.indexOf('iphone ')==-1  && tmp.indexOf('android')==-1)
	return
//if(tmp.indexOf('ipad')!=-1)
//	return

for(var k in ngaAds){//remove fullscreen for mobi
	if(ngaAds[k] && ngaAds[k].id && ngaAds[k].id=="bbs_ads12")
		ngaAds[k].date=null
	}
	/*
ngaAds.push( {
	date: "all",
	file: tmp.indexOf('ipad')!=-1 ? __IMG_STYLE+"/mobile_app_banner5.jpg" : __IMG_STYLE+"/mobile_app_banner4.jpg?342",
	height: "600",
	id: "bbs_ads12",
	nolog: "1",
	now: 1398355200000,
	rate: "100",
	refreshid: "",
	title: "",
	type: "",
	url: "http://app.178.com",
	width: "600"
	})
	*/
})();

