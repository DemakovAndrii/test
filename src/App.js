import React, { createContext, useEffect, useState } from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import RightBar from "./components/rigthbar/RightBar";
import { AnimatePresence } from "framer-motion";

import "./styles/styles.css";
import UserForm from "./components/header/UserForm";

export const UserContext = createContext({});
export const ImageContext = createContext({});

export default function App() {
	const [user, setUser] = useState({});
	const [activeImage, setActiveImage] = useState(-1);
	const [images, setImages] = useState([]);
	const [formVisible, setFormVisible] = useState(false);

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"));
		if (user?.name && user?.email) {
			setUser(user);
		}
	}, []);

	return (
		<ImageContext.Provider
			value={{ activeImage, setActiveImage, images, setImages }}
		>
			<UserContext.Provider value={{ user, setUser, setFormVisible }}>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						minHeight: "100vh",
						maxWidth: "1600px",
						margin: "0 auto",
					}}
				>
					<Header />
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							width: "100%",
							background: "#d6e7f5",
							maxWidth: 1600,
						}}
					>
						<Navbar />
						<Main />
						<RightBar />
						<AnimatePresence>
							{formVisible && <UserForm />}
						</AnimatePresence>
					</div>
				</div>
			</UserContext.Provider>
		</ImageContext.Provider>
	);
}
