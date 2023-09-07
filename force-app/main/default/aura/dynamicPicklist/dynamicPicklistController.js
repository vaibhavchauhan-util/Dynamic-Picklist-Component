({
    doInit : function(component, event, helper) {
        debugger;
        var fieldByObjectMap = {
            Status : 'Lead',
            Industry : 'Account',
            Salutation : 'Lead'
        };
        
        var action = component.get('c.getAllPickListVal');
        action.setParams({ObjectByField : fieldByObjectMap});
        
        action.setCallback(this, function(res){
            var state = res.getState();
            if(state === "SUCCESS"){
                var result = res.getReturnValue();
                for(var i in result){
                    if(i == "Status"){
                        component.set("v.StatusList", result[i]);
                    }
                    if(i == "Salutation"){
                        component.set("v.salutationList", result[i]);
                    }
                    if(i == "Industry"){
                        component.set("v.industryList", result[i]);
                    }
                }
            }
            else{
                alert("Some Error Occured");
            }
        });
        $A.enqueueAction(action);
    }
})