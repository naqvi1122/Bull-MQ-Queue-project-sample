const {Worker} =require('bullmq')
const worker = new Worker('test', async job => {
  if (job.name === 'cars') {
   
    console.log('bullmq111',job.data)
    await new Promise(resolve => setTimeout(resolve, 10000));
    console.log('complete')
    //await paintCar(job.data.color);
  }
});