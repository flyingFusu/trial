import axios from '@/libs/api.request'
import { getSK } from '@/libs/common'

const transformRequest = (data) => {
  let params = ''
  for (var index in data) {
    params += index + '=' + data[index] + '&'
  }
  return params.substr(0, params.length - 1)
}
export const login = () => {
  const data = { succ: 1, OpenId: 'oNNbjjtf3js9a66a_Ev2thz7AHIk', tooken: 1 }
  return Promise.resolve({ data: data })
}

export const getConfig = () => {
  return axios.request({
    url: '/Handler/JsSdk_Config.ashx',
    data: 'CMD=GetJsConfig&currenturl=' + escape(location.href) + '&cache_remove=0',
    method: 'post'
  })
}
export const InitAct = (sk, share_code) => {
  var Command = 'InitAct'
  return axios.request({
    url: '/TYJ_Site/Handler/tiyanjin.ashx',
    params: {
      Command,
      sk,
      share_code
    },
    method: 'get'
  })
}
export const Join = () => {
  var Command = 'Join'
  var sk = getSK()
  return axios.request({
    url: '/banli/server/acthongbao.ashx',
    params: {
      Command,
      sk
    },
    method: 'get'
  })
}

export const InitTrade = (fund_code) => {
  var CMD = 'InitTrade'
  var sk = getSK()
  return axios.request({
    url: '/banli/server/acthongbao.ashx',
    params: {
      CMD,
      sk,
      fund_code
    },
    method: 'get'
  })
}

export const Redeem = (fund_code, fund_share) => {
  const data = {
    CMD: 'Sell',
    sk: getSK(),
    fund_code: fund_code,
    fund_share: fund_share
  }
  return axios.request({
    url: '/banli/server/acthongbao.ashx',
    data: transformRequest(data),
    method: 'post'
  })
}

export const postLingQuKaQuan = (OpenId, RecordId) => {
  const data = {
    Command: 'postLingQuKaQuan',
    OpenId: OpenId,
    RecordId: RecordId
  }
  return axios.request({
    url: '/banli/server/acthongbao.ashx',
    data: transformRequest(data),
    method: 'post'
  })
}

export const addClick = (OpenId, Tag) => {
  const data = {
    Command: 'postAddShuWeiDu',
    OpenId: OpenId,
    Tag: Tag
  }
  return axios.request({
    url: '/banli/server/acthongbao.ashx',
    data: transformRequest(data),
    method: 'post'
  })
}
