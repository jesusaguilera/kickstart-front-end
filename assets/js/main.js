$( document ).on( 'ready', function() {

  $('.countdown').ClassyCountdown({
    //flat-colors, flat-colors-wide, flat-colors-very-wide, 
    // flat-colors-black, black, black-wide, black-very-wide, 
    // black-black, white, white-wide, 
    // white-very-wide or white-black
    theme: 'flat-colors',


    // end time
    end: $.now() + 120,
    now: $.now(),

    // whether to display the days/hours/minutes/seconds labels.
    labels: true,

    style: {
      // element: "",
      textResponsive: .5,
      
      days: {
        gauge: {
          thickness: .01,
          fgColor: '#e86b01',
        },
        textCSS: '',
      },
      hours: {
        gauge: {
          thickness: .01,
          fgColor: '#e86b01',
        },
        textCSS: ''
      },
      minutes: {
        gauge: {
          thickness: .01,
          fgColor: '#e86b01',
        },
        textCSS: ''
      },
      seconds: {
        gauge: {
          thickness: .01,
          fgColor: '#e86b01',
        },
        textCSS: ''
      },
    },

    // object that specifies different language phrases for says/hours/minutes/seconds as well as specific CSS styles.
    labelsOptions: {
      lang: {
        days: 'Days',
        hours: 'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds'
      },
      style: 'font-size: .5em;'
    },


  });

} );
