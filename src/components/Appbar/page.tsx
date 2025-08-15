import Image from "next/image";
import Link from "next/link";
import logoImg from "../../../public/img/logo.png";

function Appbar() {
	return (
		<div className="py-4 px-8 lg:px-6 flex justify-between w-full items-center bg-white/5 backdrop-blur-sm text-text-primary max-w-[1500px] mx-auto rounded-b-xl">
			<Link href="/" className="">
				<Image src={logoImg} alt="Signer logo" className="h-auto w-24" />
			</Link>
			<ul className="flex gap-x-4">
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
