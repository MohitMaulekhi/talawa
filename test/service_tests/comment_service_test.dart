import 'package:flutter_test/flutter_test.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:mockito/mockito.dart';
import 'package:talawa/enums/enums.dart';
import 'package:talawa/services/comment_service.dart';
import 'package:talawa/services/database_mutation_functions.dart';
import 'package:talawa/utils/comment_queries.dart';
import '../helpers/test_helpers.dart';
import '../helpers/test_locator.dart';

void main() {
  group('CommentService', () {
    setUpAll(registerServices);
    tearDownAll(unregisterServices);

    test('createComments returns Comment on success', () async {
      final db = locator<DataBaseMutationFunctions>();
      final query = CommentQueries().createComment();
      final mockData = {
        'createComment': {
          'id': 'c1',
          'body': 'test',
        },
      };
      when(db.gqlAuthMutation(query, variables: anyNamed('variables')))
          .thenAnswer(
        (_) async => QueryResult(
          options: QueryOptions(document: gql(query)),
          data: mockData,
          source: QueryResultSource.network,
        ),
      );
      final service = CommentService();
      final result = await service.createComments('pid', 'body');
      expect(result, isNotNull);
      expect(result!.id, 'c1');
      expect(result.body, 'test');
    });

    test('createComments shows error and returns null on exception', () async {
      final db = locator<DataBaseMutationFunctions>();
      final query = CommentQueries().createComment();
      when(db.gqlAuthMutation(query, variables: anyNamed('variables')))
          .thenThrow(Exception('fail'));
      final service = CommentService();
      final result = await service.createComments('pid', 'body');
      expect(result, isNull);
      verify(
        navigationService.showTalawaErrorSnackBar(
          "Something went wrong",
          MessageType.error,
        ),
      ).called(1);
    });

    test('getCommentsForPost returns comments and pageInfo', () async {
      final db = locator<DataBaseMutationFunctions>();
      final query = CommentQueries().getPostsComments();
      final mockData = {
        'post': {
          'comments': {
            'edges': [
              {
                'node': {'id': '1', 'body': 'test'},
              },
            ],
            'pageInfo': {'hasNextPage': false},
          },
        },
      };
      when(db.gqlAuthMutation(query, variables: anyNamed('variables')))
          .thenAnswer(
        (_) async => QueryResult(
          options: QueryOptions(document: gql(query)),
          data: mockData,
          source: QueryResultSource.network,
        ),
      );
      final service = CommentService();
      final result = await service.getCommentsForPost(postId: 'pid');
      expect(result['comments'], isNotEmpty);
      expect(result['pageInfo'], contains('hasNextPage'));
    });

    test('getCommentsForPost returns empty if post is null', () async {
      final db = locator<DataBaseMutationFunctions>();
      final query = CommentQueries().getPostsComments();
      final mockData = {'post': null};
      when(db.gqlAuthMutation(query, variables: anyNamed('variables')))
          .thenAnswer(
        (_) async => QueryResult(
          options: QueryOptions(document: gql(query)),
          data: mockData,
          source: QueryResultSource.network,
        ),
      );
      final service = CommentService();
      final result = await service.getCommentsForPost(postId: 'pid');
      expect(result['comments'], isEmpty);
      expect(result['pageInfo'], isEmpty);
    });

    test('getCommentsForPost returns empty if comments is null', () async {
      final db = locator<DataBaseMutationFunctions>();
      final query = CommentQueries().getPostsComments();
      final mockData = {
        'post': {
          'comments': null,
        },
      };
      when(db.gqlAuthMutation(query, variables: anyNamed('variables')))
          .thenAnswer(
        (_) async => QueryResult(
          options: QueryOptions(document: gql(query)),
          data: mockData,
          source: QueryResultSource.network,
        ),
      );
      final service = CommentService();
      final result = await service.getCommentsForPost(postId: 'pid');
      expect(result['comments'], isEmpty);
      expect(result['pageInfo'], isEmpty);
    });

    test('getCommentsForPost returns empty and shows error on exception',
        () async {
      final db = locator<DataBaseMutationFunctions>();
      final query = CommentQueries().getPostsComments();
      when(db.gqlAuthMutation(query, variables: anyNamed('variables')))
          .thenThrow(Exception('fail'));
      final service = CommentService();
      final result = await service.getCommentsForPost(postId: 'pid');
      expect(result['comments'], isEmpty);
      expect(result['pageInfo'], isEmpty);
      verify(
        navigationService.showTalawaErrorSnackBar(
          "Something went wrong while fetching comments",
          MessageType.error,
        ),
      ).called(1);
    });

    test('toggleUpVoteComment calls gqlAuthMutation with correct variables',
        () async {
      final db = locator<DataBaseMutationFunctions>();
      final query = CommentQueries().updateVoteComment();
      when(db.gqlAuthMutation(query, variables: anyNamed('variables')))
          .thenAnswer(
        (_) async => QueryResult(
          options: QueryOptions(document: gql(query)),
          data: {},
          source: QueryResultSource.network,
        ),
      );
      final service = CommentService();
      await service.toggleUpVoteComment('cid', null, false);
      verify(
        db.gqlAuthMutation(
          query,
          variables: {
            'commentId': 'cid',
            'type': 'up_vote',
          },
        ),
      ).called(1);
      await service.toggleUpVoteComment('cid', VoteType.upVote, true);
      verify(
        db.gqlAuthMutation(
          query,
          variables: {
            'commentId': 'cid',
            'type': null,
          },
        ),
      ).called(1);
    });

    test('toggleDownVoteComment calls gqlAuthMutation with correct variables',
        () async {
      final db = locator<DataBaseMutationFunctions>();
      final query = CommentQueries().updateVoteComment();
      when(db.gqlAuthMutation(query, variables: anyNamed('variables')))
          .thenAnswer(
        (_) async => QueryResult(
          options: QueryOptions(document: gql(query)),
          data: {},
          source: QueryResultSource.network,
        ),
      );
      final service = CommentService();
      await service.toggleDownVoteComment('cid', null, false);
      verify(
        db.gqlAuthMutation(
          query,
          variables: {
            'commentId': 'cid',
            'type': 'down_vote',
          },
        ),
      ).called(1);
      await service.toggleDownVoteComment('cid', VoteType.downVote, true);
      verify(
        db.gqlAuthMutation(
          query,
          variables: {
            'commentId': 'cid',
            'type': null,
          },
        ),
      ).called(1);
    });
  });
}
