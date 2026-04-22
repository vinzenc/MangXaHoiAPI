import express from 'express';
import { 
    addPlaylist, 
    addSongToPlaylists, 
    removePlaylist, 
    getPlaylistSongs,
    getUserPlaylists 
} from '../controllers/playlistController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();
router.use(verifyToken);
router.post('/add', addPlaylist);
router.get('/:playlistId/songs', getPlaylistSongs);
router.post('/:playlistId/songs', addSongToPlaylists);
router.delete('/:playlistId', removePlaylist);
router.get('/', getUserPlaylists);

export default router;