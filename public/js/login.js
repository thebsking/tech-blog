const createButton = document.querySelector('#create-btn');

const loginHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (username && password) {
        console.log(username, password)
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        
        if (response.ok) {
            document.location.replace('/dashboard')
        } else {
            alert(response.statusText)
        }
    }
};

const signupHandler = async (event) => {
    event.preventDefault();

    const nameEl = document.querySelector('#signup-name').value.trim();
    const userEl = document.querySelector('#signup-username').value.trim();
    const passEl = document.querySelector('#signup-password').value.trim();

    if (nameEl && userEl && passEl) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ nameEl, userEl, passEl }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/homepage');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#login-form').addEventListener('submit', loginHandler);
document.querySelector('#signup-form').addEventListener('submit', signupHandler);