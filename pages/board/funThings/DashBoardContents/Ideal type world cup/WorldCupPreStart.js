import React, { useRef, useEffect, useState } from 'react';
import CustomSelect from '../../../../layouts/CustomSelect';

export default function WorldCupPreStart({ onChangeGameState, onChangeGameTitle }){

    const dataList =[
        {label: 'label 1', value: 'value 1'},
        {label: 'label 2', value: 'value 2'},
    ]
    const [selectedTitle,setSelectedTitle] = useState();

    const handleSelect = (state) => {
        setSelectedTitle(state);
        console.log("[WorldCupPreState.js] handleSelect() : "+state)
        onChangeGameTitle(state);
    }

    useEffect(()=>{
        
    },[selectedTitle]);

    return (
        <div className='flex items-center justify-evenly min-h-4/5'
                style={{minHeight:'30em', height:'10vh', backgroundImage:`url('/games/worldCup/idealWorldCupBG.png')`,
                backgroundSize: 'contain', backgroundPosition: 'center',backgroundRepeat:'no-repeat'}}
                >
            <div>
                <div className='idealTitle'>
                    Ideal WordlCup Games!!!
                </div>
                <div className='flex justify-center mt-5'>
                    <div style={{width:'50%'}}>
                        <CustomSelect dataList={dataList} handleSelect={handleSelect}/>
                    </div>
                    <button className='border-2 pr-3 pl-3 pu-1 pb-1 bg-white' onClick={() => onChangeGameState('inGame')}>
                        Start
                    </button>
                </div>
                <div className='flex justify-center mt-3'>
                    <button className='border-2 pr-3 pl-3 pu-1 pb-1 bg-white mt-5' onClick={() => onChangeGameState('inputWorldCup')}>
                        Add WorldCup
                    </button>
                </div>
                
            </div>
        </div>
    )
}