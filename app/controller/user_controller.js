const user_model = require("../model/user_model");
const parcel_model = require("../model/user_model");
const session = require("express-session");

module.exports = {
  //회원가입
  async c_UserJoin(req, res) {
    const { id, password, name, email, phone } = req.body;

    let [result, err_message] = await user_model.m_UserJoin(
      id,
      password,
      name,
      email,
      phone
    );

    if (result != null) {
      console.log(result);
      res.json({ success: true, err: err_message });
    } else {
      res.json({ success: false, err: err_message });
    }
  },

  //로그인
  async c_UserLogin(req, res) {
    const { id, password } = req.body;
    if (req.session.name) {
      res.json({
        success: false,
        massage: req.session.name + "님은 이미 로그인 되어 있습니다.",
      });
    } else {
      let [result, err_message] = await user_model.m_UserLogin(id, password);
      if (id == result[0].id && password == result[0].password) {
        req.session.name = result[0].name;
        req.session.user_id = result[0].id;
        req.session.save(() => {
          res.json({
            success: true,
            err: err_message,
            massage: req.session.name + "님 로그인 되었습니다.",
          });
        });
      } else {
        res.json({
          success: false,
          err: err_message,
          massage: "회원정보가 일치하지 않습니다.",
        });
      }
    }
  },

  //로그아웃
  async c_UserLogout(req, res) {
    if (req.session.name) {
      req.session.destroy();
      res.json({ success: true, message: "로그아웃 성공" });
    } else {
      res.json({
        success: false,
        message: "로그인 되어있지 않음",
      });
    }
  },

  //회원 정보조회
  async c_UserSearch(req, res) {
    const id = req.session.user_id;
    const password = req.body.password;

    if (id) {
      let [result, err_message] = await user_model.m_UserSearch(id, password);
      if (result.length > 0) {
        res.json({
          success: true,
          err: err_message,
          id: result[0].id,
          password: result[0].password,
          name: result[0].name,
          email: result[0].email,
          phone: result[0].phone,
        });
      } else {
        res.json({
          success: false,
          err: err_message,
          message: "비밀번호가 틀렸습니다.",
        });
      }
    } else {
      res.json({ success: false, err: "로그인이 되어있지 않습니다." });
    }
  },

  //회원 정보 수정
  async c_UserEdit(req, res) {
    const id = req.session.user_id;
    const { password, name, email, phone } = req.body;

    if (id) {
      let [result, err_message] = await user_model.m_UserSearch(id, password);
      if (result.length > 0) {
        console.log(result[0]);
        let [update, err] = await user_model.m_UserEdit(id, name, email, phone);
        res.json({ success: true, err: err, message: "수정완료" });
      } else {
        res.json({
          success: false,
          err: err_message,
          message: "비밀번호가 틀렸습니다.",
        });
      }
    } else {
      res.json({ success: false, err: "로그인이 되어있지 않습니다." });
    }
  },

  //회원 탈퇴
  async c_UserDel(req, res) {
    const id = req.session.user_id;
    const password = req.body.password;

    if (id) {
      let [key, err_message] = await user_model.m_UserSearch(id, password);
      if (key.length > 0) {
        let [result, err] = await user_model.m_UserDel(id);
        res.json({ success: true, err: err, message: "탈퇴완료" });
      } else {
        res.json({
          success: false,
          err: err_message,
          message: "비밀번호가 틀렸습니다.",
        });
      }
    } else {
      res.json({ success: false, err: "로그인이 되어있지 않습니다." });
    }
  },
};
