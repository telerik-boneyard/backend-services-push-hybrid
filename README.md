sample-telerik-baas-push-notification
=====================================
<a href="https://platform.telerik.com/#appbuilder/clone/https%3A%2F%2Fgithub.com%2FIcenium%2Fsample-telerik-baas-push-notification" target="_blank"><img src="http://docs.telerik.com/platform/appbuilder/sample-apps/images/try-in-appbuilder.png" alt="Try in AppBuilder" title="Try in AppBuilder" /></a>

This application is a basic example of using Push Notifications provided by Telerik Backend Services.

# Prerequisites
- Registration in [Telerik Platform](https://platform.telerik.com)
- A Telerik Backend Services project in Telerik Platform [configured for push notifications](http://docs.telerik.com/platform/backend-services/features/push-notifications/setup).

# Installation

1. Open your preferred Telerik AppBuilder client and [clone the repository](http://docs.telerik.com/platform/appbuilder/creating-your-project/scenarios-and-tutorials/recreate-project-git#step-2-clone-your-project).
2. Open the `main.js` file located in the '/scripts/app' folder. 
3. Locate the `GOOGLE_PROJECT_NUMBER` string and replace its value with your Google Cloud Console project number. More details on obtaining the project number can be found [here](https://developers.google.com/console/help/#projectnumber).
4. Locate the `BAAS_API_KEY` string and replace its value with the actual API Key of project in Telerik Backend Services. It can be found in the **API Keys** section.
5. [Configure Push Notifications](http://docs.telerik.com/platform/backend-services/features/push-notifications/setup) in Telerik Backend Services.
6. Deploy the project to a mobile device and run it. Note that the app does not run in the AppBuilder Companion App for iOS.

> You cannot run the sample app in the AppBuilder simulator.

# See Also

[Integrating Push Notifications from Backend Services in a Hybrid App](http://docs.telerik.com/platform/backend-services/getting-started/push-notifications/integrating-push-hybrid)

