# Android GUI for Qualcomm-based Generic 4G LTE Wifi Modem
Some Qualcomm-based USB modems contains a hidden Android operating system inside. This model is also known as Qualcomm MSM8916, Xidol K5188, the ["Telkomsel Flash / 4G LTE Modem"](https://tokopedia.link/LVD1KCPDvGb) and the generic "4G LTE Wifi Modem". This modem gained some interest in [Hackaday](https://hackaday.com/2022/08/03/hackable-20-modem-combines-lte-and-pi-zero-w2-power/) and [OpenWrt](https://forum.openwrt.org/t/uf896-qualcomm-msm8916-lte-router-384mib-ram-2-4gib-flash-android-openwrt/131712).

The modem runs a stripped-down version of Android 4.4.4 KitKat, and supports receiving SMS, even though the SMS menu is not available on the modem's configuration website. This tool is created to see and interact with the Android user interface that the modem has without [`scrcpy`](https://github.com/GenyMobile/scrcpy) (as `scrcpy` does not support KitKat).

> [!IMPORTANT]
>
> Remember to enable USB debugging by visiting to <http://192.168.100.1/usbdebug.html> (returns a blank page and simply restarts the device).

## How to use?
This is an [Astro](https://astro.build) project. So in order to run the app, you will need to have these tools installed:

+ [ADB](https://developer.android.com/tools/adb) to interact with the device,
+ [Node.js and NPM](https://nodejs.org) to start the web service.

If you are using Linux, make sure that your modem device can be detected with `adb devices` without "unauthorized" errors (usually caused by imporper `udev` configuration, see <https://github.com/M0Rf30/android-udev-rules>). The modem should have a fixed serial ID of `0123456789ABCDEF`.

Then, run `npm run start`. A new web server will be launched on port `4321` (can be configured using [`npm run start -- --port {{PORT}}`](https://docs.astro.build/en/reference/cli-reference/#--port-number)).

## Some other important links
+ <https://www.blinkenlights.ch/ccms/posts/aliexpress-lte-1/>
+ <https://forum.openwrt.org/t/uf896-qualcomm-msm8916-lte-router-384mib-ram-2-4gib-flash-android-openwrt/131712>
+ <https://github.com/u0d7i/uz801>
+ <https://hackaday.com/2022/08/03/hackable-20-modem-combines-lte-and-pi-zero-w2-power/>
