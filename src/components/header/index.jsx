import React,{Component} from 'react';
import './index.less'
import { Row, Col ,Modal,message} from 'antd';
import MemoryUtils from '../../utils/memoryUtils'
import {removeItem} from '../../utils/stroageUtils'
import {withRouter} from 'react-router-dom'
import menuList from '../../config/menuConfig'
import dayjs from 'dayjs'
import {reqWeather} from '../../api'
class Header extends Component {
  state={
    sysTime:dayjs().format('YYYY-MM-DD HH:mm:ss'),
    dayPictureUrl: 'http://api.map.baidu.com/images/weather/day/qing.png',
    weather: '晴'
  }
  componentDidMount (){
   this.updateTime();
   this.getWeather();
  }
  //更新时间
  updateTime=()=>{
    this.IntervalId=setInterval(()=>{
      this.setState({
        sysTime:dayjs().format('YYYY-MM-DD HH:mm:ss')
      })
    },1000)
  }

  //获取天气信息
  getWeather=()=> {
    reqWeather('北京')
      .then(res => {
          this.setState({
            dayPictureUrl:res.dayPictureUrl,
            weather:res.weather
          })
      })
      .catch(err => {
        message.error(err);
      })
  }

  componentWillUnmount(){
    clearInterval(this.IntervalId)
  }
  logOut = () => {
    Modal.confirm({
      title: '您确认要退出登录吗?',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        //点击确认时触发回调函数
        //清除用户信息（localStorage 内存）
        removeItem();
        MemoryUtils.user = {};
        //返回到登录页面
        this.props.history.replace('/login');
      },
    });
  }
  getTitle=menu=>{
    const {pathname}=this.props.location;
    for (let i=0;i<menu.length;i++){
      let item=menu[i];
      if (item.children){
        const title=this.getTitle(item.children)
          if(title){
          return title;
          }
      }else{
        if(item.key===pathname)
          return item.title;
      }
    }
  }

  render()
{
  const {username} = MemoryUtils.user;
  //获取标题
  const title=this.getTitle(menuList);
  const {sysTime,dayPictureUrl,weather}=this.state;
  return (
    <div className='header'>
      <Row className='header-top'>
        <span>欢迎，{username}</span>
        <a href="javascript:void(0)" onClick={this.logOut}>退出</a>
      </Row>
      <Row className='header-bottom'>
        <Col span={6} className='header-bottom-left'>{title}</Col>
        <Col span={18} className='header-bottom-right'>
          <span>{sysTime}</span>
          <img src={dayPictureUrl} alt="天气"/>
          <span>{weather}</span>
          </Col>

      </Row>
    </div>
    )
  }
}
export default withRouter (Header)