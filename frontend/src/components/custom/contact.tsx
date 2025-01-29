"use-client";

interface ContactProps {
  id: number;
  documentId: string;
  __component: string;
  title: string;
  description: string;
   telephone: string,
   email: string
}

export function Contact({ data }: { readonly data: ContactProps }) {
  const { title, description, telephone, email} = data;

  return (
    <section className="relative bg-gray-50 py-16 md:py-24" id="Contact">
    {/* Background Overlay */}
   

    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 md:text-5xl">{title}</h2>
        <p className="mt-4 text-lg text-gray-600 md:text-xl">{description}</p>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
        {/* Telephone */}
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10l1.664 1.664a12.05 12.05 0 006.672 6.672L14 21l7-7-1.664-1.664a12.05 12.05 0 00-6.672-6.672L10 3l-7 7z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
            <p className="text-gray-600">{telephone}</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12h2a2 2 0 002-2V6a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M8 12H6a2 2 0 01-2-2V6a2 2 0 012-2h4a2 2 0 012 2v2m4 0h-4m4 0H8m0 4v4m0 0v4m0-4h4m0 0h4"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Email</h3>
            <p className="text-gray-600">{email}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
