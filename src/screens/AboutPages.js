import React from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Bam from "../images/people/Bam.jpg";
import Peraw from "../images/people/Peraw.jpg";
import Puem from "../images/people/Puem.jpg";
import May from "../images/people/May.jpg";

const AboutPages = ({ navigation }) => {
	const data = [
		{ 
			id: 1,
			nisit_id: "6421600093",
			username: "ธนภัทร เอี่ยมอาจ",
			image: Puem,
		},
		{ 
			id: 2,
			nisit_id: "6421600107",
			username: "นภสร พุทธเจริญ",
			image: Peraw,
		},
		{ 
			id: 3,
			nisit_id: "6421600263",
			username: "ศศิธร สีแสด",
			image: Bam,
		},
		{ 
			id: 4,
			nisit_id: "6421602436",
			username: "ชาลินี แซ่ลี้",
			image: May,
		},
	];

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
				<Ionicons name="ios-arrow-back" size={24} color="black" />
			</TouchableOpacity>
			<Text style={styles.title}>About</Text>
			<FlatList
				data={data}
				renderItem={({ item }) => (
					<View style={styles.itemContainer}>
						{/* <Image source={P1} style={styles.photo} /> */}
						<Image source={item.image} style={styles.photo} />
						<Text style={styles.subtitle}>Nisit ID: {item.nisit_id}</Text>
						<Text style={styles.subtitle}>Name: {item.username}</Text>
					</View>
				)}
				keyExtractor={(item) => item.id.toString()} // Convert id to string
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: "#F2F2F2",
	},
	backButton: {
		position: "absolute",
		top: 25,
		left: 16,
		zIndex: 1,
	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
		color: "#BF4741",
		marginBottom: 20,
		textAlign: "center",
	},
	itemContainer: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		padding: 16,
		marginBottom: 16,
		borderRadius: 8,
		elevation: 2,
		margin: 8,
	},
	photo: {
		width: "100%",
		height: 300, // Adjust the height as needed
		resizeMode: "cover",
		borderRadius: 8,
	},
	subtitle: {
		fontSize: 18,
		color: "#333333",
	},
});

export default AboutPages;
