import express from 'express'
import {
  createSongJson,
  createSongMultipart,
  getAllSongs,
  getSingleSong,
  listenSong,
  removeSong,
  reviewSongByModerator,
  updateSongJson,
  updateSongMultipart,
  uploadAudioOnly,
  uploadCoverOnly,
  getMusicList,
  searchMusic,
  getSearchHistory, 
  clearSearchHistory, 
  deleteHistoryItem
} from '../controllers/musicController.js'
import { requireModeratorRole } from '../middlewares/moderationMiddleware.js'
import { verifyToken } from '../middlewares/authMiddleware.js'
import { uploadAudio, uploadCover, uploadSongFiles } from '../middlewares/uploadMiddleware.js'

const router = express.Router()

router.get('/songs', getAllSongs)
router.get('/songs/:id/listen', listenSong)
router.get('/songs/:id', getSingleSong)

router.post('/songs', verifyToken, createSongJson)
router.put('/songs/:id', verifyToken, updateSongJson)
router.delete('/songs/:id', verifyToken, removeSong)

router.post('/songs/multipart', verifyToken, uploadSongFiles, createSongMultipart)
router.put('/songs/:id/multipart', verifyToken, uploadSongFiles, updateSongMultipart)
router.post('/songs/upload', verifyToken, uploadAudio.single('audio'), uploadAudioOnly)
router.post('/songs/upload-cover', verifyToken, uploadCover.single('cover'), uploadCoverOnly)

router.patch('/songs/:id/review', verifyToken, requireModeratorRole, reviewSongByModerator)


// Các route cho List và Search (Không cần đăng nhập)
router.get('/list', getMusicList);
router.get('/search', searchMusic);
router.get('/my-uploads', verifyToken, getAllSongs); // CTV xem nhạc của mình

//router lay lich su tim kiem
router.get('/history', getSearchHistory); 
router.delete('/history', clearSearchHistory);

router.delete('/history/:keyword', deleteHistoryItem);

export default router
