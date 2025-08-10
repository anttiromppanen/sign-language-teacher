import GestureSlideshow from "@/components/GestureSlideshow";

function Alphabet() {
  return (
    <main className="flex flex-col items-center justify-center max-w-4xl mx-auto text-center py-10">
      <h1 className="text-6xl text-foreground mb-10 font-alice">
        The American Sign Language (ASL) alphabet
      </h1>
      <GestureSlideshow />
    </main>
  );
}

export default Alphabet;
