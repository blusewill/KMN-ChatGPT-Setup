javascript:(function() {
    var customImageURL = "https://images.plurk.com/1NWArl2r731w0d8S2ko1zs.png";
    var divsWithSVG = document.querySelectorAll('div.relative.p-1.rounded-sm.h-9.w-9 > svg');
    
    divsWithSVG.forEach(function(svgElement) {
        var parentDiv = svgElement.closest('div.relative.p-1.rounded-sm.h-9.w-9');
        svgElement.remove();
        parentDiv.innerHTML = '<img src="' + customImageURL + '" alt="機器狼ICON" width="36" height="36">';
        parentDiv.style.backgroundColor = 'transparent';
        parentDiv.style.padding = '0';
    });
})();
