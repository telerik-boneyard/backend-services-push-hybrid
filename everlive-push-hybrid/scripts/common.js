(function (global) {
    'use strict';

    var app = global.app = global.app || {};

    app.showAlert = function(message, title, callback) {
        navigator.notification.alert(message, callback || function () {
        }, title, 'OK');
    };

    app.showError = function(message) {
        app.showAlert(message, 'Error occured');
    };

    app.showLoading = function () {
        app.mobile.showLoading();
    };

    app.hideLoading = function () {
        app.mobile.hideLoading();
    };

    app.isNullOrEmpty = function (value) {
        return typeof value === 'undefined' || value === null || value === '';
    };

    app.isKeySet = function (key) {
        var regEx = /^\$[A-Z_]+\$$/;
        return !app.isNullOrEmpty(key) && !regEx.test(key);
    };

    app.isProjectNumberValid = function(value){
        var regEx = /^\d+$/;
        var isOnlyDigits = regEx.test(value);
        var isValidLength;

        if(value.length === 12){
            isValidLength = true;
        } else {
            isValidLength = false;
        }

        return isOnlyDigits && isValidLength;
    };

    app.getYear = function () {
        return new Date().getFullYear();
    };
}(window));
