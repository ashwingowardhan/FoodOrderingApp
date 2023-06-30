import { LightningElement, wire, track } from 'lwc';
import { subscribe, MessageContext, publish } from 'lightning/messageService';
import createOrderMethod from '@salesforce/apex/CreateOrders.createOrderMethod'
import GetSelectedFoodItem from '@salesforce/messageChannel/AddFoodItemToCart__c';
export default class Cart extends LightningElement {
    
    @track total = 0;
    subscription = null;
    

    @wire(MessageContext)
    messageContext;

    connectedCallback(){
        this.subscribeToMessageChannel();
    }
    renderedCallback(){

      let b = this.template.querySelector('.order-button')
      if (this.uniqueCartElements.length === 0) {
        b.disabled = true
      }else{
        b.disabled = false
      }
    }
    subscribeToMessageChannel(){
        this.subscription = subscribe(
            this.messageContext,
            GetSelectedFoodItem,
            (message) => this.handleMessage(message)
            );
    }

    cartElements = [];

    @track uniqueCartElements = [] ;
    

    handleMessage(message){

        let cartItems = {};

        cartItems.id = message.itemId;
        cartItems.name = message.itemName;
        cartItems.quantity = message.itemQuantity;
        cartItems.price = message.itemPrice * message.itemQuantity;

        this.cartElements.push(cartItems);
        
        this.uniqueCartElements = [...new Map(this.cartElements.map((item) => [item["id"], item])).values()];

        let itemPrice = message.itemQuantity * message.itemPrice;
        
        let result = 0;
        this.uniqueCartElements.forEach(uniqueItem => {
            result = result + uniqueItem.price;
        });
       
        this.total = result;

    }
    handleRemove(event){

       let  value = event.target.value;

       let getindex = (index => {
        return index.id == value;
       })

       let indexValue = this.uniqueCartElements.findIndex(getindex);

       let deleteVal = this.uniqueCartElements.splice(indexValue,1);
       
       this.total = this.total - JSON.parse(JSON.stringify(deleteVal[0].price));

       this.cartElements = this.uniqueCartElements;
    }

    handleOrders(){

      let orderlistArray = []
      for (const v of this.uniqueCartElements) {
        let orderlist = JSON.stringify(`${v.name}, ${v.quantity}`)
        orderlistArray.push(orderlist)
      }
      createOrderMethod({orderName : JSON.stringify(this.uniqueCartElements)})
      .then(result =>{
        // console.log("result order:- ", JSON.stringify(result));
      })
      .catch(error =>{
        // console.log("error order:- ", JSON.stringify(error));
      })
      this.uniqueCartElements.length = 0;
      this.total = 0;

    }

}