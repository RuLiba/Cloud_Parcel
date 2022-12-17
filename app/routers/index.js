const router = require("express").Router();
const parcel = require("./parcel");
const user = require("./user");

/**
 * @swagger
 * tags:
 *   name: parcel
 *   description: 택배 관리
 */

/**
 * @swagger
 * tags:
 *   name: user
 *   description: 유저의 정보 관리
 */

router.use("/parcel", parcel);
router.use("/user", user);

module.exports = router;
