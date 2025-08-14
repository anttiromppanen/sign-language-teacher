import { FilesetResolver, GestureRecognizer } from "@mediapipe/tasks-vision";

async function fetchGestureRecognizer() {
	const vision = await FilesetResolver.forVisionTasks(
		// path/to/wasm/root
		"https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm",
	);
	const handRecognizer = await GestureRecognizer.createFromOptions(vision, {
		baseOptions: {
			modelAssetPath: "models/gesture_recognizer.tflite",
			delegate: "GPU",
		},
		numHands: 1,
		runningMode: "VIDEO",
	});
	return handRecognizer;
}

export default fetchGestureRecognizer;
