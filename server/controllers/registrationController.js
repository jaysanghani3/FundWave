const Registration = require('../models/registration');

exports.createRegistration = async (req, res) => {
    try {
        const registration = new Registration(req.body);
        await registration.save();
        res.status(201).json({ message: 'Registration created successfully', registration });
    } catch (error) {
        if (error.name === 'MongoServerError' && error.code === 11000) {
            // Duplicate email
            return res.status(422).send({ success: false, message: 'Email address already registered!' });
          }
        else if (error.name === 'ValidationError') {
            // Handle validation error
            const errorMessages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({ errors: errorMessages });
          }
          res.status(500).json({ error: error.message });
    }
};

exports.getRegistrations = async (req, res) => {
    try{
        const registrations = await Registration.find();
        res.json(registrations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getRegistrationById = async (req, res) => {
    try {
        const registration = await Registration.findById(req.params.id);
        if (!registration) {
            return res.status(404).json({ error: 'Registration not found' });
        }
        res.json(registration);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateRegistrationById = async (req, res) => {
    try {
        const registration = await Registration.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!registration) {
            return res.status(404).json({ error: 'Registration not found' });
        }
        res.json({ message: 'Registration updated successfully', registration });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteRegistrationById = async (req, res) => {
    try {
        const registration = await Registration.findByIdAndRemove(req.params.id);
        if (!registration) {
            return res.status(404).json({ error: 'Registration not found' });
        }
        res.json({ message: 'Registration deleted successfully', registration });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    // try {
    //     const registration = await Registration.findByCredentials(req.body.email, req.body.password);
    //     if (!registration) {
    //         return res.status(401).json({ error: 'Login failed! Check authentication credentials' });
    //     }
    //     const token = await registration.generateAuthToken();
    //     res.json({ message: 'Login successful', registration, token });
    // } catch (error) {
    //     res.status(500).json({ error: error.message });
    // }
    const { email, password } = req.body;
    try {
        // Use the User model to find the registration by email
        const registration = await Registration.findOne({ email });
    
        if (!registration) {
          return res.status(401).json({ message: 'User not found' });
        }
    
        if (registration.password !== password) {
          return res.status(401).json({ message: 'Incorrect password' });
        }
    
        res.status(200).json({ message: 'Login successful' });
      } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'An error occurred' });
      }
    // console.log(req.body);
    // res.json({ message: 'Login successful' });
};
