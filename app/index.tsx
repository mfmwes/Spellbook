import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import { MedievalSharp_400Regular } from "@expo-google-fonts/medievalsharp";
import bg from "../src/assets/bg.png";
import { Link } from "expo-router";
import { useRouter } from "expo-router";

export default function App() {
  const router = useRouter();
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    MedievalSharp_400Regular,
  });
  if (!hasLoadedFonts) {
    return null;
  }
  return (
    <ImageBackground
      source={bg}
      className="bg-gray-900 flex-1 items-center relative px-8"
    >
      <View className="flex-1 items-center justify-center gap-6">
        <View className="space-y-2">
          <Text className="text-center font-rpg text-4xl text-gray-50">
            Ghanor Spellbook
          </Text>
          <Text className="text-center font-body text-base text-gray-50 mb-10">
            Os cara tava com preguiça de ler o livro
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => router.push('/search') }
          activeOpacity={0.7}
          className="rounded-full bg-green-500 px-12 py-3"
        >
          <Text className="font-alt">INICIAR</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="light" />
      <Text className="text-gray-50 mb-3 text-sm">
        {" "}
        Feito pra resolver nossa vida{" "}
      </Text>
    </ImageBackground>
  );
}
