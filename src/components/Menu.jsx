import HelsingLogo from '../assets/logo.png';
import '../App.css'

function Menu() {
    return (
        <main className="">
            <div className="container mx-auto px-20 pt-52">
                <div className="banner grid lg:grid-cols-2">
                    <div className="py-24 md:py-56 flex text-center rounded-sm bg-gradient-to-t md:bg-gradient-to-l from-zinc-900 to-transparent">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl ps-2 sm:ps-2 font-thin me-5 text-white">Se desafie contra inimigos e mundos poderosos! </h1>
                    </div>
                    <div className="flex justify-center text-center items-center bg-gradient-to-t lg:bg-gradient-to-l from-transparent to-zinc-900">
                        <div className="Download">
                            <img src={HelsingLogo} className='h-28 md:h-36 pb-9'></img>
                            <button className="border px-10 md:px-20 py-3 md:py-5 rounded-2xl md:rounded-2xl text-white bg-gradient-to-r from-yellow-300 to-red-600 outline outline-black outline-1 border-black">
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Menu