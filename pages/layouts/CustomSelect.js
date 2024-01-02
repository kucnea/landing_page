import React, { useRef, useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';

export default function CustomSelect({dataList, handleSelect}){
// const CustomSelect = ({dataList, handleSelect}) => {    

    const [selectedOption, setSelectedOption] = useState('');

    const filterOptions = (inputValue) => {
        return dataList.filter((i) =>
          i.label.toLowerCase().includes(inputValue.toLowerCase())
        );
    };
      
    const promiseOptions = (inputValue) =>
        new Promise((resolve) => {
            setTimeout(() => {
            resolve(filterOptions(inputValue));
            }, 1000);
        });

    // const selectOption = (listValue) => {
        // console.log("[CustomSelect.js] selectOption : start");
        // console.log("[CustomSelect.js] listValue : "+listValue);
        // console.log("[CustomSelect.js] listValue.length : "+listValue.length);
        // console.log("[CustomSelect.js] listValue.length : "+listValue[0].length.value);
    //     if (listValue && listValue.length > 0) {
    //         console.log('[CustomSelect.js] selectedOption : ' + listValue[0].value);
    //         setSelectedOption((prevSelectedOption) => listValue[0].value);
    //         handleSelect(listValue[0].value);
    //     }
    // }
        
    const selectOption = (listValue) => {

        console.log('[CustomSelect.js] selectedOption : '+listValue.value);

        // setSelectedOption(listValue.value);
        setSelectedOption((prevSelectedOption) => listValue.value);
        handleSelect(listValue.value);

    }

    useEffect(()=>{
        console.log('Selected Option Updated:', selectedOption);
    },[selectedOption]);

    return (
        <AsyncSelect 
            cacheOptions
            defaultOptions
            loadOptions={promiseOptions}
            onChange={selectOption}
            >
            {selectedOption && (
                <p>Selected Option: {selectedOption}</p>
            )}
        </AsyncSelect>
    );

// }
};

// CustomSelect.displayName = 'CustomSelect';

// export default CustomSelect;