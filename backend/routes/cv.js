const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')

const cvCtrl = require('../controllers/cv')
router.post('/cvs', auth, multer, cvCtrl.createCv)
router.get('/cvs', cvCtrl.getCv)
router.put('/cvs/:id', auth, multer, cvCtrl.editCv)
// router.delete('/cv:id', auth, cvCtrl.deleteCv)

router.put('/cvs:id/experience', auth, multer, cvCtrl.createExperience)
router.put('/cvs/:id/experience', auth, multer, cvCtrl.editExperience)
router.put('/cvs/:id/experience/delete', auth, multer, cvCtrl.deleteExperience)

// router.put('/cvs/:id/education', auth, multer, cvCtrl.createEducation)
// router.put('/cvs/:id/education', auth, multer, cvCtrl.editEducation)
// router.put('/cvs/:id/education', auth, multer, cvCtrl.deleteEducation)

// router.put('/cvs/:id/skill', auth, multer, cvCtrl.createSkill)
// router.put('/cvs/:id/skill', auth, multer, cvCtrl.editSkill)
// router.put('/cvs/:id/skill', auth, multer, cvCtrl.deleteSkill)

// router.put('/cvs/:id/softSkill', auth, multer, cvCtrl.createSoftSkill)
// router.put('/cvs/:id/softSkill', auth, multer, cvCtrl.editSoftSkill)
// router.put('/cvs/:id/softSkill', auth, multer, cvCtrl.deleteSoftSkill)

// router.put('/cvs/:id/interest', auth, multer, cvCtrl.createInterest)
// router.put('/cvs/:id/interest', auth, multer, cvCtrl.editInterest)
// router.put('/cvs/:id/interest', auth, multer, cvCtrl.deleteInterest)

// router.put('/cvs/:id/language', auth, multer, cvCtrl.createLanguage)
// router.put('/cvs/:id/language', auth, multer, cvCtrl.editLanguage)
// router.put('/cvs/:id/language', auth, multer, cvCtrl.deleteLanguage)

module.exports = router
