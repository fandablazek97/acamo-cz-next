import Head from "next/head";

type Props = {
  description: string;
}

export default function Seo({
  description,
}: Props) {
  return (
    <Head>
      <title>{`ACAMO DIGITAL`}</title>
      <meta name="description" content={description} />
    </Head>
  )
}