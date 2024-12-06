import { Text, View } from "react-native"
import { Message } from "../../types/Message"

type Props = {
    data: Message
}

export const MessageItem = ({ data }: Props) => {
    return(
        <View
            className="rounded-xl mb-3 p-2 max-w-[200px]"
            style={{ alignSelf: data.isyou ? 'flex-end' : 'flex-start', backgroundColor: data.isyou ? "#5282FF" : "#FFC46D"}}
        >
            {data.isyou &&
                <Text className="text-white">[Você]: {data.text}</Text>
            }
            {!data.isyou &&
                <Text className="text-white">{data.text}</Text>
            }

        </View>
    )
}