(function (global) {
    'use strict';

    var app = global.app = global.app || {};

    app.MainViewModel = (function () {

        var _onDeviceIsRegistered = function () {
            app.hideLoading();

            $('#registerButton').hide();
            $('#unregisterButton').show();
            $('#message').html(app.constants.SUCCESS_TEXT);
        };

        var _onDeviceUnregistered = function() {
            app.hideLoading();

            $('#message').html(app.constants.UNREGISTERED_TEXT);
            $('#registerButton').show();
            $('#unregisterButton').hide();
        };
        
        var onAndroidPushReceived = function(args) {
            alert('Android notification received: ' + JSON.stringify(args));
        };
        
        var onIosPushReceived = function(args) {
            alert('iOS notification received: ' + JSON.stringify(args));
        };
        
        var onWP8PushReceived = function (args) {
            alert('Windows Phone notification received: ' + JSON.stringify(args));
        };

        var registerForPush = function() {

            var pushSettings = {
                android: {
                    senderID: app.androidProjectNumber
                },
                iOS: {
                    badge: 'true',
                    sound: 'true',
                    alert: 'true'
                },
                wp8: {
                    channelName: 'EverlivePushChannel'
                },
                notificationCallbackAndroid : onAndroidPushReceived,
                notificationCallbackIOS: onIosPushReceived,
                notificationCallbackWP8: onWP8PushReceived,
                customParameters: {
                    Age: 21
                }
            };

            app.showLoading();

            app.everlive.push.register(pushSettings)
                .then(
                    _onDeviceIsRegistered,
                    function (err) {
                        app.hideLoading();
                        alert('REGISTER ERROR: ' + JSON.stringify(err));
                    }
                );
        };

        var unregisterFromPush = function() {
            app.showLoading();

            app.everlive.push.unregister()
                .then(
                    _onDeviceUnregistered,
                    function(err) {
                        app.hideLoading();
                        alert('UNREGISTER ERROR: ' + JSON.stringify(err));
                    }
                );
        };

        return {
            registerForPush: registerForPush,
            unregisterFromPush: unregisterFromPush,
            getYear: app.getYear
        };
    }());
}(window));
