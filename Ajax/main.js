$(document).ready(function () {
    // bring in content from another web page 
    // if in different directory, specify the path 
    // $('#result').load('test.html');

    // use call back funrtion to test for error
    //    $('#result').load('test.html', function (responseTxt, statusTxt, xhr) {
    //        if (statusTxt == "success") {
    //            alert('Success!');
    //        } else if (statusTxt == "error") {
    //            alert('Error: ' + xhr.statusText);
    //        }
    //    });

    //    $.get('test.html', function (data) {
    //        $('#result').html(data);
    //    });

    // get json data
    //    $.getJSON('users.json', function (data) {
    //        $.each(data, function (i, user) {
    //            $('ul#users').append('<li>' + user.firstName + '</li>');
    //        });
    //    });

    // Ajax method to getting json 
    //    $.ajax({
    //        // put objects 
    //        method: 'GET',
    //        url: 'http://jsonplaceholder.typicode.com/posts',
    //        dataType: 'json'
    //    }).done(function (data) {
    //        $.map(data, function (post, i) {
    //            $('#result').append('<h3>' + post.title + '</h3>' + '<p>' + post.body + '</p>');
    //        });
    //    });

    // making  post request 
    $('#postForm').submit(function (e) {
        e.preventDefault();
        var title = $('#title').val();
        var body = $('#vody').val();
        var url = $(this).attr('action');

        $.post(url, {
            tite: title,
            body: body
        }).done(function (data) {
            console.log('Post Saved');
            console.log(data);
        });


    });








});