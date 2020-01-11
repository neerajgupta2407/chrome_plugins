var contextMenuItem = {
    "id": "spendMoney",
    "title":"SpendMoney",
    "contexts": ["selection"]
}

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(clickedData){
    if (clickedData.menuItemId == "spendMoney" && clickedData.selectionText){

        if (clickedData.selectionText){
            chrome.storage.sync.get('total', function(budget){

                var newTotal = 0
                if (budget.total){
                    newTotal += budget.total
                }
                newTotal +=  parseInt(clickedData.selectionText);
                alert(newTotal);

                chrome.storage.sync.set({total: newTotal}, function(){
                    alert("Updated.")
                });
            });
        }
    }
});


chrome.storage.onChanged.addListener(function(changes, storageName){
   chrome.browserAction.setBadgeText({"text":changes.total.newValue.toString()});

});