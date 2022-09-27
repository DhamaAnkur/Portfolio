$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }
        else {
            $('.navbar').removeClass("sticky");
        }

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass('show');
        }
        else {
            $('.scroll-up-btn').removeClass('show');
        }

    });


    //slide up script

    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    })


    // typing script start 
      var typed = new Typed(".typing", {
      strings : ["Developer", "Designer" , "Engineer" , "Fresher"],
      typeSpeed : 100 ,
      backSpeed : 60 ,
       loop : true 
      });

      var typed = new Typed(".typing-2", {
        strings : ["Developer", "Designer" , "Engineer" , "Fresher"],
        typeSpeed : 100 ,
        backSpeed : 60 ,
         loop : true 
        });

    //toggle  menu/navbar  script
    $('.menu-btn').click(() => {
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

     // Download CV script Starts 

     let button = document.querySelector(".about a");
        button.addEventListener("click" , ()=>{
            // alert("sucess");
            const span = document.querySelector( "a span");
            button.style.paddingRight = "10px";
            span.style.visibility = "visible" ;
            setTimeout(()=>{
                span.style.visibility = "hidden";
                button.style.paddungRight = "0px";
            } ,1000);
        })

});

