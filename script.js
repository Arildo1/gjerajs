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
            evictee = $('#div-rightM p:eq(' + iAfter + ')');
            evictor = $('#div-rightM p:eq(' + iBefore + ')');

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
    var div = document.createElement('div');
    var para = document.createElement('p');//para inside div
    var para2 = document.createElement('p');
    var inp = document.createElement('input');
    var but = document.createElement('button');
    //add attributes - parents first
    div.classList.add('ui-state-default');
    div.id = 'div-'+incrementalID;
    para.innerText = 'Test paragraph '+incrementalID;
    para.id = 'para-'+incrementalID;
    // para2.classList.add('ui-state-default');
    para2.id = 'para2-'+incrementalID;
    inp.setAttribute('type', 'text');
    inp.placeholder = 'text';
    inp.id = 'input-'+incrementalID;
    but.innerText = '-';
    but.id = incrementalID;
    //event listeners
    inp.onkeyup = function () { //updates right para to match middle inputs
        para2.innerText = inp.value;
    }
    but.onclick = function() { //removes div and right input associated
        // alert('test '+but.id);
        div.remove();
        para2.remove();
    
    div.onmouseup = function () {
        var summaryArray = [];
        var units;
        setTimeout(function(){
            units = ul.childNodes;
            for(let i=1;i<units.length;i++)
            {
                var toSlice = units[i].id;
                var unitsList = parseInt(toSlice.slice(
                    toSlice.indexOf('-' + units.length),units[i].length));
                summaryArray.push(unitsList);
            }

        }, 5);
    }
        
    };
    //append children
    div.appendChild(para);
    div.appendChild(inp);
    div.appendChild(but);
    //append to final parents
    ul.appendChild(div);
    parentDiv.appendChild(para2);
    //increment ID
    incrementalID += 1;
}
//check for mutations
var mutationObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        // var ulTarget = mutation.target;
        // console.log(ulTarget);
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
    document.getElementById("Div"+ numeron).style.display = "initial";
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
    if(document.getElementById("link0").href!=="javascript: void(0)"){
        document.querySelectorAll(".goThrough").forEach(a=>a.style.display = "none");
        document.getElementById("Div0").style.display = "initial";
    }
}

function goToSecondDiv(){
    if(document.getElementById("link1").href!=="javascript: void(0)"){
        document.querySelectorAll(".goThrough").forEach(a=>a.style.display = "none");
        document.getElementById("Div1").style.display = "block";
    }
}

function goToThirdDiv(){
    if(document.getElementById("link2").href!=="javascript: void(0)") {
        document.querySelectorAll(".goThrough").forEach(a => a.style.display = "none");
        document.getElementById("Div2").style.display = "block";
    }
}
