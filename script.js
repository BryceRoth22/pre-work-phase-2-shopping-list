window.onload = function () {
    initShoppingList();
    //console.log("Initiate Shopping List");
}

function initShoppingList() {
    let form = document.getElementById("item-form");
    //console.log(form);
    form.addEventListener("submit",(event) => {
        handleItemForm(event, form);
    });
}

function handleItemForm(event, formRef) {
    if (event.preventDefault)  {
        event.preventDefault();
    }

    addItemToShoppingList ();
    formRef.reset();

    console.log("Event: ", event);

    return false;
}

function addItemToShoppingList() {
    let itemName = document.getElementById("item-name");
    //console.log(itemName);
    let itemAmount = document.getElementById("item-amount");
    //console.info(itemAmount);
    let id = getRandomInt(0, 10000000);

    //  Creates list item html and appends to page.
    let itemHtml = createListItemHtml(itemName.value, itemAmount.value, id);
    //console.log("Item HTML : ", itemHtml);
    let itemListRef = document.getElementById("shopping-list");
    itemListRef.insertAdjacentHTML("afterend", itemHtml);

    setDeleteButtonEvent(id);
}

function createListItemHtml(itemName, itemAmount, id) {
    //console.log("Creating Item List");
    return `<li id="item${id}">
                ${itemName} - ${itemAmount}
                <button id="button${id}" type="button">Delete Item</button>
            </li>`;
 }

function setDeleteButtonEvent(id) {
    let deleteButton = document.getElementById("button"+id);
    deleteButton.addEventListener("click", () => {
        //console.log("Delete Button Works");
        removeListItem(id);
    });
}

function removeListItem(id) {
    let listItem = document.getElementById("item"+id);
    listItem.parentNode.removeChild(listItem);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

