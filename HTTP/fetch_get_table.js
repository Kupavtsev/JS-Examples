// ORIGIN PROJECT
// mail-server / script.js

let getDataWithFetch = () => {
    let login = loginInput.value;
    
    // fetch('http://127.0.0.1:5000/senders')
    fetch('http://127.0.0.1:5000/senders?login=' + login)
        .then((response) => {
            // console.log(typeof login)
            // console.log(login)
            // console.log(fetch('http://127.0.0.1:5000/senders?login=' + {login}))
            return response.json();
        })
      
        .then((data) => {
            // debugger;
            let data1 = data[0]
            let data2 = data[1]
            let count_data = data1.length
            if (count_data = 1) {
                // console.log(data[0]['Send Date'])
                let date_str = data1[0]['Send Date'].substring(0, 16)
            } else {
                // console.log(data[3]['Send Date'])
                let date_str = data1[3]['Send Date'].substring(0, 16)
            }
            

            if (data1.length > 0 || data2.length > 0) {
                // debugger;
                let temp = '';
                let id = data1.length

                {data1.forEach((itemData) => {
                    // debugger;
                    if (loginInput.value == itemData['Recipient']) {
                        temp += "<tr>";
                        temp += "<td>" + id + "</td>"
                        temp += "<td>" + itemData['Send Date'].substring(0, 16) + "</td>"
                        temp += "<td>" + itemData['sender'] + "</td>"
                        temp += "<td>" + itemData['Subscription'] + "</td></tr>";
                        --id;
                        document.getElementById('data').innerHTML = temp;
                    }
                });
            }
                let temp2 = '';
                let id2 = data2.length
                data2.forEach((itemData2) => {
                    // debugger;
                    // if (loginInput.value == itemData['Recipient']) {
                        temp2 += "<tr>";
                        temp2 += "<td>" + id2 + "</td>"
                        temp2 += "<td>" + itemData2['Last Send Date'].substring(0, 16) + "</td>"
                        temp2 += "<td>" + itemData2['Sender of Subscription'] + "</td>"
                        temp2 += "<td>" + itemData2['Periods'] + "</td></tr>";
                        console.log(itemData2['Last Send Date'])
                        --id2;
                        document.getElementById('periods').innerHTML = temp2;
                    // }
                });
        }
        })
}