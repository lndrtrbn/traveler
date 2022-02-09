<script lang="ts">
	import type { MenuItemType } from "src/types/menuItem.type";
	import { clickOutside } from "../../utils/clickOutside";

	export let item: MenuItemType;
	export let opened = false;
</script>

{#if item}
	<li class="menu-item" class:opened on:click use:clickOutside on:click_outside>
		<span>{item.title}</span>
		{#if opened && item.subitems}
			<ul class="menu-subitems">
				{#each item.subitems as subitem}
					<li class="menu-subitem">
						<span>{subitem.title}</span>
						<span>{subitem.extra}</span>
					</li>
				{/each}
			</ul>
		{/if}
	</li>
{/if}

<style lang="scss">
	.menu-item {
		position: relative;
		display: flex;
		align-items: center;
		cursor: pointer;
		padding: 0 20px;

		&.opened {
			background: var(--darkl);

			& > span {
				color: var(--light);
			}
		}

		&:hover {
			background: var(--darkl);
		}

		.menu-subitems {
			background: var(--dark);
			position: absolute;
			top: calc(100% + 1px);
			left: 0;
			cursor: default;
			padding: 10px 0;
			z-index: 2;
		}

		.menu-subitem {
			display: flex;
			justify-content: space-between;
			padding: 5px 20px;
			cursor: pointer;

			&:hover {
				background: var(--darkl);
			}

			span {
				white-space: nowrap;

				&:not(:last-child) {
					margin-right: 50px;
				}
			}
		}
	}
</style>
