import loading from '../../../assets/Loading.png'
export default function Loading() {
  return (
    <div className="flex min-h-screen min-w-full flex-col items-center justify-center">
      <>
        <h1 className="mb-12 max-w-3xl text-center text-6xl font-bold">Estamos buscando por novas notícias</h1>
        <img className=" w-52 animate-spin object-contain" src={loading} />
      </>
    </div>
  )
}
