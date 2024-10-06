"use strict";

// localStorage.clear()

//! task1
const taskBtn = document.querySelector('#taskBtn');
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");


const getTasks = () => {
    const tasks = localStorage.getItem('tasks')
    return tasks ? JSON.parse(tasks) : []

}


const saveTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

const addTask = () => {
    const taskText = taskInput.value


    const tasks = getTasks()
    tasks.push({text: taskText, completed: false})
    saveTasks(tasks)
    renderTasks()

    taskInput.value = ''



}

const toggleTask = (index) => {
    const tasks = getTasks();
    tasks[index].completed = !tasks[index].completed
    saveTasks(tasks)
    renderTasks()
}

const renderTasks = () => {
    taskList.innerHTML = ''
    
    const tasks = getTasks()

    tasks.forEach((task, index) => {
        const li = document.createElement('li')
        li.innerHTML = `<input type='checkbox' id="checkbox"></input> <p>${task.text}</p> <button id="delete">delete</button>`

        const checkbox = li.querySelector('#checkbox')
        checkbox.checked = task.completed

        checkbox.addEventListener('click', () => {
            toggleTask(index)
        })




        taskList.appendChild(li)
        const deleteBtn = li.querySelector('#delete')
        deleteBtn.addEventListener('click', (index) => {
 
            const tasks = getTasks();
            tasks.splice(index, 1);
            saveTasks(tasks);
            renderTasks();
        })
        
    });
    
}



taskBtn.addEventListener('click', () => {
    addTask()
})

renderTasks()



//! task2

const nameInput = document.getElementById('name');
const passwordInput = document.getElementById('password');
const saveButton = document.getElementById('saveButton');
const checkBtn = document.getElementById('checkBtn')

const saveData = () => {
    localStorage.setItem('userData', JSON.stringify({name: nameInput.value, password: passwordInput.value}))
}

const loadData = () => {

    const getData = JSON.parse(localStorage.getItem('userData'));
    console.log(getData);

    if (getData) {
        nameInput.value = getData.name;
        passwordInput.value = getData.password;
    }

}

const checkData = () => {
    const entryName = nameInput.value
    const entryPassword = passwordInput.value
    const savedUserData = JSON.parse(localStorage.getItem('userData'))

    if (savedUserData.name === entryName && savedUserData.password === entryPassword){
        alert('успішно')
    } else {
        alert('не вірно')
    }
}

loadData()

saveButton.addEventListener('click', () => saveData())

checkBtn.addEventListener('click', () => checkData())




//! task 3

const urlInput = document.querySelector('#urlInput');
const titleInput = document.querySelector('#titleInput');
const btnBookmark = document.querySelector('#btnBookmark');
const bookmarkList = document.querySelector('#bookmarkList');

const getBookmarks = () => {
    const bookmarks = localStorage.getItem('bookmarks')
    return bookmarks ? JSON.parse(bookmarks) : []

}


const saveBookmarks = (bookmarks) => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
}

const addBookmark = () => {
    const url = urlInput.value
    const title = titleInput.value

    const bookmarks = getBookmarks()
    bookmarks.push({url, title})
    saveBookmarks(bookmarks)
    renderBookmarks()

    urlInput.value = ''
    titleInput.value = ''


}

const renderBookmarks = () => {
    bookmarkList.innerHTML = ''

    const bookmarks = getBookmarks()

    bookmarks.forEach(bookmark => {
        const li = document.createElement('li')
        li.innerHTML = `<a href="${bookmark.url}">${bookmark.title}</a> <button id="delete">delete</button>`

        bookmarkList.appendChild(li)
        const deleteBtn = li.querySelector('#delete')
        deleteBtn.addEventListener('click', (index) => {
           

            
            const bookmarks = getBookmarks();
            bookmarks.splice(index, 1);
            saveBookmarks(bookmarks);
            renderBookmarks();
        })
    });
    
}



btnBookmark.addEventListener('click', () => {
    addBookmark()
})

renderBookmarks()



//!task 4

const nameContact = document.getElementById('nameContact')
const secondnameContact = document.getElementById('secondnameContact')
const phonenumContact = document.getElementById('phonenumContact')
const emailContact = document.getElementById('emailContact')

const btnContact = document.getElementById('btnContact')
const listContact = document.getElementById('listContact')


const getContacts = () => {
    const contacts = localStorage.getItem('contacts')
    return contacts ? JSON.parse(contacts) : []

}


const saveContacts = (contacts) => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
}

const addContacts = () => {
    const name = nameContact.value
    const secondname = secondnameContact.value
    const phone = phonenumContact.value
    const email = emailContact.value

    const contacts = getContacts()
    contacts.push({name: name, secondname: secondname, phone: phone, email: email})
    saveContacts(contacts)
    renderContacts()

    nameContact.value = ''
    secondnameContact.value = ''
    phonenumContact.value = ''
    emailContact.value = ''



}

const renderContacts = () => {
    listContact.innerHTML = ''

    const contacts = getContacts()

    contacts.forEach(contact => {
        const li = document.createElement('li')
        li.innerHTML = `<p>${contact.name}</p> <p>${contact.secondname}</p> <p>${contact.phone}</p> <p>${contact.email}</p> <button id="delete">delete</button>`

        listContact.appendChild(li)
        const deleteBtn = li.querySelector('#delete')
        deleteBtn.addEventListener('click', (index) => {
    
            const contacts = getContacts();
            contacts.splice(index, 1);
            saveContacts(contacts);
            renderContacts();
        })
    });
    
}



btnContact.addEventListener('click', () => {
    addContacts()
})

renderContacts()