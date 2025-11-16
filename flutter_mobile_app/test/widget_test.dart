import 'package:flutter_test/flutter_test.dart';
import 'package:flutter_mobile_app/main.dart';

void main() {
  testWidgets('Home menu renders with title', (tester) async {
    await tester.pumpWidget(const MyApp());

    expect(find.text('Grocery Shop WebView'), findsOneWidget);
    // One of the registered screens should be visible as a list item.
    expect(find.textContaining('Template'), findsWidgets);
  });
}
