chrome.runtime.sendMessage({todo: "showPageAction"});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

    if (request.todo == 'changeColor'){
        var addColor = "#" + request.clickedColor;
    }
    alert("in clhange." + addColor)
    $('.api').css('color', addColor);
    $('#body').css('color', addColor);

})