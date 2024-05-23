import request from "@/utils/request";

export const createLoan = (data) => {
    return request({
        url: '/loan/create',
        method:'POST',
        data,
    })
}