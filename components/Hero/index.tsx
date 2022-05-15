import Divider from "@/components/Divider"

export default function Hero(){
  return (
    <div className="flex flex-col bg-primary w-screen h-[80vh] place-items-center bg-[url('/images/bg2.jpg')] lg:bg-[url('/images/bg.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="flex flex-col align-center justify-center mt-12">
        <h6 className="text-sm md:text-base tracking-widest text-white mb-2 text-center">THE WEDDING OF</h6>
        <h1 className="text-4xl md:text-7xl lg:text-8xl text-white mb-2.5 font-amita text-center">Faiz &amp; Rara</h1>
        <p className="text-xs md:text-base text-white mb-3 text-center">Sabtu, 20 Agustus 2022</p>
      </div>
      <Divider className="mt-auto" />
    </div>
  )
}
