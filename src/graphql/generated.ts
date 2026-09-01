import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: string; output: string; }
  JSON: { input: any; output: any; }
  URL: { input: string; output: string; }
  Upload: { input: Promise<any>; output: Promise<any>; }
};

export type ActivityLog = Node & {
  __typename?: 'ActivityLog';
  action: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  details: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  ipAddress?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['ID']['output'];
};

export type ArchiveFileResponse = {
  __typename?: 'ArchiveFileResponse';
  file?: Maybe<File>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Asset = {
  filename: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: FileStatus;
};

export type CopyFileResponse = {
  __typename?: 'CopyFileResponse';
  file?: Maybe<File>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type CreateFolderResponse = {
  __typename?: 'CreateFolderResponse';
  folder?: Maybe<Folder>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type CreateShareLinkInput = {
  expiresInDays?: InputMaybe<Scalars['Int']['input']>;
  fileId: Scalars['ID']['input'];
  permission: Permission;
};

export type CreateShareLinkResponse = {
  __typename?: 'CreateShareLinkResponse';
  message: Scalars['String']['output'];
  shareLink?: Maybe<ShareLink>;
  success: Scalars['Boolean']['output'];
};

export type CropImageInput = {
  fileId: Scalars['ID']['input'];
  height: Scalars['Int']['input'];
  width: Scalars['Int']['input'];
  x: Scalars['Int']['input'];
  y: Scalars['Int']['input'];
};

export type DeleteFileResponse = {
  __typename?: 'DeleteFileResponse';
  fileId?: Maybe<Scalars['ID']['output']>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type DeleteFolderResponse = {
  __typename?: 'DeleteFolderResponse';
  folderId?: Maybe<Scalars['ID']['output']>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type DuplicateFileResponse = {
  __typename?: 'DuplicateFileResponse';
  file?: Maybe<File>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type ExtractImagesResponse = {
  __typename?: 'ExtractImagesResponse';
  images?: Maybe<Array<File>>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type ExtractTextResponse = {
  __typename?: 'ExtractTextResponse';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  text?: Maybe<Scalars['String']['output']>;
};

export type FavoriteFileResponse = {
  __typename?: 'FavoriteFileResponse';
  file?: Maybe<File>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type File = Asset & Node & {
  __typename?: 'File';
  createdAt: Scalars['DateTime']['output'];
  filename: Scalars['String']['output'];
  folderId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  isArchived: Scalars['Boolean']['output'];
  isFavorite: Scalars['Boolean']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: FileStatus;
  updatedAt: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['URL']['output']>;
  userId: Scalars['ID']['output'];
};

export enum FileStatus {
  Deleted = 'DELETED',
  Failed = 'FAILED',
  Processing = 'PROCESSING',
  Ready = 'READY',
  Uploading = 'UPLOADING'
}

export type FilesResponse = {
  __typename?: 'FilesResponse';
  nodes: Array<File>;
  paginationInfo: PaginationInfo;
};

export type Folder = Node & {
  __typename?: 'Folder';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parentId?: Maybe<Scalars['ID']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['ID']['output'];
};

export type FoldersResponse = {
  __typename?: 'FoldersResponse';
  nodes: Array<Folder>;
  paginationInfo: PaginationInfo;
};

export enum JobStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Running = 'RUNNING'
}

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type LogoutResponse = {
  __typename?: 'LogoutResponse';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type MergeAudioInput = {
  fileIds: Array<Scalars['ID']['input']>;
  outputFilename: Scalars['String']['input'];
};

export type MergePdfInput = {
  fileIds: Array<Scalars['ID']['input']>;
  outputFilename: Scalars['String']['input'];
};

export type MergeVideoInput = {
  fileIds: Array<Scalars['ID']['input']>;
  outputFilename: Scalars['String']['input'];
};

export type MoveFileInput = {
  destinationFolderId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
};

export type MoveFileResponse = {
  __typename?: 'MoveFileResponse';
  file?: Maybe<File>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type MoveFolderResponse = {
  __typename?: 'MoveFolderResponse';
  folder?: Maybe<Folder>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  archiveFile: ArchiveFileResponse;
  compressAudio: ProcessingJobResponse;
  compressImage: ProcessingJobResponse;
  compressPDF: ProcessingJobResponse;
  compressVideo: ProcessingJobResponse;
  convertAudio: ProcessingJobResponse;
  convertImage: ProcessingJobResponse;
  convertVideo: ProcessingJobResponse;
  copyFile: CopyFileResponse;
  createFolder: CreateFolderResponse;
  createShareLink: CreateShareLinkResponse;
  cropImage: ProcessingJobResponse;
  deleteFile: DeleteFileResponse;
  deleteFolder: DeleteFolderResponse;
  deletePages: ProcessingJobResponse;
  duplicateFile: DuplicateFileResponse;
  extractAudio: ProcessingJobResponse;
  extractImages: ExtractImagesResponse;
  extractPages: ProcessingJobResponse;
  extractText: ExtractTextResponse;
  favoriteFile: FavoriteFileResponse;
  flipImage: ProcessingJobResponse;
  gifFromVideo: ProcessingJobResponse;
  login: LoginResponse;
  logout: LogoutResponse;
  mergeAudio: ProcessingJobResponse;
  mergePDF: ProcessingJobResponse;
  mergeVideo: ProcessingJobResponse;
  moveFile: MoveFileResponse;
  moveFolder: MoveFolderResponse;
  normalizeAudio: ProcessingJobResponse;
  ocrImage: ExtractTextResponse;
  ping: Scalars['String']['output'];
  protectPDF: ProcessingJobResponse;
  refreshToken: RefreshTokenResponse;
  register: RegisterResponse;
  renameFile: RenameFileResponse;
  renameFolder: RenameFolderResponse;
  resizeImage: ProcessingJobResponse;
  restoreFile: RestoreFileResponse;
  revokeShareLink: RevokeShareLinkResponse;
  rotateImage: ProcessingJobResponse;
  rotatePDF: ProcessingJobResponse;
  splitPDF: ProcessingJobResponse;
  thumbnailImage: ProcessingJobResponse;
  thumbnailVideo: ProcessingJobResponse;
  trimAudio: ProcessingJobResponse;
  trimVideo: ProcessingJobResponse;
  unfavoriteFile: UnfavoriteFileResponse;
  unlockPDF: ProcessingJobResponse;
  updatePermissions: UpdatePermissionsResponse;
  uploadFile: UploadFileResponse;
  watermarkImage: ProcessingJobResponse;
  watermarkPDF: ProcessingJobResponse;
};


export type MutationArchiveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCompressAudioArgs = {
  bitrateKbps: Scalars['Int']['input'];
  id: Scalars['ID']['input'];
};


export type MutationCompressImageArgs = {
  id: Scalars['ID']['input'];
  quality?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationCompressPdfArgs = {
  id: Scalars['ID']['input'];
  quality?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCompressVideoArgs = {
  id: Scalars['ID']['input'];
  targetSizeMb?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationConvertAudioArgs = {
  format: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};


export type MutationConvertImageArgs = {
  format: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};


export type MutationConvertVideoArgs = {
  format: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};


export type MutationCopyFileArgs = {
  destinationFolderId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationCreateFolderArgs = {
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCreateShareLinkArgs = {
  input: CreateShareLinkInput;
};


export type MutationCropImageArgs = {
  input: CropImageInput;
};


export type MutationDeleteFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePagesArgs = {
  id: Scalars['ID']['input'];
  pages: Array<Scalars['Int']['input']>;
};


export type MutationDuplicateFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationExtractAudioArgs = {
  format: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};


export type MutationExtractImagesArgs = {
  id: Scalars['ID']['input'];
};


export type MutationExtractPagesArgs = {
  id: Scalars['ID']['input'];
  pages: Array<Scalars['Int']['input']>;
};


export type MutationExtractTextArgs = {
  id: Scalars['ID']['input'];
};


export type MutationFavoriteFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationFlipImageArgs = {
  direction: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};


export type MutationGifFromVideoArgs = {
  duration: Scalars['Float']['input'];
  id: Scalars['ID']['input'];
  start: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationMergeAudioArgs = {
  input: MergeAudioInput;
};


export type MutationMergePdfArgs = {
  input: MergePdfInput;
};


export type MutationMergeVideoArgs = {
  input: MergeVideoInput;
};


export type MutationMoveFileArgs = {
  input: MoveFileInput;
};


export type MutationMoveFolderArgs = {
  destinationFolderId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationNormalizeAudioArgs = {
  id: Scalars['ID']['input'];
};


export type MutationOcrImageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationProtectPdfArgs = {
  id: Scalars['ID']['input'];
  password: Scalars['String']['input'];
};


export type MutationRefreshTokenArgs = {
  token: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationRenameFileArgs = {
  input: RenameFileInput;
};


export type MutationRenameFolderArgs = {
  id: Scalars['ID']['input'];
  newName: Scalars['String']['input'];
};


export type MutationResizeImageArgs = {
  input: ResizeImageInput;
};


export type MutationRestoreFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRevokeShareLinkArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRotateImageArgs = {
  degrees: Scalars['Int']['input'];
  id: Scalars['ID']['input'];
};


export type MutationRotatePdfArgs = {
  degrees: Scalars['Int']['input'];
  id: Scalars['ID']['input'];
};


export type MutationSplitPdfArgs = {
  input: SplitPdfInput;
};


export type MutationThumbnailImageArgs = {
  height: Scalars['Int']['input'];
  id: Scalars['ID']['input'];
  width: Scalars['Int']['input'];
};


export type MutationThumbnailVideoArgs = {
  id: Scalars['ID']['input'];
  timestamp: Scalars['String']['input'];
};


export type MutationTrimAudioArgs = {
  input: TrimAudioInput;
};


export type MutationTrimVideoArgs = {
  input: TrimVideoInput;
};


export type MutationUnfavoriteFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUnlockPdfArgs = {
  id: Scalars['ID']['input'];
  password: Scalars['String']['input'];
};


export type MutationUpdatePermissionsArgs = {
  input: UpdatePermissionsInput;
};


export type MutationUploadFileArgs = {
  input: UploadFileInput;
};


export type MutationWatermarkImageArgs = {
  id: Scalars['ID']['input'];
  watermarkText: Scalars['String']['input'];
};


export type MutationWatermarkPdfArgs = {
  id: Scalars['ID']['input'];
  watermarkText: Scalars['String']['input'];
};

export type Node = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PaginationInfo = {
  __typename?: 'PaginationInfo';
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginationInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export enum Permission {
  Editor = 'EDITOR',
  Owner = 'OWNER',
  Viewer = 'VIEWER'
}

export type ProcessingJob = Node & {
  __typename?: 'ProcessingJob';
  createdAt: Scalars['DateTime']['output'];
  error?: Maybe<Scalars['String']['output']>;
  fileId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  jobType: Scalars['String']['output'];
  progress: Scalars['Float']['output'];
  status: JobStatus;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['ID']['output'];
};

export type ProcessingJobResponse = {
  __typename?: 'ProcessingJobResponse';
  job?: Maybe<ProcessingJob>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type ProcessingProgressPayload = {
  __typename?: 'ProcessingProgressPayload';
  error?: Maybe<Scalars['String']['output']>;
  jobId: Scalars['ID']['output'];
  progress: Scalars['Float']['output'];
  status: JobStatus;
};

export type Query = {
  __typename?: 'Query';
  favoriteFiles: FilesResponse;
  file?: Maybe<File>;
  files: FilesResponse;
  folder?: Maybe<Folder>;
  folders: FoldersResponse;
  healthCheck: Scalars['String']['output'];
  me?: Maybe<User>;
  processingJobs: Array<ProcessingJob>;
  recentFiles: Array<File>;
  searchFiles: FilesResponse;
  sharedLinks: SharedLinksResponse;
  storageUsage: StorageUsage;
};


export type QueryFavoriteFilesArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryFileArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFilesArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryFolderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFoldersArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryRecentFilesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySearchFilesArgs = {
  input: SearchInput;
  pagination?: InputMaybe<PaginationInput>;
};


export type QuerySharedLinksArgs = {
  pagination?: InputMaybe<PaginationInput>;
};

export type RefreshTokenResponse = {
  __typename?: 'RefreshTokenResponse';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type RegisterInput = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type RenameFileInput = {
  id: Scalars['ID']['input'];
  newFilename: Scalars['String']['input'];
};

export type RenameFileResponse = {
  __typename?: 'RenameFileResponse';
  file?: Maybe<File>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type RenameFolderResponse = {
  __typename?: 'RenameFolderResponse';
  folder?: Maybe<Folder>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type ResizeImageInput = {
  fileId: Scalars['ID']['input'];
  height: Scalars['Int']['input'];
  maintainAspectRatio?: InputMaybe<Scalars['Boolean']['input']>;
  width: Scalars['Int']['input'];
};

export type RestoreFileResponse = {
  __typename?: 'RestoreFileResponse';
  file?: Maybe<File>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type RevokeShareLinkResponse = {
  __typename?: 'RevokeShareLinkResponse';
  message: Scalars['String']['output'];
  shareLinkId?: Maybe<Scalars['ID']['output']>;
  success: Scalars['Boolean']['output'];
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type SearchInput = {
  fileTypes?: InputMaybe<Array<Scalars['String']['input']>>;
  keyword: Scalars['String']['input'];
  status?: InputMaybe<Array<FileStatus>>;
};

export type ShareLink = Node & {
  __typename?: 'ShareLink';
  createdAt: Scalars['DateTime']['output'];
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  fileId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  permission: Permission;
  sharedBy: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['URL']['output'];
};

export type SharedLinksResponse = {
  __typename?: 'SharedLinksResponse';
  nodes: Array<ShareLink>;
  paginationInfo: PaginationInfo;
};

export type SplitPdfInput = {
  fileId: Scalars['ID']['input'];
  ranges: Array<Scalars['String']['input']>;
};

export type StorageUsage = {
  __typename?: 'StorageUsage';
  fileCount: Scalars['Int']['output'];
  folderCount: Scalars['Int']['output'];
  totalBytes: Scalars['Float']['output'];
  usedBytes: Scalars['Float']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  jobStatus: ProcessingJob;
  pingSubscription: Scalars['String']['output'];
  processingProgress: ProcessingProgressPayload;
  uploadProgress: UploadProgressPayload;
};


export type SubscriptionJobStatusArgs = {
  jobId: Scalars['ID']['input'];
};


export type SubscriptionProcessingProgressArgs = {
  jobId: Scalars['ID']['input'];
};


export type SubscriptionUploadProgressArgs = {
  fileId: Scalars['ID']['input'];
};

export type TrimAudioInput = {
  end: Scalars['String']['input'];
  fileId: Scalars['ID']['input'];
  start: Scalars['String']['input'];
};

export type TrimVideoInput = {
  end: Scalars['String']['input'];
  fileId: Scalars['ID']['input'];
  start: Scalars['String']['input'];
};

export type UnfavoriteFileResponse = {
  __typename?: 'UnfavoriteFileResponse';
  file?: Maybe<File>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type UpdatePermissionsInput = {
  id: Scalars['ID']['input'];
  permission: Permission;
};

export type UpdatePermissionsResponse = {
  __typename?: 'UpdatePermissionsResponse';
  message: Scalars['String']['output'];
  shareLink?: Maybe<ShareLink>;
  success: Scalars['Boolean']['output'];
};

export type UploadFileInput = {
  file: Scalars['Upload']['input'];
  folderId?: InputMaybe<Scalars['ID']['input']>;
};

export type UploadFileResponse = {
  __typename?: 'UploadFileResponse';
  file?: Maybe<File>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type UploadProgressPayload = {
  __typename?: 'UploadProgressPayload';
  bytesUploaded: Scalars['Float']['output'];
  fileId: Scalars['ID']['output'];
  progress: Scalars['Float']['output'];
  totalBytes: Scalars['Float']['output'];
};

export type User = Node & {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  role: Role;
  updatedAt: Scalars['DateTime']['output'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> = ResolversObject<{
  Asset: ( File );
  Node: ( ActivityLog ) | ( File ) | ( Folder ) | ( ProcessingJob ) | ( ShareLink ) | ( User );
}>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  ActivityLog: ResolverTypeWrapper<ActivityLog>;
  ArchiveFileResponse: ResolverTypeWrapper<ArchiveFileResponse>;
  Asset: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Asset']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CopyFileResponse: ResolverTypeWrapper<CopyFileResponse>;
  CreateFolderResponse: ResolverTypeWrapper<CreateFolderResponse>;
  CreateShareLinkInput: CreateShareLinkInput;
  CreateShareLinkResponse: ResolverTypeWrapper<CreateShareLinkResponse>;
  CropImageInput: CropImageInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DeleteFileResponse: ResolverTypeWrapper<DeleteFileResponse>;
  DeleteFolderResponse: ResolverTypeWrapper<DeleteFolderResponse>;
  DuplicateFileResponse: ResolverTypeWrapper<DuplicateFileResponse>;
  ExtractImagesResponse: ResolverTypeWrapper<ExtractImagesResponse>;
  ExtractTextResponse: ResolverTypeWrapper<ExtractTextResponse>;
  FavoriteFileResponse: ResolverTypeWrapper<FavoriteFileResponse>;
  File: ResolverTypeWrapper<File>;
  FileStatus: FileStatus;
  FilesResponse: ResolverTypeWrapper<FilesResponse>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Folder: ResolverTypeWrapper<Folder>;
  FoldersResponse: ResolverTypeWrapper<FoldersResponse>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  JobStatus: JobStatus;
  LoginInput: LoginInput;
  LoginResponse: ResolverTypeWrapper<LoginResponse>;
  LogoutResponse: ResolverTypeWrapper<LogoutResponse>;
  MergeAudioInput: MergeAudioInput;
  MergePDFInput: MergePdfInput;
  MergeVideoInput: MergeVideoInput;
  MoveFileInput: MoveFileInput;
  MoveFileResponse: ResolverTypeWrapper<MoveFileResponse>;
  MoveFolderResponse: ResolverTypeWrapper<MoveFolderResponse>;
  Mutation: ResolverTypeWrapper<{}>;
  Node: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Node']>;
  PaginationInfo: ResolverTypeWrapper<PaginationInfo>;
  PaginationInput: PaginationInput;
  Permission: Permission;
  ProcessingJob: ResolverTypeWrapper<ProcessingJob>;
  ProcessingJobResponse: ResolverTypeWrapper<ProcessingJobResponse>;
  ProcessingProgressPayload: ResolverTypeWrapper<ProcessingProgressPayload>;
  Query: ResolverTypeWrapper<{}>;
  RefreshTokenResponse: ResolverTypeWrapper<RefreshTokenResponse>;
  RegisterInput: RegisterInput;
  RegisterResponse: ResolverTypeWrapper<RegisterResponse>;
  RenameFileInput: RenameFileInput;
  RenameFileResponse: ResolverTypeWrapper<RenameFileResponse>;
  RenameFolderResponse: ResolverTypeWrapper<RenameFolderResponse>;
  ResizeImageInput: ResizeImageInput;
  RestoreFileResponse: ResolverTypeWrapper<RestoreFileResponse>;
  RevokeShareLinkResponse: ResolverTypeWrapper<RevokeShareLinkResponse>;
  Role: Role;
  SearchInput: SearchInput;
  ShareLink: ResolverTypeWrapper<ShareLink>;
  SharedLinksResponse: ResolverTypeWrapper<SharedLinksResponse>;
  SplitPDFInput: SplitPdfInput;
  StorageUsage: ResolverTypeWrapper<StorageUsage>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Subscription: ResolverTypeWrapper<{}>;
  TrimAudioInput: TrimAudioInput;
  TrimVideoInput: TrimVideoInput;
  URL: ResolverTypeWrapper<Scalars['URL']['output']>;
  UnfavoriteFileResponse: ResolverTypeWrapper<UnfavoriteFileResponse>;
  UpdatePermissionsInput: UpdatePermissionsInput;
  UpdatePermissionsResponse: ResolverTypeWrapper<UpdatePermissionsResponse>;
  Upload: ResolverTypeWrapper<Scalars['Upload']['output']>;
  UploadFileInput: UploadFileInput;
  UploadFileResponse: ResolverTypeWrapper<UploadFileResponse>;
  UploadProgressPayload: ResolverTypeWrapper<UploadProgressPayload>;
  User: ResolverTypeWrapper<User>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  ActivityLog: ActivityLog;
  ArchiveFileResponse: ArchiveFileResponse;
  Asset: ResolversInterfaceTypes<ResolversParentTypes>['Asset'];
  Boolean: Scalars['Boolean']['output'];
  CopyFileResponse: CopyFileResponse;
  CreateFolderResponse: CreateFolderResponse;
  CreateShareLinkInput: CreateShareLinkInput;
  CreateShareLinkResponse: CreateShareLinkResponse;
  CropImageInput: CropImageInput;
  DateTime: Scalars['DateTime']['output'];
  DeleteFileResponse: DeleteFileResponse;
  DeleteFolderResponse: DeleteFolderResponse;
  DuplicateFileResponse: DuplicateFileResponse;
  ExtractImagesResponse: ExtractImagesResponse;
  ExtractTextResponse: ExtractTextResponse;
  FavoriteFileResponse: FavoriteFileResponse;
  File: File;
  FilesResponse: FilesResponse;
  Float: Scalars['Float']['output'];
  Folder: Folder;
  FoldersResponse: FoldersResponse;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  JSON: Scalars['JSON']['output'];
  LoginInput: LoginInput;
  LoginResponse: LoginResponse;
  LogoutResponse: LogoutResponse;
  MergeAudioInput: MergeAudioInput;
  MergePDFInput: MergePdfInput;
  MergeVideoInput: MergeVideoInput;
  MoveFileInput: MoveFileInput;
  MoveFileResponse: MoveFileResponse;
  MoveFolderResponse: MoveFolderResponse;
  Mutation: {};
  Node: ResolversInterfaceTypes<ResolversParentTypes>['Node'];
  PaginationInfo: PaginationInfo;
  PaginationInput: PaginationInput;
  ProcessingJob: ProcessingJob;
  ProcessingJobResponse: ProcessingJobResponse;
  ProcessingProgressPayload: ProcessingProgressPayload;
  Query: {};
  RefreshTokenResponse: RefreshTokenResponse;
  RegisterInput: RegisterInput;
  RegisterResponse: RegisterResponse;
  RenameFileInput: RenameFileInput;
  RenameFileResponse: RenameFileResponse;
  RenameFolderResponse: RenameFolderResponse;
  ResizeImageInput: ResizeImageInput;
  RestoreFileResponse: RestoreFileResponse;
  RevokeShareLinkResponse: RevokeShareLinkResponse;
  SearchInput: SearchInput;
  ShareLink: ShareLink;
  SharedLinksResponse: SharedLinksResponse;
  SplitPDFInput: SplitPdfInput;
  StorageUsage: StorageUsage;
  String: Scalars['String']['output'];
  Subscription: {};
  TrimAudioInput: TrimAudioInput;
  TrimVideoInput: TrimVideoInput;
  URL: Scalars['URL']['output'];
  UnfavoriteFileResponse: UnfavoriteFileResponse;
  UpdatePermissionsInput: UpdatePermissionsInput;
  UpdatePermissionsResponse: UpdatePermissionsResponse;
  Upload: Scalars['Upload']['output'];
  UploadFileInput: UploadFileInput;
  UploadFileResponse: UploadFileResponse;
  UploadProgressPayload: UploadProgressPayload;
  User: User;
}>;

export type ActivityLogResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivityLog'] = ResolversParentTypes['ActivityLog']> = ResolversObject<{
  action?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  details?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ipAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ArchiveFileResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArchiveFileResponse'] = ResolversParentTypes['ArchiveFileResponse']> = ResolversObject<{
  file?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset']> = ResolversObject<{
  __resolveType: TypeResolveFn<'File', ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mimeType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['FileStatus'], ParentType, ContextType>;
}>;

export type CopyFileResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CopyFileResponse'] = ResolversParentTypes['CopyFileResponse']> = ResolversObject<{
  file?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateFolderResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateFolderResponse'] = ResolversParentTypes['CreateFolderResponse']> = ResolversObject<{
  folder?: Resolver<Maybe<ResolversTypes['Folder']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateShareLinkResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateShareLinkResponse'] = ResolversParentTypes['CreateShareLinkResponse']> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shareLink?: Resolver<Maybe<ResolversTypes['ShareLink']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DeleteFileResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteFileResponse'] = ResolversParentTypes['DeleteFileResponse']> = ResolversObject<{
  fileId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeleteFolderResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteFolderResponse'] = ResolversParentTypes['DeleteFolderResponse']> = ResolversObject<{
  folderId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DuplicateFileResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DuplicateFileResponse'] = ResolversParentTypes['DuplicateFileResponse']> = ResolversObject<{
  file?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtractImagesResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtractImagesResponse'] = ResolversParentTypes['ExtractImagesResponse']> = ResolversObject<{
  images?: Resolver<Maybe<Array<ResolversTypes['File']>>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtractTextResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtractTextResponse'] = ResolversParentTypes['ExtractTextResponse']> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FavoriteFileResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['FavoriteFileResponse'] = ResolversParentTypes['FavoriteFileResponse']> = ResolversObject<{
  file?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FileResolvers<ContextType = any, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  folderId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isArchived?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isFavorite?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  mimeType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['FileStatus'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FilesResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['FilesResponse'] = ResolversParentTypes['FilesResponse']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['File']>, ParentType, ContextType>;
  paginationInfo?: Resolver<ResolversTypes['PaginationInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FolderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Folder'] = ResolversParentTypes['Folder']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FoldersResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['FoldersResponse'] = ResolversParentTypes['FoldersResponse']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['Folder']>, ParentType, ContextType>;
  paginationInfo?: Resolver<ResolversTypes['PaginationInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type LoginResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginResponse'] = ResolversParentTypes['LoginResponse']> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LogoutResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LogoutResponse'] = ResolversParentTypes['LogoutResponse']> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MoveFileResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['MoveFileResponse'] = ResolversParentTypes['MoveFileResponse']> = ResolversObject<{
  file?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MoveFolderResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['MoveFolderResponse'] = ResolversParentTypes['MoveFolderResponse']> = ResolversObject<{
  folder?: Resolver<Maybe<ResolversTypes['Folder']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  archiveFile?: Resolver<ResolversTypes['ArchiveFileResponse'], ParentType, ContextType, RequireFields<MutationArchiveFileArgs, 'id'>>;
  compressAudio?: Resolver<ResolversTypes['ProcessingJobResponse'], ParentType, ContextType, RequireFields<MutationCompressAudioArgs, 'bitrateKbps' | 'id'>>;
  compressImage?: Resolver<ResolversTypes['ProcessingJobResponse'], ParentType, ContextType, RequireFields<MutationCompressImageArgs, 'id'>>;
  compressPDF?: Resolver<ResolversTypes['ProcessingJobResponse'], ParentType, ContextType, RequireFields<MutationCompressPdfArgs, 'id'>>;
  compressVideo?: Resolver<ResolversTypes['ProcessingJobResponse'], ParentType, ContextType, RequireFields<MutationCompressVideoArgs, 'id'>>;
  convertAudio?: Resolver<ResolversTypes['ProcessingJobResponse'], ParentType, ContextType, RequireFields<MutationConvertAudioArgs, 'format' | 'id'>>;
  convertImage?: Resolver<ResolversTypes['ProcessingJobResponse'], ParentType, ContextType, RequireFields<MutationConvertImageArgs, 'format' | 'id'>>;
  convertVideo?: Resolver<ResolversTypes['ProcessingJobResponse'], ParentType, ContextType, RequireFields<MutationConvertVideoArgs, 'format' | 'id'>>;
  copyFile?: Resolver<ResolversTypes['CopyFileResponse'], ParentType, ContextType, RequireFields<MutationCopyFileArgs, 'id'>>;
  createFolder?: Resolver<ResolversTypes['CreateFolderResponse'], ParentType, ContextType, RequireFields<MutationCreateFolderArgs, 'name'>>;
  createShareLink?: Resolver<ResolversTypes['CreateShareLinkResponse'], ParentType, ContextType, RequireFields<MutationCreateShareLinkArgs, 'input'>>;
  cropImage?: Resolver<ResolversTypes['ProcessingJobResponse'], ParentType, ContextType, RequireFields<MutationCropImageArgs, 'input'>>;
  deleteFile?: Resolver<ResolversTypes['DeleteFileResponse'], ParentType, ContextType, RequireFields<MutationDeleteFileArgs, 'id'>>;
  deleteFolder?: Resolver<ResolversTypes['DeleteFolderResponse'], ParentType, ContextType, RequireFields<MutationDeleteFolderArgs, 'id'>>;
  deletePages?: Resolver<ResolversTypes['ProcessingJobResponse'], ParentType, ContextType, RequireFields<MutationDeletePagesArgs, 'id' | 'pages'>>;
  duplicateFile?: Resolver<ResolversTypes['DuplicateFileResponse'], ParentType, ContextType, RequireFields<MutationDuplicateFileArgs, 'id'>>;
  extractAudio?: Resolver<ResolversTypes['ProcessingJobResponse'], ParentType, ContextType, RequireFields<MutationExtractAudioArgs, 'format' | 'id'>>;
  extractImages?: Resolver<ResolversTypes['ExtractImagesResponse'], ParentType, ContextType, RequireFields<MutationExtractImagesArgs, 'id'>>;
  extractPages?: Resolver<ResolversTypes['ProcessingJobResponse'], ParentType, ContextType, RequireFields<MutationExtractPagesArgs, 'id' | 'pages'>>;
  extractText?: Resolver<ResolversTypes['ExtractTextResponse'], ParentType, ContextType, RequireFields<MutationExtractTextArgs, 'id'>>;
  favoriteFile?: Resolver<ResolversTypes['FavoriteFileResponse'], ParentType, ContextType, RequireFields<MutationFavoriteFileArgs, 'id'>>;
  flipImage?: Resolver<ResolversTypes['ProcessingJobResponse'], ParentType, ContextType, RequireFields<MutationFlipImageArgs, 'direction' | 'id'>>;
  gifFromVideo?: Resolver<ResolversTypes['ProcessingJobResponse'], ParentType, ContextType, RequireFields<MutationGifFromVideoArgs, 'duration' | 'id' | 'start'>>;
  login?: Resolver<ResolversTypes['LoginResponse'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'input'>>;
  logout?: Resolver<ResolversTypes['LogoutResponse'], ParentType, ContextType>;
  mergeAudio?: Resolver<ResolversTypes['ProcessingJobResponse'], ParentType, ContextType, RequireFields<MutationMergeAudioArgs, 'input'>>;
  mergePDF?: Resolver<ResolversTypes['ProcessingJobResponse'], ParentType, ContextType, RequireFields<MutationMergePdfArgs, 'input'>>;
  mergeVideo?: Resolver<ResolversTypes['ProcessingJobResponse'], ParentType, ContextType, RequireFields<MutationMergeVideoArgs, 'input'>>;
  moveFile?: Resolver<ResolversTypes['MoveFileResponse'], ParentType, ContextType, RequireFields<MutationMoveFileArgs, 'input'>>;
  moveFolder?: Resolver<ResolversTypes['MoveFolderResponse'], ParentType, ContextType, RequireFields<MutationMoveFolderArgs, 'id'>>;
  normalizeAudio?: Resolver<ResolversTypes['ProcessingJobResponse'], ParentType, ContextType, RequireFields<MutationNormalizeAudioArgs, 'id'>>;
  ocrImage?: Resolver<ResolversTypes['ExtractTextResponse'], ParentType, ContextType, RequireFields<MutationOcrImageArgs, 'id'>>;
  ping?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  protectPDF?: Resolver<ResolversTypes['ProcessingJobResponse'], ParentType, ContextType, RequireFields<MutationProtectPdfArgs, 'id' | 'password'>>;
  refreshToken?: Resolver<ResolversTypes['RefreshTokenResponse'], ParentType, ContextType, RequireFields<MutationRefreshTokenArgs, 'token'>>;
  register?: Resolver<ResolversTypes['RegisterResponse'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'input'>>;
  renameFile?: Resolver<ResolversTypes['RenameFileResponse'], ParentType, ContextType, RequireFields<MutationRenameFileArgs, 'input'>>;
  renameFolder?: Resolver<ResolversTypes['RenameFolderResponse'], ParentType, ContextType, RequireFields<MutationRenameFolderArgs, 'id' | 'newName'>>;
  resizeImage?: Resolver<ResolversTypes['ProcessingJobResponse'], ParentType, ContextType, RequireFields<MutationResizeImageArgs, 'input'>>;
  restoreFile?: Resolver<ResolversTypes['RestoreFileResponse'], ParentType, ContextType, RequireFields<MutationRestoreFileArgs, 'id'>>;
  revokeShareLink?: Resolver<ResolversTypes['RevokeShareLinkResponse'], ParentType, ContextType, RequireFields<MutationRevokeShareLinkArgs, 'id'>>;
  rotateImage?: Resolver<ResolversTypes['ProcessingJobResponse'], ParentType, ContextType, RequireFields<MutationRotateImageArgs, 'degrees' | 'id'>>;
  rotatePDF?: Resolver<ResolversTypes['ProcessingJobResponse'], ParentType, ContextType, RequireFields<MutationRotatePdfArgs, 'degrees' | 'id'>>;
  splitPDF?: Resolver<ResolversTypes['ProcessingJobResponse'], ParentType, ContextType, RequireFields<MutationSplitPdfArgs, 'input'>>;
  thumbnailImage?: Resolver<ResolversTypes['ProcessingJobResponse'], ParentType, ContextType, RequireFields<MutationThumbnailImageArgs, 'height' | 'id' | 'width'>>;
  thumbnailVideo?: Resolver<ResolversTypes['ProcessingJobResponse'], ParentType, ContextType, RequireFields<MutationThumbnailVideoArgs, 'id' | 'timestamp'>>;
  trimAudio?: Resolver<ResolversTypes['ProcessingJobResponse'], ParentType, ContextType, RequireFields<MutationTrimAudioArgs, 'input'>>;
  trimVideo?: Resolver<ResolversTypes['ProcessingJobResponse'], ParentType, ContextType, RequireFields<MutationTrimVideoArgs, 'input'>>;
  unfavoriteFile?: Resolver<ResolversTypes['UnfavoriteFileResponse'], ParentType, ContextType, RequireFields<MutationUnfavoriteFileArgs, 'id'>>;
  unlockPDF?: Resolver<ResolversTypes['ProcessingJobResponse'], ParentType, ContextType, RequireFields<MutationUnlockPdfArgs, 'id' | 'password'>>;
  updatePermissions?: Resolver<ResolversTypes['UpdatePermissionsResponse'], ParentType, ContextType, RequireFields<MutationUpdatePermissionsArgs, 'input'>>;
  uploadFile?: Resolver<ResolversTypes['UploadFileResponse'], ParentType, ContextType, RequireFields<MutationUploadFileArgs, 'input'>>;
  watermarkImage?: Resolver<ResolversTypes['ProcessingJobResponse'], ParentType, ContextType, RequireFields<MutationWatermarkImageArgs, 'id' | 'watermarkText'>>;
  watermarkPDF?: Resolver<ResolversTypes['ProcessingJobResponse'], ParentType, ContextType, RequireFields<MutationWatermarkPdfArgs, 'id' | 'watermarkText'>>;
}>;

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ActivityLog' | 'File' | 'Folder' | 'ProcessingJob' | 'ShareLink' | 'User', ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
}>;

export type PaginationInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginationInfo'] = ResolversParentTypes['PaginationInfo']> = ResolversObject<{
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalPages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProcessingJobResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProcessingJob'] = ResolversParentTypes['ProcessingJob']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  jobType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  progress?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['JobStatus'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProcessingJobResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProcessingJobResponse'] = ResolversParentTypes['ProcessingJobResponse']> = ResolversObject<{
  job?: Resolver<Maybe<ResolversTypes['ProcessingJob']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProcessingProgressPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProcessingProgressPayload'] = ResolversParentTypes['ProcessingProgressPayload']> = ResolversObject<{
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  jobId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  progress?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['JobStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  favoriteFiles?: Resolver<ResolversTypes['FilesResponse'], ParentType, ContextType, Partial<QueryFavoriteFilesArgs>>;
  file?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType, RequireFields<QueryFileArgs, 'id'>>;
  files?: Resolver<ResolversTypes['FilesResponse'], ParentType, ContextType, Partial<QueryFilesArgs>>;
  folder?: Resolver<Maybe<ResolversTypes['Folder']>, ParentType, ContextType, RequireFields<QueryFolderArgs, 'id'>>;
  folders?: Resolver<ResolversTypes['FoldersResponse'], ParentType, ContextType, Partial<QueryFoldersArgs>>;
  healthCheck?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  processingJobs?: Resolver<Array<ResolversTypes['ProcessingJob']>, ParentType, ContextType>;
  recentFiles?: Resolver<Array<ResolversTypes['File']>, ParentType, ContextType, Partial<QueryRecentFilesArgs>>;
  searchFiles?: Resolver<ResolversTypes['FilesResponse'], ParentType, ContextType, RequireFields<QuerySearchFilesArgs, 'input'>>;
  sharedLinks?: Resolver<ResolversTypes['SharedLinksResponse'], ParentType, ContextType, Partial<QuerySharedLinksArgs>>;
  storageUsage?: Resolver<ResolversTypes['StorageUsage'], ParentType, ContextType>;
}>;

export type RefreshTokenResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['RefreshTokenResponse'] = ResolversParentTypes['RefreshTokenResponse']> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RegisterResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegisterResponse'] = ResolversParentTypes['RegisterResponse']> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RenameFileResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['RenameFileResponse'] = ResolversParentTypes['RenameFileResponse']> = ResolversObject<{
  file?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RenameFolderResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['RenameFolderResponse'] = ResolversParentTypes['RenameFolderResponse']> = ResolversObject<{
  folder?: Resolver<Maybe<ResolversTypes['Folder']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RestoreFileResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['RestoreFileResponse'] = ResolversParentTypes['RestoreFileResponse']> = ResolversObject<{
  file?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RevokeShareLinkResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['RevokeShareLinkResponse'] = ResolversParentTypes['RevokeShareLinkResponse']> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shareLinkId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShareLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShareLink'] = ResolversParentTypes['ShareLink']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  expiresAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  fileId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  permission?: Resolver<ResolversTypes['Permission'], ParentType, ContextType>;
  sharedBy?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SharedLinksResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SharedLinksResponse'] = ResolversParentTypes['SharedLinksResponse']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['ShareLink']>, ParentType, ContextType>;
  paginationInfo?: Resolver<ResolversTypes['PaginationInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StorageUsageResolvers<ContextType = any, ParentType extends ResolversParentTypes['StorageUsage'] = ResolversParentTypes['StorageUsage']> = ResolversObject<{
  fileCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  folderCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalBytes?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  usedBytes?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  jobStatus?: SubscriptionResolver<ResolversTypes['ProcessingJob'], "jobStatus", ParentType, ContextType, RequireFields<SubscriptionJobStatusArgs, 'jobId'>>;
  pingSubscription?: SubscriptionResolver<ResolversTypes['String'], "pingSubscription", ParentType, ContextType>;
  processingProgress?: SubscriptionResolver<ResolversTypes['ProcessingProgressPayload'], "processingProgress", ParentType, ContextType, RequireFields<SubscriptionProcessingProgressArgs, 'jobId'>>;
  uploadProgress?: SubscriptionResolver<ResolversTypes['UploadProgressPayload'], "uploadProgress", ParentType, ContextType, RequireFields<SubscriptionUploadProgressArgs, 'fileId'>>;
}>;

export interface UrlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URL'], any> {
  name: 'URL';
}

export type UnfavoriteFileResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UnfavoriteFileResponse'] = ResolversParentTypes['UnfavoriteFileResponse']> = ResolversObject<{
  file?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdatePermissionsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdatePermissionsResponse'] = ResolversParentTypes['UpdatePermissionsResponse']> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shareLink?: Resolver<Maybe<ResolversTypes['ShareLink']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UploadFileResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileResponse'] = ResolversParentTypes['UploadFileResponse']> = ResolversObject<{
  file?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UploadProgressPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadProgressPayload'] = ResolversParentTypes['UploadProgressPayload']> = ResolversObject<{
  bytesUploaded?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  fileId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  progress?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalBytes?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  ActivityLog?: ActivityLogResolvers<ContextType>;
  ArchiveFileResponse?: ArchiveFileResponseResolvers<ContextType>;
  Asset?: AssetResolvers<ContextType>;
  CopyFileResponse?: CopyFileResponseResolvers<ContextType>;
  CreateFolderResponse?: CreateFolderResponseResolvers<ContextType>;
  CreateShareLinkResponse?: CreateShareLinkResponseResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  DeleteFileResponse?: DeleteFileResponseResolvers<ContextType>;
  DeleteFolderResponse?: DeleteFolderResponseResolvers<ContextType>;
  DuplicateFileResponse?: DuplicateFileResponseResolvers<ContextType>;
  ExtractImagesResponse?: ExtractImagesResponseResolvers<ContextType>;
  ExtractTextResponse?: ExtractTextResponseResolvers<ContextType>;
  FavoriteFileResponse?: FavoriteFileResponseResolvers<ContextType>;
  File?: FileResolvers<ContextType>;
  FilesResponse?: FilesResponseResolvers<ContextType>;
  Folder?: FolderResolvers<ContextType>;
  FoldersResponse?: FoldersResponseResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  LoginResponse?: LoginResponseResolvers<ContextType>;
  LogoutResponse?: LogoutResponseResolvers<ContextType>;
  MoveFileResponse?: MoveFileResponseResolvers<ContextType>;
  MoveFolderResponse?: MoveFolderResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  PaginationInfo?: PaginationInfoResolvers<ContextType>;
  ProcessingJob?: ProcessingJobResolvers<ContextType>;
  ProcessingJobResponse?: ProcessingJobResponseResolvers<ContextType>;
  ProcessingProgressPayload?: ProcessingProgressPayloadResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RefreshTokenResponse?: RefreshTokenResponseResolvers<ContextType>;
  RegisterResponse?: RegisterResponseResolvers<ContextType>;
  RenameFileResponse?: RenameFileResponseResolvers<ContextType>;
  RenameFolderResponse?: RenameFolderResponseResolvers<ContextType>;
  RestoreFileResponse?: RestoreFileResponseResolvers<ContextType>;
  RevokeShareLinkResponse?: RevokeShareLinkResponseResolvers<ContextType>;
  ShareLink?: ShareLinkResolvers<ContextType>;
  SharedLinksResponse?: SharedLinksResponseResolvers<ContextType>;
  StorageUsage?: StorageUsageResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  URL?: GraphQLScalarType;
  UnfavoriteFileResponse?: UnfavoriteFileResponseResolvers<ContextType>;
  UpdatePermissionsResponse?: UpdatePermissionsResponseResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  UploadFileResponse?: UploadFileResponseResolvers<ContextType>;
  UploadProgressPayload?: UploadProgressPayloadResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

