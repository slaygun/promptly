import { Feed } from "@/components/Feed";

function Home() {
  return (
    <section className="w-full flex-center flex-col px-6">
      <div className="relative mb-12">
        <h1 className="pb-4 head_text text-center">
          Discover and Share
          <br className="max-md:hidden" />
          <span className="purple_gradient"> AI-Powered Prompts </span>
        </h1>
        <p className="desc text-center">
          Promptly is a platform that lets you&nbsp;
          <span className="style_badge bg-pink-500 rotate-2"> discover </span>
          &nbsp;,&nbsp;
          <span className="style_badge bg-sky-500 -rotate-2"> create </span>
          &nbsp;and&nbsp;
          <span className="style_badge bg-yellow-500 rotate-2"> share </span>
          &nbsp;creative prompts, fueling inspiration and connecting a vibrant
          community of creatives worldwide.
        </p>
        <span className="purple_gradient text-4xl md:text-6xl absolute -left-10 -top-8">
          ✨
        </span>
        <span className="purple_gradient text-4xl md:text-6xl absolute -right-12 -bottom-8">
          ✨
        </span>
      </div>

      <Feed />
    </section>
  );
}

export default Home;
