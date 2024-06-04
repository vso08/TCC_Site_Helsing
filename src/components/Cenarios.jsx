function Cenario() {
  return (
    <>
      <div className="">
        <div className="w-full flex text-center p-20 justify-center">
          <div className="">
            <h1 className="text-white text-5xl p-3 rounded-md">
              Conteúdos
            </h1>
          </div>
        </div>
        <div className="rounded-sm mx-auto bg-zinc-800">
          <div className="w-full p-10">
            <div className="w-full border h-96 rounded-md"></div>
          </div>
          <div className="flex justify-center pb-5">
            <ul className="gap-3 grid grid-cols-4">
              <li><button className="bg-white p-2 rounded-xl"></button></li>
              <li><button className="bg-white p-2 rounded-xl"></button></li>
              <li><button className="bg-white p-2 rounded-xl"></button></li>
              <li><button className="bg-white p-2 rounded-xl"></button></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cenario;
