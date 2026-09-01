# GraphQL API Skeleton - PDF Merger & Media Processing Service

A modular, production-ready GraphQL API skeleton built with Apollo Server v4, Express, Node.js, and TypeScript. This repository is configured to merge schemas dynamically and load resolvers from separate files with mock returns, ready for business logic implementation.

## Project Structure

```
src/
  graphql/
    schema/
      auth.graphql      # Authentication queries, mutations, types
      common.graphql    # Core interfaces, enums, custom scalars, pagination
      file.graphql      # Standard file operations, upload, search
      folder.graphql    # Directory structures
      sharing.graphql   # Permissions and share links
      pdf.graphql       # PDF merge, split, rotate, watermark, protect, extract
      image.graphql     # Image crop, resize, rotate, flip, watermark, OCR
      video.graphql     # Video trim, merge, compress, extract audio, convert
      audio.graphql     # Audio trim, merge, compress, convert, normalize
    resolvers/
      queries/          # Individual Query resolvers (11 files)
      mutations/        # Individual Mutation resolvers (53 files)
      subscriptions/    # Individual Subscription resolvers (3 files)
      index.ts          # Root resolver maps
      pubsub.ts         # Global event pub/sub instance
      scalars.ts        # Custom scalars definitions (JSON, DateTime, etc.)
    schemaLoader.ts     # Dynamically loads and merges SDL schemas
  index.ts              # Entry point establishing HTTP/WebSocket server
tsconfig.json           # TS configuration
codegen.ts              # GraphQL Code Generator settings
package.json            # Scripts & dependencies
```

---

## Getting Started

### Installation
Install project dependencies:
```bash
npm install
```

### GraphQL Typings Generation
Generate static TypeScript typings from the GraphQL schema files:
```bash
npm run codegen
```

### Start Development Server
Starts the Express server with `nodemon` reloading:
```bash
npm run dev
```
The server will start at:
- **GraphQL HTTP Gateway**: `http://localhost:4000/graphql`
- **Subscription WebSocket Gateway**: `ws://localhost:4000/graphql`

---

## API Catalog

### 1. Custom Scalars
- `Upload`: Multi-part upload handler.
- `DateTime`: ISO 8601 formatted date/time string.
- `JSON`: Generic JSON object.
- `URL`: Standard web URL.

---

### 2. Queries

| Name | Return Type | Arguments | Description |
|---|---|---|---|
| `me` | `User` | *None* | Retrieves profile of currently logged-in user. |
| `file` | `File` | `id: ID!` | Retrieves metadata of a specific file. |
| `files` | `FilesResponse!` | `pagination: PaginationInput` | Paginated list of all user files. |
| `folder` | `Folder` | `id: ID!` | Retrieves metadata of a specific folder. |
| `folders` | `FoldersResponse!` | `pagination: PaginationInput` | Paginated list of all user folders. |
| `sharedLinks` | `SharedLinksResponse!` | `pagination: PaginationInput` | Retrieve shared links created by user. |
| `recentFiles` | `[File!]!` | `limit: Int` | Gets recently edited files. |
| `favoriteFiles` | `FilesResponse!` | `pagination: PaginationInput` | Retrieves marked favorite files. |
| `storageUsage` | `StorageUsage!` | *None* | Gets total and used storage metrics. |
| `searchFiles` | `FilesResponse!` | `input: SearchInput!, pagination: PaginationInput` | Searches files by keyword/metadata. |
| `processingJobs` | `[ProcessingJob!]!` | *None* | Returns list of background tasks. |
| `healthCheck` | `String!` | *None* | Base gateway status check. |

---

### 3. Mutations

#### Authentication
- `register(input: RegisterInput!): RegisterResponse!`: Signs up a new account.
- `login(input: LoginInput!): LoginResponse!`: Logs in and generates JWT.
- `refreshToken(token: String!): RefreshTokenResponse!`: Re-authenticates expiring session.
- `logout: LogoutResponse!`: Invalidates current session.

#### File Operations
- `uploadFile(input: UploadFileInput!): UploadFileResponse!`: Handles stream uploads.
- `deleteFile(id: ID!): DeleteFileResponse!`: Removes file.
- `renameFile(input: RenameFileInput!): RenameFileResponse!`: Modifies filename.
- `moveFile(input: MoveFileInput!): MoveFileResponse!`: Moves file to folders.
- `copyFile(id: ID!, destinationFolderId: ID): CopyFileResponse!`: Copies file.
- `duplicateFile(id: ID!): DuplicateFileResponse!`: Duplicates file directly.
- `archiveFile(id: ID!): ArchiveFileResponse!`: Archives file.
- `restoreFile(id: ID!): RestoreFileResponse!`: Unarchives file.
- `favoriteFile(id: ID!): FavoriteFileResponse!`: Stars file.
- `unfavoriteFile(id: ID!): UnfavoriteFileResponse!`: Unstars file.

