import express from 'express';
import { fetchUsers, fetchUserById, addUser, editUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/', fetchUsers);          
router.get('/:id', fetchUserById); 
router.post('/add', addUser);         
router.delete('/:id', deleteUser);    
router.put('/:id', editUser);         

export default router;