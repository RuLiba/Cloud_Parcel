const router = require("express").Router();
const user_parcel = require("./user_parcel");
const dev_parcel = require("./dev_parcel");

/**
 * @swagger
 * tags:
 *   name: user_parcel
 *   description: 유저가 사용하는 택배 관리
 */

/**
 * @swagger
 * tags:
 *   name: dev_parcel
 *   description: 개발자가 사용하는 유저의 정보 관리
 */

router.use("/user_parcel", user_parcel);
router.use("/dev_parcel", dev_parcel)

module.exports = router;
