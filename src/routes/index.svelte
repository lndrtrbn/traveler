<script>
	import Layout from "../components/layout/Layout.svelte";
	import Header from "../components/layout/Header.svelte";
	import Sidebar from "../components/layout/Sidebar.svelte";
	import Footer from "../components/layout/Footer.svelte";
	import Aside from "../components/layout/Aside.svelte";
	import Main from "../components/layout/Main.svelte";

	import "../index.scss";
</script>

<Layout>
	<Header />
	<Sidebar />
	<Footer />
	<Aside />
	<Main />
</Layout>
