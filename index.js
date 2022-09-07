
  function submitData(name, email){
    const forms = fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
              }),
        })
        .then(resp => resp.json())
        .then(object => document.querySelector('body').append(object.id))
        .catch(error => document.querySelector('body').append(error.message))

        return forms
  }  

    // function renderForm(object){
    //     const main = document.querySelector('body');
        
    //     const h2 = document.createElement('h2');
    //     h2.innerHTML = object.id;
    //     main.appendChild(h2);
    //     }

    // function renderError(error){
    //     const main = document.querySelector('body');
    //     let message = 'Unauthorized Access'
    //     alert({
    //         message: message,
    //         code: '401'
    //     })
    //     const h2 = document.createElement('h2');
    //     h2.innerHTML = error.message;
    //     main.append(message);
    // }

  document.addEventListener('DOMContentLoaded', function(){
    submitData();
  })