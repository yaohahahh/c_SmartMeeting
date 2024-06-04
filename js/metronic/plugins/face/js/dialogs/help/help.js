
function switchTab( tabParentId ) {
    var tabElements = $G( tabParentId ).children,
        tabHeads = tabElements[0].children,
        tabBodys = tabElements[1].children;

    for ( var i = 0, length = tabHeads.length; i < length; i++ ) {
        var head = tabHeads[i];
        if ( head.className === "focus" )clickHandler(tabHeads,tabBodys, head );
        head.onclick = function () {
            clickHandler(tabHeads,tabBodys,this);
        }
    }
}
switchTab("helptab");

document.getElementById('version').innerHTML = parent.UE.version;