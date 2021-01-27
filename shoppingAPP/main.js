const list = document.querySelector('.list');
const items = document.querySelector('.items');
const text = document.querySelector('.text');
const addBtn = document.querySelector('.btn');
const trashBtn = document.querySelector('.trashBtn')
text.value = '';
text.focus();

// ul에 item추가하는 함수
function onAdd(){
  const addText = text.value;
  if(addText === ''){
    text.focus();
    return;
  }
  const item = itemUpdate(addText);
  items.appendChild(item);
  item.scrollIntoView({block:'center', behavior:'smooth'});
  text.value = '';
  text.focus();
}

let id = 0;
// item 생성함수
function itemUpdate(text){
  const NewItem = document.createElement('li');
  NewItem.setAttribute('class', 'item');
  NewItem.setAttribute('data-id', id);
  NewItem.innerHTML = `
  <div class="item__wrap">
    <span>${text}</span>
    <button class="trashBtn">
      <i class="fas fa-trash-alt" data-id=${id}></i>
    </button>
  </div>
  <div class="item__divider"></div>
  `
  id++;
  return NewItem;
}


addBtn.addEventListener('click', ()=> {
  onAdd();
})

text.addEventListener('keypress', (event)=> {
  if(event.key === 'Enter'){
    onAdd();
  }
})

items.addEventListener('click', (event)=> {
  const id = event.target.dataset.id;
  if(id){
    const toBeDelete = document.querySelector(`.item[data-id="${id}"]`);
    toBeDelete.remove();
  }
})