let emailChecked;

document.querySelector(".btn").addEventListener("click", (e) => {
    let username = document.querySelector(".username").value;
    let email = document.querySelector(".email").value;
    let password = document.querySelector(".password").value;
    let baseUrl = "https://imdcurrency.herokuapp.com/";

    const data = {
        "username": username,
        "email": email,
        "password": password
    }
    console.log(data);
    if (emailChecked) {
        fetch(baseUrl + 'api/v1/users/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                if (data.success == true) {
                    console.log(data.message);
                    let userData =
                    {
                        "_id": data.message._id,
                        "coins": data.message.coins,
                        "username": data.message.username,
                        "token": data.message.token,
                    }
                    localStorage.setItem("userData", JSON.stringify(userData));
                    window.location.href = "index.html";
                }
            })

            .catch((error) => {
                console.error('Error:', error);
            });
    }
})

document.querySelector('#email').addEventListener('change', (e) => {
    if (e.target.value.includes('@student.thomasmore.be')) {
        e.target.classList.remove('form__input--invalid')
        emailChecked = true;
    }
    else {
        e.target.classList.add('form__input--invalid')
        emailChecked = false;
    }
})