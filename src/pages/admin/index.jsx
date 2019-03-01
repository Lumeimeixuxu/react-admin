import React,{Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
import { Layout} from 'antd';
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Home from '../home'
import Category from '../category'
import User from '../user'
import Product from '../product'
import Role from '../role';
import Pie from '../charts/pie';
import Line from '../charts/line';
import Bar from '../charts/bar';
import   MemoryUtils from '../../utils/memoryUtils'
const {Sider,Content}=Layout;
export default class Admin extends Component{

    render(){
//登录验证
      const user= MemoryUtils.user;
      if(!user || !user._id){
        return <Redirect to='./login'/>
      }
      return(

          <Layout style={{minHeight: '100vh'}}>
            <Sider>
              <LeftNav/>
            </Sider>
            <Layout>
              <Header/>
              <Content style={{margin: 18}}>
                <Switch>
                  <Route path='/home' component={Home}/>
                  <Route path='/category' component={Category}/>
                  <Route path='/user' component={User}/>
                  <Route path='/product' component={Product}/>
                  <Route path='/role' component={Role}/>
                  <Route path='/charts/pie' component={Pie}/>
                  <Route path='/charts/line' component={Line}/>
                  <Route path='/charts/bar' component={Bar}/>


                </Switch>
              </Content>
              <Footer/>
            </Layout>

          </Layout>

      )
    }
}
