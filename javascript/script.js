$( document ).ready (function() {
  const date = Date.now()
  const conferenceDate = '2022-05-15'
  function countCertainDays(days, d0, d1 ) {
    var ndays = 1 + Math.round((d1-d0)/(24*3600*1000));
    var sum = function(a,b) {
      return a + Math.floor( (ndays+(d0.getDay()+6-b) % 7 ) / 7 ); };
    return days.reduce(sum,0);
  }
  const toadsTillConference = countCertainDays([3], new Date(date), new Date(conferenceDate))
        $('#toads').text( `${toadsTillConference} toads till conference` );

        $( '#toad-img' ).hover(
            function(){
              $( this ).effect( 'shake', {distance:5} );
              start();
              stop();
          }
          );


        const start = () => {
          setTimeout(function() {
              confetti.start()
          }, 50);
        };


        const stop = () => {
            setTimeout(function() {
                confetti.stop()
            }, 1500); 
        };

        start();
        stop();

});
