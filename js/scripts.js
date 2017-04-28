$(document).ready(function(){
  $("#quiz").submit(function(event){
    event.preventDefault();

    var detail = $("input:radio[name=detail]:checked").val();
    var logic = $("input:radio[name=logic]:checked").val();
    var company = $("input:radio[name=company]:checked").val();
    var art = $("input:radio[name=art]:checked").val();
    var lenguage = [];
    $.each($("input[name=Options]:checked"), function(){
        lenguage.push($(this).val());

    });
    console.log(lenguage);
    // alert("My favourite lenguages are: " + lenguage.join(", "));


  });
});
