import express from 'express';
import { searchMusic, getChartMusic, getSearchHistory, clearSearchHistory } from '../controllers/musicController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Tìm kiếm không cần đăng nhập
router.get('/search', searchMusic);

// Nhạc thịnh hành không cần đăng nhập  
router.get('/chart', getChartMusic);

router.get('/history', getSearchHistory); 
router.delete('/history', clearSearchHistory);

export default router;