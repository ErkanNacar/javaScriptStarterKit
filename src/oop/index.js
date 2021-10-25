class Customer{
    constructor(id,customerNumber){
        this.id=id
        this.customerNumber=customerNumber
    }
}

let customer=new Customer(1,"12345");
//prototyping
//instance prototyping
customer.name="Erkan Nacar"
console.log(customer.name)
//Class prototyping
Customer.bisey="Bisey"
console.log(Customer.bisey)

console.log(customer.customerNumber)
console.log(customer.id)

class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super(id,customerNumber)
        this.firstName=firstName
    }

}
class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName=companyName
    }
}