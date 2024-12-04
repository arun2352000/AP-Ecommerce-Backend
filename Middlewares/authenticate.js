import USER from '../Models/user.schema.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const isAuthenticatedUser = async (req, res, next) => {
    const { auth_token } = req.cookies;
    if (!auth_token) return res.status(401).json({ message: "Invalid token" });
    
    // Verify the token
    const decoded = jwt.verify(auth_token, process.env.JWT_SECRET);
    
    // Find the user by decoded id
    req.user = await USER.findById(decoded.id);
    if (!req.user) return res.status(401).json({ message: "User not found" });
    
    next();
};

export const isAuthenticatedRoles = (...roles) => (req, res, next) => {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });
    if (!roles.includes(req.user.role)) {
        return res.status(401).json({ message: `Role ${req.user.role} is not allowed` });
    }
    next();
};
