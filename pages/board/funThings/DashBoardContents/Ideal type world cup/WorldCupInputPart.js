import React, { useRef, useEffect, useState } from 'react';
import { LeftSquareFilled, PlusOutlined, PlusSquareFilled, RightSquareFilled } from '@ant-design/icons';
import {Input,InputNumber,Radio,Select,Slider,Switch,TreeSelect,Upload,} from 'antd';

export default function WorldCupInputPart({ onChangeGameState }){

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
        <div>
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
            <table>
                <tr>
                    <th>
                        항목명
                    </th>
                    <th>
                        항목 내용
                    </th>
                </tr>
                <tr>
                    <th>
                        <Input label='라벨'/>
                    </th>
                    <th>
                        <Input label='라벨'/>
                    </th>
                </tr>
            </table>
            
            <PlusSquareFilled style={{fontSize:'200%'}} />
        </div>
    )
}