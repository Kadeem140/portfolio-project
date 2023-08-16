import Description from "../Components/Description";
import Header from "../Components/Header";
import DisplayList from "../Features/display/DisplayList";
import DataFetching from "../utils/DataFetching";



const HomePage = () => {
    return (
        <>
            <Header />
            <Description />
            <DataFetching />
            {/* <DisplayList /> */}
             {/* <FeaturedProducts /> */}
             {/* <Sale items /> */}
        </>

    )
}

export default HomePage;