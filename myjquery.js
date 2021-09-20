$(document).ready(function () {

    //Your jqery code here
    console.log("I am using new file po");
    console.log("We are using jqery");
    //$ jQery Syntax looks like this
    //$ ('selector').action()

    //click on all the p elements. This is an example of element selector
    // $('p').click(); // click on p, koi bhi p pe click karega to function activate kar do 
    $('p').click(function () {
        console.log('you  clicked on p', this);
        // $("#id').hide();
        // $('.class').hide();
    });

    // $('p').dblclick(function () {
    //     console.log('you doubled clicked on p', this);
    //     // $("#id').hide();
    //     // $('.class').hide();
    // });
    // $('p').mouseenter(function () {
    // console.log('you entered:', this);
    //     // $("#id').hide();
    //     // $('.class').hide();
    // });
    // $('p').mouseleave(function () {
    //     console.log('you leave:', this);
    //     // $("#id').hide();
    //     // $('.class').hide();
    // });
    // $('p').mousedown(function () {
    //     console.log('you mousedown:', this);
    //     // $("#id').hide();
    //     // $('.class').hide();
    //     // Trigger when press any button 
    // });
    // $('p').mouseup(function () {
    //     console.log('you mouseup:', this);
    //     // $("#id').hide();
    //     // $('.class').hide();
    //     // Trigger when press and leave any button 
    // });
    // $('p').mouseup(function () {
    //     console.log('you mousedown:', this);
    //     // $("#id').hide();
    //     // $('.class').hide();

    // });
    // $('p').hover(function () {
    //     console.log('you hover on:', this);
    //    //mouse enter and leave combination

    // });
    // $('p').hide();


    //There are three main  types of selectors in jQery
    // 1: element selector
    // 2: id selector
    // 3: class selector    

    //1 :element selector - This is an example of element selector which click on on all p
    // $('p').click();

    //2 ID selector - This is an example of id selectors
    // $('#second').click();

    //3 Class selector -- 
    // $('.odd').click();

    //other selectors
    // $('*').click()// click on all the elements
    // $('p.odd').click //click on all elements
    // $ ('p:first').click // click on all the elements

    //Events in jQuery
    // mouse event = click, dbclick, mousecenter, mouseleave
    // keyboard event = keypress, keydown,key up MediaKeyStatusMap
    // form event= submit, change, foucs, blur
    // document/window event= load, resize, scroll, unload 

    //Demoing on method, purpose to add multiple events in one selector
    $('p').on(
        {
            click: function () {
                console.log('Thanks for clicking', this);
            },
            mouseleave: function () {
                console.log('mouse leave')
            }
        })

    //$('#wiki').hide(1000)}) to hide element after 1000 milsecond
    // $('#wiki').hide(1000, function(){
    //     console.log("hidden");
    // })
    // $('#wiki').show(1000, function(){
    //     console.log("show");
    // })
    // use above code to make some animation
    //    $('#but').click(function(){
    //        $('#wiki').toggle(1000);
    //    })
    //    $('#but').click(function(){
    //        $("#wiki").fadeTo("slow", 0.17);
    //    })

    //  Slide method-- speed and callback back function are optional 
    //  $(selector).slideDown(speed,callback);
    //    $("#wiki").slideUp(1000, function(){
    //        console.log(done);
    //    });
    //    $("#wiki").slideDown(1000);
    //    $("#wiki").slideToggle(1000);

    //     Animate function in Jquery
    //    $("#wiki").animate({
    //    opacity:0.3,
    //    height:'150px',
    //    width:'350px'
    //    }, 2000) 

    $("#wiki").animate({ opacity: 0.3 }, 1000);
    $("#wiki").animate({ opacity: 0.9 }, 1000);
    $("#wiki").animate({ width: '350px' }, 1000);

    //https://www.w3schools.com/jquERy/jquery_stop.asp

    // help to stop animation
    // $("#wiki").stop(function () {
    //     console.log('stopped');
    // })

    // Changing DOM  
    //https://www.youtube.com/watch?v=9JuttvE6Zy0    
    // .val to change the value in form field
    // .html to change the  in normal with in tag HTML
    // .text to show text

    // $('#ta').val('setting it to harry');
    //     $('#ta').html('setting it to harry');
    //     $('#ta').html('setting it to harry3');
    //     $('#inp').html('setting it to harry3');
    //     $('#inp').val('setting it to harry3');
    //     $('#inp').empty()
    //     $('#wiki').empty()
    //     $('#wiki').text('you are good')
    //     $('#wiki').remove()

    //     $('#wiki').addClass('myclass')
        // $('#wiki').addClass('myclass2')
        // $('#wiki').removeClass('myclass2')
        // $('#wiki').css('background-color', 'red')
        // $('#wiki').css('background-color')

        //AJAX: Art of exchaging data wihtin  servier without loading the page

        // $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(data); })

        // $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(status); })

        // $.post('https://code.jquery.com/jquery-3.3.1.js',
        //     { name: 'harry', channel: 'code with harry' },
        //     function (data, status) { alert(status) });

});