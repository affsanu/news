import MainNews from "./components/MainNews";
import TrendingNow from "./components/TrendingNow";

export default function Home() {
  return (
    <main className="w-full h-screen bg-bodyColor text-textLight overflow-x-hidden 
    overflow-y-scroll">
      <div className="max-w-container mx-auto">
        <TrendingNow />
        <MainNews />
      </div>
    </main>
  )
}
