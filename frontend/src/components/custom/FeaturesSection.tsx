import { StrapiImage } from "@/components/custom/StrapiImage";

interface Features {
  id: number;
  heading: string;
  subHeading: string;
}

interface Image {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string;
}

interface FeaturesSectionProps {
  id: number;
  documentId: string;
  __component: string;
  title: string;
  description: string;
  feature: Features[];
  bgFeatureimage: Image;
}

export function FeatureSection({ data }: { readonly data: FeaturesSectionProps }) {
  const { title, description, bgFeatureimage, feature } = data;

  return (
    <header className="relative bg-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0">
        <StrapiImage
          className="w-full h-full object-cover"
          src={bgFeatureimage.url}
          alt={bgFeatureimage.alternativeText ?? "no alternative text"}
          width={1900}
          height={1900}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        

        {/* Section Subtitle */}
        <h2 className="text-3xl font-bold text-white mb-8">Que pouvons-nous offrir ?</h2>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {feature.map((feature, index) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center p-8 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105"
            >
              {/* Icon */}
              <img
                src={`/icons/feature-icon-${index + 1}.svg`} // Adjust icon paths dynamically
                alt={feature.heading}
                className="w-12 h-12 mb-6"
              />

              {/* Heading */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.heading}</h3>

              {/* Subheading */}
              <p className="text-gray-600 text-base">{feature.subHeading}</p>

              {/* Button */}
              <button className="mt-4 text-blue-600 font-semibold hover:underline">
                MH Consept
              </button>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
