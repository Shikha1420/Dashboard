
const users = [
    { username: 'Aruna', email: 'Aru@example.com', phone: '193-406-7870', id: 1, creationDate: '2023-02-01' },
    
];

function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = tab.id === tabId ? 'block' : 'none';
    });
}

function searchUsers(query) {
    const filteredUsers = users.filter(user =>
        user.username.toLowerCase().includes(query.toLowerCase())
    );

    populateUserTable(filteredUsers);
}

function generateReport() {
    
    document.getElementById('userReportModal').style.display = 'block';
}

function submitForm() {
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Username:', username);
    console.log('Password:', password);
}

function populateUserTable(usersData) {
    const userTableBody = document.getElementById('userTableBody');
    userTableBody.innerHTML = '';

    usersData.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.id}</td>
            <td>${user.creationDate}</td>
            <td><button onclick="generateReport()">Generate Report</button></td>
        `;
        userTableBody.appendChild(row);
    });
}


populateUserTable(users);
