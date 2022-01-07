const req = require('express/lib/request');
const res = require('express/lib/response');
var data = require('../data-store');
var projects = data.getProjects();
var router = require('express').Router();

router.get('/', (req,res)=>{

  // console.log("hi", projects);
  return res.status(200).json(projects);
})

router.get('/:id', (req, res) => {
  try {

  for (const obj of projects) {
    if (`${obj["id"]}` == req.params.id) {

      return res.status(200).json(obj);
    }
    
  }
    return res.status(404).json({ message: "No Project Found" });
  }
  catch (err) {
    return res.status(404).json({ message: "No Project Found" });
  }
  
})

router.get('/active', (req, res) => {
  // try {
  //   // let result = projects.filter(p => p.isActive);
  //   console.log("we made it in here");
  //   return res.status(200)
  //     // .json(result);
  // }
  // catch {

  // }
  console.log("hello", req);
  return res.status(200);
});


module.exports = router;
