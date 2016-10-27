# hsgr-status-webextension
A browser extension that adds a browser icon to show if Hackerspace.gr is open. Is that's the case a counter is added to it's browser icon.

If clicked an interface popup is displayed with the contents of hackerspace's main page.

The webextension polls hackerspace.gr's SpaceAPI every 15 minutes to check if it's open.

You can currently download it via: https://addons.mozilla.org/en-US/firefox/addon/hsgr-status/
It's compatible with Firefox fon GNU-Linux, MacOSX, and Windows versions.

Keep in mind that it currently "awaits review", as such you might not be able to install it if you run Firefox Stable versions.
If you need to test it you can use Firefox Developer Edition or Firefox Nightly and change "xpinstall.signatures.required" in about:config to false.
