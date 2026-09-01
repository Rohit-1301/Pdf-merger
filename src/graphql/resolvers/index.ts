import { scalarResolvers } from './scalars';
import { me } from './queries/me';
import { file } from './queries/file';
import { files } from './queries/files';
import { folder } from './queries/folder';
import { folders } from './queries/folders';
import { sharedLinks } from './queries/sharedLinks';
import { recentFiles } from './queries/recentFiles';
import { favoriteFiles } from './queries/favoriteFiles';
import { storageUsage } from './queries/storageUsage';
import { searchFiles } from './queries/searchFiles';
import { processingJobs } from './queries/processingJobs';
import { healthCheck } from './queries/healthCheck';
import { register } from './mutations/register';
import { login } from './mutations/login';
import { refreshToken } from './mutations/refreshToken';
import { logout } from './mutations/logout';
import { uploadFile } from './mutations/uploadFile';
import { deleteFile } from './mutations/deleteFile';
import { renameFile } from './mutations/renameFile';
import { moveFile } from './mutations/moveFile';
import { copyFile } from './mutations/copyFile';
import { duplicateFile } from './mutations/duplicateFile';
import { archiveFile } from './mutations/archiveFile';
import { restoreFile } from './mutations/restoreFile';
import { favoriteFile } from './mutations/favoriteFile';
import { unfavoriteFile } from './mutations/unfavoriteFile';
import { createFolder } from './mutations/createFolder';
import { renameFolder } from './mutations/renameFolder';
import { deleteFolder } from './mutations/deleteFolder';
import { moveFolder } from './mutations/moveFolder';
import { createShareLink } from './mutations/createShareLink';
import { revokeShareLink } from './mutations/revokeShareLink';
import { updatePermissions } from './mutations/updatePermissions';
import { mergePDF } from './mutations/mergePDF';
import { splitPDF } from './mutations/splitPDF';
import { compressPDF } from './mutations/compressPDF';
import { rotatePDF } from './mutations/rotatePDF';
import { extractPages } from './mutations/extractPages';
import { deletePages } from './mutations/deletePages';
import { watermarkPDF } from './mutations/watermarkPDF';
import { unlockPDF } from './mutations/unlockPDF';
import { protectPDF } from './mutations/protectPDF';
import { extractText } from './mutations/extractText';
import { extractImages } from './mutations/extractImages';
import { resizeImage } from './mutations/resizeImage';
import { cropImage } from './mutations/cropImage';
import { rotateImage } from './mutations/rotateImage';
import { flipImage } from './mutations/flipImage';
import { compressImage } from './mutations/compressImage';
import { convertImage } from './mutations/convertImage';
import { thumbnailImage } from './mutations/thumbnailImage';
import { ocrImage } from './mutations/ocrImage';
import { watermarkImage } from './mutations/watermarkImage';
import { trimVideo } from './mutations/trimVideo';
import { mergeVideo } from './mutations/mergeVideo';
import { compressVideo } from './mutations/compressVideo';
import { convertVideo } from './mutations/convertVideo';
import { thumbnailVideo } from './mutations/thumbnailVideo';
import { extractAudio } from './mutations/extractAudio';
import { gifFromVideo } from './mutations/gifFromVideo';
import { trimAudio } from './mutations/trimAudio';
import { mergeAudio } from './mutations/mergeAudio';
import { compressAudio } from './mutations/compressAudio';
import { convertAudio } from './mutations/convertAudio';
import { normalizeAudio } from './mutations/normalizeAudio';
import { ping } from './mutations/ping';
import { uploadProgress } from './subscriptions/uploadProgress';
import { processingProgress } from './subscriptions/processingProgress';
import { jobStatus } from './subscriptions/jobStatus';
import { pingSubscription } from './subscriptions/pingSubscription';

export const resolvers = {
  ...scalarResolvers,
  
  Query: {
    me,
    file,
    files,
    folder,
    folders,
    sharedLinks,
    recentFiles,
    favoriteFiles,
    storageUsage,
    searchFiles,
    processingJobs,
    healthCheck,
  },
  
  Mutation: {
    register,
    login,
    refreshToken,
    logout,
    uploadFile,
    deleteFile,
    renameFile,
    moveFile,
    copyFile,
    duplicateFile,
    archiveFile,
    restoreFile,
    favoriteFile,
    unfavoriteFile,
    createFolder,
    renameFolder,
    deleteFolder,
    moveFolder,
    createShareLink,
    revokeShareLink,
    updatePermissions,
    mergePDF,
    splitPDF,
    compressPDF,
    rotatePDF,
    extractPages,
    deletePages,
    watermarkPDF,
    unlockPDF,
    protectPDF,
    extractText,
    extractImages,
    resizeImage,
    cropImage,
    rotateImage,
    flipImage,
    compressImage,
    convertImage,
    thumbnailImage,
    ocrImage,
    watermarkImage,
    trimVideo,
    mergeVideo,
    compressVideo,
    convertVideo,
    thumbnailVideo,
    extractAudio,
    gifFromVideo,
    trimAudio,
    mergeAudio,
    compressAudio,
    convertAudio,
    normalizeAudio,
    ping,
  },
  
  Subscription: {
    uploadProgress,
    processingProgress,
    jobStatus,
    pingSubscription,
  }
};
