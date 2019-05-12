$(document).on('click', '.eat', function (event) {
    event.preventDefault();
    console.log('eat has been clicked');
    var id = $(this).attr('data-id');
    console.log(id)
    $.ajax({
        url: '/api/burger/' + id,
        method: 'PUT',
        data: {
            burger_name: $('#burger').val().trim()
        }
    }).then(function(serverResponse){
        console.log(serverResponse);
        location.reload();
    })
})
$(document).on('click', '.delete', function (event) {
    event.preventDefault();
    console.log('delet has been clicked')
    var id = $(this).attr('data-id');
    console.log(id)
    $.ajax({
        url: '/api/burger/' + id,
        method: 'DELETE',
        data: {
            burger_name: $('#burger').val().trim()
        }
    }).then(function (serverResponse) {
        console.log(serverResponse);
        location.reload();
    })
})
$(document).on('click', '#addBurger', function (event) {
    event.preventDefault();
    console.log('add has been clicked');
    $.ajax({
        url: '/api/burger',
        method: 'POST',
        data: {
            burger_name: $('#burger').val().trim()
        }
    }).then(function(serverResponse){
        console.log(serverResponse);
        location.reload();
    })
})