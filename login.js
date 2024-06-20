function login(event) {
    event.preventDefault();

    var mobileValue = document.getElementById('mobile').value;
    var passwordValue = document.getElementById('password').value;

    fetch('http://localhost:8081/employee/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ mobile: mobileValue, password: passwordValue })
    })
    .then(response => response.text())
    .then(data => {
        console.log('Response:', data);
        // Handle the response as needed
        alert(data);
        var responseElement = document.getElementById('response');
        responseElement.innerText = data;
        if (data === 'Login success full.') {
            responseElement.style.color = 'green';
            // Handle unsuccessful login
        } else {
            responseElement.style.color = 'red';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('response').innerText = 'An error occurred. Please try again.';
    });
}