<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title></title>
	<link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
	<div id="app">
		<template>
			<b-container>
				php-vuejs say hi.
			</b-container>
		</template>
	</div>
</body>
<script type="text/javascript" src="assets/js/main.js"></script>
<script>
	script.addEventListener('load', function() {

		const app = new Vue({
			el: '#app',
			components: {

			},
			created() {
				document.title = 'php-vuejs'
			},
			data() {
				return {
					title:''
				}
			},
			methods: {
				
			},
			mounted() {
				
			},
			watch: {
				
			},
			computed: {

			}
		})
	})
</script>
</html>