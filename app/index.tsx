import { View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View className="bg-gray-900 flex-1 items-center relative px-8">
      <View className="flex-1 items-center justify-center gap-6">
        <View className="space-y-2">
          <Text className="text-center font-title text-2xl text-gray-50">
            TESTE
          </Text>
          <Text className="text-center font-body text-base text-gray-50">
            TESTE TESTE TESTE
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-full bg-green-500 px-5 py-3"
        >
          <Text className="font-alt">COMEÇAR A CADASTRAR</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="light" />
      <Text className="text-gray-50 mb-3 text-sm">SPELLBOOK </Text>
    </View>
  );
}
