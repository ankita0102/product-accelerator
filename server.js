const express = require('express');
const app = express(); 

const nodemailer = require("nodemailer"); 

const PORT = process.env.PORT || 5000; 


//middleware
app.use(express.static('public')); 
app.use(express.json())

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html') 
}) 

app.post('/', (req, res)=>{
    console.log(req.body); 
    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'angelicamalik999@gmail.com', 
            pass: 'imie bllo puoa kpmm'   
        } 
    }) 

    const mailOptions = {
        from: 'urmom', 
        to: req.body.email,  
        subject: `Message from ${req.body.name}: ${req.body.subject}`,
        text: req.body.password
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success') 
        }
    })
}) 



app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})  
