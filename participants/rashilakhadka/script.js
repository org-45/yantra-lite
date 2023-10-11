document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const saveCredentialsBtn = document.getElementById('saveCredentials');
    const logoutBtn = document.getElementById('logout');
    const feedback = document.getElementById('feedback');

    //check for credential support in browser
    if(!navigator.credentials || !navigator.credentials.preventSilentAccess) {
        feedback.textContent = 'Credential Management API is not supported in this browser';
        saveCredentialsBtn.style.display = 'none';
        logoutBtn.style.display = 'none';
        return;
    }

    //Add event listener to the login form

    loginForm.addEventListener('submit', async (e)  => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Authentication of User
        const isAuthenticated = await authenticateUser(username,password);

        if (isAuthenticated) {
            feedback.textContent = 'Login Successful!';
        } else {
            feedback.textContent = 'Login Failed. Please check your credentials.';
        }
    });

    //Add event listener to save credentials button
    saveCredentialsBtn.addEventListener('click', async () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        //Save credentials using Credential Management API

        await navigator.credentials.store(new window.PasswordCredential({
            id: username,
            password: password,
        }));
        feedback.textContent = 'Credentials saved!';
    });

    //Add event listener to logout button

    logoutBtn.addEventListener('click', () => {
        //clear saved credentials

        navigator.credentials.preventSilentAccess();

        //clear from fields

        document.getElementById('username').value = '';
        document.getElementById('password').value = '';

        feedback.textContent = 'Logged out!';
    });

    //function to simulate user authentication
    async function authenticateUser(username, password) {

        // Simulate authentication delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        //Simulate successful authentication
        return username === username && password === password;
    }
});
