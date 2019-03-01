/**
 * Created by Administrator on 2019/2/28 0028.
 */
import store from 'store';
const USER_KEY='user'
export const setItem=value=>{
  if(value && typeof value!=="function"){
    store.set(USER_KEY,(value))
  }else {
    console.log('保存数据失败')
  }
  //读取

}
export const getItem=()=>{
  const value=store.get(USER_KEY)
  return value || '';

}
//删除
export const removeItem=()=>{
  store.remove(USER_KEY);
}