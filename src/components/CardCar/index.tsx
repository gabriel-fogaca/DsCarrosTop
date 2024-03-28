import './style.css';
import carImg from '../../assets/car-card.png';

export default function CardCar() {
    return (
        <>

            <div className="dct-cardCar">
                <div className="dct-car">
                    <img src={carImg} alt="Carro" />
                </div>
                <p>Lorem ipsum dolor</p>
            </div>

            <div className="dct-cardCar">
                <div className="dct-car">
                    <img src={carImg} alt="Carro" />
                </div>
                <p>Lorem ipsum dolor</p>
            </div>

        </>



    );
}