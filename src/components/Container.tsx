import type { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
	return (
		<div className="w-full max-w-[1500px] mx-auto px-4 md:px-8">{children}</div>
	);
}

export default Container;
