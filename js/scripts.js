$(document).ready(function(){
  $("#quiz").submit(function(event){
    event.preventDefault();

    // create variables and asign values from input.
    var detail = parseInt($("input:radio[name=detail]:checked").val());
    var logic = parseInt($("input:radio[name=logic]:checked").val());
    var company = parseInt($("input:radio[name=company]:checked").val());
    var art = parseInt($("input:radio[name=art]:checked").val());
    var language = [];
    $.each($("input[name=Options]:checked"), function(){
        language.push($(this).val());
    });
    // console.log(typeof(detail));
      // console.log(language);

    // Variables from survey:
    var career1;
    var career2;
    var career3;
    var lengua;

    //logic to return results from survey.
    if (detail === 1 && logic === 1 && art === 1 && company === 1){
      career1 = "Java";
      career2 = "C# and .Net";
      career3 = "PHP & Drupal";
    } else if(detail === 1 && logic === 3 && art === 3 && company === 2){
      career1 = "CSS and Design";
      career2 = "Ruby and Rails";
      career3 = "JavaScript";
    } else if(detail === 1 && logic === 1 && company === 1 ){
      career1 = "C# and .Net";
      career2 = "Java";
      career3 = "Ruby & Rails";
    } else if(detail === 2 || logic === 2 || art === 2){
      career1 = "CSS and Design";
      career2 = "PHP & Drupal";
      career3 = "JavaScript";
    } else if (detail === 3 && logic === 2 && art === 1){
      career1 = "probably not in the tech field";
      career2 = "taking intro classes to try it";
      career3 = "decide";
    } else{
      alert("Please complete all of the fields");
      $("#hidden").hide(100);
    }

    //coment about the languages that the user selected:
    if( language == "none of above"){
      language = "none of the above programming languages, "
      lengua = " it would be great to start exploring that!";
    }else if (language.length !== 0 ){
      lengua = " It's awesome that you already know that! Keep learning!!";
    }

    //display the messages or results:
    $("#career1").text(career1);
    $("#career2").text(career2);
    $("#career3").text(career3);
    $("#language").text(language);
    $("#iflanguage").text(lengua);
    $(".text").fadeOut(1200);
    $(".survey").animate({width: "45%"}, 1600);
    $("#hidden").fadeIn(1800);

  });
});
