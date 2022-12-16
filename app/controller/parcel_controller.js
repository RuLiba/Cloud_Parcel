const parcel_model = require("../model/parcel_model");

module.exports = {
  async c_UserSend(req, res) {
    const {name, sender, recipient, email, address} = req.body;
    /*const name = req.body.name;
    const sender = req.body.sender;
    const recipient = req.body.recipient;
    const email = req.body.email;
    const address = req.body.address;*/

    let [result, err_message] = await parcel_model.m_UserSend(
        name, sender, recipient, email, address
    );
    
    if(result != null){
      console.log(result)
      res.json({success: true, err: err_message})
    }else{
      res.json({success: false, err: err_message})
    }

  },
  async c_SetNum(req, res) {
    const {number, name, sender, recipient, email, address} = req.body;

    let [result, err_message] = await parcel_model.m_SetNum(
        number, name, sender, recipient, email, address
    );
    if(result != null){
      console.log(result)
      res.json({success: true, err: err_message})
    }else{
      res.json({success: false, err: err_message})
    }

  },

  async c_DelInfo(req, res) {
    const number = req.body.number;

    let [result, err_message] = await parcel_model.m_DelInfo(number);
    if(result != null){
      console.log(result)
      res.json({success: true, err: err_message})
    }else{
      res.json({success: false, err: err_message})
    }
  },
}