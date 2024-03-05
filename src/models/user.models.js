import mongoose, {Schema} from "mongoose";
import { JsonWebTokenError, Jwt } from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
    {
        userName:{
            type:String,
            required:true,
            unique:true,
            trim:true,
            lowercase:true,
            index:true,
        },

        email:{
            type:String,
            required:true,
            unique:true,
            trim:true,
            lowercase:true
        },

        fullName:{
            type:String,
            required:true,
            trim:true,
            index:true,
        },

        avatar:{
            type:String, // CLOUDANARY URL
            required:true,
        },

        coverImage:{
            type:String
        },

        watchHistory:[
            {
            type:Schema.Types.ObjectId,
            ref:"Video"
            }
        ],

        password:{
            type:String,
            required:[true, 'Password is Required'],
        },

        refershToken:{
            type:string
        }
    }, {timestamps:true}
) 

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = async function () {
    jwt.sign(
        {
            _id: this._id,
            email: this.email,
            userName:this.userName,
            fullName: this.fullName
        },

        process.env.ACCESS_TOKEN_SCERET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = async function () {
    jwt.sign(
        {
            _id: this._id,
            email: this.email,
            userName:this.userName,
            fullName: this.fullName
        },

        process.env.REFRESH_TOKEN_SCERET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )   
}


export const User = mongoose.model("User", userSchema)