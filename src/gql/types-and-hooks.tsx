import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  ObjectId: { input: any; output: any; }
};

export type Blog = {
  __typename?: 'Blog';
  _id: Scalars['ObjectId']['output'];
  active?: Maybe<Scalars['Boolean']['output']>;
  author: User;
  body: Scalars['String']['output'];
  categories: Array<Category>;
  comments?: Maybe<Array<Comment>>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  imageUri?: Maybe<Scalars['String']['output']>;
  likedBy?: Maybe<Array<User>>;
  mtitle: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  tags: Array<Tag>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type BlogInput = {
  active: Scalars['Boolean']['input'];
  body: Scalars['String']['input'];
  imageUri?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type Category = {
  __typename?: 'Category';
  _id: Scalars['ObjectId']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type Comment = {
  __typename?: 'Comment';
  _id: Scalars['ObjectId']['output'];
  atBlog: Blog;
  by: User;
  content: Scalars['String']['output'];
};

export type Conversation = {
  __typename?: 'Conversation';
  _id: Scalars['ObjectId']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  latestMessage?: Maybe<Message>;
  latestMessageId?: Maybe<Scalars['String']['output']>;
  messages: Array<Message>;
  participantUserIds: Array<Scalars['String']['output']>;
  participants: Array<Participant>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ConversationUpdated = {
  __typename?: 'ConversationUpdated';
  addedUserIds?: Maybe<Array<Scalars['String']['output']>>;
  conversation: Conversation;
  removedUserIds?: Maybe<Array<Scalars['String']['output']>>;
};

export type FollowInfo = {
  __typename?: 'FollowInfo';
  followers: Array<User>;
  followings: Array<User>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String']['output'];
  accessTokenExpiry: Scalars['Float']['output'];
  ok: Scalars['Boolean']['output'];
  refreshToken: Scalars['String']['output'];
};

export type Message = {
  __typename?: 'Message';
  _id: Scalars['ObjectId']['output'];
  body: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  sender: User;
  senderId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBlog: NewBlogResponse;
  createConversation: Scalars['String']['output'];
  deleteBlogById: Scalars['Boolean']['output'];
  deleteCat: Scalars['Boolean']['output'];
  deleteConversation: Scalars['Boolean']['output'];
  deleteTag: Scalars['Boolean']['output'];
  editProfile: Scalars['Boolean']['output'];
  follow: Scalars['Boolean']['output'];
  forgotPassword: Scalars['String']['output'];
  login: LoginResponse;
  logout: Scalars['Boolean']['output'];
  markConversationAsRead: Scalars['Boolean']['output'];
  newCat: Scalars['Boolean']['output'];
  newTag: Scalars['Boolean']['output'];
  refreshToken: LoginResponse;
  register: Scalars['String']['output'];
  resetPassword: Scalars['Boolean']['output'];
  revokeRefreshTokensForUser: Scalars['Boolean']['output'];
  sendMessage: Scalars['Boolean']['output'];
  unFollow: Scalars['Boolean']['output'];
  updateBlog: NewBlogResponse;
  updateParticipants: Scalars['Boolean']['output'];
};


export type MutationCreateBlogArgs = {
  blogInput: BlogInput;
  tagIds?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationCreateConversationArgs = {
  participantUserIds: Array<Scalars['String']['input']>;
};


export type MutationDeleteBlogByIdArgs = {
  blogId: Scalars['String']['input'];
};


export type MutationDeleteCatArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteConversationArgs = {
  conversationId: Scalars['String']['input'];
};


export type MutationDeleteTagArgs = {
  id: Scalars['String']['input'];
};


export type MutationEditProfileArgs = {
  about?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<Scalars['String']['input']>;
};


export type MutationFollowArgs = {
  followName: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationMarkConversationAsReadArgs = {
  conversationId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationNewCatArgs = {
  catName: Scalars['String']['input'];
};


export type MutationNewTagArgs = {
  tagName: Scalars['String']['input'];
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationRevokeRefreshTokensForUserArgs = {
  userId: Scalars['String']['input'];
};


export type MutationSendMessageArgs = {
  body: Scalars['String']['input'];
  conversationId: Scalars['String']['input'];
  senderId: Scalars['String']['input'];
};


export type MutationUnFollowArgs = {
  name: Scalars['String']['input'];
};


export type MutationUpdateBlogArgs = {
  blogId: Scalars['String']['input'];
  blogInput: BlogInput;
  tagIds?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationUpdateParticipantsArgs = {
  conversationId: Scalars['String']['input'];
  participantIds: Array<Scalars['String']['input']>;
};

export type NewBlogResponse = {
  __typename?: 'NewBlogResponse';
  success: Scalars['Boolean']['output'];
};

export type Notification = {
  __typename?: 'Notification';
  dateString: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  linkString: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type Participant = {
  __typename?: 'Participant';
  _id: Scalars['ObjectId']['output'];
  conversation: Conversation;
  conversationId: Scalars['String']['output'];
  hasSeenLatestMessage: Scalars['Boolean']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  conversations: Array<Conversation>;
  currentUser?: Maybe<User>;
  getBlogById: Blog;
  getBlogBySlug: Blog;
  getCatBlogs: Array<Blog>;
  getFollowInfo?: Maybe<FollowInfo>;
  getRelatedBlogs: Array<Blog>;
  getTagBlogs: Array<Blog>;
  getUserBlogs: Array<Blog>;
  getUserInfo: UserInfoResponse;
  listBlogsWithCatTag: Array<Blog>;
  listCats: Array<Category>;
  listTags: Array<Tag>;
  messages: Array<Message>;
  searchBlogs: Array<Blog>;
  searchUsers?: Maybe<Array<User>>;
};


export type QueryGetBlogByIdArgs = {
  blogId: Scalars['String']['input'];
};


export type QueryGetBlogBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryGetCatBlogsArgs = {
  slug: Scalars['String']['input'];
};


export type QueryGetFollowInfoArgs = {
  username?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetRelatedBlogsArgs = {
  catIds: Array<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  slug: Scalars['String']['input'];
  tagIds: Array<Scalars['String']['input']>;
};


export type QueryGetTagBlogsArgs = {
  slug: Scalars['String']['input'];
};


export type QueryGetUserBlogsArgs = {
  userId?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetUserInfoArgs = {
  username: Scalars['String']['input'];
};


export type QueryMessagesArgs = {
  conversationId: Scalars['String']['input'];
};


export type QuerySearchBlogsArgs = {
  query: Scalars['String']['input'];
};


export type QuerySearchUsersArgs = {
  name: Scalars['String']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  blogPublished: Notification;
  conversationCreated: Conversation;
  conversationDeleted: Conversation;
  conversationUpdated: ConversationUpdated;
  messageSent: Message;
  userFollowed: Notification;
};


export type SubscriptionBlogPublishedArgs = {
  followingIds: Array<Scalars['String']['input']>;
};


export type SubscriptionUserFollowedArgs = {
  name: Scalars['String']['input'];
};

export type Tag = {
  __typename?: 'Tag';
  _id: Scalars['ObjectId']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ObjectId']['output'];
  about?: Maybe<Scalars['String']['output']>;
  commented: Array<Comment>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  followerIds: Array<Scalars['String']['output']>;
  followers: Array<User>;
  followingIds: Array<Scalars['String']['output']>;
  followings: Array<User>;
  name: Scalars['String']['output'];
  photo?: Maybe<Scalars['String']['output']>;
  profile: Scalars['String']['output'];
  resetPasswordLink?: Maybe<Scalars['String']['output']>;
  role: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UserInfoResponse = {
  __typename?: 'UserInfoResponse';
  _id: Scalars['String']['output'];
  about: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
  photo: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type RegisterMutationVariables = Exact<{
  registerPassword: Scalars['String']['input'];
  registerEmail: Scalars['String']['input'];
  registerName: Scalars['String']['input'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: string };

export type LoginMutationVariables = Exact<{
  password: Scalars['String']['input'];
  email: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', accessToken: string, refreshToken: string, accessTokenExpiry: number, ok: boolean } };

export type CreateBlogMutationVariables = Exact<{
  blogInput: BlogInput;
  tagIds?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type CreateBlogMutation = { __typename?: 'Mutation', createBlog: { __typename?: 'NewBlogResponse', success: boolean } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RefreshTokenMutationVariables = Exact<{
  refreshToken: Scalars['String']['input'];
}>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: { __typename?: 'LoginResponse', accessToken: string, accessTokenExpiry: number, refreshToken: string, ok: boolean } };

export type EditProfileMutationVariables = Exact<{
  about?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
}>;


export type EditProfileMutation = { __typename?: 'Mutation', editProfile: boolean };

export type ResetPasswordMutationVariables = Exact<{
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: boolean };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: string };

export type DeleteTagMutationVariables = Exact<{
  deleteTagId: Scalars['String']['input'];
}>;


export type DeleteTagMutation = { __typename?: 'Mutation', deleteTag: boolean };

export type NewTagMutationVariables = Exact<{
  tagName: Scalars['String']['input'];
}>;


export type NewTagMutation = { __typename?: 'Mutation', newTag: boolean };

export type NewCatMutationVariables = Exact<{
  catName: Scalars['String']['input'];
}>;


export type NewCatMutation = { __typename?: 'Mutation', newCat: boolean };

export type DeleteCatMutationVariables = Exact<{
  deleteCatId: Scalars['String']['input'];
}>;


export type DeleteCatMutation = { __typename?: 'Mutation', deleteCat: boolean };

export type UpdateBlogMutationVariables = Exact<{
  blogInput: BlogInput;
  blogId: Scalars['String']['input'];
  tagIds?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type UpdateBlogMutation = { __typename?: 'Mutation', updateBlog: { __typename?: 'NewBlogResponse', success: boolean } };

export type DeleteBlogByIdMutationVariables = Exact<{
  blogId: Scalars['String']['input'];
}>;


export type DeleteBlogByIdMutation = { __typename?: 'Mutation', deleteBlogById: boolean };

export type FollowMutationVariables = Exact<{
  followName: Scalars['String']['input'];
}>;


export type FollowMutation = { __typename?: 'Mutation', follow: boolean };

export type UnFollowMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type UnFollowMutation = { __typename?: 'Mutation', unFollow: boolean };

export type CreateConversationMutationVariables = Exact<{
  participantUserIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type CreateConversationMutation = { __typename?: 'Mutation', createConversation: string };

export type DeleteConversationMutationVariables = Exact<{
  conversationId: Scalars['String']['input'];
}>;


export type DeleteConversationMutation = { __typename?: 'Mutation', deleteConversation: boolean };

export type UpdateParticipantsMutationVariables = Exact<{
  participantIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
  conversationId: Scalars['String']['input'];
}>;


export type UpdateParticipantsMutation = { __typename?: 'Mutation', updateParticipants: boolean };

export type SendMessageMutationVariables = Exact<{
  conversationId: Scalars['String']['input'];
  senderId: Scalars['String']['input'];
  body: Scalars['String']['input'];
}>;


export type SendMessageMutation = { __typename?: 'Mutation', sendMessage: boolean };

export type MarkConversationAsReadMutationVariables = Exact<{
  conversationId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type MarkConversationAsReadMutation = { __typename?: 'Mutation', markConversationAsRead: boolean };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', currentUser?: { __typename?: 'User', _id: any, username: string, name: string, email: string, profile: string, about?: string | null, role: string, photo?: string | null, createdAt: any, updatedAt?: any | null, followingIds: Array<string>, followerIds: Array<string> } | null };

export type GetCatBlogsQueryVariables = Exact<{
  getCatBlogsSlug: Scalars['String']['input'];
}>;


export type GetCatBlogsQuery = { __typename?: 'Query', getCatBlogs: Array<{ __typename?: 'Blog', _id: any, createdAt: any, updatedAt: any, imageUri?: string | null, mtitle: string, description?: string | null, slug: string, title: string, author: { __typename?: 'User', username: string, name: string, profile: string }, tags: Array<{ __typename?: 'Tag', name: string, slug: string }>, categories: Array<{ __typename?: 'Category', name: string, slug: string }> }> };

export type GetTagBlogsQueryVariables = Exact<{
  getTagBlogsSlug: Scalars['String']['input'];
}>;


export type GetTagBlogsQuery = { __typename?: 'Query', getTagBlogs: Array<{ __typename?: 'Blog', _id: any, createdAt: any, updatedAt: any, imageUri?: string | null, mtitle: string, description?: string | null, slug: string, title: string, author: { __typename?: 'User', username: string, name: string, profile: string }, tags: Array<{ __typename?: 'Tag', name: string, slug: string }>, categories: Array<{ __typename?: 'Category', name: string, slug: string }> }> };

export type GetBlogBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetBlogBySlugQuery = { __typename?: 'Query', getBlogBySlug: { __typename?: 'Blog', title: string, slug: string, description?: string | null, body: string, mtitle: string, imageUri?: string | null, active?: boolean | null, _id: any, createdAt: any, updatedAt: any, likedBy?: Array<{ __typename?: 'User', username: string, name: string }> | null, comments?: Array<{ __typename?: 'Comment', content: string, by: { __typename?: 'User', name: string, username: string }, atBlog: { __typename?: 'Blog', slug: string, title: string } }> | null, author: { __typename?: 'User', name: string, username: string }, tags: Array<{ __typename?: 'Tag', _id: any, slug: string, name: string }>, categories: Array<{ __typename?: 'Category', _id: any, slug: string, name: string }> } };

export type ListBlogsWithCatTagQueryVariables = Exact<{ [key: string]: never; }>;


export type ListBlogsWithCatTagQuery = { __typename?: 'Query', listBlogsWithCatTag: Array<{ __typename?: 'Blog', title: string, description?: string | null, body: string, slug: string, _id: any, mtitle: string, imageUri?: string | null, active?: boolean | null, createdAt: any, updatedAt: any, author: { __typename?: 'User', name: string, profile: string }, categories: Array<{ __typename?: 'Category', slug: string, name: string }>, tags: Array<{ __typename?: 'Tag', slug: string, name: string }> }> };

export type GetRelatedBlogsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Float']['input']>;
  tagIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
  catIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
  getRelatedBlogsSlug: Scalars['String']['input'];
}>;


export type GetRelatedBlogsQuery = { __typename?: 'Query', getRelatedBlogs: Array<{ __typename?: 'Blog', imageUri?: string | null, _id: any, slug: string, tags: Array<{ __typename?: 'Tag', slug: string, name: string }> }> };

export type SearchBlogsQueryVariables = Exact<{
  query: Scalars['String']['input'];
}>;


export type SearchBlogsQuery = { __typename?: 'Query', searchBlogs: Array<{ __typename?: 'Blog', slug: string, title: string, description?: string | null, createdAt: any, imageUri?: string | null, author: { __typename?: 'User', name: string, photo?: string | null }, tags: Array<{ __typename?: 'Tag', name: string, slug: string }> }> };

export type GetUserBlogsQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetUserBlogsQuery = { __typename?: 'Query', getUserBlogs: Array<{ __typename?: 'Blog', _id: any, title: string, createdAt: any, description?: string | null, imageUri?: string | null, slug: string, author: { __typename?: 'User', name: string, username: string }, categories: Array<{ __typename?: 'Category', name: string, slug: string }>, tags: Array<{ __typename?: 'Tag', slug: string, name: string }> }> };

export type ListTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListTagsQuery = { __typename?: 'Query', listTags: Array<{ __typename?: 'Tag', name: string, slug: string, _id: any }> };

export type ListCatsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListCatsQuery = { __typename?: 'Query', listCats: Array<{ __typename?: 'Category', name: string, _id: any, slug: string }> };

export type GetBlogByIdQueryVariables = Exact<{
  blogId: Scalars['String']['input'];
}>;


export type GetBlogByIdQuery = { __typename?: 'Query', getBlogById: { __typename?: 'Blog', _id: any, active?: boolean | null, body: string, createdAt: any, description?: string | null, imageUri?: string | null, slug: string, title: string, updatedAt: any, mtitle: string, author: { __typename?: 'User', name: string }, categories: Array<{ __typename?: 'Category', _id: any, name: string, slug: string }>, tags: Array<{ __typename?: 'Tag', name: string, slug: string, _id: any }> } };

export type SearchUsersQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type SearchUsersQuery = { __typename?: 'Query', searchUsers?: Array<{ __typename?: 'User', _id: any, username: string, name: string, email: string, profile: string, about?: string | null, photo?: string | null, followingIds: Array<string>, followerIds: Array<string> }> | null };

export type GetUserInfoQueryVariables = Exact<{
  username: Scalars['String']['input'];
}>;


export type GetUserInfoQuery = { __typename?: 'Query', getUserInfo: { __typename?: 'UserInfoResponse', _id: string, createdAt: any, email: string, name: string, photo: string, about: string, username: string } };

export type GetFollowInfoQueryVariables = Exact<{
  username?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetFollowInfoQuery = { __typename?: 'Query', getFollowInfo?: { __typename?: 'FollowInfo', followers: Array<{ __typename?: 'User', _id: any, username: string, name: string, email: string, profile: string, about?: string | null, photo?: string | null, followingIds: Array<string>, followerIds: Array<string> }>, followings: Array<{ __typename?: 'User', _id: any, username: string, name: string, email: string, profile: string, about?: string | null, photo?: string | null, followingIds: Array<string>, followerIds: Array<string> }> } | null };

export type ConversationsQueryVariables = Exact<{ [key: string]: never; }>;


export type ConversationsQuery = { __typename?: 'Query', conversations: Array<{ __typename?: 'Conversation', createdAt?: any | null, _id: any, latestMessage?: { __typename?: 'Message', sender: { __typename?: 'User', _id: any, name: string, username: string } } | null, messages: Array<{ __typename?: 'Message', body: string, createdAt: any, sender: { __typename?: 'User', _id: any, name: string, username: string, photo?: string | null } }>, participants: Array<{ __typename?: 'Participant', _id: any, conversationId: string, userId: string, hasSeenLatestMessage: boolean, user: { __typename?: 'User', _id: any, name: string, username: string, photo?: string | null } }> }> };

export type MessagesQueryVariables = Exact<{
  conversationId: Scalars['String']['input'];
}>;


export type MessagesQuery = { __typename?: 'Query', messages: Array<{ __typename?: 'Message', body: string, createdAt: any, senderId: string, _id: any, sender: { __typename?: 'User', _id: any, name: string, photo?: string | null, username: string } }> };

export type BlogPublishedSubscriptionVariables = Exact<{
  followingIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type BlogPublishedSubscription = { __typename?: 'Subscription', blogPublished: { __typename?: 'Notification', dateString: string, linkString: string, id: string, message: string } };

export type UserFollowedSubscriptionVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type UserFollowedSubscription = { __typename?: 'Subscription', userFollowed: { __typename?: 'Notification', dateString: string, linkString: string, id: string, message: string } };

export type ConversationCreatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ConversationCreatedSubscription = { __typename?: 'Subscription', conversationCreated: { __typename?: 'Conversation', _id: any, createdAt?: any | null, participantUserIds: Array<string>, latestMessageId?: string | null, latestMessage?: { __typename?: 'Message', body: string, senderId: string } | null, participants: Array<{ __typename?: 'Participant', hasSeenLatestMessage: boolean, userId: string, conversationId: string }> } };

export type ConversationDeletedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ConversationDeletedSubscription = { __typename?: 'Subscription', conversationDeleted: { __typename?: 'Conversation', participantUserIds: Array<string>, latestMessageId?: string | null, _id: any, participants: Array<{ __typename?: 'Participant', conversationId: string, hasSeenLatestMessage: boolean, userId: string, conversation: { __typename?: 'Conversation', latestMessageId?: string | null } }> } };

export type ConversationUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ConversationUpdatedSubscription = { __typename?: 'Subscription', conversationUpdated: { __typename?: 'ConversationUpdated', addedUserIds?: Array<string> | null, removedUserIds?: Array<string> | null, conversation: { __typename?: 'Conversation', participantUserIds: Array<string>, latestMessageId?: string | null, _id: any, participants: Array<{ __typename?: 'Participant', hasSeenLatestMessage: boolean, conversationId: string, _id: any }> } } };

export type MessageSentSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type MessageSentSubscription = { __typename?: 'Subscription', messageSent: { __typename?: 'Message', body: string, createdAt: any, senderId: string, updatedAt: any, _id: any, sender: { __typename?: 'User', _id: any, name: string, username: string, photo?: string | null } } };


export const RegisterDocument = gql`
    mutation Register($registerPassword: String!, $registerEmail: String!, $registerName: String!) {
  register(
    password: $registerPassword
    email: $registerEmail
    name: $registerName
  )
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      registerPassword: // value for 'registerPassword'
 *      registerEmail: // value for 'registerEmail'
 *      registerName: // value for 'registerName'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const LoginDocument = gql`
    mutation Login($password: String!, $email: String!) {
  login(password: $password, email: $email) {
    accessToken
    refreshToken
    accessTokenExpiry
    ok
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const CreateBlogDocument = gql`
    mutation CreateBlog($blogInput: BlogInput!, $tagIds: [String!]) {
  createBlog(blogInput: $blogInput, tagIds: $tagIds) {
    success
  }
}
    `;
export type CreateBlogMutationFn = Apollo.MutationFunction<CreateBlogMutation, CreateBlogMutationVariables>;

/**
 * __useCreateBlogMutation__
 *
 * To run a mutation, you first call `useCreateBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBlogMutation, { data, loading, error }] = useCreateBlogMutation({
 *   variables: {
 *      blogInput: // value for 'blogInput'
 *      tagIds: // value for 'tagIds'
 *   },
 * });
 */
export function useCreateBlogMutation(baseOptions?: Apollo.MutationHookOptions<CreateBlogMutation, CreateBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBlogMutation, CreateBlogMutationVariables>(CreateBlogDocument, options);
      }
export type CreateBlogMutationHookResult = ReturnType<typeof useCreateBlogMutation>;
export type CreateBlogMutationResult = Apollo.MutationResult<CreateBlogMutation>;
export type CreateBlogMutationOptions = Apollo.BaseMutationOptions<CreateBlogMutation, CreateBlogMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RefreshTokenDocument = gql`
    mutation RefreshToken($refreshToken: String!) {
  refreshToken(refreshToken: $refreshToken) {
    accessToken
    accessTokenExpiry
    refreshToken
    ok
  }
}
    `;
export type RefreshTokenMutationFn = Apollo.MutationFunction<RefreshTokenMutation, RefreshTokenMutationVariables>;

/**
 * __useRefreshTokenMutation__
 *
 * To run a mutation, you first call `useRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokenMutation, { data, loading, error }] = useRefreshTokenMutation({
 *   variables: {
 *      refreshToken: // value for 'refreshToken'
 *   },
 * });
 */
export function useRefreshTokenMutation(baseOptions?: Apollo.MutationHookOptions<RefreshTokenMutation, RefreshTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument, options);
      }
export type RefreshTokenMutationHookResult = ReturnType<typeof useRefreshTokenMutation>;
export type RefreshTokenMutationResult = Apollo.MutationResult<RefreshTokenMutation>;
export type RefreshTokenMutationOptions = Apollo.BaseMutationOptions<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const EditProfileDocument = gql`
    mutation EditProfile($about: String, $name: String, $photo: String, $email: String) {
  editProfile(about: $about, name: $name, photo: $photo, email: $email)
}
    `;
export type EditProfileMutationFn = Apollo.MutationFunction<EditProfileMutation, EditProfileMutationVariables>;

/**
 * __useEditProfileMutation__
 *
 * To run a mutation, you first call `useEditProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editProfileMutation, { data, loading, error }] = useEditProfileMutation({
 *   variables: {
 *      about: // value for 'about'
 *      name: // value for 'name'
 *      photo: // value for 'photo'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useEditProfileMutation(baseOptions?: Apollo.MutationHookOptions<EditProfileMutation, EditProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditProfileMutation, EditProfileMutationVariables>(EditProfileDocument, options);
      }
export type EditProfileMutationHookResult = ReturnType<typeof useEditProfileMutation>;
export type EditProfileMutationResult = Apollo.MutationResult<EditProfileMutation>;
export type EditProfileMutationOptions = Apollo.BaseMutationOptions<EditProfileMutation, EditProfileMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($password: String!, $username: String!) {
  resetPassword(password: $password, username: $username)
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      password: // value for 'password'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const DeleteTagDocument = gql`
    mutation DeleteTag($deleteTagId: String!) {
  deleteTag(id: $deleteTagId)
}
    `;
export type DeleteTagMutationFn = Apollo.MutationFunction<DeleteTagMutation, DeleteTagMutationVariables>;

/**
 * __useDeleteTagMutation__
 *
 * To run a mutation, you first call `useDeleteTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTagMutation, { data, loading, error }] = useDeleteTagMutation({
 *   variables: {
 *      deleteTagId: // value for 'deleteTagId'
 *   },
 * });
 */
export function useDeleteTagMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTagMutation, DeleteTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTagMutation, DeleteTagMutationVariables>(DeleteTagDocument, options);
      }
export type DeleteTagMutationHookResult = ReturnType<typeof useDeleteTagMutation>;
export type DeleteTagMutationResult = Apollo.MutationResult<DeleteTagMutation>;
export type DeleteTagMutationOptions = Apollo.BaseMutationOptions<DeleteTagMutation, DeleteTagMutationVariables>;
export const NewTagDocument = gql`
    mutation NewTag($tagName: String!) {
  newTag(tagName: $tagName)
}
    `;
export type NewTagMutationFn = Apollo.MutationFunction<NewTagMutation, NewTagMutationVariables>;

/**
 * __useNewTagMutation__
 *
 * To run a mutation, you first call `useNewTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNewTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [newTagMutation, { data, loading, error }] = useNewTagMutation({
 *   variables: {
 *      tagName: // value for 'tagName'
 *   },
 * });
 */
export function useNewTagMutation(baseOptions?: Apollo.MutationHookOptions<NewTagMutation, NewTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<NewTagMutation, NewTagMutationVariables>(NewTagDocument, options);
      }
export type NewTagMutationHookResult = ReturnType<typeof useNewTagMutation>;
export type NewTagMutationResult = Apollo.MutationResult<NewTagMutation>;
export type NewTagMutationOptions = Apollo.BaseMutationOptions<NewTagMutation, NewTagMutationVariables>;
export const NewCatDocument = gql`
    mutation NewCat($catName: String!) {
  newCat(catName: $catName)
}
    `;
export type NewCatMutationFn = Apollo.MutationFunction<NewCatMutation, NewCatMutationVariables>;

/**
 * __useNewCatMutation__
 *
 * To run a mutation, you first call `useNewCatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNewCatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [newCatMutation, { data, loading, error }] = useNewCatMutation({
 *   variables: {
 *      catName: // value for 'catName'
 *   },
 * });
 */
export function useNewCatMutation(baseOptions?: Apollo.MutationHookOptions<NewCatMutation, NewCatMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<NewCatMutation, NewCatMutationVariables>(NewCatDocument, options);
      }
export type NewCatMutationHookResult = ReturnType<typeof useNewCatMutation>;
export type NewCatMutationResult = Apollo.MutationResult<NewCatMutation>;
export type NewCatMutationOptions = Apollo.BaseMutationOptions<NewCatMutation, NewCatMutationVariables>;
export const DeleteCatDocument = gql`
    mutation DeleteCat($deleteCatId: String!) {
  deleteCat(id: $deleteCatId)
}
    `;
export type DeleteCatMutationFn = Apollo.MutationFunction<DeleteCatMutation, DeleteCatMutationVariables>;

/**
 * __useDeleteCatMutation__
 *
 * To run a mutation, you first call `useDeleteCatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCatMutation, { data, loading, error }] = useDeleteCatMutation({
 *   variables: {
 *      deleteCatId: // value for 'deleteCatId'
 *   },
 * });
 */
export function useDeleteCatMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCatMutation, DeleteCatMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCatMutation, DeleteCatMutationVariables>(DeleteCatDocument, options);
      }
export type DeleteCatMutationHookResult = ReturnType<typeof useDeleteCatMutation>;
export type DeleteCatMutationResult = Apollo.MutationResult<DeleteCatMutation>;
export type DeleteCatMutationOptions = Apollo.BaseMutationOptions<DeleteCatMutation, DeleteCatMutationVariables>;
export const UpdateBlogDocument = gql`
    mutation UpdateBlog($blogInput: BlogInput!, $blogId: String!, $tagIds: [String!]) {
  updateBlog(blogInput: $blogInput, blogId: $blogId, tagIds: $tagIds) {
    success
  }
}
    `;
export type UpdateBlogMutationFn = Apollo.MutationFunction<UpdateBlogMutation, UpdateBlogMutationVariables>;

/**
 * __useUpdateBlogMutation__
 *
 * To run a mutation, you first call `useUpdateBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBlogMutation, { data, loading, error }] = useUpdateBlogMutation({
 *   variables: {
 *      blogInput: // value for 'blogInput'
 *      blogId: // value for 'blogId'
 *      tagIds: // value for 'tagIds'
 *   },
 * });
 */
export function useUpdateBlogMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBlogMutation, UpdateBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBlogMutation, UpdateBlogMutationVariables>(UpdateBlogDocument, options);
      }
export type UpdateBlogMutationHookResult = ReturnType<typeof useUpdateBlogMutation>;
export type UpdateBlogMutationResult = Apollo.MutationResult<UpdateBlogMutation>;
export type UpdateBlogMutationOptions = Apollo.BaseMutationOptions<UpdateBlogMutation, UpdateBlogMutationVariables>;
export const DeleteBlogByIdDocument = gql`
    mutation DeleteBlogById($blogId: String!) {
  deleteBlogById(blogId: $blogId)
}
    `;
export type DeleteBlogByIdMutationFn = Apollo.MutationFunction<DeleteBlogByIdMutation, DeleteBlogByIdMutationVariables>;

/**
 * __useDeleteBlogByIdMutation__
 *
 * To run a mutation, you first call `useDeleteBlogByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBlogByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBlogByIdMutation, { data, loading, error }] = useDeleteBlogByIdMutation({
 *   variables: {
 *      blogId: // value for 'blogId'
 *   },
 * });
 */
export function useDeleteBlogByIdMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBlogByIdMutation, DeleteBlogByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBlogByIdMutation, DeleteBlogByIdMutationVariables>(DeleteBlogByIdDocument, options);
      }
export type DeleteBlogByIdMutationHookResult = ReturnType<typeof useDeleteBlogByIdMutation>;
export type DeleteBlogByIdMutationResult = Apollo.MutationResult<DeleteBlogByIdMutation>;
export type DeleteBlogByIdMutationOptions = Apollo.BaseMutationOptions<DeleteBlogByIdMutation, DeleteBlogByIdMutationVariables>;
export const FollowDocument = gql`
    mutation Follow($followName: String!) {
  follow(followName: $followName)
}
    `;
export type FollowMutationFn = Apollo.MutationFunction<FollowMutation, FollowMutationVariables>;

/**
 * __useFollowMutation__
 *
 * To run a mutation, you first call `useFollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [followMutation, { data, loading, error }] = useFollowMutation({
 *   variables: {
 *      followName: // value for 'followName'
 *   },
 * });
 */
export function useFollowMutation(baseOptions?: Apollo.MutationHookOptions<FollowMutation, FollowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FollowMutation, FollowMutationVariables>(FollowDocument, options);
      }
export type FollowMutationHookResult = ReturnType<typeof useFollowMutation>;
export type FollowMutationResult = Apollo.MutationResult<FollowMutation>;
export type FollowMutationOptions = Apollo.BaseMutationOptions<FollowMutation, FollowMutationVariables>;
export const UnFollowDocument = gql`
    mutation UnFollow($name: String!) {
  unFollow(name: $name)
}
    `;
export type UnFollowMutationFn = Apollo.MutationFunction<UnFollowMutation, UnFollowMutationVariables>;

/**
 * __useUnFollowMutation__
 *
 * To run a mutation, you first call `useUnFollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnFollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unFollowMutation, { data, loading, error }] = useUnFollowMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUnFollowMutation(baseOptions?: Apollo.MutationHookOptions<UnFollowMutation, UnFollowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnFollowMutation, UnFollowMutationVariables>(UnFollowDocument, options);
      }
export type UnFollowMutationHookResult = ReturnType<typeof useUnFollowMutation>;
export type UnFollowMutationResult = Apollo.MutationResult<UnFollowMutation>;
export type UnFollowMutationOptions = Apollo.BaseMutationOptions<UnFollowMutation, UnFollowMutationVariables>;
export const CreateConversationDocument = gql`
    mutation CreateConversation($participantUserIds: [String!]!) {
  createConversation(participantUserIds: $participantUserIds)
}
    `;
export type CreateConversationMutationFn = Apollo.MutationFunction<CreateConversationMutation, CreateConversationMutationVariables>;

/**
 * __useCreateConversationMutation__
 *
 * To run a mutation, you first call `useCreateConversationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateConversationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createConversationMutation, { data, loading, error }] = useCreateConversationMutation({
 *   variables: {
 *      participantUserIds: // value for 'participantUserIds'
 *   },
 * });
 */
export function useCreateConversationMutation(baseOptions?: Apollo.MutationHookOptions<CreateConversationMutation, CreateConversationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateConversationMutation, CreateConversationMutationVariables>(CreateConversationDocument, options);
      }
export type CreateConversationMutationHookResult = ReturnType<typeof useCreateConversationMutation>;
export type CreateConversationMutationResult = Apollo.MutationResult<CreateConversationMutation>;
export type CreateConversationMutationOptions = Apollo.BaseMutationOptions<CreateConversationMutation, CreateConversationMutationVariables>;
export const DeleteConversationDocument = gql`
    mutation DeleteConversation($conversationId: String!) {
  deleteConversation(conversationId: $conversationId)
}
    `;
export type DeleteConversationMutationFn = Apollo.MutationFunction<DeleteConversationMutation, DeleteConversationMutationVariables>;

/**
 * __useDeleteConversationMutation__
 *
 * To run a mutation, you first call `useDeleteConversationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteConversationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteConversationMutation, { data, loading, error }] = useDeleteConversationMutation({
 *   variables: {
 *      conversationId: // value for 'conversationId'
 *   },
 * });
 */
export function useDeleteConversationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteConversationMutation, DeleteConversationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteConversationMutation, DeleteConversationMutationVariables>(DeleteConversationDocument, options);
      }
export type DeleteConversationMutationHookResult = ReturnType<typeof useDeleteConversationMutation>;
export type DeleteConversationMutationResult = Apollo.MutationResult<DeleteConversationMutation>;
export type DeleteConversationMutationOptions = Apollo.BaseMutationOptions<DeleteConversationMutation, DeleteConversationMutationVariables>;
export const UpdateParticipantsDocument = gql`
    mutation UpdateParticipants($participantIds: [String!]!, $conversationId: String!) {
  updateParticipants(
    participantIds: $participantIds
    conversationId: $conversationId
  )
}
    `;
export type UpdateParticipantsMutationFn = Apollo.MutationFunction<UpdateParticipantsMutation, UpdateParticipantsMutationVariables>;

/**
 * __useUpdateParticipantsMutation__
 *
 * To run a mutation, you first call `useUpdateParticipantsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateParticipantsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateParticipantsMutation, { data, loading, error }] = useUpdateParticipantsMutation({
 *   variables: {
 *      participantIds: // value for 'participantIds'
 *      conversationId: // value for 'conversationId'
 *   },
 * });
 */
export function useUpdateParticipantsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateParticipantsMutation, UpdateParticipantsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateParticipantsMutation, UpdateParticipantsMutationVariables>(UpdateParticipantsDocument, options);
      }
export type UpdateParticipantsMutationHookResult = ReturnType<typeof useUpdateParticipantsMutation>;
export type UpdateParticipantsMutationResult = Apollo.MutationResult<UpdateParticipantsMutation>;
export type UpdateParticipantsMutationOptions = Apollo.BaseMutationOptions<UpdateParticipantsMutation, UpdateParticipantsMutationVariables>;
export const SendMessageDocument = gql`
    mutation SendMessage($conversationId: String!, $senderId: String!, $body: String!) {
  sendMessage(conversationId: $conversationId, senderId: $senderId, body: $body)
}
    `;
export type SendMessageMutationFn = Apollo.MutationFunction<SendMessageMutation, SendMessageMutationVariables>;

/**
 * __useSendMessageMutation__
 *
 * To run a mutation, you first call `useSendMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageMutation, { data, loading, error }] = useSendMessageMutation({
 *   variables: {
 *      conversationId: // value for 'conversationId'
 *      senderId: // value for 'senderId'
 *      body: // value for 'body'
 *   },
 * });
 */
export function useSendMessageMutation(baseOptions?: Apollo.MutationHookOptions<SendMessageMutation, SendMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendMessageMutation, SendMessageMutationVariables>(SendMessageDocument, options);
      }
export type SendMessageMutationHookResult = ReturnType<typeof useSendMessageMutation>;
export type SendMessageMutationResult = Apollo.MutationResult<SendMessageMutation>;
export type SendMessageMutationOptions = Apollo.BaseMutationOptions<SendMessageMutation, SendMessageMutationVariables>;
export const MarkConversationAsReadDocument = gql`
    mutation MarkConversationAsRead($conversationId: String!, $userId: String!) {
  markConversationAsRead(conversationId: $conversationId, userId: $userId)
}
    `;
export type MarkConversationAsReadMutationFn = Apollo.MutationFunction<MarkConversationAsReadMutation, MarkConversationAsReadMutationVariables>;

/**
 * __useMarkConversationAsReadMutation__
 *
 * To run a mutation, you first call `useMarkConversationAsReadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkConversationAsReadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markConversationAsReadMutation, { data, loading, error }] = useMarkConversationAsReadMutation({
 *   variables: {
 *      conversationId: // value for 'conversationId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useMarkConversationAsReadMutation(baseOptions?: Apollo.MutationHookOptions<MarkConversationAsReadMutation, MarkConversationAsReadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MarkConversationAsReadMutation, MarkConversationAsReadMutationVariables>(MarkConversationAsReadDocument, options);
      }
export type MarkConversationAsReadMutationHookResult = ReturnType<typeof useMarkConversationAsReadMutation>;
export type MarkConversationAsReadMutationResult = Apollo.MutationResult<MarkConversationAsReadMutation>;
export type MarkConversationAsReadMutationOptions = Apollo.BaseMutationOptions<MarkConversationAsReadMutation, MarkConversationAsReadMutationVariables>;
export const CurrentUserDocument = gql`
    query CurrentUser {
  currentUser {
    _id
    username
    name
    email
    profile
    about
    role
    photo
    createdAt
    updatedAt
    followingIds
    followerIds
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const GetCatBlogsDocument = gql`
    query GetCatBlogs($getCatBlogsSlug: String!) {
  getCatBlogs(slug: $getCatBlogsSlug) {
    _id
    createdAt
    updatedAt
    author {
      username
      name
      profile
    }
    tags {
      name
      slug
    }
    categories {
      name
      slug
    }
    imageUri
    mtitle
    description
    slug
    title
  }
}
    `;

/**
 * __useGetCatBlogsQuery__
 *
 * To run a query within a React component, call `useGetCatBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCatBlogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCatBlogsQuery({
 *   variables: {
 *      getCatBlogsSlug: // value for 'getCatBlogsSlug'
 *   },
 * });
 */
export function useGetCatBlogsQuery(baseOptions: Apollo.QueryHookOptions<GetCatBlogsQuery, GetCatBlogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCatBlogsQuery, GetCatBlogsQueryVariables>(GetCatBlogsDocument, options);
      }
export function useGetCatBlogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCatBlogsQuery, GetCatBlogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCatBlogsQuery, GetCatBlogsQueryVariables>(GetCatBlogsDocument, options);
        }
export type GetCatBlogsQueryHookResult = ReturnType<typeof useGetCatBlogsQuery>;
export type GetCatBlogsLazyQueryHookResult = ReturnType<typeof useGetCatBlogsLazyQuery>;
export type GetCatBlogsQueryResult = Apollo.QueryResult<GetCatBlogsQuery, GetCatBlogsQueryVariables>;
export const GetTagBlogsDocument = gql`
    query GetTagBlogs($getTagBlogsSlug: String!) {
  getTagBlogs(slug: $getTagBlogsSlug) {
    _id
    createdAt
    updatedAt
    author {
      username
      name
      profile
    }
    tags {
      name
      slug
    }
    categories {
      name
      slug
    }
    imageUri
    mtitle
    description
    slug
    title
  }
}
    `;

/**
 * __useGetTagBlogsQuery__
 *
 * To run a query within a React component, call `useGetTagBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTagBlogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTagBlogsQuery({
 *   variables: {
 *      getTagBlogsSlug: // value for 'getTagBlogsSlug'
 *   },
 * });
 */
export function useGetTagBlogsQuery(baseOptions: Apollo.QueryHookOptions<GetTagBlogsQuery, GetTagBlogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTagBlogsQuery, GetTagBlogsQueryVariables>(GetTagBlogsDocument, options);
      }
export function useGetTagBlogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTagBlogsQuery, GetTagBlogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTagBlogsQuery, GetTagBlogsQueryVariables>(GetTagBlogsDocument, options);
        }
export type GetTagBlogsQueryHookResult = ReturnType<typeof useGetTagBlogsQuery>;
export type GetTagBlogsLazyQueryHookResult = ReturnType<typeof useGetTagBlogsLazyQuery>;
export type GetTagBlogsQueryResult = Apollo.QueryResult<GetTagBlogsQuery, GetTagBlogsQueryVariables>;
export const GetBlogBySlugDocument = gql`
    query GetBlogBySlug($slug: String!) {
  getBlogBySlug(slug: $slug) {
    title
    slug
    description
    body
    mtitle
    imageUri
    active
    likedBy {
      username
      name
    }
    comments {
      content
      by {
        name
        username
      }
      atBlog {
        slug
        title
      }
    }
    _id
    createdAt
    updatedAt
    author {
      name
      username
    }
    tags {
      _id
      slug
      name
    }
    categories {
      _id
      slug
      name
    }
  }
}
    `;

/**
 * __useGetBlogBySlugQuery__
 *
 * To run a query within a React component, call `useGetBlogBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlogBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlogBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetBlogBySlugQuery(baseOptions: Apollo.QueryHookOptions<GetBlogBySlugQuery, GetBlogBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBlogBySlugQuery, GetBlogBySlugQueryVariables>(GetBlogBySlugDocument, options);
      }
export function useGetBlogBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBlogBySlugQuery, GetBlogBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBlogBySlugQuery, GetBlogBySlugQueryVariables>(GetBlogBySlugDocument, options);
        }
export type GetBlogBySlugQueryHookResult = ReturnType<typeof useGetBlogBySlugQuery>;
export type GetBlogBySlugLazyQueryHookResult = ReturnType<typeof useGetBlogBySlugLazyQuery>;
export type GetBlogBySlugQueryResult = Apollo.QueryResult<GetBlogBySlugQuery, GetBlogBySlugQueryVariables>;
export const ListBlogsWithCatTagDocument = gql`
    query ListBlogsWithCatTag {
  listBlogsWithCatTag {
    title
    description
    body
    slug
    _id
    mtitle
    imageUri
    active
    createdAt
    updatedAt
    author {
      name
      profile
    }
    categories {
      slug
      name
    }
    tags {
      slug
      name
    }
  }
}
    `;

/**
 * __useListBlogsWithCatTagQuery__
 *
 * To run a query within a React component, call `useListBlogsWithCatTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useListBlogsWithCatTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListBlogsWithCatTagQuery({
 *   variables: {
 *   },
 * });
 */
export function useListBlogsWithCatTagQuery(baseOptions?: Apollo.QueryHookOptions<ListBlogsWithCatTagQuery, ListBlogsWithCatTagQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListBlogsWithCatTagQuery, ListBlogsWithCatTagQueryVariables>(ListBlogsWithCatTagDocument, options);
      }
export function useListBlogsWithCatTagLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListBlogsWithCatTagQuery, ListBlogsWithCatTagQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListBlogsWithCatTagQuery, ListBlogsWithCatTagQueryVariables>(ListBlogsWithCatTagDocument, options);
        }
export type ListBlogsWithCatTagQueryHookResult = ReturnType<typeof useListBlogsWithCatTagQuery>;
export type ListBlogsWithCatTagLazyQueryHookResult = ReturnType<typeof useListBlogsWithCatTagLazyQuery>;
export type ListBlogsWithCatTagQueryResult = Apollo.QueryResult<ListBlogsWithCatTagQuery, ListBlogsWithCatTagQueryVariables>;
export const GetRelatedBlogsDocument = gql`
    query GetRelatedBlogs($limit: Float, $tagIds: [String!]!, $catIds: [String!]!, $getRelatedBlogsSlug: String!) {
  getRelatedBlogs(
    limit: $limit
    tagIds: $tagIds
    catIds: $catIds
    slug: $getRelatedBlogsSlug
  ) {
    imageUri
    _id
    slug
    tags {
      slug
      name
    }
  }
}
    `;

/**
 * __useGetRelatedBlogsQuery__
 *
 * To run a query within a React component, call `useGetRelatedBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRelatedBlogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRelatedBlogsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      tagIds: // value for 'tagIds'
 *      catIds: // value for 'catIds'
 *      getRelatedBlogsSlug: // value for 'getRelatedBlogsSlug'
 *   },
 * });
 */
export function useGetRelatedBlogsQuery(baseOptions: Apollo.QueryHookOptions<GetRelatedBlogsQuery, GetRelatedBlogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRelatedBlogsQuery, GetRelatedBlogsQueryVariables>(GetRelatedBlogsDocument, options);
      }
export function useGetRelatedBlogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRelatedBlogsQuery, GetRelatedBlogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRelatedBlogsQuery, GetRelatedBlogsQueryVariables>(GetRelatedBlogsDocument, options);
        }
export type GetRelatedBlogsQueryHookResult = ReturnType<typeof useGetRelatedBlogsQuery>;
export type GetRelatedBlogsLazyQueryHookResult = ReturnType<typeof useGetRelatedBlogsLazyQuery>;
export type GetRelatedBlogsQueryResult = Apollo.QueryResult<GetRelatedBlogsQuery, GetRelatedBlogsQueryVariables>;
export const SearchBlogsDocument = gql`
    query SearchBlogs($query: String!) {
  searchBlogs(query: $query) {
    slug
    title
    description
    createdAt
    imageUri
    author {
      name
      photo
    }
    tags {
      name
      slug
    }
  }
}
    `;

/**
 * __useSearchBlogsQuery__
 *
 * To run a query within a React component, call `useSearchBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchBlogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchBlogsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useSearchBlogsQuery(baseOptions: Apollo.QueryHookOptions<SearchBlogsQuery, SearchBlogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchBlogsQuery, SearchBlogsQueryVariables>(SearchBlogsDocument, options);
      }
export function useSearchBlogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchBlogsQuery, SearchBlogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchBlogsQuery, SearchBlogsQueryVariables>(SearchBlogsDocument, options);
        }
export type SearchBlogsQueryHookResult = ReturnType<typeof useSearchBlogsQuery>;
export type SearchBlogsLazyQueryHookResult = ReturnType<typeof useSearchBlogsLazyQuery>;
export type SearchBlogsQueryResult = Apollo.QueryResult<SearchBlogsQuery, SearchBlogsQueryVariables>;
export const GetUserBlogsDocument = gql`
    query GetUserBlogs($userId: String, $username: String) {
  getUserBlogs(userId: $userId, username: $username) {
    _id
    author {
      name
      username
    }
    categories {
      name
      slug
    }
    tags {
      slug
      name
    }
    title
    createdAt
    description
    imageUri
    slug
  }
}
    `;

/**
 * __useGetUserBlogsQuery__
 *
 * To run a query within a React component, call `useGetUserBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserBlogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserBlogsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetUserBlogsQuery(baseOptions?: Apollo.QueryHookOptions<GetUserBlogsQuery, GetUserBlogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserBlogsQuery, GetUserBlogsQueryVariables>(GetUserBlogsDocument, options);
      }
export function useGetUserBlogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserBlogsQuery, GetUserBlogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserBlogsQuery, GetUserBlogsQueryVariables>(GetUserBlogsDocument, options);
        }
export type GetUserBlogsQueryHookResult = ReturnType<typeof useGetUserBlogsQuery>;
export type GetUserBlogsLazyQueryHookResult = ReturnType<typeof useGetUserBlogsLazyQuery>;
export type GetUserBlogsQueryResult = Apollo.QueryResult<GetUserBlogsQuery, GetUserBlogsQueryVariables>;
export const ListTagsDocument = gql`
    query ListTags {
  listTags {
    name
    slug
    _id
  }
}
    `;

/**
 * __useListTagsQuery__
 *
 * To run a query within a React component, call `useListTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListTagsQuery(baseOptions?: Apollo.QueryHookOptions<ListTagsQuery, ListTagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListTagsQuery, ListTagsQueryVariables>(ListTagsDocument, options);
      }
export function useListTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListTagsQuery, ListTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListTagsQuery, ListTagsQueryVariables>(ListTagsDocument, options);
        }
export type ListTagsQueryHookResult = ReturnType<typeof useListTagsQuery>;
export type ListTagsLazyQueryHookResult = ReturnType<typeof useListTagsLazyQuery>;
export type ListTagsQueryResult = Apollo.QueryResult<ListTagsQuery, ListTagsQueryVariables>;
export const ListCatsDocument = gql`
    query ListCats {
  listCats {
    name
    _id
    slug
  }
}
    `;

/**
 * __useListCatsQuery__
 *
 * To run a query within a React component, call `useListCatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListCatsQuery(baseOptions?: Apollo.QueryHookOptions<ListCatsQuery, ListCatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListCatsQuery, ListCatsQueryVariables>(ListCatsDocument, options);
      }
export function useListCatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListCatsQuery, ListCatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListCatsQuery, ListCatsQueryVariables>(ListCatsDocument, options);
        }
export type ListCatsQueryHookResult = ReturnType<typeof useListCatsQuery>;
export type ListCatsLazyQueryHookResult = ReturnType<typeof useListCatsLazyQuery>;
export type ListCatsQueryResult = Apollo.QueryResult<ListCatsQuery, ListCatsQueryVariables>;
export const GetBlogByIdDocument = gql`
    query GetBlogById($blogId: String!) {
  getBlogById(blogId: $blogId) {
    _id
    active
    author {
      name
    }
    body
    categories {
      _id
      name
      slug
    }
    createdAt
    description
    imageUri
    slug
    tags {
      name
      slug
      _id
    }
    title
    updatedAt
    mtitle
  }
}
    `;

/**
 * __useGetBlogByIdQuery__
 *
 * To run a query within a React component, call `useGetBlogByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlogByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlogByIdQuery({
 *   variables: {
 *      blogId: // value for 'blogId'
 *   },
 * });
 */
export function useGetBlogByIdQuery(baseOptions: Apollo.QueryHookOptions<GetBlogByIdQuery, GetBlogByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBlogByIdQuery, GetBlogByIdQueryVariables>(GetBlogByIdDocument, options);
      }
export function useGetBlogByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBlogByIdQuery, GetBlogByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBlogByIdQuery, GetBlogByIdQueryVariables>(GetBlogByIdDocument, options);
        }
export type GetBlogByIdQueryHookResult = ReturnType<typeof useGetBlogByIdQuery>;
export type GetBlogByIdLazyQueryHookResult = ReturnType<typeof useGetBlogByIdLazyQuery>;
export type GetBlogByIdQueryResult = Apollo.QueryResult<GetBlogByIdQuery, GetBlogByIdQueryVariables>;
export const SearchUsersDocument = gql`
    query SearchUsers($name: String!) {
  searchUsers(name: $name) {
    _id
    username
    name
    email
    profile
    about
    photo
    followingIds
    followerIds
  }
}
    `;

/**
 * __useSearchUsersQuery__
 *
 * To run a query within a React component, call `useSearchUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchUsersQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useSearchUsersQuery(baseOptions: Apollo.QueryHookOptions<SearchUsersQuery, SearchUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchUsersQuery, SearchUsersQueryVariables>(SearchUsersDocument, options);
      }
export function useSearchUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchUsersQuery, SearchUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchUsersQuery, SearchUsersQueryVariables>(SearchUsersDocument, options);
        }
export type SearchUsersQueryHookResult = ReturnType<typeof useSearchUsersQuery>;
export type SearchUsersLazyQueryHookResult = ReturnType<typeof useSearchUsersLazyQuery>;
export type SearchUsersQueryResult = Apollo.QueryResult<SearchUsersQuery, SearchUsersQueryVariables>;
export const GetUserInfoDocument = gql`
    query GetUserInfo($username: String!) {
  getUserInfo(username: $username) {
    _id
    createdAt
    email
    name
    photo
    about
    username
  }
}
    `;

/**
 * __useGetUserInfoQuery__
 *
 * To run a query within a React component, call `useGetUserInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserInfoQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetUserInfoQuery(baseOptions: Apollo.QueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument, options);
      }
export function useGetUserInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument, options);
        }
export type GetUserInfoQueryHookResult = ReturnType<typeof useGetUserInfoQuery>;
export type GetUserInfoLazyQueryHookResult = ReturnType<typeof useGetUserInfoLazyQuery>;
export type GetUserInfoQueryResult = Apollo.QueryResult<GetUserInfoQuery, GetUserInfoQueryVariables>;
export const GetFollowInfoDocument = gql`
    query GetFollowInfo($username: String) {
  getFollowInfo(username: $username) {
    followers {
      _id
      username
      name
      email
      profile
      about
      photo
      followingIds
      followerIds
    }
    followings {
      _id
      username
      name
      email
      profile
      about
      photo
      followingIds
      followerIds
    }
  }
}
    `;

/**
 * __useGetFollowInfoQuery__
 *
 * To run a query within a React component, call `useGetFollowInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFollowInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFollowInfoQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetFollowInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetFollowInfoQuery, GetFollowInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFollowInfoQuery, GetFollowInfoQueryVariables>(GetFollowInfoDocument, options);
      }
export function useGetFollowInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFollowInfoQuery, GetFollowInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFollowInfoQuery, GetFollowInfoQueryVariables>(GetFollowInfoDocument, options);
        }
export type GetFollowInfoQueryHookResult = ReturnType<typeof useGetFollowInfoQuery>;
export type GetFollowInfoLazyQueryHookResult = ReturnType<typeof useGetFollowInfoLazyQuery>;
export type GetFollowInfoQueryResult = Apollo.QueryResult<GetFollowInfoQuery, GetFollowInfoQueryVariables>;
export const ConversationsDocument = gql`
    query Conversations {
  conversations {
    latestMessage {
      sender {
        _id
        name
        username
      }
    }
    createdAt
    _id
    messages {
      body
      sender {
        _id
        name
        username
        photo
      }
      createdAt
    }
    participants {
      _id
      user {
        _id
        name
        username
        photo
      }
      conversationId
      userId
      hasSeenLatestMessage
    }
  }
}
    `;

/**
 * __useConversationsQuery__
 *
 * To run a query within a React component, call `useConversationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useConversationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConversationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useConversationsQuery(baseOptions?: Apollo.QueryHookOptions<ConversationsQuery, ConversationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConversationsQuery, ConversationsQueryVariables>(ConversationsDocument, options);
      }
export function useConversationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConversationsQuery, ConversationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConversationsQuery, ConversationsQueryVariables>(ConversationsDocument, options);
        }
export type ConversationsQueryHookResult = ReturnType<typeof useConversationsQuery>;
export type ConversationsLazyQueryHookResult = ReturnType<typeof useConversationsLazyQuery>;
export type ConversationsQueryResult = Apollo.QueryResult<ConversationsQuery, ConversationsQueryVariables>;
export const MessagesDocument = gql`
    query Messages($conversationId: String!) {
  messages(conversationId: $conversationId) {
    body
    createdAt
    sender {
      _id
      name
      photo
      username
    }
    senderId
    _id
  }
}
    `;

/**
 * __useMessagesQuery__
 *
 * To run a query within a React component, call `useMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessagesQuery({
 *   variables: {
 *      conversationId: // value for 'conversationId'
 *   },
 * });
 */
export function useMessagesQuery(baseOptions: Apollo.QueryHookOptions<MessagesQuery, MessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MessagesQuery, MessagesQueryVariables>(MessagesDocument, options);
      }
export function useMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MessagesQuery, MessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MessagesQuery, MessagesQueryVariables>(MessagesDocument, options);
        }
export type MessagesQueryHookResult = ReturnType<typeof useMessagesQuery>;
export type MessagesLazyQueryHookResult = ReturnType<typeof useMessagesLazyQuery>;
export type MessagesQueryResult = Apollo.QueryResult<MessagesQuery, MessagesQueryVariables>;
export const BlogPublishedDocument = gql`
    subscription BlogPublished($followingIds: [String!]!) {
  blogPublished(followingIds: $followingIds) {
    dateString
    linkString
    id
    message
  }
}
    `;

/**
 * __useBlogPublishedSubscription__
 *
 * To run a query within a React component, call `useBlogPublishedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useBlogPublishedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogPublishedSubscription({
 *   variables: {
 *      followingIds: // value for 'followingIds'
 *   },
 * });
 */
export function useBlogPublishedSubscription(baseOptions: Apollo.SubscriptionHookOptions<BlogPublishedSubscription, BlogPublishedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<BlogPublishedSubscription, BlogPublishedSubscriptionVariables>(BlogPublishedDocument, options);
      }
export type BlogPublishedSubscriptionHookResult = ReturnType<typeof useBlogPublishedSubscription>;
export type BlogPublishedSubscriptionResult = Apollo.SubscriptionResult<BlogPublishedSubscription>;
export const UserFollowedDocument = gql`
    subscription UserFollowed($name: String!) {
  userFollowed(name: $name) {
    dateString
    linkString
    id
    message
  }
}
    `;

/**
 * __useUserFollowedSubscription__
 *
 * To run a query within a React component, call `useUserFollowedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUserFollowedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserFollowedSubscription({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUserFollowedSubscription(baseOptions: Apollo.SubscriptionHookOptions<UserFollowedSubscription, UserFollowedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<UserFollowedSubscription, UserFollowedSubscriptionVariables>(UserFollowedDocument, options);
      }
export type UserFollowedSubscriptionHookResult = ReturnType<typeof useUserFollowedSubscription>;
export type UserFollowedSubscriptionResult = Apollo.SubscriptionResult<UserFollowedSubscription>;
export const ConversationCreatedDocument = gql`
    subscription ConversationCreated {
  conversationCreated {
    _id
    createdAt
    latestMessage {
      body
      senderId
    }
    participantUserIds
    participants {
      hasSeenLatestMessage
      userId
      conversationId
    }
    latestMessageId
  }
}
    `;

/**
 * __useConversationCreatedSubscription__
 *
 * To run a query within a React component, call `useConversationCreatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useConversationCreatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConversationCreatedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useConversationCreatedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<ConversationCreatedSubscription, ConversationCreatedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ConversationCreatedSubscription, ConversationCreatedSubscriptionVariables>(ConversationCreatedDocument, options);
      }
export type ConversationCreatedSubscriptionHookResult = ReturnType<typeof useConversationCreatedSubscription>;
export type ConversationCreatedSubscriptionResult = Apollo.SubscriptionResult<ConversationCreatedSubscription>;
export const ConversationDeletedDocument = gql`
    subscription ConversationDeleted {
  conversationDeleted {
    participantUserIds
    participants {
      conversation {
        latestMessageId
      }
      conversationId
      hasSeenLatestMessage
      userId
    }
    latestMessageId
    _id
  }
}
    `;

/**
 * __useConversationDeletedSubscription__
 *
 * To run a query within a React component, call `useConversationDeletedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useConversationDeletedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConversationDeletedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useConversationDeletedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<ConversationDeletedSubscription, ConversationDeletedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ConversationDeletedSubscription, ConversationDeletedSubscriptionVariables>(ConversationDeletedDocument, options);
      }
export type ConversationDeletedSubscriptionHookResult = ReturnType<typeof useConversationDeletedSubscription>;
export type ConversationDeletedSubscriptionResult = Apollo.SubscriptionResult<ConversationDeletedSubscription>;
export const ConversationUpdatedDocument = gql`
    subscription ConversationUpdated {
  conversationUpdated {
    addedUserIds
    removedUserIds
    conversation {
      participantUserIds
      participants {
        hasSeenLatestMessage
        conversationId
        _id
      }
      latestMessageId
      _id
    }
  }
}
    `;

/**
 * __useConversationUpdatedSubscription__
 *
 * To run a query within a React component, call `useConversationUpdatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useConversationUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConversationUpdatedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useConversationUpdatedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<ConversationUpdatedSubscription, ConversationUpdatedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ConversationUpdatedSubscription, ConversationUpdatedSubscriptionVariables>(ConversationUpdatedDocument, options);
      }
export type ConversationUpdatedSubscriptionHookResult = ReturnType<typeof useConversationUpdatedSubscription>;
export type ConversationUpdatedSubscriptionResult = Apollo.SubscriptionResult<ConversationUpdatedSubscription>;
export const MessageSentDocument = gql`
    subscription MessageSent {
  messageSent {
    body
    createdAt
    sender {
      _id
      name
      username
      photo
    }
    senderId
    updatedAt
    _id
  }
}
    `;

/**
 * __useMessageSentSubscription__
 *
 * To run a query within a React component, call `useMessageSentSubscription` and pass it any options that fit your needs.
 * When your component renders, `useMessageSentSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessageSentSubscription({
 *   variables: {
 *   },
 * });
 */
export function useMessageSentSubscription(baseOptions?: Apollo.SubscriptionHookOptions<MessageSentSubscription, MessageSentSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<MessageSentSubscription, MessageSentSubscriptionVariables>(MessageSentDocument, options);
      }
export type MessageSentSubscriptionHookResult = ReturnType<typeof useMessageSentSubscription>;
export type MessageSentSubscriptionResult = Apollo.SubscriptionResult<MessageSentSubscription>;