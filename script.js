//
// $(document).ready(function(){
//     $('[data-toggle="tooltip"]').tooltip();
// });
//
// $( function() { //jQueryUI stuff
//     $( '#sortable' ).sortable();
//     $( '#sortable' ).disableSelection();
// } );

$(function () { //jQueryUI stuff
    $('#sortable').sortable({
        // change: function (event, ui) {
        //     rearrangeSidePanel()
        // },
        start: function (event, ui) {
            iBefore = ui.item.index();
        },
        update: function (event, ui) {
            iAfter = ui.item.index();
            evictee = $('#div-rightM div:eq(' + iAfter + ')');
            evictor = $('#div-rightM div:eq(' + iBefore + ')');

            evictee.replaceWith(evictor);
            if (iBefore > iAfter)
                evictor.after(evictee);
            else
                evictor.before(evictee);
        }
    });
    $('#sortable').disableSelection();
});

function updateTopBotInputs(num) {
    var input, para;
    if(num === 0) { //first input
        input = document.getElementById('input-middleT');
        para = document.getElementById('p-rightT');
        para.innerText = input.value;
    }
    else { //second input
        input = document.getElementById('input-middleB');
        para = document.getElementById('p-rightB');
        para.innerText = input.value;
    }
    if (para.innerText === "")
        para.innerText = "Placeholder";
}
var incrementalID = 0;
function addElement() { //add draggable divs
    //get parents
    var ul = document.getElementById('sortable'); //draggable divs parent
    var parentDiv = document.getElementById('div-rightM'); //right paragraphs parent
    //create elements - parents first
    var bigDiv = document.createElement('div'); // encompassing Div
    var sideEquivs = document.createElement('div');// side div encompassing parent
    var bigDivTitle = document.createElement('div'); // div of title
    var bigDivTitleHx = document.createElement('h3'); // stop div name
    var innerDiv = document.createElement('div'); // div with infos
    var streetDiv = document.createElement('div'); // street input div
    var addressDiv = document.createElement('div'); // address div
    var addressInput = document.createElement('input');//input nr 1
    var addressErrorDiv = document.createElement('div');// address not empty validation div
    var linkToggle = document.createElement('a');// toggle additional info div on or off
    var additionalInfoDiv = document.createElement('div');//additional info div
    var rowDivOne = document.createElement('div');// additional info row 1
    var rowDivTwo = document.createElement('div');// additional info row 2
    var rowDivThree = document.createElement('div');// additional info row 3

    var rowDivOneStreet = document.createElement('div');
    var rowDivOneStreetInput = document.createElement('input');//input nr 2
    var rowDivOneStreetError = document.createElement('div');

    var rowDivOneHouseNr = document.createElement('div');
    var rowDivOneHouseNrInput = document.createElement('input');//input nr 3
    var rowDivOneHouseNrError = document.createElement('div');

    var rowDivTwoPost = document.createElement('div');
    var rowDivTwoPostInput = document.createElement('input');//input nr 4
    var rowDivTwoPostError = document.createElement('div');

    var rowDivTwoOrt = document.createElement('div');
    var rowDivTwoOrtInput = document.createElement('input');//input nr 5
    var rowDivTwoOrtError = document.createElement('div');

    var rowDivThreeLand = document.createElement('div');
    var rowDivThreeLandInput = document.createElement('input');// input nr 6
    var rowDivThreeLandError = document.createElement('div');

    var dateDiv = document.createElement('div'); // date encompassing div

    var accDateDiv = document.createElement('div'); // accurate date div
    var accDateDivInput = document.createElement('div');
    var accDateDivError = document.createElement('input');// input nr 7

    var startTimeDiv = document.createElement('div');
    var startTimeDivInput = document.createElement('input');//input nr 8

    var endTimeDiv = document.createElement('div');
    var endTimeDivInput = document.createElement('input');//input nr 9

    var sideTitle = document.createElement('p');
    var sideInput1 = document.createElement('p');
    var sideInput2 = document.createElement('p');
    var sideInput3 = document.createElement('p');
    var sideInput4 = document.createElement('p');
    var sideInput5 = document.createElement('p');
    var sideInput6 = document.createElement('p');
    var sideInput7 = document.createElement('p');
    var sideInput8 = document.createElement('p');
    var sideInput9 = document.createElement('p');

    // var para = document.createElement('p');//para inside div
    // var para2 = document.createElement('p');
    // var inp = document.createElement('input');
    var but = document.createElement('button');

    //add attributes - parents first

    bigDiv.classList.add('ui-state-default');
    bigDiv.id = 'div-'+incrementalID;
    bigDivTitleHx.innerText = 'stop nr' + (incrementalID +1);
    // para.innerText = 'Test paragraph '+incrementalID;
    // para.id = 'para-'+incrementalID;
    // // para2.classList.add('ui-state-default');
    // para2.id = 'para2-'+incrementalID;
    // inp.setAttribute('type', 'text');
    // inp.placeholder = 'text';
    // inp.id = 'input-'+incrementalID;
    but.innerText = '-';
    but.id = incrementalID;
    //event listeners
    // bigDivTitleHx.onkeyup = function () {  //updates right para to match middle inputs
        sideTitle.innerText = bigDivTitleHx.innerText;
    // }
    addressInput.onchange = function () { //updates right para to match middle inputs
        sideInput1.innerText = addressInput.value;
    }
    rowDivOneStreetInput.onchange = function () { //updates right para to match middle inputs
        sideInput2.innerText = rowDivOneStreetInput.value;
    }
    rowDivOneHouseNrInput.onchange = function () { //updates right para to match middle inputs
        sideInput3.innerText = rowDivOneHouseNrInput.value;
    }
    rowDivTwoPostInput.onchange = function () { //updates right para to match middle inputs
        sideInput4.innerText = rowDivTwoPostInput.value;
    }
    rowDivTwoOrtInput.onchange = function () { //updates right para to match middle inputs
        sideInput5.innerText = rowDivTwoOrtInput.value;
    }
    rowDivThreeLandInput.onchange = function () { //updates right para to match middle inputs
        sideInput6.innerText = rowDivThreeLandInput.value;
    }
    accDateDivInput.onchange = function () { //updates right para to match middle inputs
        sideInput7.innerText = accDateDivInput.value;
    }
    startTimeDivInput.onchange = function () { //updates right para to match middle inputs
        sideInput8.innerText = startTimeDivInput.value;
    }
    endTimeDivInput.onchange = function () { //updates right para to match middle inputs
        sideInput9.innerText = endTimeDivInput.value;
    }

    but.onclick = function() { //removes div and right input associated
        // alert('test '+but.id);
        bigDiv.remove();
        sideEquivs.remove();
    };

    $(document).ready(() => {
        // Starts listening for changes in the root HTML element of the page.
        var a = $('#sortable');
        mutationObserver.observe(document.documentElement, {
            attributes: true,
            characterData: true,
            childList: true,
            subtree: true,
            attributeOldValue: true,
            characterDataOldValue: true
        });
    })

    // bigDiv.onmouseup = function () {
    //     var summaryArray = [];
    //     var units;
    //     setTimeout(function(){
    //         units = ul.childNodes;
    //         for(let i=1;i<units.length;i++)
    //         {
    //             var toSlice = units[i].id;
    //             var unitsList = parseInt(toSlice.slice(
    //                 toSlice.indexOf('-' + units.length),units[i].length));
    //             summaryArray.push(unitsList);
    //         }
    //         var resonance;
    //         for(let j = 0; j<summaryArray.length; j++){
    //             resonance = 'para2-' + summaryArray[j];
    //             console.log(resonance);
    //             if(resonance !== document.getElementById('para2-' + j).id){
    //                 $('para2-' + summaryArray[j]).insertAfter('para2-' + j);
    //             }
    //
    //         }
    //
    //     }, 5);
    // }

    //append children
    bigDiv.appendChild(bigDivTitle);
    bigDivTitle.appendChild(bigDivTitleHx);

    bigDiv.appendChild(innerDiv);
    innerDiv.appendChild(addressDiv);
    addressDiv.appendChild(addressInput);//input nr 1
    addressDiv.appendChild(addressErrorDiv);
    //link toggle
    bigDiv.appendChild(linkToggle);
    // additional info div, toggable by the link above
    bigDiv.appendChild(additionalInfoDiv);
    // rows div part
    //row div one appended
    additionalInfoDiv.appendChild(rowDivOne);
    //row div one street input and error
    rowDivOne.appendChild(rowDivOneStreet);
    rowDivOneStreet.appendChild(rowDivOneStreetInput); //input nr 2
    rowDivOneStreet.appendChild(rowDivOneStreetError);
    //row div one house nr input and error
    rowDivOne.appendChild(rowDivOneHouseNr);
    rowDivOneHouseNr.appendChild(rowDivOneHouseNrInput); //input nr 3
    rowDivOneHouseNr.appendChild(rowDivOneHouseNrError);
    //row div 2 appended
    additionalInfoDiv.appendChild(rowDivTwo);
    //row div 2 post input and error
    rowDivTwo.appendChild(rowDivTwoPost);
    rowDivTwoPost.appendChild(rowDivTwoPostInput); //input nr 4
    rowDivTwoPost.appendChild(rowDivTwoPostError);
    //row div 2 ort inpur and error
    rowDivTwo.appendChild(rowDivTwoOrt);
    rowDivTwoOrt.appendChild(rowDivTwoOrtInput); //input nr 5
    rowDivTwoOrt.appendChild(rowDivTwoOrtError);
    //row div 3 land input and error
    additionalInfoDiv.appendChild(rowDivThree);
    rowDivThree.appendChild(rowDivThreeLand);
    rowDivThreeLand.appendChild(rowDivThreeLandInput); // input nr 6
    rowDivThreeLand.appendChild(rowDivThreeLandError);
    // date div part
    bigDiv.appendChild(dateDiv);
    dateDiv.appendChild(accDateDiv);
    accDateDiv.appendChild(accDateDivInput); // input nr 7
    accDateDiv.appendChild(accDateDivError);
    dateDiv.appendChild(startTimeDiv);
    startTimeDiv.appendChild(startTimeDivInput); // input nr 8
    dateDiv.appendChild(endTimeDiv);
    endTimeDiv.appendChild(endTimeDivInput); //input nr 9


    bigDiv.appendChild(but);
    // side div div appending bigger side div
    sideEquivs.appendChild(sideTitle);
    // appending paragraphs to side div
    sideEquivs.appendChild(sideInput1);
    sideEquivs.appendChild(sideInput2);
    sideEquivs.appendChild(sideInput3);
    sideEquivs.appendChild(sideInput4);
    sideEquivs.appendChild(sideInput5);
    sideEquivs.appendChild(sideInput6);
    sideEquivs.appendChild(sideInput7);
    sideEquivs.appendChild(sideInput8);
    sideEquivs.appendChild(sideInput9);

    //append to final parents
    ul.appendChild(bigDiv);
    parentDiv.appendChild(sideEquivs);

    //increment ID
    incrementalID += 1;
}
//check for mutations
var mutationObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        var ulTarget = mutation.target;
        console.log(ulTarget);
        // for(let i=0; i<incrementalID; i++) {
        //     let input = document.getElementById('input-'+i);
        //     let paragraph = document.getElementById('para2-'+i);
        //     paragraph.innerText = input.value;
        // }
    });
});
$(document).ready(() => {
    // Starts listening for changes in the root HTML element of the page.
    var a = $('#sortable');
    mutationObserver.observe(document.documentElement, {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true,
        attributeOldValue: true,
        characterDataOldValue: true
    });
})

