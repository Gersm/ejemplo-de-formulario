$( document ).ready(function() {
    $('#formulario').validate({
        // any other options & rules,
        errorPlacement: function (error, element) {
            $("#emaill").removeClass("success");
            $("#emaill").addClass("error");
        },
        success: function (label, element) {
            $("#emaill").removeClass("error");
            $("#emaill").addClass("success");
        }
    });
});
