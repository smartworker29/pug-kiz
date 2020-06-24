var videoControl = (function () {
    var init = function () {
        _videocontrol();
    },

        _videocontrol = function () {
            let videoPlayer = document.querySelectorAll("[video-wrapper]");
            if (videoPlayer) {
                [].map.call(videoPlayer, function (player) {
                    var icon = $(player).next()
                    player.onclick = e => {
                        if(player.paused){
                            player.play();
                            $(player).next().hide();
                        }
                        else{
                            player.pause();
                            $(player).next().show();
                        }
                    }

                    player.nextElementSibling.onclick = e => {
                        player.play();
                        $(player).next().hide();
                    }
                    
                });
            }
        }
    return {
        init: init
    };
})();

$().ready(function () {
    videoControl.init();
});
