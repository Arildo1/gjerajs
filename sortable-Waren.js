$(function () { //jQueryUI stuff
    $('#sortableWarens').sortable({
        // change: function (event, ui) {
        //     rearrangeSidePanel()
        // },
        start: function (event, ui) {
            iBefore = ui.item.index();
        },
        update: function (event, ui) {
            iAfter = ui.item.index();

            evictee = $('#resultWarenSide div:eq(' + iAfter + ')');
            evictor = $('#resultwarenSide div:eq(' + iBefore + ')');

            evicteeOne = $('#resultWarenBottom div:eq(' + iAfter + ')');
            evictorOne = $('#resultwarenBottom div:eq(' + iBefore + ')');

            evictee.replaceWith(evictor);
            if (iBefore > iAfter)
                evictor.after(evictee);
            else
                evictor.before(evictee);

            evicteeOne.replaceWith(evictorOne);
            if (iBefore > iAfter)
                evictorOne.after(evicteeOne);
            else
                evictorOne.before(evicteeOne);
        }
    });
    $('#sortableWarens').disableSelection();
});
var incrementalIDv2 = 0;
function addElementTwo(){

    //draggable divs parent
    var ul = document.getElementById('sortableWarens');
    var parentDivSide = document.getElementById('resultWarenSide');
    var parentDivBottom = document.getElementById('resultWarenBottom');
    var warenWrapDiv = document.createElement('div');

    // just testing
    var testElementBase = document.createElement('p');
    testElementBase.innerText = ' paragraf testimi' + incrementalIDv2;
    testElementBase.id = 'dodolalala' + incrementalIDv2;

    var testElementBottom = document.createElement('p');
    testElementBottom.innerText = ' paragraf testimi' + incrementalIDv2;
    testElementBottom.id = 'dodolalalaBottom' + incrementalIDv2;

    var testElementSide = document.createElement('p');
    testElementSide.innerText = ' paragraf testimi' + incrementalIDv2;
    testElementSide.id = 'dodolalalaSide' + incrementalIDv2;

    var testBottom = document.createElement('div');
    var testSide = document.createElement('div');

    warenWrapDiv.appendChild(testElementBase);
    ul.appendChild(warenWrapDiv);

    var delBut = document.createElement('button');

    delBut.innerText = '-';
    delBut.id = 'delButton' + incrementalIDv2;

    delBut.onclick = function() {
        warenWrapDiv.remove();
        testSide.remove();
        testBottom.remove();
    };
    warenWrapDiv.appendChild(delBut);

    testSide.appendChild(testElementSide);
    parentDivSide.appendChild(testSide);

    testBottom.appendChild(testElementBottom);
    parentDivBottom.appendChild(testBottom);

    //creating elements for main waren divs
    //creating elements for side waren div
    //creating elements for bottom waren div

    $(document).ready(() => {
        // Starts listening for changes in the root HTML element of the page.
        var s = $('#sortableWarens');
        mutationObserver.observe(document.documentElement, {
            attributes: true,
            characterData: true,
            childList: true,
            subtree: true,
            attributeOldValue: true,
            characterDataOldValue: true
        });
    })

    incrementalIDv2 = incrementalIDv2 + 1;
}