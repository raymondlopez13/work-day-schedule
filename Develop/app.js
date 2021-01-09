saveToLocal();
for (i = 9; i < 18; i++){
    var someText = window.localStorage.getItem(i);
    $(`#${i}`).html(someText);
}

// Check if time is past due
var currentTime = moment().format('HH');
for (i=9; i < 19; i++) {
    var time = moment.utc(i*3600*1000).format('HH');
    if (time < currentTime) {
        var id = `#${i}`;
        var jQuery = $(`${id}`).parent().removeClass('bg-success')
        .addClass('bg-danger');
    } else if (time === currentTime) {
        var id = `#${i}`;
        var jQuery = $(`${id}`).parent().removeClass('bg-success')
        .addClass('bg-primary');
    }
}

// CHANGE tasks
$('.row').on('click', 'p', function() {
    $(this).html('');
    $(this).parent().append('<input type="text" name="text" id="input" class="d-inline">');
    $('#input').focus();
    });
$('.row').on('click', 'i', function() {
    var input = $('#input').val();
    $('#input').remove();
    $(this).parent().parent().children('.col-sm-9').children('p').html(input);
    checkText();
    saveToLocal();
})

function checkText() {
    for (i = 9; i < 18; i++){
        var ID = $(`#${i}`).html();
        if (ID === ''){
            $(`#${i}`).html('Edit Task');
        }
    }
}
function saveToLocal() {
    for (i = 9; i < 18; i++){
        var iden = $(`#${i}`).html();
        window.localStorage.setItem(i, iden);
    }
}
