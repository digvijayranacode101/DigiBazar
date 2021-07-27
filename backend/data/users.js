import bcrypt from 'bcryptjs'

const users = [
    {
        name : 'Admin User',
        email : 'admin@example.com',
        password : bcrypt.hashSync('123456', 10),
        isAdmin : true
    },
    {
        name : 'Deejay',
        email : 'deejay@example.com',
        password : bcrypt.hashSync('123456', 10)
        
    },
    {
        name : 'Asha',
        email : 'asha@example.com',
        password : bcrypt.hashSync('123456', 10)
        
    }
]

export default users