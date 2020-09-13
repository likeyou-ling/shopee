import {request} from './request.js'

export function homeSend () {
    return request({
        url: '/home/multidata'
    })
}