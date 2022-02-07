import type { MenuItemType } from "src/types/MenuItem.type";

export const ITEMS: MenuItemType[] = [
	{
		title: "File",
		subitems: [
			{
				title: "Hello there",
				extra: "Ctrl+V"
			},
			{
				title: "An other sub-item a bit longer",
				extra: "Alt+Y"
			}
		]
	},
	{
		title: "Edit"
	}
];
