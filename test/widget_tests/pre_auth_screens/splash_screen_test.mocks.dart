// Mocks generated by Mockito 5.4.4 from annotations
// in talawa/test/widget_tests/pre_auth_screens/splash_screen_test.dart.
// Do not manually edit this file.

// ignore_for_file: no_leading_underscores_for_library_prefixes
import 'dart:async' as _i2;

import 'package:app_links/src/app_links.dart' as _i5;
import 'package:mockito/mockito.dart' as _i1;
import 'package:mockito/src/dummies.dart' as _i7;
import 'package:talawa/models/organization/org_info.dart' as _i3;
import 'package:talawa/models/user/user_info.dart' as _i4;
import 'package:talawa/services/user_config.dart' as _i6;

// ignore_for_file: type=lint
// ignore_for_file: avoid_redundant_argument_values
// ignore_for_file: avoid_setters_without_getters
// ignore_for_file: comment_references
// ignore_for_file: deprecated_member_use
// ignore_for_file: deprecated_member_use_from_same_package
// ignore_for_file: implementation_imports
// ignore_for_file: invalid_use_of_visible_for_testing_member
// ignore_for_file: prefer_const_constructors
// ignore_for_file: unnecessary_parenthesis
// ignore_for_file: camel_case_types
// ignore_for_file: subtype_of_sealed_class

class _FakeStreamController_0<T> extends _i1.SmartFake
    implements _i2.StreamController<T> {
  _FakeStreamController_0(
    Object parent,
    Invocation parentInvocation,
  ) : super(
          parent,
          parentInvocation,
        );
}

class _FakeOrgInfo_1 extends _i1.SmartFake implements _i3.OrgInfo {
  _FakeOrgInfo_1(
    Object parent,
    Invocation parentInvocation,
  ) : super(
          parent,
          parentInvocation,
        );
}

class _FakeUser_2 extends _i1.SmartFake implements _i4.User {
  _FakeUser_2(
    Object parent,
    Invocation parentInvocation,
  ) : super(
          parent,
          parentInvocation,
        );
}

