// get -gauna esamus irasus
// post - sukuria nauja irasa
// put - modifikuoja esanti irasa
// delete - istrina esama irasa

//const url ="https://jsonplaceholder.typicode.com/comments"

// fetch(url)


fetch("https://jsonplaceholder.typicode.com/comments")
.then(resp => resp.json())
.then(response => {
    // atvaizduoti pirmo elemento duomenis
    // optional: atvaizduoti html
    console.log("comments", response);
}).catch(error => {
    console.error(error, ": Failed to load comments");
});






const renderUser = (user) => {
    const addressCity = user.address.city;
    const companyName = user.company.name;
    const email = user.email;

    const tdAddressCity = document.createElement('td');
    const tdCompanyName = document.createElement('td');
    const tdEmail = document.createElement('td');

    tdAddressCity.textContent = addressCity;
    tdCompanyName.textContent = companyName;
    tdEmail.textContent = email;

    const trUser = document.createElement('tr');
    trUser.append(tdAddressCity, tdCompanyName, tdEmail);

    document.getElementById('users').append(trUser);

};

fetch("https://jsonplaceholder.typicode.com/users")
.then(resp => resp.json())
.then(response => {

    const firstItem = response[0]; // pats pirmas elementas [0]
    
    response.forEach(user => renderUser(user))
}).catch(error => {
    console.error(error, ": Failed to load comments");
});






const renderUserCard = (user) => {
    const photo = document.createElement('img');
    const userName = document.createElement('h3');
    const email = document.createElement('p');
    const street = document.createElement('p');

    photo.src ="https://g4.dcdn.lt/images/pix/vyras-81892715.jpg"
    photo.alt = `${user.name} photo`;
    userName.textContent = user.username;
    email.textContent = user.email;
    street.textContent = user.address.street;
    street.style.color='green';
    email.style.color='gray';

    // pakeisti street spalva i zalia
    // pakeisti email spalva i pilka

    const card = document.createElement('div');
    card.className = 'card';
    card.append(photo, userName, email, street);

    document.querySelector('.cards').append(card);
};






fetch("https://jsonplaceholder.typicode.com/users/1")
.then(resp => resp.json())
.then(response => {
    
   renderUserCard(response);
   // atvaizduoti userio name, username, email ir city ekrane
    // optional: ideti random nuotrauka i img taga

}).catch(error => {
    console.error(error, ": Failed to load comments");
});









const renderComment = (comment) => {
    const paragraf = document.createElement('p');
    paragraf.textContent = `${comment.email}, ${comment.name}, ${comment.body} `;

    document.body.prepend(paragraf);
}



fetch("https://jsonplaceholder.typicode.com/comments")
.then(resp => resp.json())
.then(response => {
    const firstItem = response[0];
    // email, name, phone
    renderComment(firstItem);
    
}).catch(error => {
    console.error(error, ": Failed to load comments");
});

fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(json => console.log(json))
    

// fetch(url))

// const url = "https://randomuser.me/api/name"
// fetch(url)

const userCard = (user) => {
    const img = document.createElement('img');
    img.src = user.picture.large;
    img.alt = `${user.name.first} profile picture`;
    img.style.width='300px';
    const intro = document.createElement('h3');
    intro.textContent = `${user.name.first} ${user.name.last} ${user.dob.age} years old`;
    intro.style.color='lightgreen';
    

    const contacts = document.createElement('h4');
    contacts.textContent = user.email;
    contacts.style.color='darkviolet';

    const card = document.createElement('div');
    card.append(img, intro, contacts);
    document.body.append(card);
};

const fetchRandomUser = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      if (response.ok) {
        const data = await response.json();
        userCard(data.results[0]);
      }
    } catch(error) {
      console.error(error);
    }
  };
  
  fetchRandomUser();
  

  const getRandomUser = async () => {
    try {
      const resp = fetch('https://randomuser.me/api/');
      const response = await resp.json();     
      console.log(response);
    } catch(error) {
      console.error(error);
    }
};



fetch('https://randomuser.me/api/')
  .then(resp => resp.json())
  .then((response) => {
      console.log(response);
  }).catch((error) => {
      console.error(error);
  });



