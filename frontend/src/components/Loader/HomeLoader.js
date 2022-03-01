import spinner from './../../resources/image/animationLoading.gif';

const HomeLoader = () => (
    <section style={{ display: "flex", width: "100%", height: "100vh", justifyContent: "center", alignItems: "center", backgroundColor: "#000" }}>
        <img src={spinner} alt="" />
    </section>
)

export default HomeLoader;