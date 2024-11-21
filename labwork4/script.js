document.getElementById('load-users').addEventListener('click', () => loadUsers());
document.getElementById('load-users-male').addEventListener('click', () => loadUsers('male'));
document.getElementById('load-users-female').addEventListener('click', () => loadUsers('female'));

async function loadUsers(gender) {
  let url = 'https://randomuser.me/api/?results=5';
  if (gender) {
    url += `&gender=${gender}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    displayUsers(data.results);
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error);
  }
}

function displayUsers(users) {
  const userCards = document.getElementById('user-cards');
  userCards.innerHTML = ''; // Очистить предыдущие карточки

  users.forEach(user => {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-4';
    card.innerHTML = `
            <div class="card">
                <img src="${user.picture.large}" class="card-img-top" alt="${user.name.first} ${user.name.last}">
                <div class="card-body">
                    <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
                    <p class="card-text">Email: ${user.email}</p>
                    <p class="card-text">Телефон: ${user.phone}</p>
                </div>
            </div>
        `;
    userCards.appendChild(card);
  });
}