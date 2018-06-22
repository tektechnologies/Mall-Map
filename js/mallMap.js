// alert("This is annoying!");
console.log("JavaScript is working.");

$(document).ready(function(){
    console.log("jQuery is ready...");    
    $("#sa").show();
    
    
    $('#mallMap a.dot').click(function(){
        
        $('#mallMap a.dot').removeClass('selected');
        $(this).addClass("selected");
        
        var storeClicked = $(this).attr("store");
        console.log(storeClicked);
        
        showDescription(storeClicked);
    });
    
    $('#storeCategories').change(function(){
        // start by detecting the new category
        var selectedCat = $('#storeCategories option:selected').val();
        // add a debug line for a quick check
        console.log(selectedCat);
        
        // if we are changing the category, deselect any selected store
        $('#mallMap a.dot').removeClass('selected');
        
        // change the description to the category
        showDescription(selectedCat);
        
        // if the category is 'sa' (show all), just fade in all the dots
        if(selectedCat == "sa") {
            $('#mallMap a.dot').fadeIn();
        } else { // otherwise, fade out unselected, fade in selected
            $('#mallMap a.dot[cat!="' + selectedCat + '"]').fadeOut();
            $('#mallMap a.dot[cat="' + selectedCat + '"]').fadeIn();
        }
    });
    
    //$('#mallMap').click(function(e){
    //    
    //    var offset = 12;
    //    var output = "left:" + (e.offsetX.valueOf() - offset) + "px; ";
    //    output += "top:" + (e.offsetY.valueOf() - offset) + "px;";
    //    console.log(output);
    //});
});

function showDescription(descriptionToShow) {
    $('div.description').fadeOut(); // hides all descriptions
    $('#' + descriptionToShow).fadeIn(); // fade, slide or show
}












