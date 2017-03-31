$(document).ready(function () {
    // css selction
    //    $('p.para1').css('color', 'red');
    //
    //    // if you want multiple css selectors - create an object 
    //    $('p.para1').css({
    //
    //        color: 'red',
    //        background: '#ccc'
    //
    //    });
    //
    //    // add and remove classes 
    //    //    $('.para2').addClass('myClass');
    //    //    $('.para2').removeClass('myClass');
    //
    //    // toggle classes
    //    $('#btn1').click(function () {
    //        $('.para2').toggleClass('myClass');
    //    });
    //
    //    // adding text to a div 
    //    // $('#myDiv').text('Hello World');
    //
    //    // adding html tags
    //    //$('#myDiv').html('<h3>Hello World</h3>');
    //
    //    //    // get values
    //    //    alert($('#myDiv').text());
    //
    //    // appening and prepending 
    //    // append: puts item in the end of the list 
    //    // prepend: puts item at the beginning of the list 
    //    $('ul').append('<li>Append List Item</li>');
    //    $('ul').prepend('<li>Prepend List Item</li>');
    //
    //    // append to and prepend to
    //    // take one element and appends to another 
    //    $('.para1').appendTo('.para2');
    //    $('.para1').prependTo('.para2');
    //
    //    // put html before an elemet 
    //    $('ul').before('<h4>Hello</h4>');
    //    // put html after an element 
    //    $('ul').after('<h4>World</h4>');
    //
    //    // take all the inner elements out
    //    $('ul').empty();
    //
    //    // remve element from DOM
    //    $('ul').detach();
    //
    //    // adding attributes to an element 
    //    // this attr will open a new window
    //    // target: the attribute 
    //    // value: _blank 
    //    $('a').attr('target', '_blank');

    // get element values using attr
    // select the element and pass in the attribute value you want 
    // alert($('a').attr('href'));

    // removing attributes 
    // this will remove the new link window because the target _blwnk is gone 
    // $('a').removeAttr('target');


    /*
    
    Wrapping Elements in other elements 
    
    */

    // wrapping paragraphs in an h1 tag
    // dont need the ending tag
    //    $('p').wrap('<h1>');
    //
    //    // this will wrap both paragraphs in the same h1 tag 
    //    $('p').wrapAll('<h1>');



    // adding an item to the list when user enters something in the text box and hitting enter 
    $('#newItem').keyup(function (e) {
        // get the code
        var code = e.which;
        // hitting enter is the code 13
        if (code == 13) {
            // prevent defualt behavior
            e.preventDefault();
            $('ul').append('<li>' + e.target.value + '</li>')
        }
    });


    /*
        Working with Arrays
    */

    //    var myArr = ['Brad', 'Kelly', 'Nate', 'Jode'];
    //
    //    // loopinf through arrays 
    //    // .each: to loop through array
    //    // i: index
    //    // value 
    //    $.each(myArr, function (i, val) {
    //        $('#users').append('<li>' + val + '</li>');
    //    });

    // getting a list to an array 
    // uses the toArray()
    var newArr = $('ul#list li').toArray();

    $.each(newArr, function (i, val) {
        console.log(val.innerHTML);
    });



});