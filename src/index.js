/**
 * Created by Administrator on 2019/2/26 0026.
 */
import React from 'react';
import {render} from 'react-dom';

import App from './App'
import {getItem} from './utils/stroageUtils'
import  MemoryUtils from './utils/memoryUtils'
const user=getItem();
if(user && user._id){
  MemoryUtils.user=user;
}
render(<App/>,document.getElementById('root'));