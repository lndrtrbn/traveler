<div id="traveler-layout">
	<slot />
</div>

<style lang="scss">
	#traveler-layout {
		display: grid;
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr auto;
		grid-column-gap: 0px;
		grid-row-gap: 0px;
		width: 100%;
		height: 100%;
	}
</style>
