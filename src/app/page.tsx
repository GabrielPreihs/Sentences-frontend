import Footer from "@/components/Footer";
import AddQuestion from "@/components/AddQuestion";
import MessageBox from "@/components/MessageBox";

export default function Home() {
	const messagesMock: string[] = [
		'teste',
		'teste',
		'teste',
		'teste',
		'teste',
		'teste',
		'teste',
		'teste',
		'teste',
	]

	return (
		<div className="grid grid-rows-[20px_1fr_100px] items-center justify-items-center min-h-screen">
			<main className="flex row-start-2 items-center flex-col">
				<MessageBox messages={messagesMock} />
				<AddQuestion />
			</main>
			<Footer />
		</div>
	);
}
