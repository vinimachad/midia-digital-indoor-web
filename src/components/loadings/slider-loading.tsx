import loading from '../../../public/assets/Loading.png'
export default function Loading() {
  return (
    <div className="min-w-full min-h-screen flex items-center justify-center flex-col">
      <>
        <h1 className="text-6xl font-bold text-center max-w-3xl mb-12">Estamos buscando por novas notícias</h1>
        <img className=" w-52 object-contain animate-spin" src={loading} />
      </>
    </div>
  )
}
