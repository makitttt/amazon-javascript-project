class Cart{
    cartItems;
    checkout = [];
    constructor (){
        // first constructor calls
        console.log('inside cons')
    }
    methodInClass(){
        console.log('class method ' + this.checkout.length)
    }
}

let cartClass = new Cart();
cartClass.methodInClass();