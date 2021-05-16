const loginHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username')
    const password = document.querySelector('#password')

    if(email && password) {
        const response = await fetch ('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: { 'Content-Type': 'applications/json' },
        });

        if (response.ok) {
            document.location.replace('/homepage');
        } else {
            alert(response.statusText)
        }
    }
}