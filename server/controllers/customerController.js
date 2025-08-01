const Customer = require('../models/Customer');
const mongoose = require('mongoose');
const Flash = require('connect-flash');
// get homepage

exports.homepage = async(req,res)=>{
   
const messages = await req.flash('info');

    const locals = {
        title: 'NodeJs',
        description: 'User Management System'
    }
    
   let perPage = 12;
   let page = req.query.page || 1;

    try {
       const customers =  await Customer.aggregate([ {$sort: {updatedAt: -1} } ])
       .skip(perPage * page - perPage)
       .limit(perPage)
       .exec();
      const count = await Customer.countDocuments();


       res.render('index', {
        locals,
        customers,
        current: page ,
        pages: Math.ceil(count / perPage),
        messages
       });
    } catch (error) {
        console.log(error);
    }

}



// exports.homepage = async(req,res)=>{
   
// const messages = await req.flash('info');

//     const locals = {
//         title: 'NodeJs',
//         description: 'User Management System'
//     }
    
//     try {
//         const customers = await Customer .find({}).limit(22);
//     res.render('index',{locals, messages,customers});
//     } catch (error) {
//         console.log(error);
//     }

// }
//about page

exports.about = async(req,res)=>{
   

    const locals = {
        title: 'NodeJs',
        description: 'User Management System'
    }
    
    try {
    res.render('about',{locals, messages,customers});
    } catch (error) {
        console.log(error);
    }

}

//get new customer form 
exports.addCustomer = async(req,res)=>{
   
  try {
    await Customer.insertMany([
    
      {
        firstName: "Dhruv",
        lastName: "Fields",
        tel: "1-163-757-8638",
        email: "Dhruv@yahoo.net",
        details: "Demo details text.",
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
     
    ]);
  } catch (error) {
    console.log("err", + error);
  }
    res.render('customer/add');
}

//post new customer form 
exports.postCustomer = async(req,res)=>{
   console.log(req.body); 

 const newCustomer = new Customer({
    firstName: req.body.firstName,
    lastName: req.body.lastName,       
    tel: req.body.tel,
    email: req.body.email,
    details: req.body.details, 
 })


    const locals = {
        title: 'New Customer Added',
        description: 'User Management System'
    }

    try {  
        await Customer.create(newCustomer);
         req.flash('info', 'New customer has been added.')
        res.redirect('/');
    } catch (error) {
        console.log(error.message);
    }

    
}

exports.view =async( req, res) =>{
    try{
        const customer = await Customer.findOne({_id: req.params.id})

         const locals = {
        title: 'View customer Date',
        description: 'User Management System'
    };

    res.render('customer/view',{
        locals,
        customer 
    })
    } catch(error){
        console.log(error);
    }
}

//edit customer data

exports.edit =async( req, res) =>{
    try{
        const customer = await Customer.findOne({_id: req.params.id})

         const locals = {
        title: 'Edit customer Date',
        description: 'User Management System'
    };

    res.render('customer/edit',{
        locals,
        customer 
    })
    } catch(error){
        console.log(error);
    }
}

//Update customer data

exports.editPost =async( req, res) =>{
  
  try {
    
     await Customer.findByIdAndUpdate({_id: req.params.id},{
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        tel: req.body.tel,
        email: req.body.email,
        details: req.body.details,
        updatedAt: Date.now()
     });

     res.redirect(`/`);

  }catch (error) {
      console.log(error);
  }

}

//Delete Customer Data

exports.deleteCustomer = async(req, res) =>{

    try {
        await Customer.deleteOne({_id: req.params.id});
        res.redirect("/")
    } catch (error) {
        console.log(error);
    }
}

//search customers data 
exports.searchCustomer = async(req, res) =>{

   const locals = {
        title: 'Search customer',
        description: 'User Management System'
    };

   try {
          let searchTerm = req.body.searchTerm;
     const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9]/g,"");
     const customers = await Customer.find({
        $or: [
            {firstName: {$regex: new RegExp(searchNoSpecialChar, "i") }},
            {lastName: {$regex: new RegExp(searchNoSpecialChar, "i") }},
        ]
     }).lean();

     console.log(customers)

     res.render("search",{
        customers,
        locals
     })

   } catch (error) {
     console.log(error);
   }





}

exports.about =async( req, res) =>{
    

         const locals = {
        title: 'Edit customer Date',
        description: 'User Management System'
         }

          try {
            res.render('about',locals);

          } catch (error) {
            console.log(error);
            
          }
}
