import React, { useState } from "react";
import { Box, Heading, VStack, Input, useDisclosure } from "@chakra-ui/react";
import { CustomButton } from "./CustomButton";
import { CustomAlert } from "./CustomAlert";
import { login } from "../services/login";

export const Card = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [isLoading, setIsLoading] = useState(false);

	const handleLogin = async () => {
		setIsLoading(true);
		try {
			const success = await login();
			if (success) {
				onOpen();
			}
		} catch (error) {
			console.error("Login failed:", error);
			// Você pode adicionar um alerta de erro aqui se desejar
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Box
			backgroundColor="#9413DC"
			padding="10px"
			display="flex"
			flexDirection="column"
			alignItems="center"
			p={4}
			flex="1"
		>
			<Box
				backgroundColor="white"
				borderRadius="lg"
				padding={8}
				boxShadow="xl"
				width="400px"
				mt={4}
			>
				{isOpen && (
					<CustomAlert
						status="success"
						title="Bem-vindo! Login realizado com sucesso."
						onClose={onClose}
						autoCloseTime={5000} // Fecha automaticamente após 5 segundos
					/>
				)}
				<Heading as="h1" size="lg" mb={6} textAlign="center" color="#9413DC">
					Faça o login
				</Heading>
				<VStack spacing={4}>
					<Input
						placeholder="Email"
						type="email"
						variant="filled"
						focusBorderColor="#9413DC"
					/>
					<Input
						placeholder="Password"
						type="password"
						variant="filled"
						focusBorderColor="#9413DC"
					/>
					<CustomButton
						onClick={handleLogin}
						label="Entrar"
						isLoading={isLoading}
					/>
				</VStack>
			</Box>
		</Box>
	);
};