/// A class which mocks [AppLinks].
///
/// See the documentation for Mockito's code generation for more information.
class MockAppLinks extends _i1.Mock implements _i5.AppLinks {
  @override
  _i2.Stream<String> get stringLinkStream => (super.noSuchMethod(
        Invocation.getter(#stringLinkStream),
        returnValue: _i2.Stream<String>.empty(),
        returnValueForMissingStub: _i2.Stream<String>.empty(),
      ) as _i2.Stream<String>);

  @override
  _i2.Stream<Uri> get uriLinkStream => (super.noSuchMethod(
        Invocation.getter(#uriLinkStream),
        returnValue: _i2.Stream<Uri>.empty(),
        returnValueForMissingStub: _i2.Stream<Uri>.empty(),
      ) as _i2.Stream<Uri>);

  @override
  _i2.Future<Uri?> getInitialLink() => (super.noSuchMethod(
        Invocation.method(
          #getInitialLink,
          [],
        ),
        returnValue: _i2.Future<Uri?>.value(),
        returnValueForMissingStub: _i2.Future<Uri?>.value(),
      ) as _i2.Future<Uri?>);

  @override
  _i2.Future<String?> getInitialLinkString() => (super.noSuchMethod(
        Invocation.method(
          #getInitialLinkString,
          [],
        ),
        returnValue: _i2.Future<String?>.value(),
        returnValueForMissingStub: _i2.Future<String?>.value(),
      ) as _i2.Future<String?>);

  @override
  _i2.Future<Uri?> getLatestLink() => (super.noSuchMethod(
        Invocation.method(
          #getLatestLink,
          [],
        ),
        returnValue: _i2.Future<Uri?>.value(),
        returnValueForMissingStub: _i2.Future<Uri?>.value(),
      ) as _i2.Future<Uri?>);

  @override
  _i2.Future<String?> getLatestLinkString() => (super.noSuchMethod(
        Invocation.method(
          #getLatestLinkString,
          [],
        ),
        returnValue: _i2.Future<String?>.value(),
        returnValueForMissingStub: _i2.Future<String?>.value(),
      ) as _i2.Future<String?>);
}

/// A class which mocks [UserConfig].
///
/// See the documentation for Mockito's code generation for more information.
class MockUserConfig extends _i1.Mock implements _i6.UserConfig {
  @override
  _i2.Stream<_i3.OrgInfo> get currentOrgInfoStream => (super.noSuchMethod(
        Invocation.getter(#currentOrgInfoStream),
        returnValue: _i2.Stream<_i3.OrgInfo>.empty(),
        returnValueForMissingStub: _i2.Stream<_i3.OrgInfo>.empty(),
      ) as _i2.Stream<_i3.OrgInfo>);

  @override
  _i2.StreamController<_i3.OrgInfo> get currentOrgInfoController =>
      (super.noSuchMethod(
        Invocation.getter(#currentOrgInfoController),
        returnValue: _FakeStreamController_0<_i3.OrgInfo>(
          this,
          Invocation.getter(#currentOrgInfoController),
        ),
        returnValueForMissingStub: _FakeStreamController_0<_i3.OrgInfo>(
          this,
          Invocation.getter(#currentOrgInfoController),
        ),
      ) as _i2.StreamController<_i3.OrgInfo>);

  @override
  _i3.OrgInfo get currentOrg => (super.noSuchMethod(
        Invocation.getter(#currentOrg),
        returnValue: _FakeOrgInfo_1(
          this,
          Invocation.getter(#currentOrg),
        ),
        returnValueForMissingStub: _FakeOrgInfo_1(
          this,
          Invocation.getter(#currentOrg),
        ),
      ) as _i3.OrgInfo);

  @override
  String get currentOrgName => (super.noSuchMethod(
        Invocation.getter(#currentOrgName),
        returnValue: _i7.dummyValue<String>(
          this,
          Invocation.getter(#currentOrgName),
        ),
        returnValueForMissingStub: _i7.dummyValue<String>(
          this,
          Invocation.getter(#currentOrgName),
        ),
      ) as String);

  @override
  bool get loggedIn => (super.noSuchMethod(
        Invocation.getter(#loggedIn),
        returnValue: false,
        returnValueForMissingStub: false,
      ) as bool);

  @override
  set currentOrg(_i3.OrgInfo? org) => super.noSuchMethod(
        Invocation.setter(
          #currentOrg,
          org,
        ),
        returnValueForMissingStub: null,
      );

  @override
  _i4.User get currentUser => (super.noSuchMethod(
        Invocation.getter(#currentUser),
        returnValue: _FakeUser_2(
          this,
          Invocation.getter(#currentUser),
        ),
        returnValueForMissingStub: _FakeUser_2(
          this,
          Invocation.getter(#currentUser),
        ),
      ) as _i4.User);

  @override
  set currentUser(_i4.User? user) => super.noSuchMethod(
        Invocation.setter(
          #currentUser,
          user,
        ),
        returnValueForMissingStub: null,
      );

  @override
  void initialiseStream() => super.noSuchMethod(
        Invocation.method(
          #initialiseStream,
          [],
        ),
        returnValueForMissingStub: null,
      );

  @override
  _i2.Future<bool> userLoggedIn() => (super.noSuchMethod(
        Invocation.method(
          #userLoggedIn,
          [],
        ),
        returnValue: _i2.Future<bool>.value(false),
        returnValueForMissingStub: _i2.Future<bool>.value(false),
      ) as _i2.Future<bool>);

  @override
  _i2.Future<void> userLogOut() => (super.noSuchMethod(
        Invocation.method(
          #userLogOut,
          [],
        ),
        returnValue: _i2.Future<void>.value(),
        returnValueForMissingStub: _i2.Future<void>.value(),
      ) as _i2.Future<void>);

  @override
  _i2.Future<void> updateUserJoinedOrg(List<_i3.OrgInfo>? orgDetails) =>
      (super.noSuchMethod(
        Invocation.method(
          #updateUserJoinedOrg,
          [orgDetails],
        ),
        returnValue: _i2.Future<void>.value(),
        returnValueForMissingStub: _i2.Future<void>.value(),
      ) as _i2.Future<void>);

  @override
  _i2.Future<void> updateUserCreatedOrg(List<_i3.OrgInfo>? orgDetails) =>
      (super.noSuchMethod(
        Invocation.method(
          #updateUserCreatedOrg,
          [orgDetails],
        ),
        returnValue: _i2.Future<void>.value(),
        returnValueForMissingStub: _i2.Future<void>.value(),
      ) as _i2.Future<void>);

  @override
  _i2.Future<void> updateUserMemberRequestOrg(List<_i3.OrgInfo>? orgDetails) =>
      (super.noSuchMethod(
        Invocation.method(
          #updateUserMemberRequestOrg,
          [orgDetails],
        ),
        returnValue: _i2.Future<void>.value(),
        returnValueForMissingStub: _i2.Future<void>.value(),
      ) as _i2.Future<void>);

  @override
  _i2.Future<void> updateUserAdminOrg(List<_i3.OrgInfo>? orgDetails) =>
      (super.noSuchMethod(
        Invocation.method(
          #updateUserAdminOrg,
          [orgDetails],
        ),
        returnValue: _i2.Future<void>.value(),
        returnValueForMissingStub: _i2.Future<void>.value(),
      ) as _i2.Future<void>);

  @override
  _i2.Future<void> updateAccessToken({
    required String? accessToken,
    required String? refreshToken,
  }) =>
      (super.noSuchMethod(
        Invocation.method(
          #updateAccessToken,
          [],
          {
            #accessToken: accessToken,
            #refreshToken: refreshToken,
          },
        ),
        returnValue: _i2.Future<void>.value(),
        returnValueForMissingStub: _i2.Future<void>.value(),
      ) as _i2.Future<void>);

  @override
  _i2.Future<bool> updateUser(_i4.User? updatedUserDetails) =>
      (super.noSuchMethod(
        Invocation.method(
          #updateUser,
          [updatedUserDetails],
        ),
        returnValue: _i2.Future<bool>.value(false),
        returnValueForMissingStub: _i2.Future<bool>.value(false),
      ) as _i2.Future<bool>);

  @override
  void saveUserInHive() => super.noSuchMethod(
        Invocation.method(
          #saveUserInHive,
          [],
        ),
        returnValueForMissingStub: null,
      );

  @override
  void saveCurrentOrgInHive(_i3.OrgInfo? saveOrgAsCurrent) =>
      super.noSuchMethod(
        Invocation.method(
          #saveCurrentOrgInHive,
          [saveOrgAsCurrent],
        ),
        returnValueForMissingStub: null,
      );
}