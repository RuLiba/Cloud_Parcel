const parcel_db = require("../model/db/parcel_db");

console.log("서버 생성시에 시작..");

module.exports = {
    async m_UserSend(name, sender, recipient, email, address) {
        const query =
            "INSERT INTO user_item set name = ?, sender = ?, recipient = ?, email = ?, address = ?";

        const data = [name, sender, recipient, email, address];

        return parcel_db.ReadDb(query, data);
    },

    async m_SetNum(number, name, sender, recipient, email, address) {
        const query =
            "UPDATE user_item set number = ? where name = ? and sender = ? and recipient = ? and email = ? and address = ?";

        const data = [parseInt(number), name, sender, recipient, email, address];

        return parcel_db.ReadDb(query, data);
        
    },

    async m_DelInfo(number) {
        const query =
            "DELETE FROM user_item where number = ?";

        const data = [parseInt(number)];

        return parcel_db.ReadDb(query, data);
        
    },


};
