import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { fazerLogin, salvarTokenNoCelular } from "../servicos/authService";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const navigation = useNavigation();

  const handleLogin = async () => {
  try {
    if (!email || !password) {
      return alert("Preencha todos os campos");
    }

    const token = await fazerLogin(email, password);

    await salvarTokenNoCelular(token);
    navigation.navigate("Home");

  } catch (erro) {
    alert(erro.message);
  }
};

  return (
    <SafeAreaView style={s.screen}>
      <View style={s.container}>
        <View style={s.card}>
          <View style={s.avatarWrap}>
            <View style={s.avatarOuter}>
              <View style={s.avatarInner}>
                <View style={s.avatarHead} />
                <View style={s.avatarBody} />
              </View>
            </View>
          </View>

          <Text style={s.title}>Login</Text>
          <Text style={s.subtitle}>Entre com suas credenciais</Text>

          <Text style={s.label}>E-mail</Text>
          <View style={s.inputBox}>
            <Ionicons name="mail-outline" size={18} color="#A1A1A1" />
            <TextInput
              style={s.input}
              placeholder="Digite seu e-mail"
              placeholderTextColor="#7A7A7A"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <Text style={s.label}>Senha</Text>
          <View style={s.inputBox}>
            <Ionicons name="lock-closed-outline" size={18} color="#A1A1A1" />
            <TextInput
              style={s.input}
              placeholder="Digite sua senha"
              placeholderTextColor="#7A7A7A"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={hidePassword}
            />
            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
              <Ionicons
                name={hidePassword ? "eye-off-outline" : "eye-outline"}
                size={18}
                color="#A1A1A1"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={s.forgotWrap}>
            <Text style={s.forgot}>Esqueci minha senha</Text>
          </TouchableOpacity>

          <TouchableOpacity style={s.primaryButton} onPress={handleLogin}>
            <Text style={s.primaryButtonText}>Entrar</Text>
          </TouchableOpacity>

          <View style={s.divider}>
            <View style={s.line} />
            <Text style={s.dividerText}>ou</Text>
            <View style={s.line} />
          </View>

          <TouchableOpacity style={s.secondaryButton}>
            <Ionicons name="logo-google" size={18} color="#D90429" />
            <Text style={s.secondaryButtonText}>Continuar com Google</Text>
          </TouchableOpacity>

          <Text style={s.register}>
            Não tem uma conta? <Text style={s.registerLink}>Cadastre-se</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )};;

const s = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#0B0B0B",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  card: {
    backgroundColor: "#151515",
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: "#2A2A2A",
  },
  avatarWrap: {
    alignItems: "center",
    marginBottom: 10,
  },
  avatarOuter: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#D90429",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarInner: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarHead: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#D90429",
    marginBottom: 4,
  },
  avatarBody: {
    width: 40,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#D90429",
  },
  title: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 10,
  },
  subtitle: {
    color: "#A1A1A1",
    fontSize: 15,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 24,
  },
  label: {
    color: "#A1A1A1",
    fontSize: 14,
    marginBottom: 6,
    marginTop: 6,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    height: 52,
    backgroundColor: "#1D1D1D",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#2A2A2A",
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    color: "#FFF",
    marginLeft: 8,
  },
  forgotWrap: {
    alignItems: "flex-end",
    marginTop: 10,
    marginBottom: 8,
  },
  forgot: {
    color: "#FF2E4D",
    fontSize: 14,
    fontWeight: "600",
  },
  primaryButton: {
    height: 52,
    borderRadius: 14,
    backgroundColor: "#D90429",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  primaryButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 22,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#2A2A2A",
  },
  dividerText: {
    color: "#7A7A7A",
    marginHorizontal: 10,
  },
  secondaryButton: {
    height: 52,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#2A2A2A",
    backgroundColor: "#1D1D1D",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  secondaryButtonText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "600",
  },
  register: {
    textAlign: "center",
    color: "#A1A1A1",
    fontSize: 14,
    marginTop: 22,
  },
  registerLink: {
    color: "#FF2E4D",
    fontWeight: "700",
  },
});