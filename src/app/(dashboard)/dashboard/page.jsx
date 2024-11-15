import { Fragment } from "react";
import MainPagetitle from '@/layouts/MainPagetitle';

//Import Components
// import { ThemeContext } from "../../../context/ThemeContext";
import HomeComponent from '@/components/dashboard/HomeComponent';

const Home = () => {
	// const { changeBackground } = useContext(ThemeContext);	
	// useEffect(() => {
	// 	changeBackground({ value: "light", label: "Light" });
	// }, []);

		
	return(
		<Fragment>
			<MainPagetitle mainTitle="Dashboard" pageTitle="Dashboard" parentTitle="Home"  />
			<div className="container-fluid">
				<HomeComponent />
			</div>			
		</Fragment>
	)
}
export default Home;