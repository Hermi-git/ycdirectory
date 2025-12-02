import StartUpCard from "@/components/StartUpCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({searchParams,}:{
  searchParams: Promise<{ query?: string }>;}) {
    const query = (await searchParams).query;
    const posts = [
      {
        _createdAt: new Date(),
        views:55,
        author: {_id:1, name: "Adrian"},
        _id:1,
        description : "This is a description",
        image: "data:image/jpeg;base64,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",
        category : "Robots",
        title: "We Robots"
      }
    ]
  return <> 
   <section className="w-full bg-pink-600 min-h-[530px] background-image: linear-gradient(
            to right,
            transparent 49.5%,
            rgba(251, 232, 67, 0.2) 49.5%,
            rgba(251, 232, 67, 0.6) 50.5%,
            transparent 50.5%
    );
    background-size: 5% 100%;
    background-position: center;
    background-repeat: repeat-x; flex justify-center items-center flex-col py-10 px-6;">
        <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5;
  ">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="font-medium text-[20px] text-white max-w-2xl text-center break-words">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query}/>
      </section>

      <section className="px-6 py-10 max-w-7xl mx-auto">
        <p className="font-semibold text-[30px] text-black">
          {query? `Search Result for "${query}"` : "All Startups"
          }
        </p>

        <ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
          {
            posts?.length > 0? (
              posts.map((post) => (
                <StartUpCard key={post?._id} post= {post} />
              ))
            ) : (
              <p className="text-black-100 text-sm font-normal">
                  No startups found
              </p>
            )}
        </ul>
      </section>
        </>
}
