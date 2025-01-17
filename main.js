$(document).ready(function(){

    $('form').on('submit', function(e) {
        e.preventDefault();

        const taskName = $('#task-name').val();
        const newItem = $('<li style="display: none"></li>');


        $(`<span>${taskName}</span>`).appendTo(newItem);
        $(newItem).appendTo('ol');
        $(newItem).fadeIn();
        $('#task-name').val('');
        $('#task-name').focus();
    });

    $('ol').click(function(){
        $(this).addClass('checklist');
    })

});