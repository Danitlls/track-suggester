$(document).ready(function(){
  $("#quiz").submit(function(event){
    event.preventDefault();

    // create variables and asign values from input.
    var detail = parseInt($("input:radio[name=detail]:checked").val());
    var logic = parseInt($("input:radio[name=logic]:checked").val());
    var company = parseInt($("input:radio[name=company]:checked").val());
    var art = parseInt($("input:radio[name=art]:checked").val());
    var lenguage = [];
    $.each($("input[name=Options]:checked"), function(){
        lenguage.push($(this).val());
    });
    // console.log(typeof(detail));
    //   console.log(typeof(logic));

    // alert("My favourite lenguages are: " + lenguage.join(", "));
    // Variables from survey:

    var career1;
    var career2;
    var career3;
    //logic to return results from survey.
    // if (detail === "" || logic === "" || company === "" || art === ""){
    //   alert("")
    // }

    if (detail === 1 && logic === 1 && art === 1){
      career1 = "Java";
      career2 = "C# and .Net";
      career3 = "PHP and Dupal";
    } else if(detail === 1 && logic === 3 && art === 3){
      career1 = "CSS and Design";
      career2 = "Ruby and Rails";
      career3 = "JavaScript";
    } else if(detail === 1 && logic === 1 && company === 1){
      career1 = "C# and .Net";
      career2 = "Java";
      career3 = "Ruby and Rails";
    } else if (detail === 3 && logic === 2 && art === 1){
      career1 = "probably not in the tech field";
      career2 = "taking intro classes to try it";
      career3 = "decide";
    } else{
      alert("Please complete all the filds");
    }

    $("#hidden").show();
    $("#career1").text(career1);
    $("#career2").text(career2);
    $("#career3").text(career3);
    console.log(career1);




  });
});
