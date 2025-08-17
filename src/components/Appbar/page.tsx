import Image from "next/image";
import Link from "next/link";
import logoImg from "../../../public/img/logo.png";

function Appbar() {
	return (
		<div className="h-16 flex justify-between w-full items-center bg-[#8a4fff]/10 backdrop-blur-lg text-text-primary rounded-b-xl max-w-[1500px] mx-auto px-4 md:px-8">
			<Link href="/" className="">
				<Image src={logoImg} alt="aslakki logo" className="h-auto w-24" />
			</Link>
			<ul className="flex sm:gap-x-4">
				<li>
					<Link
						href="/alphabet"
						className="rounded-md px-4 tracking-wider py-2 hover:underline underline-offset-8"
					>
						Alphabet
					</Link>
				</li>
				<li>
					<Link
						href="/training"
						className="rounded-md px-4 py-2 tracking-wider hover:underline underline-offset-8"
					>
						Training
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Appbar;
