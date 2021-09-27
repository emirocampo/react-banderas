import ContainerFlag from "../components/Home/ContainerFlag";
import Header from "../components/General/Header";

const Home = ({data}) => {
    return(
        <>
            <Header />
            <ContainerFlag data={data}/>
        </>
    );
}

export default Home;