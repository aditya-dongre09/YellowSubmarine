$( ".inner-switch" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
      $( "body" ).removeClass( "dark" );
      
      $( ".inner-switch" ).removeClass( "fas fa-cloud-moon" );
      $( ".inner-switch" ).addClass( "fas fa-sun" ).css('color','#f09713');

    } else {
      $( "body" ).addClass( "dark" );
      $( ".inner-switch" ).removeClass( "fas fa-sun" );
      $( ".inner-switch" ).addClass( "fas fa-cloud-moon" ).css('color', '#ffffff');;
      $( ".inner-switch" ).text( "" );
      $( "parallax" ).css('background-color','rgba(0,0,0,0.1)');

    }
});