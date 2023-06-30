public with sharing class Desserts {
    @AuraEnabled(cacheable=true)
    public static List<Dessert__c> getDesserts(){
        try {
            List<Dessert__c> Desserts = [SELECT id, Name, Dessert_Image__c, Dessert_Price__c FROM Dessert__c];
            return Desserts;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
