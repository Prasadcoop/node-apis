const db = require('../config/db.config');

exports.createUser = (req, res) => {
    const { name, email, password, isActive } = req.body;

    if (!name || !email || !password || typeof isActive === 'undefined') {
        return res.status(400).json({ error: "Name, email, password, and isActive are required." });
    }

    const query = 'INSERT INTO user_details (username, email, password, isActive) VALUES (?, ?, ?, ?)';
    db.query(query, [name, email, password, isActive], (err, result) => {
        if (err) {
            console.error(err);  // Logs the error to the console
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'User created', userId: result.insertId });
    });
}



exports.getAllUsers = (req, res) => {
    const query = 'SELECT * FROM user_details';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({
            'result':results,
            'code' :200,
            'status':'success'
    });
    });
}; 

exports.getUserById =(req,res)=>{
    const { id } =req.params;
    const query ='SELECT * FROM user_details where id= ?';

    db.query( query,[id], (err , result) =>{
        if(err) return res.json({ error : err.message});
        if(result.length === 0) return res.status(404).json({ message: 'User not found'});
        res.json(result[0]);
    })
}

exports.getUserUpdate = (req , res) =>{
    const { id } = req.params;
    const { name , email , password } = req.body;

    if (!name || !email || !password ) {
        return res.status(400).json({ error: "Name, email, password" });
    }

    const query = 'UPDATE user_details SET username =? ,email =? , password =? WHERE id = ?';

    db.query( query, [ name , email , password ,id], (err , result) =>{
        if(err) return res.json({ error :err.message});
        if(result.affectedRows === 0) return res.status(404).json({ message : 'User not found'});
        res.json({ message: 'User updated' });
    });
}