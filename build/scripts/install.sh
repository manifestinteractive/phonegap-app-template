#!/bin/sh

echo " "
echo "PhoneGap Installation:"
echo " "

npm update -g phonegap cordova grunt-cli

echo " "
echo "Creating PhoneGap Project:"
echo " "

phonegap create myapp com.manifestinteractive.myapp MyApp
cd myapp

echo " "
echo "Clone Repository:"
echo " "

rm -fr www
git clone -b stable https://github.com/manifestinteractive/phonegap-app-template.git www

echo " "
echo "Setup Grunt:"
echo " "

cd www
npm install
gem install sass
grunt
cd -

echo " "
echo "Copy Config File:"
echo " "

cp www/assets/js/config.dist.js www/assets/js/config.js

echo " "
echo "Adding Platforms:"
echo " "

cordova platform add ios
cordova platform add android

echo " "
echo "Installing Require Plugins:"
echo " "

cordova plugin add org.apache.cordova.device
cordova plugin add org.apache.cordova.dialogs
cordova plugin add org.apache.cordova.globalization
cordova plugin add org.apache.cordova.inappbrowser
cordova plugin add org.apache.cordova.network-information
cordova plugin add org.apache.cordova.splashscreen
cordova plugin add https://github.com/danwilson/google-analytics-plugin.git
cordova plugin add https://github.com/EddyVerbruggen/LaunchMyApp-PhoneGap-Plugin.git --variable URL_SCHEME=myapp
cordova plugin add https://github.com/phonegap-build/StatusBarPlugin.git
cordova plugin add https://github.com/VersoSolutions/CordovaClipboard

echo " "
echo "Copy Build Hooks into Project:"
echo " "

cp -R www/build/hooks/* hooks/
chmod 755 hooks/*/*.js

echo " "
echo "Replace iOS & Android Build Files ( modified from default ):"
echo " "

rm platforms/ios/MyApp/Resources/icons/*.png
rm platforms/ios/MyApp/Resources/splash/*.png
rm -fr platforms/android/res/drawable*

cp www/assets/img/ios/icon/*.png platforms/ios/MyApp/Resources/icons/
cp www/assets/img/ios/screen/*.png platforms/ios/MyApp/Resources/splash/
cp -R www/assets/img/android/* platforms/android/res/

rm platforms/ios/MyApp/MyApp-Info.plist
cp www/build/ios/MyApp-Info.plist platforms/ios/MyApp/MyApp-Info.plist

echo " "
echo "Build Application & Launch in iOS Simulator:"
echo " "

cordova emulate ios