//extras
var numeron = 0;
function goToNextPage(){
    document.getElementById("Div"+ numeron).style.display = "none";
    numeron = numeron + 1;
    if($('#Div'+ numeron).length === 0){

        document.getElementById("fward"+numeron).disabled = true;
    }
    else {
        document.getElementById("Div"+ numeron).style.display = "initial";
    }
    //var linkAct = document.getElementById("link" + numeron);
    //linkAct.setAttributeNode("href");
    document.getElementById("link" + numeron).href="#Div" + numeron;
    document.getElementById("link" + numeron).style.color = "blue";
    document.getElementById("link" + numeron).style.cursor = "default";

}

function goToPrevPage(){
    document.getElementById("Div"+ numeron).style.display = "none";
    numeron = numeron - 1;
    document.getElementById("Div"+ numeron).style.display = "initial";


}
function goToStartDiv(){
    //if(document.getElementById("link0").href!="javascript: void(0)"){
        document.querySelectorAll(".goThrough").forEach(a=>a.style.display = "none");
        document.getElementById("Div0").style.display = "initial";
        numeron = 0;
    //}
}

function goToSecondDiv(){
    if(document.getElementById("link1").href!=="javascript: void(0)"){
        document.querySelectorAll(".goThrough").forEach(a=>a.style.display = "none");
        document.getElementById("Div1").style.display = "block";
        numeron = 1;
    }
}

function goToThirdDiv(){
    if(document.getElementById("link2").href!=="javascript: void(0)") {
        document.querySelectorAll(".goThrough").forEach(a => a.style.display = "none");
        document.getElementById("Div2").style.display = "block";
        numeron = 2;
    }
}
