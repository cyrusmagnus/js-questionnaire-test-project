export function getAuthForm(){
    return `
        <form class="mui-form" id="auth-form">
            <div class="mui-textfield mui-textfield--float-label">
                <input type="email" id="email" required>
                <label for="email">Email:</label>
            </div>
            <div class="mui-textfield mui-textfield--float-label">
                <input type="password" id="password" required>
                <label for="password">Password:</label>
            </div>
            <button type="submit" id="submit" class="mui-btn mui-btn--accent">Войти</button>
        </form>
    `
}
export function authWithEmailAndPassword(email, password){
    const apiKey = 'AIzaSyBxD8sJ6Og3ryNQBm5H7Brh9tnW_bhop0I';
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
        method: 'POST',
        body: JSON.stringify({
            email, password,
            returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data.idToken)
}