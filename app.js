const menu={
 pizzas:{title:'🍕 PIZZAS 🍕',subtitle:'Masa artesanal, ingredientes frescos y todo el sabor de Pronto Papá.',image:'assets/pizza-pronto.jpg',items:[
  ['Pronto Papá','Queso, jamón, aceituna, tocino, pimentón, tomate, orégano.','11.800','13.800','assets/pizza-pronto.jpg'],
  ['Tradicional','Queso, jamón, aceituna, pimentón, orégano.','10.300','11.800','assets/pizza-vegetariana.jpg'],
  ['Casera','Queso, jamón, tomate, pimentón, orégano.','11.300','12.800','assets/pizza-pronto.jpg'],
  ['Gran Pepperonni','Queso, jamón, pepperoni, pimentón, tomate, orégano.','12.800','14.800','assets/pizza-pepperoni.jpg'],
  ['Vegetariana','Queso, choclo, champiñón, palmitos, aceituna, tomate.','11.800','13.800','assets/pizza-vegetariana.jpg'],
  ['Rapa Nui','Queso, jamón, tomate, pimentón, piña, aceituna, orégano.','11.800','13.800','assets/pizza-pronto.jpg'],
  ['Pollo Encanto','Queso, jamón, aceituna, champiñón, salame, pollo, pimentón, tomate.','13.300','15.800','assets/pizza-pronto.jpg'],
  ['Gran Camarón','Queso, camarón, pimentón, aceituna, orégano.','13.800','15.800','assets/pizza-vegetariana.jpg'],
  ['Gran Sabor','Queso, jamón, vacuno, aceituna, champiñón, tomate, pimentón, salame.','13.300','15.800','assets/pizza-pronto.jpg'],
  ['Germana','Queso, jamón, chorizo, pimentón, orégano, tomate.','11.800','13.800','assets/pizza-pepperoni.jpg'],
  ['Madre Patria','Queso, jamón, aceituna, champiñón, salame, pimentón, tomate.','11.800','13.800','assets/pizza-pepperoni.jpg'],
  ['Mar y Tierra','Queso, jamón, tomate, aceituna, pimentón, choclo, atún.','12.800','14.800','assets/pizza-pronto.jpg'],
  ['Dakar','Queso, salsa de tomate, albahaca, jamón.','11.800','13.800','assets/pizza-vegetariana.jpg'],
  ['Del Huerto','Queso, jamón, aceituna, champiñón, pimentón, orégano.','11.800','13.800','assets/pizza-vegetariana.jpg'],
  ['Mechada','Tomate, carne mechada, orégano.','13.800','15.800','assets/pizza-pepperoni.jpg'],
  ['Gran Salame','Queso, salame, tomate, aceituna, pimentón.','13.300','14.800','assets/pizza-pepperoni.jpg'],
  ['Fugazza','Queso, cebolla frita, crema, aceituna, pimentón, carne, orégano.','13.300','15.800','assets/pizza-pronto.jpg'],
  ['Pochoclo','Pollo, crema, choclo, queso, orégano, aceituna.','13.800','15.800','assets/pizza-vegetariana.jpg'],
  ['Pizza Individual','3 nuggets, bebida pequeña y pizza a elección.','7.000',null,'assets/pizza-pronto.jpg']
 ]},
 tablas:{title:'🍟 TABLAS 🍟',subtitle:'Para compartir: papas, carnes, mariscos y combinaciones abundantes.',items:[
  ['De la Casa','Papas fritas, pollo, vacuno, queso gauda, verduras salteadas, chorizo y aceitunas.','20.000',null,'assets/tabla-picassa.jpg'],
  ['Juntos al Mar','Papas rústicas, parmesano, ceviche mixto, tomates cherry y calamar apanado.','25.000',null,'assets/tabla-picassa.jpg'],
  ['La Picassa','Papas fritas con pollo picante a la crema, pimentones, queso derretido y aceitunas.','20.000',null,'assets/tabla-picassa.jpg'],
  ['Le Tritón','Ceviche de camarón, pulpo y salmón con calamares apanados y lechuga.','25.000',null,'assets/tabla-picassa.jpg'],
  ['Trilogía de Carnes','Vacuno, cerdo, pollo, papas fritas naturales y verduras salteadas.','20.000',null,'assets/tabla-picassa.jpg'],
  ['Al Ajillo','Vacuno, verduras salteadas y papas fritas naturales.','19.500',null,'assets/tabla-picassa.jpg']
 ]},
 sushi:{title:'🍣 SUSHI 🍣',subtitle:'Rolls frescos, sabores únicos y opciones para compartir.',items:[
  ['40 Rolls Mixtos','Tory hot roll, Sake roll, California ebi y Hosomaki avocado.','20.000',null,'assets/sushi-mixto.jpg'],
  ['40 Rolls Calientes','Selección de rolls calientes para compartir.','20.500',null,'assets/sushi-caliente.jpg'],
  ['Lomo salteado rolls','Carne, queso crema, aceitunas y topping de lomo salteado.','10.000',null,'assets/sushi-premium.jpg'],
  ['Pil pil rolls','Pollo apanado, queso crema, cebollín y topping de camarón al pil pil.','11.000',null,'assets/sushi-premium.jpg'],
  ['Ceviche rolls','Camarón apanado, queso crema y topping de ceviche mixto.','11.000',null,'assets/sushi-mixto.jpg'],
  ['El Español','Carne salteada, albahaca, queso crema, jamón serrano y aceitunas.','10.000',null,'assets/sushi-premium.jpg']
 ]}
};
let current='pizzas';
const menuItems=document.querySelector('#menuItems'),title=document.querySelector('#catalogTitle'),subtitle=document.querySelector('#catalogSubtitle'),searchInput=document.querySelector('#searchInput'),empty=document.querySelector('#empty');
const norm=s=>s.normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase();
function render(){const data=menu[current];title.textContent=data.title;subtitle.textContent=data.subtitle;const q=norm(searchInput.value.trim());const rows=data.items.filter(i=>!q||norm(i.slice(0,2).join(' ')).includes(q));menuItems.innerHTML=rows.map((i,n)=>`<article class="menu-card" style="animation-delay:${Math.min(n*30,240)}ms"><img src="${i[4]}" alt="${i[0]}"><div class="content"><h3>${i[0]}</h3><p>${i[1]}</p>${i[3]?`<div class="prices"><span>MEDIANA<b>$${i[2]}</b></span><span>FAMILIAR<b>$${i[3]}</b></span></div>`:`<div class="single-price">$${i[2]}</div>`}</div></article>`).join('');empty.hidden=rows.length>0}
render();
document.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>{current=b.dataset.filter;document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active',x===b));searchInput.value='';render()}));
document.querySelectorAll('.category-card').forEach(b=>b.addEventListener('click',()=>{current=b.dataset.category;document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active',x.dataset.filter===current));searchInput.value='';render();document.querySelector('#catalogo').scrollIntoView({behavior:'smooth'})}));
searchInput.addEventListener('input',render);document.querySelector('#searchToggle').addEventListener('click',()=>{document.querySelector('#searchPanel').classList.toggle('show');setTimeout(()=>searchInput.focus(),50)});document.querySelector('#clearSearch').addEventListener('click',()=>{searchInput.value='';render();searchInput.focus()});document.querySelector('.back-top').addEventListener('click',()=>document.querySelector('#menu').scrollIntoView({behavior:'smooth'}));document.querySelectorAll('[data-go="menu"]').forEach(b=>b.addEventListener('click',()=>document.querySelector('#menu').scrollIntoView({behavior:'smooth'})));
const drawer=document.querySelector('#drawer');function drawerSet(open){drawer.classList.toggle('open',open);drawer.setAttribute('aria-hidden',String(!open));document.body.style.overflow=open?'hidden':''}document.querySelector('#menuBtn').addEventListener('click',()=>drawerSet(true));document.querySelector('#drawerClose').addEventListener('click',()=>drawerSet(false));drawer.addEventListener('click',e=>{if(e.target===drawer)drawerSet(false)});drawer.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>drawerSet(false)));
const dialog=document.querySelector('#originalDialog');document.querySelector('#openOriginal').addEventListener('click',()=>dialog.showModal());document.querySelector('#closeOriginal').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));
window.addEventListener('scroll',()=>document.querySelector('.topbar').classList.toggle('scrolled',scrollY>100),{passive:true});
document.querySelector('#bellBtn').addEventListener('click',()=>{const t=document.querySelector('#toast');t.textContent='Pronto Papá · San Martín 11, Illapel';t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200)});
const sections=['inicio','menu','recomendados','contacto'];const nav=document.querySelectorAll('.nav-item');const navObs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){nav.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}})},{rootMargin:'-30% 0px -60% 0px'});sections.forEach(id=>{const el=document.getElementById(id);if(el)navObs.observe(el)});
