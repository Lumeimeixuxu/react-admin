import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Form, Icon, Input, Button,message} from 'antd';
const Item=Form.Item;
class LoginForm extends Component{
  static propTypes={
    login:PropTypes.func.isRequired
  }
  checkPassword=(rules,value,callback)=>{
    if(!value){
      callback('请输入密码')
    }else if(value.length<=4){
      callback('密码长度不得小于4位')
    }else if(value.length>=11){
      callback('密码长度不得大于11位')
    }else if(!(/^[a-zA-Z0-9_]+$/.test(value))){
      callback('用户名必须为英文大小写字母，数字和下划线')
    }else {
    callback();
    }
  }
  handleSubmit=e=>{
    e.preventDefault();
    const {validateFields,resetFields}=this.props.form;
    validateFields(async(error,values)=>{
      console.log(error, values);
      if(!error){
        console.log('收集的表单数据：', values);
        const {username,password}=values;
       this.props.login(username,password);

      }else{
        //校验失败
        //重置密码
        resetFields(['password']);
        const errMsg = Object.values(error).reduce((prev, curr) => prev + curr.errors[0].message + ' ', '')
        message.error(errMsg);
      }
    })
  }
    render(){
      const {getFieldDecorator}=this.props.form;
      return(
        <Form className='login-form-container' onSubmit={this.handleSubmit}>
          <Item>
            {
              getFieldDecorator(
                'username',
                {
                  rules: [
                    { required: true, message: '请输入用户名!' },
                    {min:4,message:'用户名必须大于4位'},
                    {max:11,message:'用户名不能超过11位'},
                    {pattern: /^[a-zA-Z0-9_]+$/,message:'用户名必须为英文大小写字母，数字和下划线'}
                    ],
                }
              )( <Input placeholder='用户名'prefix={<Icon type="user" />} />)
            }

          </Item>
          <Item>
            {
              getFieldDecorator(
                'password',
                {
                  rules:[
                    {validator:this.checkPassword}
                  ]
                }
              )(
                <Input  placeholder='密码'type='password' prefix={<Icon type="lock" />} />
              )
            }

          </Item>
          <Item>
            <Button type='primary'htmlType="submit" className='login-form-button'>登录</Button>
          </Item>
        </Form>
      )
    }
}
const WrappedLoginForm=Form.create()(LoginForm);
export default WrappedLoginForm;