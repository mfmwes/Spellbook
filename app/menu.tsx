import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import bg from "../src/assets/bg.png";

export default function Menu() {
  const router = useRouter();
  return (
    <ImageBackground source={bg} className="flex-1 items-center">
      <View className="relative py-40">
        <Text className="font-rpg text-3xl text-gray-50">
          Selecione uma opção
        </Text>
      </View>
      <View className="flex-row gap-4">
        <TouchableOpacity className="w-[135] h-[70] rounded-[45px] bg-bgbutton">
          <Text className="text-center text-3xl m-auto font-rpg">Raças</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/spellSearch")}
          className="w-[135] h-[70] rounded-[45px] bg-bgbutton"
        >
          <Text className="text-center text-3xl m-auto font-rpg">Magias</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="light" />
    </ImageBackground>
  );
}
