cordova create aupmpsvp_mobile com.webconnect aupmpsvp_mobile
(this is to create the phonegap/cordova mobile app with com.webconnect)

cd aupmpsvp_mobile
(go to aupmpsvp_mobile directory)

cordova platform add android
(this is to add android platform to your phonegap app)

phonegap build android
(this is to build a phonegap android app)

cordova plugin add cordova-plugin-network-information
(this is to add cordova plugin network information [know your connection if 2g,3g,4g,wifi,etc.])

cordova plugin add cordova-plugin-device
(this is to add cordova plugin device [know your device model,platform,uuid,version,manufacturer,serial,etc.])