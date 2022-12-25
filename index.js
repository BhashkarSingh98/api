const express=require("express")
const cors=require("cors");
const app=express();
app.use(cors());

const {datarouter,datarouter1,datarouter2,datarouter3,datarouter4}=require("./Routes/data");

app.use("/api",datarouter);
app.use("/api",datarouter1);
app.use("/api",datarouter2);
app.use("/api",datarouter3);
app.use("/api",datarouter4);

app.listen(process.env.PORT || 8080,()=>{
    console.log("app is running");
})
 