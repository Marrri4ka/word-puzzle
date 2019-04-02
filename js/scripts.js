$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    // var vowels = "aeiouy";
    var sentences = $("input#sentence").val();


    for (i=0; i < sentences.length; i++){
      if(sentences[i].match(/[aeiouAEIOU]/gi)) {
      sentences = sentences.replace(sentences.charAt(i), "-");
      $("#result").text(sentences);
      $("#result").show();

    }
    }


  });

});
