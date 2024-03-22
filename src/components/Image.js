import { View, Image } from "react-native";

export default function Imagem({ sourceImg, style }) {
  return <Image style={style} source={sourceImg} />;
}
