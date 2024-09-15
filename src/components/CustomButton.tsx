import { Button } from "@chakra-ui/react";

interface IButton {
	onClick: () => void;
	label: string;
	isLoading?: boolean;
}

export const CustomButton = ({ onClick, label }: IButton) => {
	return (
		<Button onClick={onClick} colorScheme="purple" width="full" mt={4}>
			{label}
		</Button>
	);
};
