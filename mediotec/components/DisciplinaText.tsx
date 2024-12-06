import { Text, View } from "react-native"

export const DisciplinaText = () => {
    return(
        <View className="flex-1 bg-white p-4">
            <View className="mb-6">
                <Text className="text-xl font-bold text-blue-700 mb-2">
                    1º Bimestre – Temas Globais e Modernidade
                </Text>
                <Text className="text-base font-semibold text-gray-800 mb-2">
                    Objetivo:
                </Text>
                <Text className="text-gray-700 mb-4">
                    Compreender os principais processos históricos do século XIX e início do século XX, incluindo Revoluções Industriais, Imperialismo e Primeira Guerra Mundial.
                </Text>

                <Text className="text-base font-semibold text-gray-800 mb-2">Conteúdos:</Text>
                <View className="mb-4">
                    <Text className="text-gray-700">
                        <Text className="font-medium">Revoluções Industriais:</Text> Transformações tecnológicas e econômicas. Impactos sociais e culturais.
                    </Text>
                    <Text className="text-gray-700 mt-2">
                        <Text className="font-medium">Imperialismo e Neocolonialismo:</Text> Divisão da África e Ásia. Disputas geopolíticas e as rivalidades imperialistas.
                    </Text>
                    <Text className="text-gray-700 mt-2">
                        <Text className="font-medium">Primeira Guerra Mundial (1914-1918):</Text> Causas, alianças e desdobramentos. Consequências políticas, econômicas e sociais.
                    </Text>
                    <Text className="text-gray-700 mt-2">
                        <Text className="font-medium">A Revolução Russa (1917):</Text> Contexto e causas. Socialismo e seus desdobramentos globais.
                    </Text>
                </View>

                <Text className="text-base font-semibold text-gray-800 mb-2">
                    Atividades Sugeridas:
                </Text>
                <View>
                    <Text className="text-gray-700">• Mapas conceituais para sistematizar Revoluções Industriais.</Text>
                    <Text className="text-gray-700">• Debate sobre os impactos do imperialismo na contemporaneidade.</Text>
                    <Text className="text-gray-700">• Simulação de uma conferência de paz pós-Primeira Guerra Mundial.</Text>
                </View>
            </View>

            
            <View>
                <Text className="text-xl font-bold text-blue-700 mb-2">
                    2º Bimestre – Brasil e o Mundo no Século XX
                </Text>
                <Text className="text-base font-semibold text-gray-800 mb-2">
                    Objetivo:
                </Text>
                <Text className="text-gray-700 mb-4">
                    Analisar o Brasil e o contexto internacional entre as duas guerras mundiais, além de compreender os impactos do populismo e do autoritarismo.
                </Text>

                <Text className="text-base font-semibold text-gray-800 mb-2">Conteúdos:</Text>
                <View className="mb-4">
                    <Text className="text-gray-700">
                        <Text className="font-medium">Entre-Guerras (1919-1939):</Text> Crise de 1929 e seus impactos no Brasil e no mundo. Ascenção de regimes totalitários: nazismo, fascismo e stalinismo.
                    </Text>
                    <Text className="text-gray-700 mt-2">
                        <Text className="font-medium">Segunda Guerra Mundial (1939-1945):</Text> Causas, fases e consequências. O Brasil na Segunda Guerra.
                    </Text>
                    <Text className="text-gray-700 mt-2">
                        <Text className="font-medium">Brasil República (1930-1945):</Text> Era Vargas: política, economia e cultura. Transformações urbanas e industriais.
                    </Text>
                </View>

                <Text className="text-base font-semibold text-gray-800 mb-2">
                    Atividades Sugeridas:
                </Text>
                <View>
                    <Text className="text-gray-700">• Análise de fontes históricas (imagens de propaganda nazista e discursos de Vargas).</Text>
                    <Text className="text-gray-700">• Estudo dirigido com trechos de filmes/documentários como *A Lista de Schindler* e *Olga*.</Text>
                    <Text className="text-gray-700">• Redação sobre os impactos da Segunda Guerra no Brasil.</Text>
                </View>
            </View>
        </View>
    )
} 