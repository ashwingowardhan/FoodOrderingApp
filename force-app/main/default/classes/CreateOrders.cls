public class CreateOrders {
    
	@AuraEnabled
    
    public static List<order__c> createOrderMethod(string orderName  ){
        List<order__c> olist = new List<order__c>();
        
        if(orderName != Null){
            order__c od = new order__c();
            od.orderlist__c = orderName;
            olist.add(od);
        }
        
        if(!olist.isEmpty()){
            System.debug('olist'+olist);
            insert olist ;
            return olist;
        }
        
        return Null;
    }
}