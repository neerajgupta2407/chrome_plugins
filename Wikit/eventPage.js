var menuItem = {
    "id": "wikit",
    "title": "Wikit",
    "contexts": ["selection"]
};


chrome.contextMenus.create(menuItem);


function fixedEncodeURI(str) {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}

chrome.contextMenus.onClicked.addListener(function (clickedData) {
    // alert(clickedData.menuItemId);
    if (clickedData.menuItemId == "wikit" && clickedData.selectionText) {

        var wikiUrl = "https://en.wikipedia.org/wiki/" + fixedEncodeURI(clickedData.selectionText);

        var windowObj = {
            url: wikiUrl,
            type: "popup",
            top: 5,
            left: 5,
            width: screen.availWidth / 2,
            height: screen.availHeight / 2
        };
        // alert(wikiUrl);
        chrome.windows.create(windowObj, function () {

        })
    }
});
