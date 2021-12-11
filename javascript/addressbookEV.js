window.addEventListener ('DOMContentLoaded', (event) => {

    const name = document.querySelector('#name');
    const nameError = document.querySelector('.name-error');
    name.addEventListener('input', function(){
        if(name.value.length == 0)
        {
            nameError.textContent = "";
            return;
        }
        try 
        {
            (new Contact()).name = name.value;
            nameError.textContent = "";
        } 
        catch (e) 
        {
            nameError.textContent = e;
        }  
    });

    const phone = document.querySelector('#phoneNumber');
    const phoneError = document.querySelector('.phoneNumber-error');
    phone.addEventListener('input', function() 
    {
        if(phone.value.length == 0)
        {
            phoneError.textContent = "";
            return;
        }
        try 
        {
            (new Contact()).phoneNumber = phone.value;
            phoneError.textContent = "";
        } 
        catch (e) 
        {
            phoneError.textContent = e;
        }  
    });  

    const address = document.querySelector('#address');
    const addressError = document.querySelector('.address-error');
    phone.addEventListener('input', function() 
    {
        if(address.value.length == 0)
        {
            addressError.textContent = "";
            return;
        }
        try 
        {
            (new Contact()).address = address.value;
            addressError.textContent = "";
        } 
        catch (e) 
        {
            addressError.textContent = e;
        }  
    });
    
    const zip = document.querySelector('#zip');
    const zipError = document.querySelector('.zip-error');
    phone.addEventListener('input', function() 
    {
        if(zip.value.length == 0)
        {
            zipError.textContent = "";
            return;
        }
        try 
        {
            (new Contact()).zip = zip.value;
            zipError.textContent = "";
        } 
        catch (e) 
        {
            zipError.textContent = e;
        }  
    });
});

const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
  };