var  num;


function fun()
{
    var  num =  document.getElementById('get-number').value;
    console.log(num);
    const fun2 = setInterval(() => {
    
        if(num<=0)
        {
            $('.header-section').css({
                "filter":"blur(20px)",
            
                
            

            });
            $('#first').css({
                "filter":"blur(20px)",
            
                
            

            });
            $('.sucess').html("<h1><i>Let's  Start<i><h1>")
            $('.sucess').css({
                "position": "absolute",
                "font-size": "3rem",
                "margin-top": "-10vh"
               });
            clearInterval(fun2);
        }
    
        $('#result').text(num);
        num -=1;
        
    }, 1000);
}



$('.theme').click(()=>{
    
    $('body').addClass('back');
})

$()