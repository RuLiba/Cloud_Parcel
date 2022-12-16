const router = require("express").Router();
const parcel_controller = require("../controller/parcel_controller");


/** 송장 번호 등록
 * @swagger
 *
 * /api/dev_parcel:
 *  patch:
 *    summary: "송장 번호 등록"
 *    description: "송장번호 등록."
 *    tags: [dev_parcel]
 *    requestBody:
 *      description: 송장 등록 페이지.
 *      required: false
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            properties:
 *              number:
 *                type: int
 *                description: "송장번호"
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
 *
 */

router.patch("/", parcel_controller.c_SetNum);

/**  배송 정보 삭제
 * @swagger
 *
 * /api/dev_parcel:
 *  post:
 *    summary: "배송 정보 삭제"
 *    description: "배송 정보 삭제."
 *    tags: [dev_parcel]
 *    requestBody:
 *      description: 배송 정보 삭제.
 *      required: false
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            properties:
 *              number:
 *                type: int
 *                description: "송장번호"
 *              
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
 *
 */

router.post("/", parcel_controller.c_DelInfo);

module.exports = router;
