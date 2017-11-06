$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    submitText();
  });            
});            


function submitText() {
	var text = $('#textinput').val();
	alert("You have entered the number: " + text);
    storeValue();
}

function storeValue(key, value) {
	//add some code to store the key-value pair in persistant storage 
    var text = $('#textinput').val();
    window.localStorage.setItem("Stored Value", text);
}