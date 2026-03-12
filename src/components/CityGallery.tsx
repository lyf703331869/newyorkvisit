import Image from "next/image";
import { galleryHighlights } from "@/content/gallery";

export const CityGallery = () => (
  <div className="grid gap-4 lg:grid-cols-3">
    {galleryHighlights.map((item, idx) => (
      <figure key={item.title} className="overflow-hidden rounded-3xl shadow-xl">
        <div className="relative h-64 w-full">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition duration-500 hover:scale-105"
            sizes="(min-width: 1024px) 33vw, 100vw"
            priority={idx === 0}
          />
        </div>
        <figcaption className="bg-white px-5 py-4">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">CITY VIEW</p>
          <h3 className="mt-2 text-lg font-semibold text-slate-900">{item.title}</h3>
          <p className="text-sm text-slate-600">{item.caption}</p>
        </figcaption>
      </figure>
    ))}
  </div>
);
