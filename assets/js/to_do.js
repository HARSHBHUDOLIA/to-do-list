//Two ways to add functionalities, I will write both and comment out the lengthier one.


// This is the lengthier code that tells the logic
// $('li').click(function(){
//   console.log($(this).css('color'))
//   if($(this).css('color')==='rgb(128, 128, 128)')
//   {
//     $(this).css({
//       color:'black',
//       textDecoration:'none'
//         })
//   }
//   else{
//     $(this).css({
//       color:'grey',
//       textDecoration:'line-through'
//         })
//   }
// })


//This is the shorter version and one that should be used by coders

$('ul').on('click','li', function(){
  $(this).toggleClass('completed');
})

$('ul').on('click','span',function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove()
  })
  event.stopPropagation()
})

$('input[type="text"]').keypress(function(event){
  if(event.which==13)
  {
    let textInput=$(this).val();
    $('ul').append(`<li><span><i class="fa fa-trash"></i></span> ${textInput} </li>`)
  }
})

$('.fa-plus').click(function(){
  $('input[type="text"]').fadeToggle();
})