#### Folder Operations
- `createFolder(name: String!, parentId: ID): CreateFolderResponse!`: Creates directories.
- `renameFolder(id: ID!, newName: String!): RenameFolderResponse!`: Renames directories.
- `deleteFolder(id: ID!): DeleteFolderResponse!`: Deletes directory.
- `moveFolder(id: ID!, destinationFolderId: ID): MoveFolderResponse!`: Relocates directory.

#### Sharing Operations
- `createShareLink(input: CreateShareLinkInput!): CreateShareLinkResponse!`: Generates access url.
- `revokeShareLink(id: ID!): RevokeShareLinkResponse!`: Disables shared links.
- `updatePermissions(input: UpdatePermissionsInput!): UpdatePermissionsResponse!`: Modifies roles.

#### PDF Processing
- `mergePDF(input: MergePDFInput!): ProcessingJobResponse!`: Merges array of PDF files.
- `splitPDF(input: SplitPDFInput!): ProcessingJobResponse!`: Splits pages into ranges.
- `compressPDF(id: ID!, quality: String): ProcessingJobResponse!`: Reduces PDF resolution/size.
- `rotatePDF(id: ID!, degrees: Int!): ProcessingJobResponse!`: Rotates pages.
- `extractPages(id: ID!, pages: [Int!]!): ProcessingJobResponse!`: Extracts pages to new file.
- `deletePages(id: ID!, pages: [Int!]!): ProcessingJobResponse!`: Removes pages.
- `watermarkPDF(id: ID!, watermarkText: String!): ProcessingJobResponse!`: Overlays text watermark.
- `unlockPDF(id: ID!, password: String!): ProcessingJobResponse!`: Removes PDF password.
- `protectPDF(id: ID!, password: String!): ProcessingJobResponse!`: Locks PDF with password.
- `extractText(id: ID!): ExtractTextResponse!`: Parses PDF text.
- `extractImages(id: ID!): ExtractImagesResponse!`: Extracts images from PDF.

#### Image Processing
- `resizeImage(input: ResizeImageInput!): ProcessingJobResponse!`: Rescales image.
- `cropImage(input: CropImageInput!): ProcessingJobResponse!`: Crops image.
- `rotateImage(id: ID!, degrees: Int!): ProcessingJobResponse!`: Rotates image.
- `flipImage(id: ID!, direction: String!): ProcessingJobResponse!`: Flips image horizontially/vertically.
- `compressImage(id: ID!, quality: Float): ProcessingJobResponse!`: Compresses file sizes.
- `convertImage(id: ID!, format: String!): ProcessingJobResponse!`: Converts format.
- `thumbnailImage(id: ID!, width: Int!, height: Int!): ProcessingJobResponse!`: Generates micro thumbnail.
- `ocrImage(id: ID!): ExtractTextResponse!`: OCR scans text.
- `watermarkImage(id: ID!, watermarkText: String!): ProcessingJobResponse!`: Watermarks image.

#### Video Processing
- `trimVideo(input: TrimVideoInput!): ProcessingJobResponse!`: Trims duration.
- `mergeVideo(input: MergeVideoInput!): ProcessingJobResponse!`: Joins video segments.
- `compressVideo(id: ID!, targetSizeMb: Float): ProcessingJobResponse!`: Compresses video.
- `convertVideo(id: ID!, format: String!): ProcessingJobResponse!`: Converts video format.
- `thumbnailVideo(id: ID!, timestamp: String!): ProcessingJobResponse!`: Extracts frame thumbnail.
- `extractAudio(id: ID!, format: String!): ProcessingJobResponse!`: Extracts audio stream from video.
- `gifFromVideo(id: ID!, start: String!, duration: Float!): ProcessingJobResponse!`: Exports clips to GIF.

#### Audio Processing
- `trimAudio(input: TrimAudioInput!): ProcessingJobResponse!`: Trims audio.
- `mergeAudio(input: MergeAudioInput!): ProcessingJobResponse!`: Joins audio segments.
- `compressAudio(id: ID!, bitrateKbps: Int!): ProcessingJobResponse!`: Compresses bitrates.
- `convertAudio(id: ID!, format: String!): ProcessingJobResponse!`: Converts audio format.
- `normalizeAudio(id: ID!): ProcessingJobResponse!`: Adjusts volume levels.

---

### 4. Subscriptions
- `uploadProgress(fileId: ID!): UploadProgressPayload!`: Listens to live upload bytes progress.
- `processingProgress(jobId: ID!): ProcessingProgressPayload!`: Emits processing percentage for media jobs.
- `jobStatus(jobId: ID!): ProcessingJob!`: Emits status changes (PENDING -> RUNNING -> COMPLETED/FAILED) for background tasks.
- `pingSubscription: String!`: Simple WebSocket ping checker.
