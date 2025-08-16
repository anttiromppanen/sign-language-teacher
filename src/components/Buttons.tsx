export function LargeButton({
	text,
	disabled,
	fullWidth = false,
	handleClick,
}: {
	text: string;
	disabled: boolean;
	fullWidth?: boolean;
	handleClick: () => void;
}) {
	return (
		<button
			type="button"
			className={`
				rounded-lg bg-[#8a4fff]/50 backdrop-blur-xl py-2 px-4 md:py-4 md:px-8 text-white text-lg md:text-xl col-span-2 hover:brightness-110 disabled:brightness-50 disabled:cursor-not-allowed
				${fullWidth && "w-full"}
			`}
			disabled={disabled}
			onClick={handleClick}
		>
			{disabled ? "Setup in progress..." : text}
		</button>
	);
}
