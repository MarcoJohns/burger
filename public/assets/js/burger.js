$(document).on('click', '.eat', function (event) {
    event.preventDefault();
    console.log('eat has been clicked')
})
$(document).on('click', '.delete', function (event) {
    event.preventDefault();
    console.log('delet has been clicked')
})
$(document).on('click', '#addBurger', function (event) {
    event.preventDefault();
    console.log('add has been clicked')
})