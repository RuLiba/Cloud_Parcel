const parcel_db = require("../model/db/parcel_db");

console.log("서버 생성시에 시작..");

module.exports = {
  //회원가입
  async m_UserJoin(id, password, name, email, phone) {
    const query =
      "INSERT INTO account set id = ?, password = ?, name = ?, email = ?, phone = ?";

    const data = [id, password, name, email, phone];

    return parcel_db.ReadDb(query, data);
  },

  //로그인
  async m_UserLogin(id, password) {
    const query =
      "SELECT id, password, name FROM account WHERE id = ? and password = ?";

    const data = [id, password];

    return parcel_db.ReadDb(query, data);
  },

  //회원 정보 조회
  async m_UserSearch(id, password) {
    const query = "SELECT * FROM account WHERE id = ? and password = ?";

    const data = [id, password];

    return parcel_db.ReadDb(query, data);
  },

  //회원 정보 수정
  async m_UserEdit(id, name, email, phone) {
    const query =
      "UPDATE parcel.account SET name = ?, email= ? , phone = ? where id = ?";

    const data = [name, email, phone, id];

    return parcel_db.ReadDb(query, data);
  },

  //회원 탈퇴
  async m_UserDel(id) {
    const query = "";

    const data = [id];

    return parcel_db.ReadDb(query, data);
  },
};
