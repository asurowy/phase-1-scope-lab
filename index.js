var customerName = 'bob'
// let bestCustomer;

function upperCaseCustomerName(){
      console.log(customerName.toUpperCase());
        customerName = customerName.toUpperCase();
}


function setBestCustomer(){
    bestCustomer = 'not bob'
}
//setBestCustomer();

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'some inital value'

function changeLeastFavoriteCustomer(){
        leastFavoriteCustomer = 'a different value'
}
