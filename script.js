fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        const table = document.getElementById('usersTable');
        data.forEach(user => {
            const row = document.createElement('tr');
            const nameCell = document.createElement('td');
            const emailCell = document.createElement('td');
            nameCell.textContent = user.name;
            emailCell.textContent = user.email;
            row.appendChild(nameCell);
            row.appendChild(emailCell);
            table.appendChild(row);
        });
    })
    .catch(error => console.error('Ошибка при получении данных:', error));
