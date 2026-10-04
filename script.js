/* script.js — рисует заголовки из точек на <canvas> и анимирует их.
   Весь код внутри функции, чтобы переменные не попадали в глобальную область.  */
(function(){
/* RM — отключены ли анимации в системе; root — тег <html>; items — все точечные холсты;
   color — текущий цвет точек; mx/my — позиция мыши или пальца  */
var RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
var root=document.documentElement,items=[],color='#fff',mx=-999,my=-999;
/* Берёт цвет точек из CSS-переменной --fg (точки меняются вместе с темой)  */
function readColor(){color=getComputedStyle(root).getPropertyValue('--fg').trim()||'#fff'}
readColor();
/* Кнопка ◐: переключает чёрную/белую тему и запоминает выбор в браузере  */
document.getElementById('tog').onclick=function(){
  var l=root.getAttribute('data-theme')==='light';
  if(l)root.removeAttribute('data-theme');else root.setAttribute('data-theme','light');
  try{localStorage.setItem('t',l?'dark':'light')}catch(e){}
  setTimeout(readColor,0);
};
/* При загрузке восстанавливаем сохранённую тему  */
try{if(localStorage.getItem('t')==='light'){root.setAttribute('data-theme','light');readColor()}}catch(e){}
/* Следим за курсором/пальцем: точки рядом с ним растут и вспыхивают  */
addEventListener('pointermove',function(e){mx=e.clientX;my=e.clientY});
addEventListener('pointerleave',function(){mx=my=-999});

/* === ПОСТРОЕНИЕ ТОЧЕК ===
   Идея: пишем текст обычным жирным шрифтом на скрытом холсте, затем идём по сетке
   и там, где пиксель закрашен, ставим точку. Работает с любыми буквами, включая умлауты.
   div/min/max (атрибуты data-* в HTML) задают размер шрифта; step — расстояние между точками  */
function build(it){
  var c=it.c,w=c.parentElement.clientWidth,dpr=Math.min(devicePixelRatio||1,2);
  var div=+c.dataset.div,fs=Math.max(+c.dataset.min,Math.min(+c.dataset.max,w/div));
  var step=Math.max(3,Math.round(fs/13)),font='800 '+fs+'px Arial,Helvetica,sans-serif';
  var m=document.createElement('canvas').getContext('2d');m.font=font;
/* Переносим текст на новые строки, если не влезает по ширине  */
  var words=c.dataset.text.split(' '),lines=[],cur='';
  words.forEach(function(wd){var t=cur?cur+' '+wd:wd;if(m.measureText(t).width>w-4&&cur){lines.push(cur);cur=wd}else cur=t});
  lines.push(cur);
  var lh=fs*1.12,h=Math.ceil(lines.length*lh+fs*.1);
/* Рисуем текст на скрытом холсте  */
  var o=document.createElement('canvas');o.width=w;o.height=h;
  var x=o.getContext('2d',{willReadFrequently:true});x.font=font;x.fillStyle='#000';
  lines.forEach(function(l,i){x.fillText(l,0,(i+.84)*lh)});
  var d=x.getImageData(0,0,w,h).data,dots=[];
/* Сканируем сетку. У каждой точки своя фаза/скорость мерцания (ph, sp)
   и задержка появления dl (волна слева направо + случайность)  */
  for(var y=step/2;y<h;y+=step)for(var px=step/2;px<w;px+=step){
    if(d[(((y|0)*w)+(px|0))*4+3]>110)dots.push({x:px,y:y,dl:px/w*700+Math.random()*600,ph:Math.random()*6.28,sp:.6+Math.random()*1.6,bl:0});
  }
/* Учитываем плотность пикселей экрана (dpr), чтобы точки были чёткими на телефоне  */
  c.width=w*dpr;c.height=h*dpr;c.style.height=h+'px';
  it.ctx=c.getContext('2d');it.ctx.setTransform(dpr,0,0,dpr,0,0);
  it.dots=dots;it.r=step*.3;it.w=w;it.h=h;
}
/* Находим все холсты .dots в HTML и строим точки для каждого  */
document.querySelectorAll('canvas.dots').forEach(function(c){var it={c:c,vis:false,t0:0};items.push(it);build(it)});
/* Анимируем только то, что видно на экране (экономит батарею), и запускаем «появление» при первом показе  */
var io=new IntersectionObserver(function(es){es.forEach(function(e){
  var it=items.find(function(i){return i.c===e.target});
  it.vis=e.isIntersecting;if(it.vis&&!it.t0)it.t0=performance.now();
})},{threshold:.1});
items.forEach(function(i){io.observe(i.c)});
/* При изменении размера окна пересобираем точки (с небольшой задержкой)  */
var rt;addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(function(){items.forEach(build)},150)});

/* === ГЛАВНЫЙ ЦИКЛ АНИМАЦИИ (каждый кадр) ===
   Для каждой точки: 1) плавное появление после своей задержки; 2) лёгкое мерцание (синусоида);
   3) редкое случайное «моргание»; 4) реакция на курсор — рядом с ним точка больше и ярче  */
function frame(now){
  items.forEach(function(it){
    if(!it.vis)return;
    var ctx=it.ctx,r0=it.r,b=it.c.getBoundingClientRect(),lx=mx-b.left,ly=my-b.top;
    ctx.clearRect(0,0,it.w,it.h);ctx.fillStyle=color;
    var dots=it.dots;
    for(var i=0;i<dots.length;i++){
      var d=dots[i],a=RM?1:Math.min(1,Math.max(0,(now-it.t0-d.dl)/350));
      if(a<=0)continue;
      var r=r0,al=a;
      if(!RM){
        al*=.8+.2*Math.sin(now*.003*d.sp+d.ph);
        if(a>=1&&Math.random()<.0003)d.bl=now+80+Math.random()*120;
        if(now<d.bl)al*=.08;
        var dx=d.x-lx,dy=d.y-ly,q=dx*dx+dy*dy;
        if(q<9000){var k=1-Math.sqrt(q)/95;r=r0*(1+k*1.1);al=Math.min(1,al+k)}
      }
      ctx.globalAlpha=al;ctx.beginPath();ctx.arc(d.x,d.y,r,0,6.2832);ctx.fill();
    }
  });
  requestAnimationFrame(frame);
}
/* Запускаем цикл  */
requestAnimationFrame(frame);
})();
