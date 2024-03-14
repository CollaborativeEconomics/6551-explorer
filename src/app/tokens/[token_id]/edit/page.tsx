/**
 * v0 by Vercel.
 * @see https://v0.dev/t/D60jex4NnRy
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export interface TokenMeta {
  title: string;
  description: string;
  imageSrc: string;
  tokenId: string;
}

export default function Component() {
  const {title, description, tokenId, imageSrc} = {
    title: "6551 User Token",
    description: "NFT Token",
    tokenId: "1234567890",
    imageSrc: "/placeholder.svg",
  };
  const tokens = [
    {
      title: "NFT Token",
      description: "Thing",
      tokenId: "1234567890",
      imageSrc: "/placeholder.svg",
    },
  ];
  return (
    <div className="grid gap-4">
      <div className="px-4">
        <div className="container flex items-center justify-between space-y-2 py-6">
          <div className="space-y-2">
            <input
              className="text-3xl font-bold tracking-tighter outline-none sm:text-4xl md:text-5xl"
              placeholder={title}
              type="text"
            />
            <p className="text-gray-500 dark:text-gray-400">
              {`Token ${description}`}
            </p>
          </div>
          <div className="space-x-4">
            <Button>Save</Button>
          </div>
        </div>
      </div>
      <div className="border-t" />
      <div className="px-4">
        <div className="container space-y-2 py-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="min-y-24 relative space-y-2">
              <input
                accept="image/*"
                className="hidden"
                id="image-upload"
                type="file"
              />
              <label className="cursor-pointer" htmlFor="image-upload">
                <Image
                  alt={`Token Image: ${title}`}
                  className="aspect-[16/9] overflow-hidden rounded-lg object-contain object-center"
                  src={imageSrc}
                  fill
                />
              </label>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold tracking-tight">Description</h2>
              <div className="flex items-center">
                <input
                  className="text-sm leading-loose text-gray-500 outline-none dark:text-gray-400 md:text-base/relaxed"
                  placeholder={description}
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t" />
      <div className="px-4">
        <div className="container flex flex-col gap-2 py-6">
        <Link
            className="inline-flex items-center gap-2 text-sm text-gray-500 underline hover:no-underline dark:text-gray-400"
            href={`/tokens/${tokenId}`}
          >
            <div className="h-4 w-4 -translate-x-0.5" />
            Back to Token
          </Link>
        </div>
      </div>
    </div>
  );
}

const TokenRow = ({ title, description, imageSrc, tokenId }: TokenMeta) => {
  return (
    <div className="flex w-full items-center p-4 sm:p-8">
      <img
        alt="Token"
        className="aspect-[1/1] overflow-hidden rounded-lg object-contain object-center"
        height="80"
        src={imageSrc}
        width="80"
      />
      <div className="ml-4 grid gap-1 text-sm">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {description}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Token: {tokenId}
        </p>
      </div>
      <div className="ml-auto h-5 w-5 shrink-0 text-gray-500 opacity-50 transition-opacity group-hover:opacity-100 peer-hover:opacity-100 dark:text-gray-400" />
    </div>
  );
};
