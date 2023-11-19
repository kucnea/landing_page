import Link from "next/link"

export default function FunNavi(){
    return(
        <aside className="w-64 bg-gray-800 text-white p-6">
            <h1 className="text-2xl mb-4">Minho Board</h1>
            <nav>
                <Link className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700" href="#">
                    Game
                </Link>
                <Link className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700" href="#">
                    Chat
                </Link>
                <Link className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700" href="#">
                    Info
                </Link>
            </nav>
        </aside>
    )
}