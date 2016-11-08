$(document).ready(function () {

    onDeviceReady();

    function onDeviceReady() {

        //KAPAG LOCAL ETO PATHNAME
        var dir = "/aupmpsvp_mobile/www";

        //KAPAG  NASA MOBILE ETO PATHNAME
        //var dir = "/android_asset/www";


        var checkuname = window.localStorage.getItem('username');

        //Display and append


        if (location.pathname == dir + '/login.html') {
            var checkuname = window.localStorage.getItem('username');
            if (checkuname == '' || checkuname == null) {} else {
                window.location = "menu.html";
            }

            $("#username").focus();
        }


        if (location.pathname == dir + '/menu.html') {
            if (checkuname == "" || checkuname == null || checkuname == undefined || checkuname == " ") {
                window.location = "login.html"; //Redirection
            }


        }

        //button login

        $("#btnlogin").click(function () {

            $("#btnlogin").attr("style", "display: none;");
            $("#btnloading").attr("style", "display: block;");
            //ajax select sa registration db ung username at password
            $.ajax({
                url: "http://superprogrammer.tech/mobile_api.php",
                //url: "http://aupmpsvp.pe.hu/mobile_api.php",
                type: "GET",
                dataType: "json",
                data: {
                    type: "login",
                    username: $("#username").val(),
                    password: $("#password").val()
                },
                ContentType: "application/json",
                success: function (result) {
                    //alert(JSON.stringify(result));
                    $("#btnlogin").attr("style", "display: block;");
                    $("#btnloading").attr("style", "display: none;");
                    var jsonArray = JSON.parse(JSON.stringify(result));
                    $.each(jsonArray, function (index, value) {
                        var username = value.username;
                        var name = value.firstname;
                        var company = value.company;

                        window.localStorage.setItem("username", username);
                        window.localStorage.setItem("name", name);
                        window.localStorage.setItem("company", company);

                    });
                    swal("Good job!", "You have successfully logged in!", "success"),
                        function (isConfirm) {
                            if (isConfirm) {
                                window.location = "menu.html"; //Redirection
                            }
                        }

                },
                error: function (err) {
                    $("#btnlogin").attr("style", "display: block;");
                    $("#btnloading").attr("style", "display: none;");
                    swal("Oops!", "Something went wrong. Please try again!", "error"),
                        function (isConfirm) {
                            if (isConfirm) {
                                window.location = "login.html"; //Redirection
                            }
                        }


                }
            })
        });
    }
});