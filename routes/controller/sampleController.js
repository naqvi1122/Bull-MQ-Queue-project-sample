const { Queue }=require('bullmq')
const queue = new Queue('test');



  


const test = async (req, resp) => {


    

    let res=await queue.add('cars', { color: `added` });
    console.log('jobadded',res.id)
         resp.status(200).json({ user: req.body})
    




}







module.exports={test};