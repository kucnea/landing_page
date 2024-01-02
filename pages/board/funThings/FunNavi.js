import Link from "next/link"

export default function FunNavi({ onChangeCompIdx }){
    return(
        <aside className="w-64 bg-gray-800 text-white p-6">
            <h1 className="text-2xl mb-4" onClick={()=>onChangeCompIdx(0)}>Minho Board</h1>
            <nav>
                <div className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700" href="#"
                        onClick={()=>onChangeCompIdx(1)}>
                    Join Me
                </div>
                <div className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700" href="#"
                        onClick={()=>onChangeCompIdx(2)}>
                    Game
                </div>
                <div className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700" href="#"
                        onClick={()=>onChangeCompIdx(3)}>
                    ideal type world cup
                </div>
                <div className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700" href="#"
                        onClick={()=>onChangeCompIdx(4)}>
                    Chat
                </div>
                <div className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700" href="#"
                        onClick={()=>onChangeCompIdx(5)}>
                    Join Me
                </div>
                {/* <div className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700" href="#"
                        onClick={()=>onChangeCompIdx(0)}>
                    Info
                </div> */}
            </nav>
        </aside>
    )
}