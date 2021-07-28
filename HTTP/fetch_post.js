// ORIGIN PROJECT
// mail-server / script.js

fetch('http://127.0.0.1:5000/account', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            mail_service,
            login,
            password,
            keyWords
        })
    }
    )
    .then((response) => {
        // console.log(response)
        btnShowResult.removeAttribute('disabled')
        btnCheckMail.removeAttribute('disabled')
    })