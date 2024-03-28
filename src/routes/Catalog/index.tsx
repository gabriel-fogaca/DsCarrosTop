import './style.css';
import Header from "../../components/Header";
import Visit from "../../components/Visit";
import CardCar from "../../components/CardCar";
import CardComment from "../../components/CardComment";
import Footer from "../../components/Footer"



export default function Catalog() {

    return (

        <>
            <Header />
            <main>
                <div className="dct-card-car-container">
                    <Visit />
                    <CardCar />
                </div>
                <div className="dct-card-comment-container">
                    <CardComment />
                </div>
            </main>
            <Footer />
        </>


    );


}