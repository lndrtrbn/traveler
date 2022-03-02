<script>
	import Main from "../components/main/Main.svelte";
	import Layout from "../components/layout/Layout.svelte";
	import Header from "../components/header/Header.svelte";
	import Footer from "../components/footer/Footer.svelte";
	import Sidebar from "../components/sidebar/Sidebar.svelte";
	import Aside from "../components/right-aside/Aside.svelte";

	import "../index.scss";
</script>

<Layout>
	<Header />
	<Sidebar />
	<Footer />
	<Aside />
	<Main />
</Layout>
