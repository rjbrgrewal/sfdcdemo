({
    doInit : function(component, event, helper) {
        component.set("v.Columns", [
            {label:"Name", fieldName:"Name", type:"text"},
            {label:"Service Order", fieldName:"SO_number__c", type:"text"},
            {label:"Serial Number", fieldName:"Serial_Number__c", type:"text"},
            {label:"Status", fieldName:"Status__c", type:"text"}
        ]);

        var action = component.get("c.getDraftRequestOrders");

        action.setCallback(this, function(data) {
            component.set("v.RequestOrders", data.getReturnValue());
        });
        $A.enqueueAction(action);
        
        
    }
})
