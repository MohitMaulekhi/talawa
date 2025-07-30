import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:talawa/utils/app_localization.dart';
import 'package:talawa/view_model/main_screen_view_model.dart';
import 'package:talawa/widgets/custom_alert_dialog.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  late MainScreenViewModel viewModel;

  setUp(() {
    viewModel = MainScreenViewModel();
  });

  group('MainScreenViewModel', () {
    testWidgets(
        'initialise sets correct values when not fromSignUp and not demoMode',
        (tester) async {
      await tester.pumpWidget(
        MaterialApp(
          localizationsDelegates: const [
            AppLocalizations.delegate,
            GlobalMaterialLocalizations.delegate,
            GlobalWidgetsLocalizations.delegate,
            GlobalCupertinoLocalizations.delegate,
          ],
          supportedLocales: const [
            Locale('en', ''),
          ],
          home: Builder(
            builder: (ctx) {
              viewModel.initialise(
                ctx,
                fromSignUp: false,
                mainScreenIndex: 2,
                demoMode: false,
              );
              expect(viewModel.currentPageIndex, 2);
              expect(viewModel.showAppTour, false);
              expect(viewModel.tourComplete, true);
              expect(viewModel.tourSkipped, false);
              return Container();
            },
          ),
        ),
      );
    });

    test('onTabTapped updates currentPageIndex and notifies listeners', () {
      viewModel.currentPageIndex = 0;
      viewModel.onTabTapped(3);
      expect(viewModel.currentPageIndex, 3);
    });

    testWidgets(
        'setupNavigationItems sets navBarItems and pages for normal mode',
        (tester) async {
      MainScreenViewModel.demoMode = false;
      await tester.pumpWidget(
        MaterialApp(
          localizationsDelegates: const [
            AppLocalizations.delegate,
            GlobalMaterialLocalizations.delegate,
            GlobalWidgetsLocalizations.delegate,
            GlobalCupertinoLocalizations.delegate,
          ],
          supportedLocales: const [
            Locale('en', ''),
          ],
          home: Builder(
            builder: (ctx) {
              viewModel.setupNavigationItems(ctx);
              expect(viewModel.navBarItems.length, 4);
              expect(viewModel.pages.length, 4);
              return Container();
            },
          ),
        ),
      );
    });

    testWidgets('setupNavigationItems sets navBarItems and pages for demo mode',
        (tester) async {
      MainScreenViewModel.demoMode = true;
      await tester.pumpWidget(
        MaterialApp(
          localizationsDelegates: const [
            AppLocalizations.delegate,
            GlobalMaterialLocalizations.delegate,
            GlobalWidgetsLocalizations.delegate,
            GlobalCupertinoLocalizations.delegate,
          ],
          supportedLocales: const [
            Locale('en', ''),
          ],
          home: Builder(
            builder: (ctx) {
              viewModel.setupNavigationItems(ctx);
              expect(viewModel.navBarItems.length, 4);
              expect(viewModel.pages.length, 4);
              return Container();
            },
          ),
        ),
      );
    });

    testWidgets('appTourDialog returns CustomAlertDialog', (tester) async {
      await tester.pumpWidget(
        MaterialApp(
          localizationsDelegates: const [
            AppLocalizations.delegate,
            GlobalMaterialLocalizations.delegate,
            GlobalWidgetsLocalizations.delegate,
            GlobalCupertinoLocalizations.delegate,
          ],
          supportedLocales: const [
            Locale('en', ''),
          ],
          home: Builder(
            builder: (ctx) {
              final dialog = viewModel.appTourDialog(ctx);
              expect(dialog, isA<CustomAlertDialog>());
              return Container();
            },
          ),
        ),
      );
    });

    testWidgets('tourEventTargets adds correct targets', (tester) async {
      await tester.pumpWidget(
        MaterialApp(
          localizationsDelegates: const [
            AppLocalizations.delegate,
            GlobalMaterialLocalizations.delegate,
            GlobalWidgetsLocalizations.delegate,
            GlobalCupertinoLocalizations.delegate,
          ],
          supportedLocales: const [
            Locale('en', ''),
          ],
          home: Builder(
            builder: (ctx) {
              viewModel.context = ctx;
              viewModel.tourEventTargets();
              expect(
                viewModel.targets.any((t) => t.keyName == 'keyBNEvents'),
                true,
              );
              expect(
                viewModel.targets.any((t) => t.keyName == 'keySECategoryMenu'),
                true,
              );
              expect(
                viewModel.targets.any((t) => t.keyName == 'keySEDateFilter'),
                true,
              );
              expect(
                viewModel.targets.any((t) => t.keyName == 'keySECard'),
                true,
              );
              expect(
                viewModel.targets.any((t) => t.keyName == 'keySEAdd'),
                true,
              );
              return Container();
            },
          ),
        ),
      );
    });

    testWidgets('tourAddPost adds correct targets', (tester) async {
      await tester.pumpWidget(
        MaterialApp(
          localizationsDelegates: const [
            AppLocalizations.delegate,
            GlobalMaterialLocalizations.delegate,
            GlobalWidgetsLocalizations.delegate,
            GlobalCupertinoLocalizations.delegate,
          ],
          supportedLocales: const [
            Locale('en', ''),
          ],
          home: Builder(
            builder: (ctx) {
              viewModel.context = ctx;
              viewModel.tourAddPost();
              expect(viewModel.targets.length, 1);
              expect(viewModel.targets.first.keyName, 'keyBNPost');
              return Container();
            },
          ),
        ),
      );
    });

    testWidgets('tourChat adds correct targets', (tester) async {
      await tester.pumpWidget(
        MaterialApp(
          localizationsDelegates: const [
            AppLocalizations.delegate,
            GlobalMaterialLocalizations.delegate,
            GlobalWidgetsLocalizations.delegate,
            GlobalCupertinoLocalizations.delegate,
          ],
          supportedLocales: const [
            Locale('en', ''),
          ],
          home: Builder(
            builder: (ctx) {
              viewModel.context = ctx;
              viewModel.tourChat();
              expect(viewModel.targets.length, 1);
              expect(viewModel.targets.first.keyName, 'keyBNChat');
              return Container();
            },
          ),
        ),
      );
    });

    testWidgets('tourProfile adds correct targets', (tester) async {
      await tester.pumpWidget(
        MaterialApp(
          localizationsDelegates: const [
            AppLocalizations.delegate,
            GlobalMaterialLocalizations.delegate,
            GlobalWidgetsLocalizations.delegate,
            GlobalCupertinoLocalizations.delegate,
          ],
          supportedLocales: const [
            Locale('en', ''),
          ],
          home: Builder(
            builder: (ctx) {
              viewModel.context = ctx;
              viewModel.tourProfile();
              expect(
                viewModel.targets.any((t) => t.keyName == 'keyBNProfile'),
                true,
              );
              expect(
                viewModel.targets.any((t) => t.keyName == 'keySPAppSetting'),
                true,
              );
              expect(
                viewModel.targets.any((t) => t.keyName == 'keySPHelp'),
                true,
              );
              expect(
                viewModel.targets.any((t) => t.keyName == 'keySPDonateUs'),
                true,
              );
              expect(
                viewModel.targets.any((t) => t.keyName == 'keySPPalisadoes'),
                true,
              );
              return Container();
            },
          ),
        ),
      );
    });
  });
}
