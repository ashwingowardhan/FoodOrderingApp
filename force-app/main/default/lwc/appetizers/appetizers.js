import { LightningElement,track, api } from 'lwc';
export default class Appetizers extends LightningElement {
     @api appetizers;
    tileClick(){
        const event = new CustomEvent('tileclick',{
            detail: this.appetizers
        })
        this.dispatchEvent(event);
    }
}