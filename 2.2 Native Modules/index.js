const fs= require('fs')

fs.writeFile("Yoo.txt","YOOooooooo What upppppp!",(err)=>{
    if(err) throw err;
    console.log("File has been saved successfully");
});

fs.readFile("message.txt","utf-8",(err, data) => {
    if (err) throw err;
    console.log(data);
  })