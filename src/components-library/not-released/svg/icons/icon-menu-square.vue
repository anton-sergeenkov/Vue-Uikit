<template>
	<g>
		<rect y="220" width="70" height="70"/>
		<rect y="110" width="70" height="70"/>
		<rect width="70" height="70"/>
		<rect x="110" y="220" width="70" height="70"/>
		<rect x="110" y="110" width="70" height="70"/>
		<rect x="110" width="70" height="70"/>
		<rect x="220" y="220" width="70" height="70"/>
		<rect x="220" y="110" width="70" height="70"/>
		<rect x="220" width="70" height="70"/>
	</g>
</template>

<script>
export default {
	created() {
		this.$emit('ready', '0 0 290 290');
	}
}
</script>
