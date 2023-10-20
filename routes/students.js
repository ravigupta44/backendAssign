const express = require('express');
const router = express.Router();

router.post('/sort-students', (req, res) => {
    const { students } = req.body;

    if (!students || !Array.isArray(students)) {
        return res.status(400).json({ error: 'The "students" field must be an array.' });
    }

    const sortedStudents = students.sort();

    res.json({ sortedStudents });
});

module.exports = router;
