import addproductsSchemaModel from "../models/addproduct.model.js";
import rs from 'randomstring'
import { assertLocalUploadsEnabled, buildUploadFilePath } from "../utils/uploads.js";




//saving api
 export const save = async (req,res)=>{

    let products =await addproductsSchemaModel.find();
    let l = products.length;
    let _id = l==0 ?1 : products[l-1]._id+1;

   const file = req.files?.doc;

   if (!file) {
    return res.status(400).json({
      status: false,
      message: "Product document is required",
    });
   }

   assertLocalUploadsEnabled();

   const filename = rs.generate(10)+"_"+Date.now()+"_"+file.name;
   const uploadfilepath = buildUploadFilePath("addproductfiles", filename);

    const productDetails = {...req.body,"filename": filename , "_id":_id, "info": Date.now() ,"useremail": req.body.useremail}

    try{
      await addproductsSchemaModel.create(productDetails);

      await file.mv(uploadfilepath);
      res.status(200).json({"status" : true});

    }catch(error){
        res.status(500).json({"status": false});
    }

}


export const fetch = async(req,res)=>{

// let condition_obj = req.query;

let condition_obj = {}

// ✅ If category/subcategory provided → filter
if(req.query.catnm && req.query.subcatnm){
    condition_obj.catnm = req.query.catnm
    condition_obj.subcatnm = req.query.subcatnm
}

// let condition_obj = {
//     catnm:req.query.catnm,
//     subcatnm:req.query.subcatnm
// };


// ✅ If normal user → restrict to their data
// if(req.query.role === "user"){
//     condition_obj.useremail = req.query.useremail
// }

// ✅ If admin → condition_obj stays {} → fetch ALL
let productlist = await addproductsSchemaModel.find(condition_obj);

res.status(200).json({
  status: true,
  info: productlist,
  count: productlist.length,
});

}



export const addReview = async (req, res) => {
  try {
    const { _id, review } = req.body;

    await addproductsSchemaModel.updateOne({ _id: _id },{ $set: { review: review }});
    res.status(200).json({ status: true });
  } catch (error) {
    res.status(500).json({ status: false });
  }
};
