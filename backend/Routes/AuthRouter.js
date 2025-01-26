const { signup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AutthValidation');


const router = require('express').Router();

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);

// signupvalidation is form middleware thats check constraint is correct format or not
// signup is form auth router where define the signup function and create use in the db 


module.exports = router;