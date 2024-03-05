import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile:{
            type:String,// clouinary url se ayega string
            required:true,
        },

        thumbnail:{
            type:String, // clouinary url se ayega string
            required:true,
        },

        title:{
            type:String, 
            required:true,
        },

        description:{
            type:String, 
            required:true,
        },

        duration:{
            type:Number,
            required:true
        },

        views:{
            type:Number,
            default:0
        },

        isPublshed:{
            type:Boolean,
            deafult:true
        },

        owner:{
            type: Schema.Types.ObjectId,
            ref:"User"
        }
    }, {timestamps:true}
    )

videoSchema = mongoose.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video", videoSchema)