public with sharing class RequestOrderController {
    @AuraEnabled
    public static List<Request_Order__c> getDraftRequestOrders(Id recordId) {
	   return [Select Id, Name, SO_number__c, Serial_Number__c, Status__c From Request_Order__c Where Status__c = 'Draft' and Customer__c = :recordId];
	}

}
