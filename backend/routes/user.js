import express from 'express'
import { updateUser ,deleteUser ,getUser,getAllUsers,followUser,unfollowUser} from '../controllers/userController.js'

const router = express.Router()

router.route('/:id').put(updateUser).delete(deleteUser)
router.route('/:id/follow').put(followUser)
router.route('/:id/unfollow').put(unfollowUser)
router.route('/:name').get(getUser)
router.route('/').get(getAllUsers)


export default router;