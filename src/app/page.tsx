/**
 * v0 by Vercel.
 * @see https://v0.dev/t/e02m4CFh4ae
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  CardTitle,
  CardDescription,
  CardHeader,
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TokenMeta } from "./tokens/[token_id]/page";
import Link from "next/link";

export default function Component() {
  const tokens: TokenMeta[] = [
    {
      title: "NFT Token",
      description: "Thing",
      tokenId: "1234567890",
      imageSrc: "/placeholder.svg",
    },
  ];
  return (
    <Card className="mx-auto w-full max-w-6xl">
      <CardHeader className="flex flex-row items-center justify-between gap-4">
        <div className="grid flex-1 gap-1">
          <CardTitle>Tokens</CardTitle>
          <CardDescription>View all tokens</CardDescription>
        </div>
        <Button className="shrink-0" size="icon" variant="outline">
          <RefreshCwIcon className="h-4 w-4" />
          <span className="sr-only">Refresh</span>
        </Button>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="col-span-full">
          <Button size="sm">Add New Token</Button>
        </div>

        {tokens.map((token) => (
          <TokenCard {...token} />
        ))}
      </CardContent>
    </Card>
  );
}

const TokenCard = ({ title, description, imageSrc, tokenId }: TokenMeta) => (
  <Link href={`tokens/${tokenId}`}>
    <Card className="flex flex-col items-center p-4">
      <img
        alt={title}
        className="h-64 w-full rounded-t-lg object-cover"
        height={400}
        src={imageSrc}
        style={{
          aspectRatio: "500/400",
          objectFit: "cover",
        }}
        width={500}
      />
      <div className="grid gap-1">
        <CardTitle className="text-base font-bold">{title}</CardTitle>
        <CardDescription className="text-sm">
          <p>Token ID: ${tokenId}</p>
          <p>{description}</p>
        </CardDescription>
      </div>
      <div className="flex w-full flex-row items-end justify-end">
        <Button className="mr-2" size="sm" variant="outline">
          <FileEditIcon className="mr-1 h-4 w-4" />
          Edit
        </Button>
        <Button size="sm" variant="outline">
          <TrashIcon className="mr-1 h-4 w-4" />
          Delete
        </Button>
      </div>
    </Card>
  </Link>
);

function FileEditIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  );
}

function RefreshCwIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  );
}

function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
