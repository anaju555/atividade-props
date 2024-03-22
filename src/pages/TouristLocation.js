import { View } from "react-native";
import { styles } from "../styles/StyleSheet";
import Texto from "../components/Text";
import Imagem from "../components/Image";

export default function Tourist() {
  const Img = {
    uri: "https://img.freepik.com/fotos-premium/grande-muralha-da-china-na-primavera-perto-de-pequim_367038-151.jpg",
  };

  return (
    <View style={styles.container}>
      <Texto texto="Muralha da China" style={styles.Tourist} />
      <Texto texto="Huario District, China, 101406" style={styles.Endereco} />
      <Imagem sourceImg={Img} style={styles.Image} />
      <Texto
        texto=" A Muralha da China foi uma obra cuja contrução durou 1900 anos, passando por diferentes dinastias chinesas. 
                      Durante este período, o país foi alvo de diversas invasões, dentre elas,as dos mongóis."
        style={styles.Descricao}
      />
    </View>
  );
}
