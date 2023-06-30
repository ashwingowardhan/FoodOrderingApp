public with sharing class Orders {
    @AuraEnabled
    public static List<order__c> getOrders(){
        try {

            List<order__c> ord = [SELECT Id, orderlist__c from Order__c ];
            return ord;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
