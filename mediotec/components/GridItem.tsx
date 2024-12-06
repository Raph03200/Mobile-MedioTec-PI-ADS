import { Text, View, StyleSheet, Pressable  } from "react-native"
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

type Props = {
    icon: string,
    title: string,
    onPress: () => void
}

export const GridItem = ({ icon, title, onPress }: Props) => {
    return(
        <Pressable 
            className="w-[150px] h-[200px] px-5 pt-5 pb-12 text-center items-center gap-5 bg-white rounded-xl"
            style={styles.container}
            onPress={onPress}
        >
            
            <FontAwesome6 name={icon} size={70} style={styles.container} color={'#0047FF'}/>
            

            <Text className="text-[#3C3C4399] text-xl">{title}</Text>
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