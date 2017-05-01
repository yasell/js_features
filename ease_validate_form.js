function validateForm(dir) {
    var form = dir;
    var name, phone;
    var error = [];
    // var checking;
    form.find('.errortext').html('');
    name = form.find('[name="f_name"]').val();
    phone = form.find('[name="f_phone"]').val();
    if (name === '') {
        error.push('Введите имя*');
    } else
    if (!/[А-Яа-яЁёa-zA-Z`\s]{1,100}/.test(name)) {
        error.push('Правильно введите имя');
    }
    if (phone === '') {
        error.push('Введите телефон*');
    } else
    if (!/[0-9()-\s+]{3,20}/.test(phone)) {
        error.push('Правильно введите телефон');
    }
    if (error.length > 0) {
        $.each(error, function() {
            form.find('.errortext').append(this + '<br>');
        });
        return false;

    }
    return true;
}

$('#form').on('submit', function(e) {
    var valid = validateForm($(this));
    if (!valid) {
        return false;
    }
    //after request
});
