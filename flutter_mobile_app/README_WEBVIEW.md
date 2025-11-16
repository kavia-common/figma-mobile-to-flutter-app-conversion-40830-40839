# Loading HTML/CSS/JS assets in Flutter via WebView

This app integrates the generated design assets under the repository root `assets/` directory (HTML/CSS/JS/images) and previews them in-app using a WebView.

What was added:
- WebView integration using `flutter_inappwebview`.
- HtmlAssetWebViewPage that loads HTML from bundled assets and sets a `baseUrl` so that relative CSS/JS and `/assets/figmaimages/...` resolve correctly.
- A simple home menu listing several HTML screens; tapping one opens it in a WebView.
- Robust runtime logging for resource requests, console output, and load errors to diagnose blank/slow loads.

How to add a new screen:
1) Place your files in the repository root `assets/` directory (do not rename or move existing files).
   For example: `assets/my-feature.html`, `assets/my-feature.css`, `assets/my-feature.js`.
   Refer to images as `/assets/figmaimages/...` or `./my-feature.css` etc. inside the HTML.

2) Ensure the assets path prefix is already declared in `pubspec.yaml`:
   flutter:
     assets:
       - .env
       - assets/

3) Register a route in `lib/main.dart`:
   - Open `lib/main.dart` and add a new entry to `MyApp.screens`, for example:
     HtmlScreenRoute(
       title: 'My Feature',
       assetHtmlPath: 'assets/my-feature.html',
     ),

4) Run the app. Open the new entry from the home menu.

Notes:
- The WebView uses `asset:///assets/` as baseUrl so all relative references resolve:
  - `./file.css` and `./file.js` next to the HTML file will load.
  - `/assets/figmaimages/...` image references will also resolve.
- If you use absolute `http(s)` URLs in your HTML, they will load inside the WebView (no external app switch).

Troubleshooting blank or slow loads:
- Verify the HTML path you register exists under `assets/` and is indexed by pubspec.yaml.
- Use the in-app logs (console messages, resource status codes) to detect missing files (404) or CSP blocks.
- Make sure your HTML references CSS/JS with relative paths (./file.css) or absolute `/assets/...` paths.
- Android uses hybrid composition which improves first-frame rendering; ensure device has adequate resources.
- iOS: WKWebView is used by default. If using strict CSP in your HTML, allow inline scripts or avoid them in production.
- If a resource is not found, the log will show [AssetError] <url>. Check the file name and path.
