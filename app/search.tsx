import {
  ImageBackground,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import bg from "../src/assets/bg.png";
import { useState, useEffect } from "react";
import { SpellCard } from "../src/components/SpellCard";
import { api } from "../lib/api";

export default function SearchSpell() {
  const [searchTrue, setSearchTrue] = useState(false);
  const [spellData, setSpellData] = useState({
    name: "",
    description: "",
    execution: "",
    range: "",
    area: "",
    duration: "",
    resistence: "",
    target: "",
    effect: "",
    enhancements: [],
  });
  const [text, onChangeText] = useState("");

  const getSpellData = async () => {
    const { data } = await api.get(`/spells/${text}`);
    setSpellData(data);
    setSearchTrue(true);
    console.log(spellData);
  };

  return (
    <ImageBackground className="flex-1 items-center relative px-8" source={bg}>
      <View className="flex-1 items-center py-40">
        <View>
          <TextInput
            value={text}
            onChangeText={onChangeText}
            placeholder="Digite o nome da magia"
            className="text-gray-800 bg-slate-50 w-[300] h-10 rounded-full text-center"
          />
          <TouchableOpacity
            onPress={() => getSpellData()}
            className="items-center"
          >
            <Text className="px-3 mt-3 text-center py-2 w-[120] rounded-full bg-orange-400">
              Pesquisar
            </Text>
          </TouchableOpacity>
          <StatusBar style="light" />
        </View>
        <View>
          {searchTrue === true && (
            <SpellCard
              name={spellData.name}
              enhancements={spellData.enhancements}
              description={spellData.description}
              execution={spellData.execution}
              range={spellData.range}
              target={spellData.target}
              resistence={spellData.resistence}
              area={spellData.area}
              duration={spellData.duration}
              effect={spellData.effect}
            />
          )}
        </View>
      </View>
    </ImageBackground>
  );
}
