import React from "react";

/**
 * Debounce de uma função
 * 
 * @param callback 
 * @param delay 
 * @api
 */
export function useDebounce(callback: (...args: any[]) => any, delay: number) {
	const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
	return function debounce(...args: any) {
		clearTimeout(timeoutRef.current as NodeJS.Timeout);
		timeoutRef.current = setTimeout(() => {
			callback(...args);
		}, delay);
	}
}