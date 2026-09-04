import {z} from "zod";

const userSchema = z.object({
    name:z.string(),
    age:z.number(),
    email:z.email(),
    isStudent:z.boolean(),
    marks:z.array(z.number()),
    status:z.enum(["pass","fail"])
});

// constraints : 
// min()
// max()
// length()
// email()
// url()
// regex()
// uuid()
// optional()
// nullable()
// default()

//const result = userSchema.parse(req.body) -> throws error if wrong
//const result = userSchema.safeParse(req.body) -> does now throw error but consoles the log as success or failure

/* we can use middleware called validator and use it to safeParse the request  
    export const validate = (schema)=>{
        return (req,res,next) => {
            const result = schema.safeParse(req.body);

            if (!result.success){
                return res.status(400).json({
                    message:"validation request failed",
                    error : result.error.flatten()
                });
            }
            
            req.body=result.data;

            next();
        };
    };

*/

//refine() -> custom validation (zod + my custom validation) eg:regex in passwrds
//superRefine() -> like check password===confirmPassword

//can also use transformations : z.string().transform((value)=>value.toLowerCase())