
const Home = () => {
    return (
      <div className="bg-blue-400 flex justify-center">
      <div className='container grid grid-cols-2 text-white'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>
                  FarmaExpress
              </h2>
              <p className='text-xl'>
              Cuidando da sua saúde com rapidez e confiança
              </p>
  
              <div className="flex justify-around gap-4">
                  <div className="flex justify-around gap-4">
                      
                  </div>
              </div>
          </div>
  
          <div className="flex justify-center ">
              <img
                  src="https://i.postimg.cc/ZRkBn7qt/OIP-removebg-preview.png"
                  alt="Imagem Página Home"
                  className='w-2/3'
              />
          </div>
      </div>
  </div>
  
    )
  }
  
  export default Home