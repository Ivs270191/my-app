import { useContext } from "react";
import { States } from "../store/myContextStore";

export const Result = () => {
    const { orderOneBrokerTerminal, orderTwoBrokerTerminal, orderThreeBrokerTerminal, orderFourBrokerTerminal, orderFiveBrokerTerminal,
        orderOneTransport, orderTwoTransport, orderThreeTransport, orderFourTransport
        , orderFiveTransport, orderOneNds, orderTwoNds, orderThreeNds, orderFourNds
        , orderFiveNds, orderOneFees, orderTwoFees, orderThreeFees, orderFourFees
        , orderFiveFees, booCheck, diffOne, diffTwo, diffThree, diffFour, diffFive, calcDiff } = useContext(States)


    return booCheck ? '' :
        <><p>Процент затрат : {diffOne}</p>
            <button onClick={calcDiff}>Расчитать затраты</button>
            <p>Заказ №1 <br></br>
                Брокер терминал : {orderOneBrokerTerminal}<br></br>
                Транспорт : {orderOneTransport}<br></br>
                НДС : {orderOneNds}<br></br>
                Пошлина: {orderOneFees}<br></br>
            </p>
            <p>Заказ №2 <br></br>
                Брокер терминал : {orderTwoBrokerTerminal}<br></br>
                Транспорт : {orderTwoTransport}<br></br>
                НДС : {orderTwoNds}<br></br>
                Пошлина: {orderTwoFees}<br></br>
                {/* Процент затрат : {diffTwo} */}
                </p>
            <p>Заказ №3 <br></br>
                Брокер терминал : {orderThreeBrokerTerminal}<br></br>
                Транспорт : {orderThreeTransport}<br></br>
                НДС : {orderThreeNds}<br></br>
                Пошлина: {orderThreeFees}<br></br>
                {/* Процент затрат : {diffThree} */}
                </p>
            <p>Заказ №4 <br></br>
                Брокер терминал : {orderFourBrokerTerminal}<br></br>
                Транспорт : {orderFourTransport}<br></br>
                НДС : {orderFourNds}<br></br>
                Пошлина: {orderFourFees}<br></br>
                {/* Процент затрат : {diffFour} */}
                </p>
            <p>Заказ №5 <br></br>
                Брокер терминал : {orderFiveBrokerTerminal}<br></br>
                Транспорт : {orderFiveTransport}<br></br>
                НДС : {orderFiveNds}<br></br>
                Пошлина: {orderFiveFees}<br></br>
                {/* Процент затрат : {diffFive} */}
                </p>
        </>
}