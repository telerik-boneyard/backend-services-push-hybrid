(function(global) {
    'use strict';

    var app = global.app = global.app || {};

    app.MainViewModel = (function() {

        var _onDeviceIsRegistered = function() {
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

        var onWP8PushReceived = function(args) {
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
                notificationCallbackAndroid: onAndroidPushReceived,
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
                    function(err) {
                        app.hideLoading();
                        alert('REGISTER ERROR: ' + JSON.stringify(err));
                    }
                );
        };

        var unregisterFromPush = function() {
            var unregisterPromise;

            app.showLoading();

            if (device.platform.toLowerCase() === 'ios') {
                // Unregisters the current device from push notifications in Telerik Backend Services only.
                // After this call completes successfully, Backend Services will no longer send notifications to this device.
                // Note that this does not prevent the device from receiving notifications and does not invalidate push tokens.

                // This avoids using the native iOS "unregisterForRemoteNotifications" method which according to Apple's documentation,
                // should be called in rare circumstances only, such as when a new version of the app removes support for all types of remote notifications.
                unregisterPromise = app.everlive.push.currentDevice().unregister();
            } else {
                // Use push.unregister() to invalidates any push tokens and unregister from Telerik Backend Services
                unregisterPromise = app.everlive.push.unregister();
            }

            unregisterPromise.then(
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
