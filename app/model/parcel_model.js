const parcel_db = require("../model/db/parcel_db");

console.log("서버 생성시에 시작..");

module.exports = {
  //로그인
  async m_UserSend(name, sender, recipient, email, address) {
    const query =
      "INSERT INTO item_info set name = ?, sender = ?, recipient = ?, email = ?, address = ?";

    const data = [name, sender, recipient, email, address];

    return parcel_db.ReadDb(query, data);
  },

  //상품정보 등록
  async m_UserSend(name, sender, recipient, email, address) {
    const query =
      "INSERT INTO item_info set name = ?, sender = ?, recipient = ?, email = ?, address = ?";

    const data = [name, sender, recipient, email, address];

    return parcel_db.ReadDb(query, data);
  },

  //송장번호 등록
  async m_SetNum(number, name, sender, recipient, email, address) {
    const query =
      "UPDATE item_info set number = ? where name = ? and sender = ? and recipient = ? and email = ? and address = ?";

    const data = [parseInt(number), name, sender, recipient, email, address];

    return parcel_db.ReadDb(query, data);
  },

  //상품 정보 검색
  async m_SearchInfo(number) {
    const query = "SELECT FROM item_info where number = ?";

    const data = [parseInt(number)];

    return parcel_db.ReadDb(query, data);
  },

  //상품 위치 및 상태 검색
  async m_SearchWhere(number) {
    const query = "SELECT FROM item_where where number = ?";

    const data = [parseInt(number)];

    return parcel_db.ReadDb(query, data);
  },

  //상품 정보 수정
  async m_EditInfo(number) {
    const query =
      "UPDATE item_info SET name = ?, sender = ?, recipient = ?, email = ?, address = ? where number = ?";

    const data = [parseInt(number)];

    return parcel_db.ReadDb(query, data);
  },

  //상품 삭제
  async m_DelInfo(number) {
    const query = "DELETE FROM item_info where number = ?";

    const data = [parseInt(number)];

    return parcel_db.ReadDb(query, data);
  },
};
