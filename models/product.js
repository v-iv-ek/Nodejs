
const fs=require('fs')
module.exports=class Product{
    constructor(title){
        this.title=title;
    }
    save(){           
            fs.readFile("./product.json",(err,data)=>{
                let products=[]; 
                if(!err){
                    products=JSON.parse(data)
                    console.log("e",products)
                }
                products.push(this)
                console.log(products)
                fs.writeFile("./product.json",JSON.stringify(products),(err)=>{
                    console.log(err)
            })

            })            
        }

    static fetchAll(){ 
        fs.readFile("./product.json","utf-8",(err,productData)=>{
            if(err){
                return []
            }
            console.log(productData)
            return JSON.parse(productData.toString())
        })
    
    }
}