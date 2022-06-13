import {service,baseURL} from './index'

export function ShowCollectGoods() {
    return service({
        url:baseURL + '/goodsCollect',
        method: 'GET'
    })
}