import { Divider } from "primereact/divider"
import Estimation from "../../components/Estimation"
import ReviewCard from "../../components/ReviewCard"
import ReasonToSellSaucisse from "../../components/ReasonToSellSaucisse"
export const Estimer = () => {
    return (
        <>
            <div className="home-container">
                <div className="saucisse-home ">
                    <Estimation />
                </div>
            </div>

            <Divider />
            <section className="review-container">
                <ReviewCard />
            </section>
            <Divider />
            <section className="review-container">
                <ReasonToSellSaucisse />
            </section>

        </>
    )
}