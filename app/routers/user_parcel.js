const router = require("express").Router();
const parcel_controller = require("../controller/parcel_controller");


/** 택배 신청
 * @swagger
 *
 * /api/user_parcel:
 *  post:
 *    summary: "택배 등록"
 *    description: "POST 방식으로 택배정보를 등록한다."
 *    tags: [user_parcel]
 *    requestBody:
 *      description: 택배 신청 페이지.
 *      required: false
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                description: "택배 상품명"
 *              sender:
 *                type: string
 *                description: "보낸이"
 *              recipient:
 *                  type: string
 *                  description : "받는이"
 *              email:
 *                  type: string
 *                  description : "이메일"
 *              address:
 *                  type: string
 *                  description : "주소"
 *              
 *    responses:
 *      "200":
 *        description: 등록 성공시 sueccess = true 실패시 sueccess = false
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                sueccess:
 *                  type: boolean
 *                err:
 *                  type: string
 *
 */

router.post("/", parcel_controller.c_UserSend);






module.exports = router;

