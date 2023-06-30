public with sharing class Entrees {
    @AuraEnabled(cacheable=true)
    public static List<entree__c> getEntrees(){
        try {
            List<entree__c> Entrees = [SELECT Name, entree_Image__c, Entree_Price__c FROM entree__c];
            return Entrees;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
