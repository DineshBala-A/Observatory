import {useState, useEffect} from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import CloseIcon from '@mui/icons-material/Close';

const WindowFrame = () => {

    const [isMax, setIsMax] = useState(false);

    const handleMinimize = ():void=> {
        console.log('minimize');
        window.electron?.minimizeWindow();
    }
    const handleMaximize=():void=>{
        console.log('maximize');
        window.electron?.maximizeWindow();
        setIsMax((prev: true | false)=>!prev);
    }
    const handleClose=():void=>{
        console.log('Close');
        window.electron?.closeWindow();
    }
    const isMaximized=():void=>{
        setIsMax(window.electron?.isMaximized()||false);
    }

    useEffect(()=>{
        isMaximized();
    },[])
    return (
        <div className="flex flex-row justify-between items-center p-4 bg-zinc-900 text-white [-webkit-app-region:drag]">
            <h5 className="text-lg">DB Observatory</h5>
            
            <div className="flex space-x-2 [-webkit-app-region:no-drag]">
                <div onClick={handleMinimize} className="select-none flex justify-center items-center w-[24px] h-[24px] bg-zinc-600 hover:bg-zinc-500 active:bg-zinc-400 rounded-md cursor-pointer "><RemoveIcon className="text-zinc-300 p-[5px]"/></div>
                <div onClick={handleMaximize} className="select-none flex justify-center items-center w-[24px] h-[24px] bg-zinc-600 hover:bg-zinc-500 active:bg-zinc-400 rounded-md cursor-pointer ">
                    {
                        isMax?
                            <FilterNoneIcon className="text-zinc-300 p-[5px]"/>
                            
                        :
                            <CropSquareIcon className="text-zinc-300 p-[5px]"/>
                    }
                </div>
                <div onClick={handleClose} className="select-none flex justify-center items-center w-[24px] h-[24px] bg-zinc-600 hover:bg-zinc-500 active:bg-zinc-400 rounded-md cursor-pointer text-center"><CloseIcon className="text-zinc-300 p-[5px]"/></div> 
            </div>
        </div>

    )
}

export default WindowFrame;