const createButton = document.querySelector('#create-btn');

const loginHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    if(username && password) {
        const response = await fetch ('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: { 'Content-Type': 'applications/json' },
        });

        if (response.ok) {
            document.location.replace('/homepage');
        } else {
            alert(response.statusText)
        }
    }
};

const signupHandler = async (event) => {
    event.preventDefault();

    const nameEl = document.querySelector('#signup-name');
    const userEl = document.querySelector('#signup-username');
    const passEl = document.querySelector('#signup-password');
}

document.querySelector('#login-form').addEventListener('submit', loginHandler)
document.querySelector('#signup-form')