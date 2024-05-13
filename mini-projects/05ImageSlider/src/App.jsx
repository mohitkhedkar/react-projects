import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";

function App() {
  return (
    <>
      <h1>Image Slider</h1>
      <ImageSlider slides={SliderData} />
    </>
  );
}

export default App;
