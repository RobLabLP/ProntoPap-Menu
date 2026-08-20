const menu = [
  {group:'pizzas',label:'Pizzas',items:[
    ['Pronto Papá','Queso, jamón, aceituna, tocino, pimentón, tomate y orégano.','Med. $11.800 · Fam. $13.800'],
    ['Tradicional','Queso, jamón, aceituna, pimentón y orégano.','Med. $10.300 · Fam. $11.800'],
    ['Casera','Queso, jamón, tomate, pimentón y orégano.','Med. $11.300 · Fam. $12.800'],
    ['Gran Pepperonni','Queso, jamón, pepperoni, pimentón, tomate y orégano.','Med. $12.800 · Fam. $14.800'],
    ['Vegetariana','Queso, choclo, champiñón, palmitos, aceituna y tomate.','Med. $11.800 · Fam. $13.800'],
    ['Rapa Nui','Queso, jamón, tomate, pimentón, piña, aceituna y orégano.','Med. $11.800 · Fam. $13.800'],
    ['Pollo Encanto','Queso, jamón, aceituna, champiñón, salame, orégano, pollo, pimentón y tomate.','Med. $13.300 · Fam. $15.800'],
    ['Gran Camarón','Queso, camarón, pimentón, aceituna y orégano.','Med. $13.800 · Fam. $15.800'],
    ['Gran Sabor','Queso, jamón, vacuno, aceituna, champiñón, tomate, pimentón, orégano y salame.','Med. $13.300 · Fam. $15.800'],
    ['Germana','Queso, jamón, chorizo, pimentón, orégano y tomate.','Med. $11.800 · Fam. $13.800'],
    ['Madre Patria','Queso, jamón, aceituna, champiñón, salame, pimentón, tomate y orégano.','Med. $11.800 · Fam. $13.800'],
    ['Mar y Tierra','Queso, jamón, tomate, aceitunas, pimentón, choclo, atún, salsa de tomate y orégano.','Med. $12.800 · Fam. $14.800'],
    ['Dakar','Queso, salsa de tomate, albahaca y jamón.','Med. $11.800 · Fam. $13.800'],
    ['Del Huerto','Queso, jamón, aceituna, champiñón, pimentón y orégano.','Med. $11.800 · Fam. $13.800'],
    ['Mechada','Tomate, carne mechada y orégano.','Med. $13.800 · Fam. $15.800'],
    ['Gran Salame','Queso, salame, tomate, aceituna y pimentón.','Med. $13.300 · Fam. $14.800'],
    ['Fugazza','Queso, cebolla frita, crema, aceituna, pimentón, carne y orégano.','Med. $13.300 · Fam. $15.800'],
    ['Pochoclo','Pollo, crema, choclo, queso, orégano y aceituna.','Med. $13.800 · Fam. $15.800'],
    ['Pizza Individual','3 nuggets de pollo, bebida pequeña a elección y 1 pizza a elección entre casera, tradicional, germana, del huerto o vegetariana.','$7.000']
  ]},
  {group:'tablas',label:'Tablas calientes',items:[
    ['De la Casa','Base de papas fritas acompañadas de pollo y vacuno, queso gauda, verduras salteadas, chorizo, aceitunas y verde.','$20.000'],
    ['Juntos al Mar','Papas fritas rústicas, queso parmesano, exquisito ceviche mixto, brochetas de tomates cherry y calamar apanado, carne salteada al fire.','$25.000'],
    ['La Picassa','Papas fritas con pollo picante a la crema, pimentones y toque de especias, más queso derretido y aceitunas.','$20.000'],
    ['Le Tritón','Ceviche de camarón, ceviche de pulpo y ceviche de salmón, acompañados de calamares apanados y lechuga.','$25.000'],
    ['Trilogía de Carnes','Vacuno, cerdo, pollo, papas fritas naturales y verduras salteadas.','$20.000'],
    ['Al Ajillo','Vacuno, verduras salteadas y papas fritas naturales.','$19.500']
  ]},
  {group:'sushi',label:'Sushi',items:[
    ['40 Rolls Mixtos','Tory hot roll, Sake roll, California ebi y Hosomaki avocado.','$20.000'],
    ['Tory hot roll','Pollo, queso crema y cebollín, frito en panko.','Incluido'],
    ['Sake roll','Salmón, queso crema y cebollín, envuelto en palta.','Incluido'],
    ['California ebi','Camarón panko, queso crema y cebollín, envuelto en sésamo.','Incluido'],
    ['Hosomaki avocado','Palta y queso crema, envuelto en nori.','Incluido'],
    ['40 Rolls Calientes','Selección de rolls calientes para compartir.','$20.500'],
    ['Ebi hot roll','Camarón, queso crema y cebollín, frito en panko.','Incluido'],
    ['Beef hot roll','Según carta: camarón, queso crema y cebollín, frito en panko.','Incluido'],
    ['Sake hot roll','Salmón, queso crema y cebollín, frito en panko.','Incluido'],
    ['Lomo salteado rolls','Carne, queso crema, aceitunas, envuelto en queso crema con topping de lomo salteado.','$10.000'],
    ['Pil pil rolls','Pollo apanado, queso crema y cebollín, envuelto en sésamo tostado con topping de camarón al pil pil.','$11.000'],
    ['Ceviche rolls','Camarón apanado, queso crema y cebollín, envuelto en palta con topping de ceviche mixto.','$11.000'],
    ['El Español','Carne salteada, albahaca, queso crema, envuelto en jamón serrano con topping de aceitunas de la zona.','$10.000']
  ]}
];

const list = document.querySelector('#menuList');
const empty = document.querySelector('#emptyState');
const search = document.querySelector('#search');
let filter = 'all';

const normalize = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
function render(){
  const q = normalize(search.value.trim());
  list.innerHTML = '';
  let found = 0;
  menu.forEach(group => {
    if(filter !== 'all' && group.group !== filter) return;
    const items = group.items.filter(i => !q || normalize(i.join(' ')).includes(q));
    if(!items.length) return;
    found += items.length;
    const section = document.createElement('section');
    section.className = 'menu-group'; section.id = group.group;
    section.innerHTML = `<div class="group-title"><h3>${group.label}</h3><span>${items.length} opciones</span></div><div class="items-grid">${items.map(i=>`<article class="menu-item"><div><div class="item-name">${i[0]}</div><div class="item-desc">${i[1]}</div></div><div class="price">${i[2]}</div></article>`).join('')}</div>`;
    list.appendChild(section);
  });
  empty.hidden = found !== 0;
}
render();

document.querySelectorAll('.chip').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.chip').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active'); filter = btn.dataset.filter; render();
}));
search.addEventListener('input', render);

document.querySelectorAll('.jump').forEach(btn=>btn.addEventListener('click',()=>{
  filter=btn.dataset.jump; document.querySelectorAll('.chip').forEach(b=>b.classList.toggle('active',b.dataset.filter===filter)); render();
  requestAnimationFrame(()=>document.getElementById(filter)?.scrollIntoView({behavior:'smooth',block:'start'}));
}));

const observer = new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible'); observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const dialog = document.querySelector('#originalDialog');
document.querySelector('#openOriginal').addEventListener('click',()=>dialog.showModal());
document.querySelector('#closeOriginal').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog) dialog.close()});
