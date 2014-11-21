This application is a basic example of using Push Notifications provided by Telerik Backend Services in a hybrid app built with Telerik AppBuilder.

# Prerequisites

- Registration in [Telerik Platform](https://platform.telerik.com)
- A Telerik Backend Services project in Telerik Platform configured for push notifications.

# Installation

1. Open your favorite Telerik AppBuilder client and clone the repository.
2. Open the `main.js` file located in the '/scripts/app' folder. 
3. Locate the `googleApiProjectNumber` variable and replace its value with your Google project number. More details on obtaining the project number can be found here: https://developers.google.com/console/help/#projectnumber
4. Locate the `bsApiKey` variable and replace its value with the API Key of project in Telerik Backend Services. It can be found in the **API Keys** section.
5. [Configure Push Notifications](http://docs.telerik.com/platform/backend-services/features/push-notifications/setup) in Telerik Backend Services. Go to your project settings and in the Push Notifications section activate the desired platform.
6. Deploy the project to a mobile device and run it.

# See Also

[Integrating Push Notifications from Backend Services in a Hybrid App](http://docs.telerik.com/platform/backend-services/getting-started/push-notifications/integrating-push-hybrid)
