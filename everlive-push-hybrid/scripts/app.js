(function(global) {
    'use strict';

    var app = global.app = global.app || {};

    app.everlive = new Everlive({
        appId: app.config.everlive.appId,
        scheme: app.config.everlive.scheme
    });

    var onDeviceReady = function() {

        navigator.splashscreen.hide();

        if (!app.isKeySet(app.config.everlive.appId)) {
            $(app.config.views.init).hide();
            $('#pushApp').addClass('noappid-scrn').html(app.constants.NO_APP_ID_MESSAGE);
            return;
        } else if (app.isInCompanionAppCheck()) {
            $(app.config.views.init).hide();
            $('#pushApp').addClass('noappid-scrn').html(app.constants.IN_COMPANION_APP_TEXT);
            return;
        } else if (device.platform.toLowerCase() === 'android') {
            if (!app.isKeySet(app.androidProjectNumber)) {
                $(app.config.views.init).hide();
                $('#pushApp').addClass('noappid-scrn').html(app.constants.NO_GOOGLE_API_PROJECT_NUMBER);
                return;
            } else if (!app.isProjectNumberValid(app.androidProjectNumber)) {
                $(app.config.views.init).hide();
                $('#pushApp').addClass('noappid-scrn').html(app.constants.WRONG_GOOGLE_API_PROJECT_NUMBER);
                return;
            }
        }

        if (app.isInSimulatorCheck()) {
            $('#warning').html(app.constants.IN_SIMULATOR_TEXT);
        }

        app.mobile = new kendo.mobile.Application(document.body, {
            transition: 'slide',
            skin: 'flat'
        });
    };

    document.addEventListener('deviceready', onDeviceReady, false);
}(window));
