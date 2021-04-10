$(document).ready(function(){

  $(".lesson").hide();
  $("#testPic2").hide();
  $("#testPic4").hide();
  $("#test-p4").hide();

  //1
  $(".first-btn").click(function(){
    $(".lesson1").show()
  });

  $(".lesson1Btn").click(function(){
    $("#testPic").hide()
  });

  
  //2
  $(".second-btn").click(function(){
    $(".lesson2").show()
  });

  $(".lesson2Btn").click(function(){
    $("#testPic2").show()
  });
  
  //3
  $(".third-btn").click(function(){
    $(".lesson3").show()
  });

  $(".lesson3Btn").click(function(){
    $("#test-p").toggle()
  });

  //4
  $(".forth-btn").click(function(){
    $(".lesson4").show()
  });

  $(".lesson4Btn").click(function(){
    $("#testPic3").slideUp()
  });

  //5
  $(".fifth-btn").click(function(){
    $(".lesson5").show()
  });

  $(".lesson5Btn").click(function(){
    $("#testPic4").slideDown()
  });

  //6
  $(".sixth-btn").click(function(){
    $(".lesson6").show()
  });

  $(".lesson6Btn").click(function(){
    $("#test-p2").slideToggle()
  });

  //7
  $(".seventh-btn").click(function(){
    $(".lesson7").show()
  });

  $(".lesson7Btn").click(function(){
    $("#test-p3").fadeOut()
  });

  //8
  $(".eighth-btn").click(function(){
    $(".lesson8").show()
  });

  $(".lesson8Btn").click(function(){
    $("#test-p4").fadeIn()
  });

  //9
  $(".ninth-btn").click(function(){
    $(".lesson9").show()
  });

  $(".lesson9Btn").click(function(){
    $("#addClass").addClass("addClass")
  });

  //10
  $(".10th-btn").click(function(){
    $(".lesson10").show()
  });

  $(".lesson10Btn").click(function(){
    $("#testDiv").css("background-color","lightblue")
  });

  //11
  $(".11th-btn").click(function(){
    $(".lesson11").show()
  });

  $(".lesson11Btn").click(function(){
    $("#test-p5").after(" It's amazing")
  });

  //12
  $(".12th-btn").click(function(){
    $(".lesson12").show()
  });

  $(".lesson12Btn").click(function(){
    $("#test-p6").before(" It's amazing")
  });

  //14
  $(".14th-btn").click(function(){
    $(".lesson14").show()
  });

  $(".lesson14Btn").click(function(){
    $("#test-p7").append(", Woow it's appended!")
  });


  //16
  $(".16th-btn").click(function(){
    $(".lesson16").show()
  });

  $(".lesson16Btn").click(function(){
    $(this).text("Wooow!");
  });

  //17
  $(".17th-btn").click(function(){
    $(".lesson17").show()
  });

  //18
  $(".18th-btn").click(function(){
    $(".lesson18").show()
  });

  $("#hover").hover(function() {
    $( this ).css("background-image","url(./testPic.jpeg)");
    },function() {
      $( this ).css("background-image","url(./testPic5.jpeg)");
      });
});
