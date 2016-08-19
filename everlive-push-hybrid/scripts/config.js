(function(global) {
    'use strict';

    var app = global.app = global.app || {};

    app.config = {
        everlive: {
            appId: '$TELERIK_APP_ID$', // Put your Backend Services App ID here
            scheme: 'http'
        },
        views: {
            init: '#initView'
        }
    };

    app.androidProjectNumber = '$ANDROID_PROJECT_NUMBER$'; // Put your Google API project number here

    app.constants = {
        NO_APP_ID_MESSAGE: '<h3>Telerik Platform <strong>App ID</strong> is not set.</h3><p><span>App ID</span> ' +
            'links the sample mobile app to a Telerik Platform app.</p><p>To set the <span>App ID</span> ' +
            'open the <span>/scripts/config.js</span> file and replace <strong>$TELERIK_APP_ID$</strong> with the ' +
            '<span>App ID</span> of your Telerik app.</p>',

        NO_GOOGLE_API_PROJECT_NUMBER: '<h3>Missing Google API Project Number!</h3> ' +
            '<p>It appears that you have not filled in your Google API project number. ' +
            'It is required for push notifications on Android.</p> ' +
            '<p>Please go to <span>/scripts/config.js</span> and replace <strong>$ANDROID_PROJECT_NUMBER$</strong> whit the ' +
            '<span>Google API project number</span> at the beginning of the file.</p>',

        WRONG_GOOGLE_API_PROJECT_NUMBER: '<h3>Wrong Google API Project Number!</h3> ' +
            '<p>It appears that you have filled in wrong Google API project number. ' +
            'The required project number consist only from digits, 12 in length.</p> ' +
            '<p>Please go to <span>/scripts/config.js</span> and place a valid project number.</p>',

        IN_SIMULATOR_TEXT: '<div>To be able to receive push notifications, build the app as an app package and deploy it to a device. ' +
            'In the simulator you can only test the device registration workflow.</div>',

        IN_COMPANION_APP_TEXT: 'Push notifications are <strong>not</strong> supported when running the app in the companion app.<br /><br /> ' +
            'Build the app as a standalone app package and deploy it to a device.',

        SUCCESS_TEXT: 'SUCCESS!<br />The device has been registered for push notifications.<br /><br />',

        UNREGISTERED_TEXT: 'Device successfully unregistered.'
    };
}(window));
