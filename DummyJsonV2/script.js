const form = document.getElementById('myForm');

form.addEventListener('submit',function(event){

    event.preventDefault();
    const formData= new FormData(form);
    fetch('https://dummyjson.com/products/add',{
        method:'Post',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(Object.fromEntries(formData))
    }).then(res=>res.json())
    .then(data=>console.log(data))
    .catch(error=>console.error('api başarısız',error));
});