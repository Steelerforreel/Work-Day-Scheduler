$( "p" ).last().addClass( "selected" );

$('.saveBtn').on('click', function () {
    var textDescription = $(this).siblings('.description').val()
    var hour = $(this).parent().attr('id')
    localStorage.setItem(hour, textDescription)
  })

function timeBlock() {
  var currentHour = dayjs().hour();
  
$('.time-block').each(function () {
  var difHour = $(this).data("time");

    if (difHour < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    }
    else if (difHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    }
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  })
}

  for(i = 9; i <= 17; i++) {
    $('#hour-' + i).children('.description').val(localStorage.getItem('hour-' + i))
  }

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
  if(dd<10) 
    {
      dd=`0${dd}`;
    } 

  if(mm<10) 
    {
    mm=`0${mm}`;
    } 
today = `${mm}/${dd}/${yyyy}`;

document.getElementById("currentDay").innerHTML = (today);

timeBlock();