import React,{Component} from 'react';
import { Menu, Icon } from 'antd';
import {NavLink,withRouter} from 'react-router-dom';
import './index.less';
import Logo from '../../assets/imges/logo.png'
import menuList from '../../config/menuConfig'

const SubMenu=Menu.SubMenu;
const Item=Menu.Item;
class LeftNav extends Component{
  componentWillMount(){
    this.menu=this.createMenu(menuList)
  }
  createMenu=(menu)=>{
    return menu.map(item=>{
      if(item.children){
        const {pathname}=this.props.location;
        const result = item.children.find(item => item.key === pathname);
        if(result){
          this.openKey = item.key;
        }
        return <SubMenu key={item.key} title={<span><Icon type={item.icon} />{item.title}</span>}>
          {
           this.createMenu(item.children)
          }

        </SubMenu>
      }else{
        return <Item key={item.key}>
          <NavLink to={item.key}>
            <Icon type={item.icon}/>
            <span>{item.title}</span>
          </NavLink>
        </Item>
      }
    })
  }
    render(){
      const {pathname}=this.props.location;
      return(
        <div className='left-nav'>
          <div className='left-nav-header'>
            <img src={Logo} alt="logo"/>
            <h2>硅谷后台</h2>
          </div>
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={[pathname]}
            defaultOpenKeys={[this.openKey]}
          >
            {
              this.menu
            }
            {/*<SubMenu key="user" title={<span><Icon type="appstore" /><span>商品</span></span>}>*/}
              {/*<Item key="/cotegory">*/}
                {/*<NavLink to='/cotegory'>*/}
                  {/*<Icon type="bars" />*/}
                  {/*<span>品类管理</span>*/}
                {/*</NavLink>*/}
              {/*</Item>*/}
              {/*<Item key='/Home'>*/}
                {/*<NavLink to='/Home'>*/}
                  {/*<Icon type="tool" />*/}
                  {/*<span>商品管理</span>*/}
                {/*</NavLink>*/}
              {/*</Item>*/}

            {/*</SubMenu>*/}
            {/*<Item>*/}
              {/*<NavLink to='/home'>*/}
                {/*<Icon type="home" />*/}
                {/*<span>用户管理</span>*/}
              {/*</NavLink>*/}
            {/*</Item>*/}
            {/*<Item>*/}
              {/*<NavLink to='/home'>*/}
                {/*<Icon type="home" />*/}
                {/*<span>权限管理</span>*/}
              {/*</NavLink>*/}
            {/*</Item>*/}
            {/*<SubMenu key="sub1" title={<span><Icon type="appstore" /><span>图形图表</span></span>}>*/}
              {/*<Item>*/}
                {/*<NavLink to='/home'>*/}
                  {/*<Icon type="bars" />*/}
                  {/*<span>柱形图</span>*/}
                {/*</NavLink>*/}
              {/*</Item>*/}
              {/*<Item>*/}
              {/*<NavLink to='/home'>*/}
                {/*<Icon type="tool" />*/}
                {/*<span>折线图</span>*/}
              {/*</NavLink>*/}
            {/*</Item>*/}
              {/*<Item>*/}
                {/*<NavLink to='/home'>*/}
                  {/*<Icon type="tool" />*/}
                  {/*<span>饼图</span>*/}
                {/*</NavLink>*/}
              {/*</Item>*/}

            {/*</SubMenu>*/}
          </Menu>

        </div>
        )
    }
}
export default withRouter(LeftNav)