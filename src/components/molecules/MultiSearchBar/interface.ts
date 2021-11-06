export interface MultiSearchBarProps<Options extends Record<string, string>> {
	placeholder: string,
	options: Options,
	selectedOption: keyof Options,
	onOptionSelected: (option: string) => void, 
	onValueDebounced: (text: string) => void,
	width?: string,
}