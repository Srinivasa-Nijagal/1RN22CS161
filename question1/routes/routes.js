import express from "express";
import fetch from "../services/fetch.js";
import id from "../utils/validateId.js";
import { getNumbers,average }  from "../data/number.js";

const router = express.Router();
router.get("/:id", async(req, res) => {
   const {id} = req.params;
   if(!id) {
       return res.status(400).json({error: "Invalid ID"});
   }
   try{
    const start = Date.now();
    await fetch(id);  
    const responeTime = Date.now() - start;
    if(responeTime > 500) {
        return res.status(504).json({error: "Request Timeout"});
    }
    const numbers = getNumbers();
    const avg = average();
    res.json({
        windowPrevState: numbers.slice(0, -1),
        windowCurrState: numbers,
        numbers,
        avg
    });
   }
    catch(err) {
         res.status(500).json({error: "Internal Error"});
    }
});
export default router;