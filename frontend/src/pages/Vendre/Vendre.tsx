import { Divider } from "primereact/divider"
import Estimation from "../../components/Estimation"
import ReviewCard from "../../components/ReviewCard"
import ReasonToSellSaucisse from "../../components/ReasonToSellSaucisse"

export const Vendre = () => {
    return (
        <>
            <div className="home-container">
                <div className="saucisse-home ">
                    <Estimation />
                </div>
            </div>

            <Divider />
            <section className="blue-container">
                <ReasonToSellSaucisse />

            </section>
            <Divider />
            <section className="white-container">
                <ReviewCard />

            </section>

        </>
    )
}