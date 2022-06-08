
// const state ={};

// const createCheckbox = () => {
//     const checkbox = document.createElement('INPUT');
//     checkbox.setAttribute('type', 'checkbox');
//     checkbox.setAttribute('id', 'isVipCheckbox');
//     document.body.append(chekbox);

//     const checkboxLabel = document.createElement('label');
//     checkboxLabel.setAttribute('for', 'isVipCheckbox');
//     checkboxLabel.textContent = 'VIP';
//     document.body.append(checkboxLabel);

// }

// const createSearchForm = () => {
//     const searchBox = document.createElement('input');
//     searchBox.setAttribute('type', 'search');
//     searchBox.setAttribute('id', 'search');
//     searchBox.setAttribute('name', 'search');
//     document.body.appendChild(searchBox);

//     const searchButton = document.createElement('button');
//     searchButton.innerHTML = 'Search for name';
//     searchButton.setAttribute('id', 'searchButton');

//     const form = document.createElement('form');
//     form.append(searchBox, searchButton);
//     document.body.append(form);

//}



    
    const createUserRow = (user) => {
        const id = user.id;
        const name = user.name;
        const city = user.city;
        const fav_color = user.fav_color;
    
        const tdid = document.createElement('td');
        const tdname = document.createElement('td');
        const tdcity = document.createElement('td');
        const tdfav_color = document.createElement('td');
        const img = document.createElement('img');
        
    
        tdid.textContent = id;
        tdname.textContent = name;
        tdcity.textContent = city;
        tdfav_color.textContent = fav_color;

        
    
        const trUser = document.createElement('tr');
        trUser.append(tdid, tdname, tdcity, tdfav_color);
    
        
        return trUser;
    
    };
    
    
const renderTable = (users) => {
    const thId = document.createElement('th');
    const thCity = document.createElement('th');
    const thName = document.createElement('th');
    const thColor = document.createElement('th');

    thId.textContent = 'ID';
    thCity.textContent = "City";
    thName.textContent = "Name";
    thColor.textContent = "Fav_color";
   
    const thRow = document.createElement('tr');
    const thead = document.createElement('thead');
    const table = document.createElement('table');
    
    thRow.append(thId, thName, thCity,thColor);
    thead.append(thRow);
    table.append(thead);

    const tableBody = document.createElement('tbody');

    const firstRow = createUserRow(users[0]);
    const row2 = createUserRow(users[1]);
    const row3 = createUserRow(users[2]);

  tableBody.append(firstRow, row2, row3);
//   users.forEach((user) => tableBody.append(createUserRow(user)));

    users.forEach(user => tableBody.append(createUserRow(user)));

    table.append(tableBody);

    document.body.append(table);


};




   

fetch("https://magnetic-melon-yam.glitch.me/")
.then(resp => resp.json())
.then(response => {
    
    renderTable(response);
   
}).catch(error => {
    console.error(error, ": Failed to load");
});

    

