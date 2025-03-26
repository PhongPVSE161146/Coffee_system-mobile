import React from "react";
import { View, Text, FlatList, Image, StyleSheet, Dimensions } from "react-native";


const teaList = [
    { 
        id: "1", 
        name: "Trà Xanh", 
        image: "https://image.tienphong.vn/w890/Uploaded/2025/rwbvhvobvvimsb/2021_12_16/uong-tra-xanh-moi-ngay-co-tot-khong-665x400-8524.jpg", 
        price: "20,000đ",
        description: "Trà xanh giàu chất chống oxy hóa, giúp thanh lọc cơ thể, tăng cường sức đề kháng và làm chậm quá trình lão hóa." 
    },
    { 
        id: "2", 
        name: "Trà Ô Long", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPsPkmUJiUgz1AoivYIITYhpa0ud9eSRD2NQ&s", 
        price: "20,000đ",
        description: "Trà Ô Long có hương vị thanh mát, giúp giảm cân, cải thiện tiêu hóa và hỗ trợ kiểm soát đường huyết." 
    },
    { 
        id: "3", 
        name: "Trà Đen", 
        image: "https://www.oolongteavietnam.com/Data/Sites/1/media/News/279/698/FullSizeImages/ruby-%C4%91%E1%BA%B7c-bi%E1%BB%87t-3.jpg", 
        price: "20,000đ",
        description: "Trà đen có hương vị đậm đà, giàu caffeine, giúp tăng cường tỉnh táo, hỗ trợ hệ tiêu hóa và tốt cho tim mạch." 
    },
    { 
        id: "4", 
        name: "Trà Hoa Cúc", 
        image: "https://win-rd.com/wp-content/uploads/2021/06/10-tac-dung-cua-tra-hoa-cuc-va-cac-tac-dung-phu-can-luu-y-khi-dung-1c-1200x676-1.jpg", 
        price: "20,000đ",
        description: "Trà hoa cúc có tác dụng làm dịu thần kinh, giảm căng thẳng, giúp ngủ ngon và hỗ trợ hệ tiêu hóa." 
    },
    { 
        id: "5", 
        name: "Trà Lài", 
        image: "https://cdn.tgdd.vn/Files/2018/07/14/1101389/loi-ich-va-cach-pha-tra-hoa-nhai-tra-hoa-lai-chuan-vi-tot-cho-suc-khoe-202302211359255720.jpeg", 
        price: "20,000đ",
        description: "Trà Lài có hương thơm quyến rũ, giúp giảm căng thẳng, tăng cường hệ miễn dịch và cải thiện sức khỏe tim mạch." 
    },
];


const TeaScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Các Loại Trà</Text>
            <FlatList
                data={teaList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text style={styles.title}>{item.name}</Text>
                        <Text style={styles.price}>Price: {item.price}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default TeaScreen;

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#f8f8f8", padding: 10 },
    header: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginVertical: 20 },
    card: {
        marginBottom: 20,
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    image: {
        width: width * 0.9,
        height: 150,
        borderRadius: 10,
        resizeMode: "cover",
    },
    title: { fontSize: 18, fontWeight: "bold", padding: 10 , color: 'green'},
    price: { fontSize: 18, fontWeight: "bold", padding: 10, color: "red" },
    description: { fontSize: 18, fontWeight: "bold", padding: 10 },
});
