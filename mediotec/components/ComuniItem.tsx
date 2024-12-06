import { Pressable, Text, StyleSheet } from "react-native"
import { Comunicado } from "../types/Comunicado"

type Props = {
    data: Comunicado
}

export const ComuniItem = ({ data }: Props) => {
    return(
        <Pressable 
            style={styles.container}
            className="bg-white rounded-xl px-3 py-3"
        >
            <Text className="color-[#292F47] mb-2">{data.dataPublicacao}</Text>
            <Text 
                className="w-[100px] text-center rounded-md color-white capitalize"
                style={{ backgroundColor: data.tipodocomunicado === 'INFORMATIVO' ? "#0047FF" : "#FFA947" }}
            >
                {data.tipodocomunicado}
            </Text>
            <Text className="font-bold my-2 text-xl">{data.tituloComunicado}</Text>
            <Text>
                {data.conteudoComunicado}
            </Text>
            <Text className="mt-3 underline pb-1 font-bold">Ver mais</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        shadowColor: '#3B4056',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.2,
        shadowRadius: 40,
        elevation: 10,
    },
});