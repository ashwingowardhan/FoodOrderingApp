import { LightningElement, wire } from 'lwc';
import {publish, MessageContext} from 'lightning/messageService';
import FOODITEM from '@salesforce/messageChannel/FoodItem__c'
export default class Selector extends LightningElement {

    selectedProductId ;
    selectedEntee ;
    selectedDessert ;
    
    @wire(MessageContext)
    messageContext;

    handleProductSelected(evt){
        this.selectedProductId = evt.detail;
        let payload = {
            dishName : evt.detail 
        };
        publish(this.messageContext,FOODITEM,payload);
    }
    handleEntressSelected(evt){
        this.selectedEntee = evt.detail;
        let payload = {
            dishName : evt.detail 
        };
        publish(this.messageContext,FOODITEM,payload);
    }  
    handleDessertsSelected(evt){
        this.selectedDessert = evt.detail;
        
        let payload = {
            dishName : evt.detail 
        };
        publish(this.messageContext,FOODITEM,payload);
    }

}