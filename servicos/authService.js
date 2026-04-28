import AsyncStorage from '@react-native-async-storage/async-storage';


// 1. Função que chama a API
export const fazerLogin = async (emailDigitado, senhaDigitada) => {
  try {
    const resposta = await fetch("https://api.liliaborges.com.br/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: emailDigitado, password: senhaDigitada }),
    });

    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(dados.message || "Erro ao fazer login");
    }

    // Retorna o token da propriedade access_token
    return dados.access_token;
  } catch (erro) {
    throw new Error(erro.message); // Repassa o erro para a ViewModel
  }
};

// 2. Função para salvar o token no celular
export const salvarTokenNoCelular = async (token) => {
  try {
    await AsyncStorage.setItem('@token_salvo', token);
  } catch (erro) {
    console.error("Erro ao salvar o token", erro);
  }
};

// 3. Pegar o token salvo
export const pegarTokenDoCelular = async () => {
  try {
    const token = await AsyncStorage.getItem('@token_salvo');
    return token;
  } catch (erro) {
    console.error("Erro ao recuperar o token", erro);
    return null;
  }
};