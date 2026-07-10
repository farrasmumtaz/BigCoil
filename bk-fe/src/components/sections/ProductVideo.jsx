export default function ProductVideo({ videoUrl }) {
  if (!videoUrl) return null;

  const embedUrl = videoUrl.includes("youtu.be")
    ? videoUrl.replace("youtu.be/", "www.youtube.com/embed/")
    : videoUrl.replace("watch?v=", "embed/");

  return (
    <section className="bg-[#F9F6F0] py-24">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-12 text-center">
          <h2
            className="text-5xl text-[#2A2010]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Product Video
          </h2>

          <div className="mx-auto mt-6 h-px w-28 bg-[#B8935F]" />
        </div>

        <div className="overflow-hidden rounded-3xl shadow-2xl">
          <iframe
            className="aspect-video w-full"
            src={embedUrl}
            title="Product Video"
            allowFullScreen
          />
        </div>

      </div>
    </section>
  );
}