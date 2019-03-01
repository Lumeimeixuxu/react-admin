import React,{Component} from 'react';
import { Card ,Button,Icon ,Table ,message} from 'antd';
import {reqCategories} from '../../api'
export default class Category extends Component{
  state={
    categories:[]
  }
  getCategories=async parentId=>{
    //发送请求
    const result=await reqCategories(parentId)
    console.log(result);
    if(result.status===0){
      this.setState({
        categories:result.data
      })
  }else{
      message.error('获取分类数据失败')
    }


  }

  componentDidMount(){
  this.getCategories('0')
  }
    render(){
      const columns = [{
        title: '品类名称',
        dataIndex: 'name',
        // render: text => <a href="javascript:;">{text}</a>,
      }, {
        title: '操作',
        className: 'column-money',
        dataIndex: 'money',
        width:400,
       render:xxx=>{
         return <div>
           <a href="javascript:void(0)">修改名称</a> &nbsp;&nbsp;&nbsp;
           <a href="javascript:void(0)">查看其子品类</a>
         </div>
       }
      }];


      return(
        <Card
          title="一级分类列表"
          extra={<Button type='primary'><Icon type="plus" />添加品类</Button>}
        >
          <Table
            columns={columns}
            dataSource={this.state.categories}
            bordered
            pagination={{
              pageSize:3,
              showSizeChanger:true,
              pageSizeOptions:['3','6','9','12'],
              showQuickJumper:true
            }}
            rowKey='_id'
          />,
        </Card>
      )
    }B
}