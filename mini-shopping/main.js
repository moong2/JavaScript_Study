// Fetch the items from the JSON file
function loadItems(){
    return fetch('data/data.json')
    .then(response=>response.json())
    .then(json=> json.items);
}

//Update the list with the given items
function displayItems(items){
    const container = document.querySelector('.items__category');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

//Create HTML list item from the given data item
function createHTMLString(item){
    return `
    <li>
        <img src = "${item.image}">
        <span>${item.gender}, ${item.size}</span>
    </li>
    `;
}

function onButtonClick(event, items){
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;
    
    if(key == null || value == null){
        return;
    }

    displayItems(items.filter(item=>item[key] === value));
    // updateItems(items, key, value);
}

// function updateItems(items, key, value){
//     items.forEach(item => {
//         if(item[key] === value){
//             item.classList.remove('invisible');
//         }
//         else{
//             item.classList.add('invisible');
//         }
//     });
// }

function setEventListeners(items){
    const logo = document.querySelector('.logo__shop');
    const buttons = document.querySelector('.buttons__category');
    logo.addEventListener('click', ()=>displayItems(items));
    buttons.addEventListener('click', event => onButtonClick(event, items));
}

loadItems()
.then(items=>{
    displayItems(items);
    setEventListeners(items);
})
.catch(console.log);