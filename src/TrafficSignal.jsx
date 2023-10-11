import { Fragment, useEffect, useState } from "react"



const Signals = ({ signals, currentSignal }) => {
    return (
        <Fragment>

            {signals.map(sig =>
                <div className={currentSignal === sig ? `traffic-signal ${currentSignal}` : "traffic-signal"}></div>)}
        </Fragment>
    )

}
export default function TrafficSignal() {
    const [currentSignal, setCurrentSignal] = useState("")
    useEffect(() => {
        const timer1 = setTimeout(() => {
            setCurrentSignal("yellow")
        }, 500)

        const timer2 = setTimeout(() => {
            setCurrentSignal("green")
        }, 3000)
        const timer3 = setTimeout(() => {
            setCurrentSignal("red")
        }, 4000)
        return () => {

            clearTimeout(timer1)
            clearTimeout(timer2)

            clearTimeout(timer3)
            setCurrentSignal()
        }
    }, [])
    useEffect(() => {
        const timer4 = setTimeout(() => {
            setCurrentSignal("yellow");
        }, 4500); // This sets the yellow light duration when transitioning from red to green

        const timer5 = setTimeout(() => {
            setCurrentSignal("green");
        }, 7500); // This sets the green light duration when transitioning from red to green

        const timer6 = setTimeout(() => {
            setCurrentSignal("red");
        }, 10500); // This sets the red light duration when transitioning from red to green

        return () => {
            clearTimeout(timer4);
            clearTimeout(timer5);
            clearTimeout(timer6);
        };
    }, [currentSignal]);

    const signals = ["red", "yellow", "green"]
    return (
        <div className="traffic-signal-container">
            <Signals signals={signals} currentSignal={currentSignal} />
        </div>
    )


}