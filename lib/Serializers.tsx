import { PortableTextComponents } from '@portabletext/react';
import { urlFor } from "@/sanity/lib/image";
import A from '../components/A'

const serializers: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-5">{children}</p>,
    h1: ({ children }) => <h1>{children}</h1>,
    h2: ({ children }) => <h2 className='text-start mt-12 mb-4'>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="my-8 pl-4 py-4 border-l-4 text-[20px] border-(--gray) text-(--white)">
        {children}
      </blockquote>
    ),
  },
  types: {
    image: ({ value }) => {
      return (
        <img
          src={urlFor(value).width(1600).format("webp").url()}
          alt={value.alt}
          className="w-full h-auto object-cover my-4 border border-(--divider)"
        />
      );
    },
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-6 mb-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-6 mb-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-0">{children}</li>,
    number: ({ children }) => <li className="mb-0">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => <code className="bg-gray-800 px-1 py-0.5 rounded">{children}</code>,
    link: ({ value, children }) => (
      <A title={children as string} link={value?.href} />
    ),
  },
};

export default serializers;