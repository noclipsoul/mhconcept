import { StrapiImage } from "@/components/custom/StrapiImage";
interface StrapiImage {
  src: string;
  alt: string;
  height: number;
  width: number;
  className?: string;
  onClick?: (() => void) | null; // Corrected null probability handling
}

interface Features {
  id: number;
  heading: string;
  subHeading: string;
  icon: { // Changed iconn to a more descriptive type
    id: number;
    documentId: string;
    url: string;
    alternativeText: string;
  };
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
  const {  bgFeatureimage, feature } = data;

  return (
    <header className=" relative flex-auto " id="services">
    

     
      <div className="relative z-50 mx-auto max-w-full px-4 py-16 sm:px-6 lg:px-8">
       
        <div className="object-center mb-32">
        <h2 className="mt-2 text-4xl text-center font-bold text-black">Que pouvons-nous offrir ?</h2>
        </div>
      
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {feature.map((feature, index) => (
            
              <div key={feature.id} className="  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">      
                 <div className="flex items-center mt-10 justify-center">
                  <StrapiImage   src={feature.icon.url} alt={feature.icon.alternativeText ?? "no alternative text"} width={80} height={80} />
                  </div>
            <div className="p-5">
                         
                    <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{feature.heading}</h5>
               
                <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">{feature.subHeading}</p>
                
            </div> 
          </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden mb-40">
        <StrapiImage
          className="w-full h-70  "
          src={bgFeatureimage.url}
          alt={bgFeatureimage.alternativeText ?? "no alternative text"}
          width={1900}
          height={1900}
         
        />
      
      </div>
      



    </header>
  );
}