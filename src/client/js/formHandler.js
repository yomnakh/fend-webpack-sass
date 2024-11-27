function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }


function handleAPICall(event) {
    event.preventDefault();
    const userInput = document.getElementById('name').value;

    fetch(`https://jsonplaceholder.typicode.com/posts/${userInput}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('results').innerHTML = `
                <p>Title: ${data.title}</p>
                <p>Body: ${data.body}</p>
            `;
        })
        .catch(error => console.error('Error:', error));
}

export { handleAPICall };
