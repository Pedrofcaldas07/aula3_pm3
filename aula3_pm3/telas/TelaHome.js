import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <SafeAreaView style={s.screen}>
      <View style={s.container}>

        {/* Header */}
        <View style={s.header}>
          <Text style={s.title}>EcoControll</Text>
          <Ionicons name="leaf-outline" size={24} color="#D90429" />
        </View>

        {/* Card */}
        <View style={s.card}>
          <Text style={s.cardTitle}>Bem-vindo 👋</Text>
          <Text style={s.cardSubtitle}>
            Seu sistema de controle sustentável está ativo.
          </Text>
        </View>

      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#0B0B0B",
  },
  container: {
    flex: 1,
    padding: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    color: "#FFF",
    fontSize: 26,
    fontWeight: "700",
  },
  card: {
    backgroundColor: "#151515",
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#2A2A2A",
  },
  cardTitle: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
  },
  cardSubtitle: {
    color: "#A1A1A1",
    fontSize: 14,
  },
});