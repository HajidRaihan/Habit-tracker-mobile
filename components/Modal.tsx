import React, { useState } from "react";
import { Modal, View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

export default function MyModal() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Tombol untuk membuka modal */}
      <TouchableOpacity style={styles.openButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Open Modal</Text>
      </TouchableOpacity>

      {/* Komponen Modal */}
      <Modal
        animationType="slide" // Pilihan: 'slide', 'fade', 'none'
        transparent={true} // Modal dengan background transparan
        visible={modalVisible} // Tampilkan modal berdasarkan state
        onRequestClose={() => {
          setModalVisible(false); // Ditutup saat back di Android
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>This is the modal content!</Text>

            {/* Tombol untuk menutup modal */}
            <Button title="Close Modal" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  openButton: {
    backgroundColor: "#2196F3",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Overlay hitam transparan
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
