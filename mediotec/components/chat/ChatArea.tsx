import { useContext, useRef, useState } from "react"
import { Image, Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native"
import Feather from 'react-native-vector-icons/Feather'
import { ChatContext } from "../../contexts/chatContext"
import { MessageItem } from "./MessageItem"
import { AuthContext } from "../../contexts/authContext"

export const ChatArea = () => {

    const [inputValue, setInputValue] = useState('');
    const [disable, setDisable] = useState(false)

    const handleInputChange = (text: string) => {
      setInputValue(text); 
    };
    const chat = useContext(ChatContext)
    const user = useContext(AuthContext)

    const handleAddMessage = async () => {
        chat?.addMessage(user.authData?.IdUser as number, inputValue, true)
        
          try {
            const resposta = await fetch("http://172.26.33.200:8090/chat", {
              method: "POST",
              headers: {
                "Content-Type": "application/json", 
              },
              body: JSON.stringify({
                driverId: 1, 
                mensagem: inputValue
              }),
            });
        
            if (!resposta.ok) {
              throw new Error("Erro na requisição.");
            }
        
            try{
                const dadosResposta = await resposta.json();
                chat?.addMessage(1, dadosResposta.resposta, false)
                
            } catch (erro){
                console.error("ta indo:", erro);
            }
            
          } catch (erro) {
            console.error("Erro:", erro);
          }
        
          setInputValue('')
    }

    return(
        <SafeAreaView className="px-8 py-6">
            <View className="bg-white rounded-xl">
                <ScrollView className="w-full h-4/5 px-4 py-5">
                    <View className="mb-5">
                        <Image
                            source={require("../../assets/fernanda.jpg")}
                            className="h-[120px] w-[120px] rounded-full border border-black mx-auto"
                        />
                        <Text className="text-center text-lg font-bold">Fernanda</Text>
                    </View>

                    {chat?.chat.map((item) => (
                        <MessageItem key={item.id} data={item}/>
                    ))}
                </ScrollView>

                <View className="flex-row items-center gap-4 px-5 h-1/5">
                    <TextInput 
                        placeholder="Digite sua Mensagem"
                        value={inputValue} 
                        onChangeText={handleInputChange}
                        className="bg-[#E6E6E6F9] flex-1 p-2 rounded-xl"
                    />

                    <Pressable className="bg-[#0047FF] p-3 rounded-full" onPress={handleAddMessage}>
                        <Feather name="send" size={20} color={'#fff'}/>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
    
}