public with sharing class Appetizers {
    @AuraEnabled(cacheable=true)
    public static List<Appetizer__c> getappetizer(){
        try {
                List<Appetizer__c> appetizers = [SELECT id, Name, Image__c, Appetizer_price__c from Appetizer__c];
                return appetizers;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
