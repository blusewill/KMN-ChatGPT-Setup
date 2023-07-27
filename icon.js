javascript:(function() {
    var customImageURL = "https://images.plurk.com/1NWArl2r731w0d8S2ko1zs.png";
    var divsWithSVG = document.querySelectorAll('div.w-\\[30px\\] > div > svg');
    
    divsWithSVG.forEach(function(svgElement) {
        var parentDiv = svgElement.closest('div.w-\\[30px\\]').parentNode;
        svgElement.remove();
        parentDiv.innerHTML = '<img src="' + customImageURL + '" alt="機器狼ICON" width="30" height="30">';
    });
})();
