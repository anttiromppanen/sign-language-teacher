import GestureSlideshow from "@/components/GestureSlideshow";

function Alphabet() {
  return (
    <main className="flex flex-col items-center justify-center max-w-4xl mx-auto text-center py-20">
      <h1 className="text-6xl text-foreground mb-20">
        Below you can find the American Sign Language alphabet
      </h1>
      <GestureSlideshow />
    </main>
  );
}

export default Alphabet;
