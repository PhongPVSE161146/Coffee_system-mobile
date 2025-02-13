import React, { useRef, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Animated, Dimensions } from "react-native";

const images = [
  require("../../../img/caphe.jpg"),
  require("../../../img/caphe1.jpg"),
  require("../../../img/caphe2.jpg"),
  require("../../../img/caphe4.jpg"),
];

const { width } = Dimensions.get("window");

const LoginScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);
  let currentIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex += 1;
      if (currentIndex >= images.length) {
        currentIndex = 0;
      }

      scrollViewRef.current?.scrollTo({ x: currentIndex * width, animated: true });
    }, 3000); // Tự động cuộn sau 3 giây

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.breadcrumbContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.link}>Trang chủ</Text>
        </TouchableOpacity>

        <Text style={styles.separator}>{' > '}</Text>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.link}>Đăng nhập tài khoản</Text>
        </TouchableOpacity>
      </View>


      {/* Slider ảnh cuộn vô tận mượt mà */}
      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        style={styles.slider}
      >
        {images.map((image, index) => (
          <Image key={index} source={image} style={styles.image1} />
        ))}
      </Animated.ScrollView>

      <Text style={styles.title}>Đăng Nhập Tài Khoản</Text>
      <Text style={styles.subtitle}>
        Nếu bạn chưa có tài khoản,{" "}
        <Text style={styles.link}>đăng kí tại đây</Text>
      </Text>

      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Quên Mật Khẩu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {

  container: { padding: 20, alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 5, marginTop: 10 },
  subtitle: { fontSize: 14, marginBottom: 15 },
  link: { color: "#c49a6c", fontWeight: "bold" },
  input: {
    width: "100%",
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 8,
  },
  breadcrumbContainer: {
    flexDirection: "row",  // Hiển thị ngang
    alignItems: "center",   // Căn giữa theo chiều dọc
    justifyContent: "center",  // Căn giữa theo chiều ngang
    marginBottom: 10,
    marginRight: 130,
  },
  separator: {
    marginHorizontal: 5, // Tạo khoảng cách giữa "Trang chủ" và "Đăng nhập tài khoản"
    color: "#666",
  },
  link: {
    color: "#c49a6c",
    fontWeight: "bold",
    marginRight: 5,
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    width: "100%",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: { color: "white", fontWeight: "bold" },
  forgotPassword: { marginTop: 10, color: 'black' },
  slider: { width: "100%", height: 200 },
  image1: { width, height: 200, resizeMode: "cover", borderRadius: 10 },
};

export default LoginScreen;
