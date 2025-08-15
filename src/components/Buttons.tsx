export function LargeButton({
	text,
	disabled,
	handleClick,
}: {
	text: string;
	disabled: boolean;
	handleClick: () => void;
}) {
	return (
		<button
			type="button"
			className="rounded-lg bg-[#8a4fff]/50 backdrop-blur-xl py-2 px-4 md:py-4 md:px-8 text-white text-lg md:text-xl col-span-2 hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed"
			disabled={disabled}
			onClick={handleClick}
		>
			{text}
		</button>
	);
}
