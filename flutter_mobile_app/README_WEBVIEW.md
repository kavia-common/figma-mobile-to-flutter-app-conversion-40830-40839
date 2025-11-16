# Loading HTML/CSS/JS assets in Flutter via WebView

This app integrates the generated design assets under the repository root `assets/` directory (HTML/CSS/JS/images) and previews them in-app using a WebView.

What is implemented:
- WebView integration using `flutter_inappwebview`.
- HtmlAssetWebViewPage that loads HTML from bundled assets and injects a `<base href="http://localhost/assets/">` at runtime to ensure relative CSS/JS/image paths resolve. The WebView uses `loadData` with `baseUrl: http://localhost/assets/` for deterministic resolution across platforms.
- A simple home menu listing several HTML screens; tapping one opens it in a WebView.
- Robust runtime logging for resource requests, console output, and load errors to diagnose blank/slow loads.
- Progress indicator during load and a timeout (~12s) fallback overlay to avoid blank screens.
- Mixed content allowed and local file access enabled to ensure local assets load reliably.

How to add a new screen:
1) Place your files in the repository root `assets/` directory (do not rename or move existing files).
   For example: `assets/my-feature.html`, `assets/my-feature.css`, `assets/my-feature.js`.
   Refer to images as `/assets/figmaimages/...` or `./my-feature.css` etc. inside the HTML.

2) Ensure the assets path prefix is declared in `pubspec.yaml`:
   flutter:
     assets:
       - .env
       - assets/
       - assets/figmaimages/

3) Register a route in `lib/main.dart`:
   - Open `lib/main.dart` and add a new entry to `MyApp.screens`, for example:
     HtmlScreenRoute(
       title: 'My Feature',
       assetHtmlPath: 'assets/my-feature.html',
     ),

4) Run the app. Open the new entry from the home menu.

Deterministic asset resolution details:
- The WebView injects `<base href="http://localhost/assets/">` into the loaded HTML. This ensures:
  - `./file.css` and `./file.js` next to the HTML resolve under `assets/`.
  - `/assets/figmaimages/...` absolute references resolve correctly to the bundled images.
- The WebView loads the HTML string via `controller.loadData(...)` with the same base URL for stable behavior.

Troubleshooting blank or slow loads:
- App shows a progress indicator while loading and fails fast with an overlay message after ~12s to avoid blank screens.
- Ensure `pubspec.yaml` includes both `assets/` and `assets/figmaimages/` so images load.
- Verify the HTML path you register exists under `assets/` and is listed in the app routes.
- Use the in-app logs (console messages, resource status codes) to detect missing files (404) or CSP blocks.
- Make sure your HTML references CSS/JS with relative paths (./file.css, ./file.js) or absolute `/assets/...` paths.
- Android allows mixed content and file access for local loads; images should render without network blockers.
- iOS: WKWebView is used by default. If using strict CSP in your HTML, allow inline scripts or avoid them in production.
- If a resource is not found, the console will show `[AssetError] <url>`. Check the file name and path.

Notes:
- The app uses Material 3 with hybrid composition for better initial paint performance.
- `InAppWebViewController.setWebContentsDebuggingEnabled(true)` is enabled in main() for development.

