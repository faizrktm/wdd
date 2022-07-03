import Divider from "@/components/Divider"

export default function Hero(){
  return (
    <div className="flex flex-col bg-primary w-screen h-[80vh] place-items-center bg-[url('/images/bg2-brown.jpg')] lg:bg-[url('/images/bg.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="flex flex-col align-center justify-center mt-16">
        <h6 className="text-sm md:text-base tracking-widest text-white mb-2 text-center">PERNIKAHAN</h6>
        <div className="flex items-center justify-center pt-2.5 pb-2.5">
          <h1 className="text-4xl md:text-7xl lg:text-8xl text-white font-lejour">Rara</h1>
          <h1 className="text-4xl md:text-7xl lg:text-8xl text-white font-cursive font-light px-1">&amp;</h1>
          <h1 className="text-4xl md:text-7xl lg:text-8xl text-white font-lejour">Faiz</h1>
        </div>
        <p className="text-xs md:text-base text-white mb-3 text-center">Sabtu, 20 Agustus 2022</p>
      </div>
      <Divider className="mt-auto" />
    </div>
  )
}
