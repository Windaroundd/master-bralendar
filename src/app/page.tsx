import Leftside from "@/components/leftside/Leftside";
import Rightside from "@/components/rightside/Rightside";

export default function Home() {
  return (
    <div className="container mx-auto mt-10 flex justify-between gap-4">
      <div className="w-1/4 border border-dotted bg-white">
        <Leftside />
      </div>
      <div className="w-3/4 border border-dotted bg-white">
        <Rightside />
      </div>
    </div>
  );
}
