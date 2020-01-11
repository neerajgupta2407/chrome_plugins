$(function () {
    chrome.storage.sync.get('limit', function (budget) {
        $('#limit').val(budget.limit);
    })


    $("#saveLimit").click(function () {
        var limit = $('#limit').val();
        if (limit){
            chrome.storage.sync.set({'limit':limit}, function () {
                close();
            })
        }
    });

    $("#resetTotal").click(function () {

        chrome.storage.sync.set({'total':0}, function () {

            var notificationObj = {
                type:"basic",
                title: "Total Reset.",
                message: "Total amount has been reset to 0",
                iconUrl: "images/icon48.png"
            }

            chrome.notifications.create('resetNotif', notificationObj);
            console.log(notificationObj);
        })
    });


});