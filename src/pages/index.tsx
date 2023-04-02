import Heading from "@/components/Heading";
import List from "@/components/List";
import Paragraph from "@/components/Paragraph";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo description="ACAMO DIGITAL is a design agency with 5+ years of experience crafting pixel-perfect designs for clients. Our specialties include UI/UX, app and website engineering, and brand strategy. We deliver high-quality, custom solutions tailored to our clients' unique needs. Our clients include Pilsner Urquell, Skoda Transportation, and more. Get in touch with us at hello@acamo.cz or +420 775 210 897" />
      <header className="pb-6">
      <Heading level={1} hasMarginBottom>
        ACAMO DIGITAL
      </Heading>
      <Paragraph>We're so busy crafting pixel-perfect designs for our clients that our own website has become the digital equivalent of a sticky note!</Paragraph>
      </header>

      <section className="py-6">
        <Heading level={2} hasMarginBottom>
        What we do
        </Heading>
        <Paragraph>
        With over 5 years of experience in the industry, we have a proven track record of delivering high-quality, custom solutions that meet the unique needs of our clients.
        </Paragraph>
        <List className="mt-4">
          <List.Item>UI & UX;</List.Item>
          <List.Item>Apps and websites engineering;</List.Item>
          <List.Item>Brand design & strategy;</List.Item>
        </List>
      </section>

      <section className="py-6">
        <Heading level={2} hasMarginBottom>
          Who did we work for?
        </Heading>
        <Paragraph>
        F.H. Prager, Strava.cz, Pilsner Urquell, Bestaudio.cz, Skoda Transportation, Prager's, Nadační fond muži proti rakovině, Charles University, Jack Daniel's and much more…
        </Paragraph>
      </section>

      <section className="py-6">
        <Heading level={2} color="green" hasMarginBottom>
          How to contact us
        </Heading>
        <Paragraph>
          Say hello to as at <a href="mailto:hello@acamo.cz" className="underline hover:bg-white hover:text-zinc-950 hover:no-underline">hello@acamo.cz</a> or call: <a href="mailto:hello@acamo.cz" className="underline hover:bg-white hover:text-zinc-950 hover:no-underline">+420 775 210 897</a>
        </Paragraph>
      </section>

      <section className="py-6">
        <Heading level={2} hasMarginBottom color="red">
        Who are we hiring?
        </Heading>
        <List className="mt-4">
          <List.Item>UI & UX designer;</List.Item>
          <List.Item>Frontend developer (React);</List.Item>
        </List>
      </section>

      <section className="py-6">
        <Heading level={2} color="muted" hasMarginBottom>
          Company details
        </Heading>
        <Paragraph className="text-zinc-500 text-sm">
          Company: AKLD Group s.r.o. <br />
          Residence: Dílenská 172/18, Doubravka, 312 00 Plzeň <br />
          Identification Number: 08371415 <br />
          The company is registered in the Commercial Register kept at the Regional Court in Pilsen, Section C, Insert 3108
        </Paragraph>
      </section>
    </>
  );
}
