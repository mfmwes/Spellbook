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
  resistence?: string;
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
  resistence,
  target,
  effect,
  enhancements,
}: SpellCardProps) => {
  let id = 0;

  return (
    <SafeAreaView className="">
      <ScrollView className="relative top-10  w-[380] rounded-xl p-4 bg-slate-400">
        <Text className="text-3xl text-orange-400 bg-slate-900 text-center font-rpg mb-4 relative rounded">
          {name}
        </Text>
        <View className="items-center">
          <View className="flex-row gap-3">
            {!execution ? null : (
              <Text className="text-gray-900 font-bold">
                Execução: {execution}
              </Text>
            )}
            {!range ? null : (
              <Text className="text-gray-900 font-bold">Alcance: {range}</Text>
            )}
          </View>
          <View className="flex-row gap-3">
            {!area ? null : (
              <Text className="text-gray-900 font-bold">Área: {area}</Text>
            )}
            {!duration ? null : (
              <Text className="text-gray-900 font-bold">
                Duração: {duration}
              </Text>
            )}
          </View>
          <View className="flex-row gap-3">
            {!resistence ? null : (
              <Text className="text-gray-900 font-bold">
                Resistência: {resistence}
              </Text>
            )}
            {!target ? null : (
              <Text className="text-gray-900 font-bold">Alvo: {target}</Text>
            )}
          </View>
          {!effect ? null : (
            <Text className="text-gray-900 font-bold">Efeito: {effect}</Text>
          )}
        </View>
        <View>
          <Text className="text-gray-900 mt-5 bg-slate-300 p-2 rounded text-sm">
            {description}
          </Text>
        </View>
        <Text className="text-gray-900 mt-3 mb-2 font-text font-bold">
          Aprimoramentos:
        </Text>
        <View className="gap-2">
          {enhancements.map((i) => {
            return (
              <View
                key={id++}
                className="flex-row bg-slate-300 rounded-xl pl-1 p-2"
              >
                <Text className="text-gray-900 font-rpg pt-[1]">{i.cost}:</Text>
                <Text className="text-gray-900 pl-1 mb-2 mr-20 text-sm">
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
