<html>
<head>
<title>Span to Text Box and Back- Demo</title>
<style type="text/css">
.replace {
display:none;
}
</style>
<script type="text/javascript">
function exchange(el){
var ie=document.all&&!document.getElementById? document.all : 0;
var toObjId=/b$/.test(el.id)? el.id.replace(/b$/,'') : el.id+'b';
var toObj=ie? ie[toObjId] : document.getElementById(toObjId);
if(/b$/.test(el.id))
toObj.innerHTML=el.value;
else{
toObj.style.width=el.offsetWidth+7+'px';
toObj.value=el.innerHTML;
}
el.style.display='none';
toObj.style.display='inline';
}
</script>
</head>
<body>
<span id="itm1" onclick="exchange(this);">House</span><input ondblclick="exchange(this);" id="itm1b" class="replace" type="text" value="">
</body>
</html>