import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";

interface EnhacementsProps {
  cost: string;
  description: string;
}

interface SpellCardProps {
  name: string;
  description?: string;
  execution?: string;
  range?: string;
  area?: string;
  duration?: string;
  resistance?: string;
  target?: string;
  effect?: string;
  enhancements?: Array<EnhacementsProps>;
}

export const SpellCard = ({
  name,
  description,
  execution,
  range,
  area,
  duration,
  resistance,
  target,
  effect,
  enhancements,
}: SpellCardProps) => {

  let id = 0

  return (
    <SafeAreaView className="">
      <ScrollView className="relative top-10  w-[380] rounded-xl p-4 bg-slate-400">
        {name !== "" ? (
          <Text className="text-3xl text-orange-400 bg-slate-900 text-center font-rpg mb-4 relative rounded">
            {name}
          </Text>
        ) : (
          <Text className="text-3xl text-orange-400 bg-slate-900 text-center font-rpg mb-4 relative rounded"></Text>
        )}
        <View>
          <View className="flex-row gap-3">
            <Text className="text-gray-900 font-bold">
              Execução: {execution}
            </Text>
            <Text className="text-gray-900 font-bold">Alcance: {range}</Text>
          </View>
          <View className="flex-row gap-3">
            <Text className="text-gray-900 font-bold">Área: {area}</Text>
            <Text className="text-gray-900 font-bold">Duração: {duration}</Text>
          </View>
          <View className="flex-row gap-3">
            <Text className="text-gray-900 font-bold">
              Resistência: {resistance}
            </Text>
            <Text className="text-gray-900 font-bold">Alvo: {target}</Text>
            <Text className="text-gray-900 font-bold">Efeito: {effect}</Text>
          </View>
        </View>
        <View>
          <Text className="text-gray-900 mt-3 bg-slate-300 p-2 rounded">
            {description}
          </Text>
        </View>
        <Text className="text-gray-900 mt-3 mb-5 font-text font-bold">
          Aprimoramentos:
        </Text>
        <View className="gap-2">
          {enhancements.map((i) => {
            return (
              <View key={id++} className="flex-row bg-slate-300 rounded-xl pl-1 p-2">
                <Text className="text-gray-900 font-rpg pt-[1]">{i.cost}:</Text>
                <Text className="text-gray-900 pl-1 mb-2 mr-20">
                  {i.description}
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
