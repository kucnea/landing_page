import React, { useRef, useEffect, useState } from 'react';
import { LeftSquareFilled, PlusOutlined, PlusSquareFilled, RightSquareFilled } from '@ant-design/icons';
import {Button,Cascader,Checkbox,ColorPicker,DatePicker,Form,Input,InputNumber,Radio,Select,Slider,Switch,TreeSelect,Upload,} from 'antd';
import WorldCupInputPart from './WorldCupInputPart';

export default function WorldCupPreStart({ onChangeGameState }){

    const [componentDisabled, setComponentDisabled] = useState(false);
    const normFile = (e) => {
        if (Array.isArray(e)) {
          return e;
        }
        return e?.fileList;
    };


    useEffect(()=>{
        
    },[]);

    return (
        <div className='flex items-center justify-evenly min-h-4/5'
                style={{minHeight:'30em', height:'10vh',
                backgroundImage:`url('/games/worldCup/inputWorldCup.png')`,
                backgroundSize: 'contain', backgroundPosition: 'center',backgroundRepeat:'no-repeat',
                }}
                >
            <div>
                <div style={{textAlign:'center'}}>
                    <a style={{fontSize:'2.4em', fontWeight:'700',color:'#FFC0CB',textShadow: '2px 2px 4px #DB7093'}}>Input Your WorldCup</a>
                </div>
                <div className='flex justify-center mt-5'>
                <LeftSquareFilled style={{marginRight:'3%',fontSize:'200%'}} />
                <Form
                    labelCol={{
                    span: 4,
                    }}
                    wrapperCol={{
                    span: 100,
                    }}
                    layout="horizontal"
                    disabled={componentDisabled}
                    style={{
                    maxWidth: 600,
                    }}
                >
                    <div>
                        <a>
                            월드컵 이름
                            <Form.Item>
                                <Input/>
                            </Form.Item>
                        </a>
                    </div>
                    {/* <Form.Item label=''
                                valuePropName="fileList"
                                getValueFromEvent={normFile}>
                        <Upload action="/upload.do" 
                                listType="picture-card"
                                showUploadList={{
                                    showPreviewIcon: false,
                                    showRemoveIcon: true,
                                }}>
                            <div>
                            <PlusOutlined />
                            <div
                                style={{
                                marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                            </div>
                        </Upload>
                    </Form.Item>
                    <Form.Item label='라벨 : '>
                        <Input/>
                        <Input/>
                        <PlusSquareFilled />
                    </Form.Item> */}
                    
                    {/* <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}> */}
                    <WorldCupInputPart/>
                </Form>
                    <RightSquareFilled style={{marginLeft:'3%',fontSize:'200%'}}/>  
                </div>
                
            </div>
        </div>
    )
}