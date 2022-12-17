const parcel_model = require("../model/parcel_model");

module.exports = {
  async c_UserLogin(req, res) {
    const { id, password } = req.body;

    let [result, err_message] = await parcel_model.m_UserSend(id, password);

    if (result != null) {
      console.log(result);
      res.json({ success: true, err: err_message });
    } else {
      res.json({ success: false, err: err_message });
    }
  },

  async c_UserSend(req, res) {
    const { name, sender, recipient, email, address } = req.body;

    let [result, err_message] = await parcel_model.m_UserSend(
      name,
      sender,
      recipient,
      email,
      address
    );

    if (result != null) {
      console.log(result);
      res.json({ success: true, err: err_message });
    } else {
      res.json({ success: false, err: err_message });
    }
  },

  async c_SetNum(req, res) {
    const { number, name, sender, recipient, email, address } = req.body;

    let [result, err_message] = await parcel_model.m_SetNum(
      number,
      name,
      sender,
      recipient,
      email,
      address
    );
    if (result != null) {
      console.log(result);
      res.json({ success: true, err: err_message });
    } else {
      res.json({ success: false, err: err_message });
    }
  },

  async c_DelInfo(req, res) {
    const number = req.body.number;

    let [result, err_message] = await parcel_model.m_DelInfo(number);
    if (result != null) {
      console.log(result);
      res.json({ success: true, err: err_message });
    } else {
      res.json({ success: false, err: err_message });
    }
  },

  async c_SearchItem(req, res) {
    const number = req.body.number;

    let [result, err_message] = await parcel_model.m_SearchItem(number);
    if (result != null) {
      console.log(result);
      res.json({ success: true, err: err_message });
    } else {
      res.json({ success: false, err: err_message });
    }
  },
};
