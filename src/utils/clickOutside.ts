/**
 * Custom event to detect a click outside an HTML element.
 *
 * @param node The HTML element clicked.
 * @returns A destroy function to remove the listener.
 */
export function clickOutside(node: any) {
	const handleClick = (event: MouseEvent) => {
		if (node && !node.contains(event.target) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent("click_outside", node));
		}
	};

	document.addEventListener("click", handleClick, true);
	return {
		destroy() {
			document.removeEventListener("click", handleClick, true);
		}
	};
}
