// Check to see if "None" in the section is selected
// element is assume to be a jQuery object
function isNoneChecked(element) {
    let isChecked = false;
    // Getting the parent's parnet element, which in this case, we are trying to
    // get the div element that contains all menu items within this section. (i.e. Entrees, Sides, etc.)
    let parentElement = element.parent().parent();
    // Then from that section, get all label elements, since our end goal is to get all checked checkboxes.
    // And all checkbox inputs are within label elements. 
    let labelElements = parentElement.find("label");
    // From all the label elements within the section, find all checkboxes that are checked.
    let checkedElements = labelElements.find(":checked");

    // We only need to check if "None" is checked when there are more than 1 checkboxes checked
    if(checkedElements.length > 1){
        // For each of the checkboxes that are checked, see if label(parent) element's text includes
        // "None" in them. If so, we know that "None" and other menu items are selected, return true.
        checkedElements.each(function() {
            if($(this).parent().text().includes("None")){
                isChecked = true;
                return false;
            }
        })
    }
    
    return isChecked;
}

//create dict of image id dicts of food category dicts of boolean values
function createDict()
{
    let imgIdsArr = $("img[id^='image']");

    for(var i = 0; i < imgIdsArr.length; i++)
    {
        let picId = imgIdsArr[i].id.slice(imgIdsArr[i].id.lastIndexOf("e")+1);
        dict[picId] = {
            "entrees" : false,
            "sides" : false,
            "fruits and vegetables" : false,
            "beverages" : false,
            "miscellaneous" : false,
            "desserts" : false
        }
    }
}

//checks if element has at least one checkbox checked
function isFoodCatChecked(element)
{
    // Getting the parent's parnet element, which in this case, we are trying to
    // get the div element that contains all menu items within this section. (i.e. Entrees, Sides, etc.)
    let parentElement = element.parent().parent();
    // Then from that section, get all label elements, since our end goal is to get all checked checkboxes.
    // And all checkbox inputs are within label elements. 
    let labelElements = parentElement.find("label");
    // From all the label elements within the section, find all checkboxes that are checked.
    let checkedElements = labelElements.find(":checked");

    // We only need to check if "None" is checked when there are more than 1 checkboxes checked
    if(checkedElements.length < 1){
        return false; //length of checkedElements is 0, there are no checked elements
    }
    //a list of checkedElements is >= 1, therefore there is at least one checked element
    return true; 
}