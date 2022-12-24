const express=require("express")

const app=express();

const {datarouter,datarouter1}=require("./Routes/data");
const cors=require("cors");
app.use(cors());

app.use("/api",datarouter);
app.use("/api",datarouter1);

app.listen(process.env.PORT || 8080,()=>{
    console.log("app is running");
})
 