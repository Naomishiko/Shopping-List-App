const express = require('express'); //setting up the express server
const app = express(); //here using express
const db = require('./controller/connection');  // importing to the DataBase
const List = require('./db/list'); // importng the Schema For tasks
app.use(express.static("./views")); // using the static files
app.use(express.urlencoded({ etendedata: true })); //Urlencoded will allow to extract the data from the form
app.set('view engine', 'ejs');   // setting up the view engine
app.set('views', './views');


app.get('/', (req, res) => {    //getting the method
    List.find({}, (err, list) => {
        if(err){
            console.log('Error in fetching lists from db');
            return;
        }

        return res.render('header', {
            tittle: "Header",
            list: list
        });
    }
)});



app.post('/create-list', (req, res) => {  //posting the method
  
    List.create({
        list: req.body.list,
        category: req.body.category,
        price: req.body.price
        }, (err,thelist) => {
        if(err){console.log('error in creating list', err); return;}
        

        return res.redirect('back'); //console.log the list
    });
});


app.get('/delete-list', (req, res) => {   //deleting lists
    var id = req.query; //here getting the id from query

    // checking the number of tasks selected to delete from the list
    var count = Object.keys(id).length;  //checking the number of the list selected to delete from the list
    for(let i=0; i < count ; i++){
        
        // finding and deleting tasks from the DB one by one using id
        List.findByIdAndDelete(Object.keys(id)[i], function(err){
        if(err){
            console.log('error in deleting list');
            }
        })
    }
    return res.redirect('back'); 
});


app.listen(3000, () => {
    console.log("server up and running port 3000 🌟 ✅ 💞");  // //app listening to port 3000
});