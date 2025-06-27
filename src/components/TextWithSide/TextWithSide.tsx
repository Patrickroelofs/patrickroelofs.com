interface TextWithSideProps {
	title: string;
	children?: React.ReactNode;
}

function TextWithSide(props: TextWithSideProps) {
	return (
		<section className="max-w-5xl mx-auto px-2 flex gap-m py-xs">
			<div className="max-w-80 w-full">
				<h2 className="text-l sticky top-3xs font-bold">{props.title}</h2>
			</div>
			<div>{props.children}</div>
		</section>
	);
}

export default TextWithSide;
