const router = require("express").Router();
const user_controller = require("../controller/user_controller");

/** 회원가입
 * @swagger
 *
 * /api/user/add:
 *  post:
 *    summary: "회원가입"
 *    description: "POST 방식으로 회원정보를 등록한다."
 *    tags: [user]
 *    requestBody:
 *      description: 회원가입.
 *      required: false
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *                description: "아이디"
 *              password:
 *                type: string
 *                description: "패스워드"
 *              name:
 *                type: string
 *                description: "이름"
 *              email:
 *                type: string
 *                description: "이메일"
 *              phone:
 *                type: string
 *                description: "핸드폰"
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
 *                err:
 *                  type: string
 *
 */

router.post("/add", user_controller.c_UserJoin);

/** 로그인
 * @swagger
 *
 * /api/user/login:
 *  post:
 *    summary: "회원 로그인"
 *    description: "POST 방식으로 로그인한다."
 *    tags: [user]
 *    requestBody:
 *      description: 회원조회.
 *      required: false
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *                description: "아이디"
 *              password:
 *                type: string
 *                description: "패스워드"
 *
 *
 *    responses:
 *      "200":
 *        description: 등록 성공시 sueccess = true 실패시 sueccess = false 및 메세지
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                sueccess:
 *                  type: boolean
 *                err:
 *                  type: string
 *                message:
 *                  type: string
 */

router.post("/login", user_controller.c_UserLogin);

/** 로그아웃
 * @swagger
 *
 * /api/user/logout:
 *  get:
 *    summary: "로그아웃"
 *    description: "로그아웃."
 *    tags: [user]
 *    responses:
 *      "200":
 *        description: 로그아웃 상황 확인.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                sueccess:
 *                  type: boolean
 *                message:
 *                  type: string
 */

router.get("/logout", user_controller.c_UserLogout);

/** 회원정보조회
 * @swagger
 *
 * /api/user/search:
 *  post:
 *    summary: "회원정보조회"
 *    description: "로그인 후 진행"
 *    tags: [user]
 *    requestBody:
 *      description: 로그인된 계정의 비밀번호 입력.
 *      required: false
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            properties:
 *              password:
 *                type: string
 *                description: "패스워드"
 *
 *
 *    responses:
 *      "200":
 *        description: 등록 성공시 sueccess = true 실패시 sueccess = false 및 회원 정보
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                sueccess:
 *                  type: boolean
 *                err:
 *                  type: string
 *                message:
 *                  type: string
 *                id:
 *                  type: string
 *                password:
 *                  type: string
 *                name:
 *                  type: string
 *                email:
 *                  type: string
 *                phone:
 *                  type: string
 */

router.post("/search", user_controller.c_UserSearch);

/** 회원정보조회
 * @swagger
 *
 * /api/user/edit:
 *  post:
 *    summary: "회원정보수정"
 *    description: "로그인 후 진행"
 *    tags: [user]
 *    requestBody:
 *      description: 로그인된 계정의 비밀번호와 수정값을 입력.
 *      required: false
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            properties:
 *              password:
 *                type: string
 *                description: "패스워드"
 *              name:
 *                type: string
 *              email:
 *                type: string
 *              phone:
 *                type: string
 *
 *
 *    responses:
 *      "200":
 *        description: 등록 성공시 sueccess = true 실패시 sueccess = false 및 회원 정보
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                sueccess:
 *                  type: boolean
 *                err:
 *                  type: string
 *                message:
 *                  type: string
 */

router.post("/edit", user_controller.c_UserEdit);

/** 회원탈퇴
 * @swagger
 *
 * /api/user/login:
 *  post:
 *    summary: "회원 탈퇴"
 *    description: "회원 정보를 삭제한다."
 *    tags: [user]
 *    requestBody:
 *      description: 회원탈퇴.
 *      required: false
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *                description: "아이디"
 *              password:
 *                type: string
 *                description: "패스워드"
 *
 *
 *    responses:
 *      "200":
 *        description: 등록 성공시 sueccess = true 실패시 sueccess = false 및 메세지
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                sueccess:
 *                  type: boolean
 *                err:
 *                  type: string
 *                message:
 *                  type: string
 */

router.post("/quit", user_controller.c_UserDel);
module.exports = router;
