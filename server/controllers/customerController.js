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
        firstName: "Raddy",
        lastName: "NodeJs",
        tel: "1-353-218-4881",
        email: "raddy@outlook.couk",
        details: "Demo details text.",
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        firstName: "Aphrodite",
        lastName: "Parker",
        tel: "1-857-407-8574",
        email: "quam@protonmail.net",
        details: "Demo details text.",
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        firstName: "Camden",
        lastName: "Perce",
        tel: "(251) 719-5886",
        email: "aliquam.tincidunt.nunc@icloud.net",
        details: "Demo details text.",
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        firstName: "Emi",
        lastName: "Hutchinson",
        tel: "1-878-674-6876",
        email: "aenean.egestas@aol.org",
        details: "Demo details text.",
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        firstName: "Chaim",
        lastName: "Holland",
        tel: "1-776-825-8236",
        email: "a@google.couk",
        details: "Demo details text.",
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        firstName: "Harding",
        lastName: "Cameron",
        tel: "1-935-750-3637",
        email: "non.nisi@outlook.edu",
        details: "Demo details text.",
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        firstName: "Dane",
        lastName: "Kelley",
        tel: "(129) 964-3195",
        email: "morbi@aol.org",
        details: "Demo details text.",
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        firstName: "Emery",
        lastName: "Thornton",
        tel: "(565) 248-4784",
        email: "egestas.blandit.nam@icloud.org",
        details: "Demo details text.",
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        firstName: "Tarik",
        lastName: "Francis",
        tel: "1-679-436-4746",
        email: "lacus@outlook.ca",
        details: "Demo details text.",
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
            {
        firstName: "Rebecca",
        lastName: "Booth",
        tel: "1-548-944-3232",
        email: "sapien@icloud.couk",
        details: "Demo details text.",
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        firstName: "Solomon",
        lastName: "Larson",
        tel: "(648) 588-4779",
        email: "accumsan.interdum@icloud.net",
        details: "Demo details text.",
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        firstName: "Tanner",
        lastName: "Morin",
        tel: "(189) 577-5612",
        email: "nec.diam.duis@google.couk",
        details: "Demo details text.",
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        firstName: "September",
        lastName: "Walton",
        tel: "1-732-422-2492",
        email: "sed.sapien.nunc@icloud.com",
        details: "Demo details text.",
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        firstName: "Kermit",
        lastName: "Becker",
        tel: "1-163-757-8638",
        email: "id@yahoo.net",
        details: "Demo details text.",
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        firstName: "Anish",
        lastName: "Brown",
        tel: "1-163-757-8638",
        email: "Anish@yahoo.net",
        details: "Demo details text.",
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        firstName: "Duncan",
        lastName: "Woodard",
        tel: "1-163-757-8638",
        email: "Duncan@yahoo.net",
        details: "Demo details text.",
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        firstName: "Izabella",
        lastName: "Stark",
        tel: "1-163-757-8638",
        email: "Izabella@yahoo.net",
        details: "Demo details text.",
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        firstName: "Dhruv",
        lastName: "Fields",
        tel: "1-163-757-8638",
        email: "Dhruv@yahoo.net",
        details: "Demo details text.",
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        firstName: "Harriet",
        lastName: "Gillespie",
        tel: "1-163-757-8638",
        email: "Harriet@yahoo.net",
        details: "Demo details text.",
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        firstName: "Chad",
        lastName: "Barton",
        tel: "1-163-757-8638",
        email: "Chad@yahoo.net",
        details: "Demo details text.",
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        firstName: "Esmee",
        lastName: "Trujillo",
        tel: "1-163-757-8638",
        email: "Esmee@yahoo.net",
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
