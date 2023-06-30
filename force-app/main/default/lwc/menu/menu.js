import { LightningElement,api } from 'lwc';
import getappetizers from '@salesforce/apex/Appetizers.getappetizer';
import getEntrees from '@salesforce/apex/Entrees.getEntrees';
import getDesserts from '@salesforce/apex/Desserts.getDesserts';
export default class Menu extends LightningElement {
    entrees = false;
    appetizers = true;
    desserts = false;

    itemappetizers ;
    error;

    itemEntrees;
    errorEntrees;

    itemDesserts;
    errorDesserts;

     connectedCallback(){
         getappetizers()
         .then(result =>{
            this.itemappetizers = result;
            // console.log("appetizers:-", JSON.stringify(this.itemappetizers));
        })
        .catch(error => {
            this.error = error;
        })

        getEntrees()
         .then(result =>{
            this.itemEntrees = result;
            // console.log("entrees:-",JSON.stringify(this.itemEntrees));
        })
         .catch(error =>{
            this.errorEntrees = error;
        })

        getDesserts()
         .then(result =>{
            this.itemDesserts = result;
            // console.log("Desserts", JSON.stringify(this.itemDesserts));
        })
        .catch(error => {
            this.errorDesserts = error;
        })
     }

     handleItemDesserts(evt){
        let event = new CustomEvent('dessertselected',{
            detail: evt.detail
        })
        this.dispatchEvent(event)
        // console.log("handleItemDesserts() event:-",event);
    }

     handleItemEntrees(evt){
         let event = new CustomEvent('entreeselected',{
             detail: evt.detail
         })
         this.dispatchEvent(event)
        //  console.log("handleItemEntrees() event:-",event);
     }

     handleTileClick(evt){
         const event = new CustomEvent('productselected',{
             detail: evt.detail
         })
         this.dispatchEvent(event);
     }


    loadAppetizers(){
        this.appetizers = true;
        this.entrees = false;
        this.desserts = false;
    }
    loadEntrees(){
        this.entrees = true;
        this.appetizers = false;
        this.desserts = false;
    }
    loadDesserts(){
        this.desserts = true
        this.appetizers = false
        this.entrees = false
    }
    
}