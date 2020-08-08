export function updateDatDropdown(target, list) {
    let innerHTMLStr = "";
    if (list.constructor.name == 'Array') {
        for(var i=0; i<list.length; i++) {
            var str = "<option value='" + list[i] + "'>" + list[i] + "</option>";
            innerHTMLStr += str;
        }
    }

    if (list.constructor.name == 'Object') {
        for(var key in list){
            var str = "<option value='" + list[key] + "'>" + key + "</option>";
            innerHTMLStr += str;
        }
    }
    if (innerHTMLStr != "") target.domElement.children[0].innerHTML = innerHTMLStr;
}