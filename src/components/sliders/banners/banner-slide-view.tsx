export default function BannerSlideView(props: { src: string }) {
  return (
    <div className="min-w-full min-h-screen flex items-center justify-center">
      <img className="max-h-screen object-contain" src={props.src} />
    </div>
  )
}
