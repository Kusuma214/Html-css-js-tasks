document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-btn');
    const newItemInput = document.getElementById('new-item');
    const todoList = document.getElementById('todo-list');
    const searchInput = document.getElementById('search');

    addButton.addEventListener('click', addItem);
    searchInput.addEventListener('input', searchItems);

    function addItem() {
        const newItemText = newItemInput.value.trim();
        if (newItemText !== '') {
            const listItem = createListItem(newItemText);
            todoList.appendChild(listItem);
            newItemInput.value = '';
        }
    }

    function createListItem(text) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="item-text">${text}</span>
            <div class="actions">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        `;

        const editButton = listItem.querySelector('.edit');
        const deleteButton = listItem.querySelector('.delete');
        const itemText = listItem.querySelector('.item-text');

        editButton.addEventListener('click', () => editItem(listItem, itemText));
        deleteButton.addEventListener('click', () => deleteItem(listItem));

        return listItem;
    }

    function editItem(listItem, itemText) {
        const currentText = itemText.textContent;
        const newTextInput = document.createElement('input');
        newTextInput.type = 'text';
        newTextInput.value = currentText;

        listItem.replaceChild(newTextInput, itemText);
        newTextInput.focus();

        newTextInput.addEventListener('blur', () => {
            itemText.textContent = newTextInput.value.trim() !== '' ? newTextInput.value.trim() : currentText;
            listItem.replaceChild(itemText, newTextInput);
        });
    }

    function deleteItem(listItem) {
        todoList.removeChild(listItem);
    }

    function searchItems() {
        const searchText = searchInput.value.toLowerCase();
        const items = todoList.querySelectorAll('li');

        items.forEach(item => {
            const itemText = item.querySelector('.item-text').textContent.toLowerCase();
            item.classList.toggle('hidden', !itemText.includes(searchText));
        });
    }
});
