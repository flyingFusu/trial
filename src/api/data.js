import axios from '@/libs/api.request'


const transformRequest=(data)=>{
  let params = ''
  for (var index in data) {
    params += index + '=' + data[index] + '&'
  }
  return params.substr(0,params.length-1)
}
export const login=()=>{
   let data = {"succ":1,"OpenId":"oNNbjjtf3js9a66a_Ev2thz7AHIk","tooken":1}   
   return Promise.resolve({data:data}) 
}

export const getConfig = () => { 
  return axios.request({
     url:"/Handler/JsSdk_Config.ashx",
     data:"CMD=GetJsConfig&currenturl=" + escape(location.href) + "&cache_remove=0",
    method: 'post'
  })
}
export const getGuestUserData = (Code,RecordId) => {
  var Command="getGuestUserData_New";  
  return axios.request({
    url:"/banli/server/acthongbao.ashx",
     params:{
      Command,
      Code,
      RecordId
     },
    method: 'get'
  })
}
export const getLingQuUserList = (RecordId) => {
  var Command="getLingQuUserList";  
  
  return axios.request({
    url:"/banli/server/acthongbao.ashx",
    params:{
      Command,
      RecordId
     },
    method: 'get'
  })
}

export const postKaiHongBao = (OpenId,RecordId) => {
  const data=  {
      "Command":"postKaiHongBao",
      "OpenId":OpenId,      
      "RecordId":RecordId
     };
  return axios.request({
    url:"/banli/server/acthongbao.ashx",
    data: transformRequest(data) ,
    method: 'post'
  })
}

export const postLingQuKaQuan = (OpenId,RecordId) => {
  const data=  {
      "Command":"postLingQuKaQuan",
      "OpenId":OpenId,      
      "RecordId":RecordId
     };
  return axios.request({
    url:"/banli/server/acthongbao.ashx",
    data: transformRequest(data) ,
    method: 'post'
  })
}

export const addClick = (OpenId,Tag) => {
  const data=  {
      "Command":"postAddShuWeiDu",
      "OpenId":OpenId,      
      "Tag":Tag
     };
  return axios.request({
    url:"/banli/server/acthongbao.ashx",
    data: transformRequest(data) ,
    method: 'post'
  })
}



