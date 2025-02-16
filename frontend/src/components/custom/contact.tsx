"use-client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen, faPhone,faLocationDot } from "@fortawesome/free-solid-svg-icons";

interface ContactProps {
  id: number;
  documentId: string;
  __component: string;
  title: string;
  description: string;
  telephone: string;
  email: string;
  adress:string;
}

export function Contact({ data }: { readonly data: ContactProps }) {
  const { title, description, telephone, email,adress } = data;

  return (
    <section className="  font-sans items-center relative mx-[15%] pt-40  pb-52 " id="Contact">
     
        <div className="space-y-8 text-center md:text-left"> {/* Text alignment adjusted */}
          <h2 className="text-sm uppercase tracking-wider text-gray-600">Contact</h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">{title}</h1> {/* Adjusted font size */}
          <p className="text-gray-600 max-w-3xl text-lg leading-relaxed mx-auto md:mx-0"> {/* Added mx-auto for centering on smaller screens */}
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 pt-8"> {/* Adjusted grid responsiveness */}
          <div className="space-y-4">
            <FontAwesomeIcon icon={faPhone} size="2x" className="mx-auto md:mx-0" /> {/* Centered icon on smaller screens */}
            <h3 className="uppercase text-sm tracking-wider text-gray-600">Tel</h3>
            <p className="text-lg text-gray-600">{telephone}</p>
          </div>

          <div className="space-y-4">
            <FontAwesomeIcon icon={faEnvelopeOpen} size="2x" className="mx-auto md:mx-0" /> {/* Centered icon on smaller screens */}
            <h3 className="uppercase text-sm tracking-wider text-gray-600">Email</h3>
            <p className="text-lg text-gray-600">{email}</p>
          </div>

          <div className="space-y-4">
            <FontAwesomeIcon icon={faLocationDot} size="2x" className="mx-auto md:mx-0" /> {/* Centered icon on smaller screens */}
            <h3 className="uppercase text-sm tracking-wider text-gray-600">Adresse</h3>
            <p className="text-lg text-gray-600">{adress}</p>
          </div>
        </div>
     
    </section>
  );
}