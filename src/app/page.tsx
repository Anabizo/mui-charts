"use client";
import { useRef } from "react";
import { BarChart } from "@mui/x-charts";
import html2canvas from "html2canvas";

export default function Home() {
	const chartRef = useRef<HTMLDivElement>(null);

	const exportAsImage = async () => {
		if (!chartRef.current) return;

		const canvas = await html2canvas(chartRef.current, {
			backgroundColor: "rgba(0,0,0,0)",
		});
		const image = canvas.toDataURL("image/png");

		// Criar link para download
		const link = document.createElement("a");
		link.href = image;
		link.download = "grafico.png";
		link.click();
	};

	return (
		<div className="bg-white h-screen flex flex-col items-center justify-center">
			<div
				ref={chartRef}
				className="p-4 shadow-lg rounded-lg"
				style={{ backgroundColor: "transparent" }}
			>
				<BarChart
					className="h-[410px]"
					xAxis={[
						{
							id: "barCategories",
							data: [
								"Açucar",
								"Alcool",
								"Chá",
								"Filtro de Café",
								"Copo 180 ml",
								"Papel Higiênico",
								"Papel Sulfite",
								"Papel Toalha",
								"Água Sanitária",
								"Desinfetante",
								"Detergente Líquido",
								"Sabonete Líquido",
								"Folha EVA Amarela",
								"Folha EVA Azul",
								"Folha EVA Branca",
								"Folha EVA Cinza",
								"Folha EVA Laranja",
								"Folha EVA Marrom",
								"Folha EVA Preto",
								"Folha EVA Rosa",
								"Folha EVA Verde",
								"Folha EVA Vermelha",
								"Pasta Portifólio",
							],
							scaleType: "band",
							tickLabelStyle: {
								angle: 50,
								textAnchor: "start",
								fontSize: 12,
							},
						},
					]}
					series={[
						{
							data: [
								100, 0, 100, 100, 50, 7, 43, 0, 100, 100, 100, 7, 50, 50, 50,
								50, 50, 50, 50, 50, 50, 50, 100,
							],
							color: "#E86017",
						},
					]}
					width={800}
					height={300}
					borderRadius={5}
				/>
			</div>

			<button
				type="button"
				onClick={exportAsImage}
				className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
			>
				Exportar como PNG
			</button>
		</div>
	);
}
