import { router } from "expo-router";
import { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

import { onboarding } from "@/constants";
import CustomButton from "@/components/CustomButton";

const Home = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Skip Button */}
      <TouchableOpacity
        onPress={() => router.replace("/(auth)/sign-up")}
        className="absolute top-5 right-5 z-10"
      >
        <Text className="text-black text-base font-semibold">Skip</Text>
      </TouchableOpacity>

      {/* Swiper */}
      <Swiper
        ref={swiperRef}
        loop={false}
        showsPagination={true}
        paginationStyle={{
          bottom: 90, // Adjust to avoid overlapping with the button
        }}
        dot={
          <View className="w-3 h-3 bg-gray-300 mx-1 rounded-full" />
        }
        activeDot={
          <View className="w-4 h-4 bg-blue-500 mx-1 rounded-full" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View
            key={item.id}
            className="flex-1 items-center justify-center px-6"
          >
            {/* Image */}
            <Image
              source={item.image}
              className="w-full h-[250px] mb-10"
              resizeMode="contain"
            />
            {/* Title */}
            <Text className="text-2xl font-bold text-black text-center mt-8">
              {item.title}
            </Text>
            {/* Description */}
            <Text className="text-base text-gray-500 text-center mt-4 px-4">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>

      {/* Navigation Button */}
      <View className="w-full px-6 mb-8">
        <CustomButton
          title={isLastSlide ? "Get Started" : "Next"}
          onPress={() => {
            if (isLastSlide) {
              router.replace("/(auth)/sign-up");
            } else {
              swiperRef.current?.scrollBy(1);
            }
          }}
          className="w-full py-3"
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
