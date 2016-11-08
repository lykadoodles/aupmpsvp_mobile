$(document).ready(function () {
    
    onDeviceReady();
    
    function onDeviceReady() {

        //KAPAG LOCAL ETO PATHNAME
        //var dir = "/aupmpsvp_mobile/www";
        
        //KAPAG  NASA MOBILE ETO PATHNAME
        var dir = "/android_asset/www";


        var checkuname = window.localStorage.getItem('username');

            //Display and append



        if (location.pathname == dir + '/index.html') {
            var checkuname = window.localStorage.getItem('username');
                if ( checkuname == '' || checkuname == null) {
                } else {  window.location = "home.html";      }
            
        $("#username").focus();
        }


        if (location.pathname == dir + '/home.html') {
            if ( checkuname == "" || checkuname == null || checkuname == undefined || checkuname == " " ) {
                    window.location = "index.html";      //Redirection
                }
            
            $(".disp_UN").empty().append(checkuname);
            
            var checkstudnum = window.localStorage.getItem('studentnumber');
            $(".disp_SN").empty().append(checkstudnum);
            
            var checkname = window.localStorage.getItem('name');
            $(".disp_NM").empty().append(checkname);
            
            var checklevel = window.localStorage.getItem('level');
            $(".disp_LV").empty().append(checklevel);
            
            var checkjerseynum = window.localStorage.getItem('jerseynumber');
            $(".disp_JN").empty().append(checkjerseynum);
            
            var checkteamname = window.localStorage.getItem('teamname');
            $(".disp_TN").empty().append(checkteamname);
            
        $.ajax({
            //url: "http://localhost/AUPMPSVP/mobile_api.php",
            url: "http://aupmpsvp.pe.hu/mobile_api.php",
            type: "GET",
            dataType: "json",
            data: {
                type: "dispplayerstats",
                playername: window.localStorage.getItem('name')
            },
            ContentType: "application/json",
            success: function (res) {
                //alert(JSON.stringify(res));
                var jsonArray = JSON.parse(JSON.stringify(res));

                $.each(jsonArray, function (index, value) {
                    
                    var cnt = index + 1;

                    var gamenumber = value.gamenumber;
                    var result = value.result;
                    var games = value.games;
                    var awayteamname = value.awayteamname;
                    
                    var min =  value.min;
                    var fi_g =  value.fi_g;
                    var fi_gp =  value.fi_gp;
                    var tw_p =  value.tw_p;
                    var tw_pp =  value.tw_pp;
                    var th_p =  value.th_p;
                    var th_pp =  value.th_pp;
                    var ft =  value.ft;
                    var ftp =  value.ftp;
                    var pom =  value.pom;
                    var reb =  value.reb;
                    var oreb =  value.oreb;
                    var dreb =  value.dreb;
                    var ast =  value.ast;
                    var stl =  value.stl;
                    var defl =  value.defl;
                    var blk =  value.blk;
                    var to =  value.to;
                    var eff =  value.eff;
                    var pf =  value.pf;
                    var pts =  value.pts;
                    var astpto =  value.astpto;
                    
                $(".app_playerstats").append(
                    '<tr><td style="text-align:center;">' + gamenumber + '</td>' +
                    '<td style="text-align:center;">' + awayteamname + '</td>' +
                    '<td style="text-align:center;">' + result + '</td>' +
                    '<td style="text-align:center;">' + games + '</td>' +
                    '<td style="text-align:center;">' + min + '</td>' +
                    '<td style="text-align:center;">' + fi_g + '</td>' +
                    '<td style="text-align:center;">' + fi_gp + '</td>' +
                    '<td style="text-align:center;">' + tw_p + '</td>' +
                    '<td style="text-align:center;">' + tw_pp + '</td>' +
                    '<td style="text-align:center;">' + th_p + '</td>' +
                    '<td style="text-align:center;">' + th_pp + '</td>' +
                    '<td style="text-align:center;">' + ft + '</td>' +
                    '<td style="text-align:center;">' + ftp + '</td>' +
                    '<td style="text-align:center;">' + pom + '</td>' +
                    '<td style="text-align:center;">' + reb + '</td>' +
                    '<td style="text-align:center;">' + oreb + '</td>' +
                    '<td style="text-align:center;">' + dreb + '</td>' +
                    '<td style="text-align:center;">' + ast + '</td>' +
                    '<td style="text-align:center;">' + stl + '</td>' +
                    '<td style="text-align:center;">' + defl + '</td>' +
                    '<td style="text-align:center;">' + blk + '</td>' +
                    '<td style="text-align:center;">' + to + '</td>' +
                    '<td style="text-align:center;">' + eff + '</td>' +
                    '<td style="text-align:center;">' + pf + '</td>' +
                    '<td style="text-align:center;">' + pts + '</td>' +
                    '<td style="text-align:center;">' + astpto + '</td>' +
                    '</tr>');
                    
                });
            },
            error: function (err) {
                alert('er')
            }
        });
            
        }

            //button login

        $("#btnlogin").click(function () {

            $("#btnlogin").attr("style", "display: none;");
            $("#btnloading").attr("style", "display: block;");
            //ajax select sa registration db ung username at password
                $.ajax({
                    //url: "http://localhost/AUPMPSVP/mobile_api.php",
                    url: "http://aupmpsvp.pe.hu/mobile_api.php",
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
                            var studentnumber = value.studentnumber;
                            var username = value.username;
                            var name = value.playername;
                            var level = value.level;
                            var jerseynumber = value.playernumber;
                            var teamname = value.teamname;

                        window.localStorage.setItem("studentnumber", studentnumber);
                        window.localStorage.setItem("username", username);
                        window.localStorage.setItem("name", name);
                        window.localStorage.setItem("level", level);
                        window.localStorage.setItem("jerseynumber", jerseynumber);
                        window.localStorage.setItem("teamname", teamname);

                        });
                        $.mobile.changePage( "#successlogin", { role: "dialog" } )
                    },
                    error: function (err) {
                        $("#btnlogin").attr("style", "display: block;");
                        $("#btnloading").attr("style", "display: none;");
                        $.mobile.changePage( "#failedlogin", { role: "dialog" } )
                    }
                })
        });
    }
});