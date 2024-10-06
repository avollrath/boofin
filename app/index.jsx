import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Image } from 'react-native';
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
       
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View className="w-full justify-center items-center min-h-[85px] px-4">
          <Image 
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
            <Image 
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">Keep your bookshelf organized with <Text className="text-secondary-200">Boofin</Text>
              
            </Text>
          </View>
          
        <Text className="text-sm font-pregular mt-7 text-gray-100 text-center">Take a photo of your book collection, and we'll automatically recognize your books, sort them, and help you manage your personal library effortlessly.</Text>
        <CustomButton 
          title="Get started"
          handlePress={() => router.push('/sign-in')}
          containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar 
      backgroundColor='#161622'
      style='light'
      />
    </SafeAreaView>
  );
}
