import request from "@/utils/request";

export const doLogin = (user) => {
    return request.post("/user/login", {
        account: user.username,
        password: user.pass

    })

}