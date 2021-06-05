import Lottie from "react-lottie";

export default function LottieAnimation({ lotti, width, height, styleProp}) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  console.log(styleProp)

  return (
    <div style={styleProp}>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );
};