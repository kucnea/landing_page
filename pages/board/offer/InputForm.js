import React, {useEffect, useState} from 'react'

export default function InputForm() {

    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    useEffect(()=>{

        const handleInputChange = (event) => {
            setInputValue(event.target.value);
        };
    
        return () => clearInterval(handleInputChange);
      
    
    },);

    return (
    <aside className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono">
        <div className="flex justify-between items-center">
            <div className="flex space-x-2 text-red-500">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
            <p className="text-sm">bash</p>
        </div>
        <div className="mt-4 text-left">
            <p className="text-green-400">$ minho install next</p>
            <p className="text-white">+ minho@23.11.13</p>
            <p className="text-white">added 1 package, and audited 2 packages in 3s</p>
            <div className="inline-flex items-center w-full">
                <p className="text-green-400 mr-2">$</p>
                <input type="text" 
                        className="text-green-400 w-full bg-transparent border-none focus:outline-none"
                        onChange={handleInputChange}
                        value={inputValue} />
            </div>
        </div>
    </aside>
    )
  }
  