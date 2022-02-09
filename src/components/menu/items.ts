import type { MenuItemType } from "../../types/menuItem.type";

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
