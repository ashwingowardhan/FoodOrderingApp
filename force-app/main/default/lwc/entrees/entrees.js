import { LightningElement,api } from 'lwc';
export default class Entrees extends LightningElement {
    
    @api entrees;

    tileClick(){
       let event = new CustomEvent('getentress',{
            detail: this.entrees 
        })
        this.dispatchEvent(event);
    }

}