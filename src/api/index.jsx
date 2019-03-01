import ajax from './ajax'
import jsonp from 'jsonp'
const prefix ='';
export const reqLogin=(username, password) => ajax(prefix + '/login', {username, password}, 'POST');
export const reqAddUser=user=>(prefix+'/manage/user/add',user,'POST');
//请求天气函数
export const reqWeather=city=>{
return new Promise((resolve,reject)=>{
  jsonp(
    `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`,
    {},
    (err,data)=>{
      if(!err){
        //请求成功
        resolve(data.results[0].weather_data[0])
      }else{
        //请求失败
        reject('天气请求失败')
      }
    })
})
}
//请求分类列表函数
export const reqCategories=parentId=>ajax(prefix+'/manage/category/list',{parentId})