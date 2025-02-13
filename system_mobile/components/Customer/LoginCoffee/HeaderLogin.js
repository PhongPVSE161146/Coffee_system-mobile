import React, { useState } from "react";
import { StatusBar } from "react-native";
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, TextInput, Button } from "react-native";

const HeaderLogin = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.header}>
      {/* Menu Icon */}
      <TouchableOpacity style={styles.menuIcon}
        onClick={toggleModal}>
        <View style={styles.bar} />
        <View style={styles.bar} />
        <View style={styles.bar} />
      </TouchableOpacity>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require("../../../img/logocoffee.png")} style={styles.logo} />
        <Text style={styles.logoText}>KOHI COFFEE</Text>
      </View>

      {/* Action Icons */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionIcon}>
          <Text style={styles.iconText}>🔍</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionIcon}>
          <Text style={styles.iconText}>🛒</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionIcon} >
          <Text style={styles.iconText}>👤</Text>
        </TouchableOpacity>
      </View>

      {/* Modal for Login/Signup */}
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={toggleModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>

            <Button title="Login" onPress={() => alert("Login clicked")} />
            <Button title="Signup" onPress={() => alert("Signup clicked")} />

            <TouchableOpacity onPress={toggleModal}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#c09c78",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  menuIcon: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: 20,
  },
  bar: {
    width: 25,
    height: 3,
    backgroundColor: "#000",
    borderRadius: 2,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  logo: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  logoText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  actionIcon: {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "transparent",
  },
  iconText: {
    fontSize: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    elevation: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  closeText: {
    color: "red",
    marginTop: 20,
    fontSize: 16,
  },
});

export default HeaderLogin;
