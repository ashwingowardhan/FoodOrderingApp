import { LightningElement,api } from 'lwc';
export default class Dessert extends LightningElement {
   @api desserts;
    tileClick(){
        let event = new CustomEvent('getdessetrs',{
            detail: this.desserts
        })
        this.dispatchEvent(event);
    }
}