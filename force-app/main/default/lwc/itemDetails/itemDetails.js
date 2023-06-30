import { LightningElement,api,wire } from 'lwc';
import { publish,subscribe,MessageContext, unsubscribe } from 'lightning/messageService';
import FOODITEM from '@salesforce/messageChannel/FoodItem__c'
import SelectedFoodItem from '@salesforce/messageChannel/AddFoodItemToCart__c'
export default class itemDetails extends LightningElement {
    
    Id = null;
    Name;
    Quantity = 1;
    img;
    price;
    subscription = null;

     

    @wire(MessageContext)
    messageContext
    
    connectedCallback(event){
        this.subscribeToMessageChannel(); 
    }
    renderedCallback(){
        let b =  this.template.querySelectorAll('lightning-button');

           if (this.Id == null) {
            for (let key = 0; key<=b.length; key++) {
                if (key == 3) {
                    break;
                }
                b[key].disabled = true;
            }
           }
           if (this.Id != null) {
                for (let key = 0; key<=b.length; key++) {
                    if (key == 3) {
                        break;
                    }
                    b[key].disabled = false;
                }
            }
    }

    subscribeToMessageChannel(){
        this.subscription = subscribe(
            this.messageContext,
            FOODITEM,
            (message) => this.handleMessage(message)
            )
    }
    handleMessage(message){
        let values = JSON.parse(JSON.stringify(message.dishName));
        this.Id = values.Id;
        this.Name = values.Name;
        if (values.Image__c) {
            this.img = values.Image__c;   
            console.log("if Appetizers is true!");
        }else if (values.entree_Image__c) {
            this.img = values.entree_Image__c;
            console.log("if Entrees is true!");
        }else if(values.Dessert_Image__c){
            this.img = values.Dessert_Image__c;
            console.log("if Dessert is true!");
        }

        if (values.Appetizer_price__c) {
            this.price = values.Appetizer_price__c;
            console.log("if Appetizers Price true");
        }else if (values.Entree_Price__c) {
            this.price = values.Entree_Price__c;
            console.log("if Entrees Price true");
        }else if (values.Dessert_Price__c) {
            this.price = values.Dessert_Price__c;
            console.log("if Dessert Price true");
        }
        this.Quantity = 1;
    }

    @wire(MessageContext)
    getCartValues

    addItemToCart(){

        let payload  = {
            itemId : this.Id,
            itemName : this.Name,
            itemQuantity : this.Quantity,
            itemPrice : this.price
            }
       
        publish(this.getCartValues,SelectedFoodItem,payload);

     }
     handleAddQuantity(){
         if (this.Quantity<10) {
            this.Quantity++ ;
         }
     }
     handleRemoveQuantity(){
         if (this.Quantity>1) {
            this.Quantity-- ;
         }
     }
}