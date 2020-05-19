const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')

const app = express();
const PORT = 4000;
const userRoutes = express.Router();


let Order = require('./models/order');
let User = require('./models/user');
let Product = require('./models/product');
app.use(cors());
app.use(bodyParser.json());

// Connection to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/users', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established succesfully.");
})

// API endpoints

// Getting all the users
userRoutes.route('/').get(function(req, res) {
    User.find(function(err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    });
});

// Getting all the products
userRoutes.route('/getproducts').get(function(req, res) {
    Product.find(function(err, products) {
        if (err) {
            console.log(err);
        } else {
            res.json(products);
        }
    });
});

// Getting all the orders
userRoutes.route('/getorders').get(function(req, res) {
    Order.find(function(err, orders) {
        if (err) {
            console.log(err);
        } else {
            res.json(orders);
        }
    });
});
// Adding a new user
userRoutes.route('/useradd').post(function(req, res) {
    let user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'User': 'User added successfully'});
        })
        .catch(err => {
            res.status(400).send('Error');
        });
});

// Adding a new order
userRoutes.route('/login/customer/addorder').post(function(req, res) {
    let order = new Order(req.body);
    order.save()
        .then(order => {
            res.status(200).json({'Order': 'Order added successfully'});
        })
        .catch(err => {
            res.status(400).send('Error');
        });
});
// Adding a new product
userRoutes.route('/productadd').post(function(req, res) {
    let product = new Product(req.body);
    product.save()
        .then(product => {
            res.status(200).json({'Product': 'Product added successfully'});
        })
        .catch(err => {
            res.status(400).send('Error');
        });
});
//checking login
// Getting a product by id
userRoutes.route('/login/customer/ProductsListbyname').post(function(req, res) {
    let bod = req.body.productname;
    Product.find({productname:bod}, function(err, product) {
        res.json(product);
    });
});

userRoutes.route('/login/customer/OrdersListbyname').post(function(req, res) {
    let bod = req.body.username;
    Order.find({username:bod}, function(err, order) {
        res.json(order);
    });
});
//get product by username
userRoutes.route('/login/vendor/waitingproducts').post(function(req, res) {
    let bod = req.body.username;
     let st = req.body.status;
  	Product.find({username: `${bod}` ,status: `${st}`}, function(err, product) {
        res.json(product);
    });
});
// Getting a user by id
userRoutes.route('/logg').post(function(req, res) {
    let bod = req.body;
    User.findOne(bod, function(err, user) {
        res.json(user);
    });
});


//getting quantity
userRoutes.route('/quantity').post(function(req, res) {
    let nam = req.body.vendorname;
    let pnam = req.body.productname;
   
    Product.findOne({username: `${nam}` ,productname: `${pnam}`}, function(err, product) {
        res.json(product);
    });
});



//getting quantity
userRoutes.route('/quantity1').post(function(req, res) {
    let nam = req.body.vendorname;
    let pnam = req.body.productname;
    console.log("hello");
   console.log(nam);
    Product.findOne({username: `${nam}`}, function(err, product) {
        res.json(product);
    });
});



userRoutes.route('/login/customer/updateorderstatus').put(function(req, res) {
	let username1= req.body.username;
        let    productname1= req.body.productname;
           let  vendorname1=req.body.vendorname;
          let   quantityleftfororder1=req.body.quantityleftfororder;
          let  status1=req.body.status;
          console.log(productname1);console.log(vendorname1);  console.log(status1);console.log(quantityleftfororder1);
			Product.updateOne({username:`${vendorname1}`,productname:`${productname1}`},{quantityleftfororder:`${quantityleftfororder1}`,status:`${status1}`},function(err,products)
{

if(err)
{
	console.log("not updated");
}
else
{
	res.json(products);
}
})
});







userRoutes.route('/login/customer/updaterating').put(function(req, res) {
	let username1= req.body.username;
        let    productname1= req.body.productname;
           
          let   vendorrating1=req.body.vendorrating;
          let  nv1=req.body.nv;
          console.log(productname1);console.log(username1);  console.log(vendorrating1);console.log(nv1);
			Product.updateMany({username:`${username1}`},{vendorrating:`${vendorrating1}`,nv:`${nv1}`},function(err,products)
{

if(err)
{
	console.log("not updated");
}
else
{
	res.json(products);
}
})
});















userRoutes.route('/login/customer/updateorderstatus2').put(function(req, res) {
	let username1= req.body.username;
        let    productname1= req.body.productname;
           let  vendorname1=req.body.vendorname;
          let   quantityleftfororder1=req.body.quantityleftfororder;
          let  status1=req.body.status;
          console.log(productname1);console.log(vendorname1);  console.log(status1);console.log(quantityleftfororder1);
			Order.updateMany({vendorname:`${vendorname1}`,productname:`${productname1}`},{quantityleftfororder:`${quantityleftfororder1}`,status:`${status1}`},function(err,orders)
{

if(err)
{
	console.log("not updated");
}
else
{
	res.json(orders);
}
})
});



app.use('/', userRoutes);

app.listen(PORT, function() {
    console.log("Server is running on port: " + PORT);
});
