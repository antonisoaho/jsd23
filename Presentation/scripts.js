function getValue() {

    let e = document.getElementById("showInfo");
    let eValue = e.options[e.selectedIndex].value;

    let rParent = document.getElementById("results");
    let rChilds = rParent.children

    if(parseInt(eValue === 0)) {
        rParent.style.display = "none";
    } else {
        rParent.style.display = "flex";
    }

    for (var i = 0; i < rChilds.length; i++) {
        var r = rChilds[i];
        if (parseInt(eValue) != 0) {
            if (i === parseInt(eValue)) {
                r.style.display = "flex";
            } else {
                r.style.display = "none";
            }
        } else {
            rParent.style.display = "none";
        }
    }
    if(parseInt(eValue) != 0){
        var height = document.body.scrollHeight;
        window.scroll(0 , height);
    }

}
