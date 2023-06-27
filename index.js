// Add your code here

// //Add Event Listener
// document.querySelector('h1').addEventListener('submit',handleSubmit) 


function submitData(){
    fetch('http://localhost:3000/users', {
        method: "POST",
        headers : {
            'Content-Type' : "application/json",
            Accept: 'application/json',
        },
        body: JSON.stringify(
            { name: 'Steve', 
            email: 'steve@steve.com'
        })
    })
    .then(res => { return res.json()})
    .then(data => { console.log(data)})
}

