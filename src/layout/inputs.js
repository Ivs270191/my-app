import '../App.css';
import { useEffect, useState } from 'react'
import { onChangeHandler } from '../hooks';
import { States } from '../store/myContextStore';
import { Result } from './result';

export const Inputs = () => {
    const [booCheck, setBooCheck] = useState(true)
    const [currency, setCurrency] = useState(0)
    const [broker, setBroker] = useState(0)
    const [terminal, setTerminal] = useState(0)
    const [transport, setTransport] = useState(0)
    const [nds, setNds] = useState(0)
    const [fees, setFees] = useState(0)
    const [orderOne, setOrderOne] = useState(0)
    const [orderTwo, setOrderTwo] = useState(0)
    const [orderThree, setOrderThree] = useState(0)
    const [orderFour, setOrderFour] = useState(0)
    const [orderFive, setorderFive] = useState(0)
    const [orderOneBrokerTerminal, setOrderOneBrokerTerminal] = useState(0)
    const [orderTwoBrokerTerminal, setOrderTwoBrokerTerminal] = useState(0)
    const [orderThreeBrokerTerminal, setOrderThreeBrokerTerminal] = useState(0)
    const [orderFourBrokerTerminal, setOrderFourBrokerTerminal] = useState(0)
    const [orderFiveBrokerTerminal, setOrderFiveBrokerTerminal] = useState(0)
    const [orderOneTransport, setOrderOneTransport] = useState(0)
    const [orderTwoTransport, setOrderTwoTransport] = useState(0)
    const [orderThreeTransport, setOrderThreeTransport] = useState(0)
    const [orderFourTransport, setOrderFourTransport] = useState(0)
    const [orderFiveTransport, setOrderFiveTransport] = useState(0)
    const [orderOneNds, setOrderOneNds] = useState(0)
    const [orderTwoNds, setOrderTwoNds] = useState(0)
    const [orderThreeNds, setOrderThreeNds] = useState(0)
    const [orderFourNds, setOrderFourNds] = useState(0)
    const [orderFiveNds, setOrderFiveNds] = useState(0)
    const [orderOneFees, setOrderOneFees] = useState(0)
    const [orderTwoFees, setOrderTwoFees] = useState(0)
    const [orderThreeFees, setOrderThreeFees] = useState(0)
    const [orderFourFees, setOrderFourFees] = useState(0)
    const [orderFiveFees, setOrderFiveFees] = useState(0)
    const [diffOne, setDiffOne] = useState('')
    const [diffTwo, setDiffTwo] = useState('')
    const [diffThree, setDiffThree] = useState('')
    const [diffFour, setDiffFour] = useState('')
    const [diffFive, setDiffFive] = useState('')
    const onChangeCurrency = (e) => {
        const data = e.target.value
        setCurrency(data)
    }
    const onChangeBroker = (e) => {
        const data = e.target.value
        setBroker(data)
    }
    const onChangeTerminal = (e) => {
        const data = e.target.value
        setTerminal(data)
    }
    const onChangeTransport = (e) => {
        const data = e.target.value
        setTransport(data)
    }
    const onChangeNds = (e) => {
        const data = e.target.value
        setNds(data)
    }
    const onChangeFees = (e) => {
        const data = e.target.value
        setFees(data)
    }
    const onChangeOrderOne = (e) => {
        const data = e.target.value
        setOrderOne(data)
    }
    const onChangeOrderOTwo = (e) => {
        const data = e.target.value
        setOrderTwo(data)
    }
    const onChangeOrderThree = (e) => {
        const data = e.target.value
        setOrderThree(data)
    }
    const onChangeOrderFour = (e) => {
        const data = e.target.value
        setOrderFour(data)
    }
    const onChangeOrderFive = (e) => {
        const data = e.target.value
        setorderFive(data)
    }

    const calculate = () => {
        const numberCurrency = parseFloat(currency)
        const numberBroker = parseFloat(Number((broker / numberCurrency)));
        const numberTerminal = parseFloat(Number((terminal / numberCurrency)));
        const numberTransport = parseFloat(Number((transport / numberCurrency)));
        const numberNds = parseFloat(Number((nds / numberCurrency)));
        const numberFees = parseFloat(Number((fees / numberCurrency)));
        const numberOone = parseFloat(Number((orderOne / numberCurrency)));
        const numberOtwo = parseFloat(Number((orderTwo / numberCurrency)));
        const numberOthree = parseFloat(Number((orderThree / numberCurrency)));
        const numberOfour = parseFloat(Number((orderFour / numberCurrency)));
        const numberOfive = parseFloat(Number((orderFive / numberCurrency)));
        const orderSum = numberOone + numberOtwo + numberOthree + numberOfour + numberOfive;
        const orderOneDif = numberOone / parseFloat(orderSum);
        const orderTwoDif = numberOtwo / parseFloat(orderSum);
        const orderThreeDif = numberOthree / parseFloat(orderSum);
        const orderFourDif = numberOfour / parseFloat(orderSum);
        const orderFiveDif = numberOfive / parseFloat(orderSum);
        const brokerTerminalSum = numberBroker + numberTerminal;
        const brokerTerminalOrderOne = Number((brokerTerminalSum * orderOneDif).toFixed(3));
        const brokerTerminalOrderTwo = Number((brokerTerminalSum * orderTwoDif).toFixed(3));
        const brokerTerminalOrderThree = Number((brokerTerminalSum * orderThreeDif).toFixed(3));
        const brokerTerminalOrderFour = Number((brokerTerminalSum * orderFourDif).toFixed(3));
        const brokerTerminalOrderFive = Number((brokerTerminalSum * orderFiveDif).toFixed(3));
        setOrderOneBrokerTerminal(brokerTerminalOrderOne)
        setOrderTwoBrokerTerminal(brokerTerminalOrderTwo)
        setOrderThreeBrokerTerminal(brokerTerminalOrderThree)
        setOrderFourBrokerTerminal(brokerTerminalOrderFour)
        setOrderFiveBrokerTerminal(brokerTerminalOrderFive)
        setOrderOneTransport(Number(numberTransport * orderOneDif).toFixed(3))
        setOrderTwoTransport(Number(numberTransport * orderTwoDif).toFixed(3))
        setOrderThreeTransport(Number(numberTransport * orderThreeDif).toFixed(3))
        setOrderFourTransport(Number(numberTransport * orderFourDif).toFixed(3))
        setOrderFiveTransport(Number(numberTransport * orderFiveDif).toFixed(3))
        setOrderOneNds(Number(numberNds * orderOneDif).toFixed(3))
        setOrderTwoNds(Number(numberNds * orderTwoDif).toFixed(3))
        setOrderThreeNds(Number(numberNds * orderThreeDif).toFixed(3))
        setOrderFourNds(Number(numberNds * orderFourDif).toFixed(3))
        setOrderFiveNds(Number(numberNds * orderFiveDif).toFixed(3))
        setOrderOneFees(Number(numberFees * orderOneDif).toFixed(3))
        setOrderTwoFees(Number(numberFees * orderTwoDif).toFixed(3))
        setOrderThreeFees(Number(numberFees * orderThreeDif).toFixed(3))
        setOrderFourFees(Number(numberFees * orderFourDif).toFixed(3))
        setOrderFiveFees(Number(numberFees * orderFiveDif).toFixed(3))


        setBooCheck(false)

    }
    const calcDiff = () => {
        const diffOneSum = (((Number(orderOneBrokerTerminal) + Number(orderOneTransport) + Number(orderOneNds) + Number(orderOneFees)) / Number(orderOne)) * 100).toFixed(2);
        const diffTwoSum = (((Number(orderTwoBrokerTerminal) + Number(orderTwoTransport) + Number(orderTwoNds) + Number(orderTwoFees)) / Number(orderTwo)) * 100).toFixed(2);
        const diffThreeSum = (((Number(orderThreeBrokerTerminal) + Number(orderThreeTransport) + Number(orderThreeNds) + Number(orderThreeFees)) / Number(orderThree)) * 100).toFixed(2);
        const diffFourSum = (((Number(orderFourBrokerTerminal) + Number(orderFourTransport) + Number(orderFourNds) + Number(orderFourFees)) / Number(orderFour)) * 100).toFixed(2);
        const diffFiveSum = (((Number(orderFiveBrokerTerminal) + Number(orderFiveTransport) + Number(orderFiveNds) + Number(orderFiveFees)) / Number(orderFive)) * 100).toFixed(2);
        setDiffOne(diffOneSum)
        setDiffTwo(Number(diffTwoSum))
        setDiffThree(Number(diffThreeSum))
        setDiffFour(Number(diffFourSum))
        setDiffFive(Number(diffFiveSum))
        console.log(diffFiveSum, diffFourSum, diffThreeSum, diffTwoSum, diffOneSum)
    }



    return <States.Provider value={{
        currency, broker, terminal, orderOneBrokerTerminal, orderTwoBrokerTerminal, orderThreeBrokerTerminal,
        orderFourBrokerTerminal, orderFiveBrokerTerminal, orderOneTransport, orderTwoTransport, orderThreeTransport, orderFourTransport
        , orderFiveTransport, orderOneNds, orderTwoNds, orderThreeNds, orderFourNds
        , orderFiveNds, orderOneFees, orderTwoFees, orderThreeFees, orderFourFees
        , orderFiveFees, booCheck, diffOne, diffTwo, diffThree, diffFour, diffFive, calcDiff
    }}>
        <> 
        <Result />
        
            <div className="inputsdiv">
                <input onChange={onChangeCurrency} placeholder={'Курс'} />
                <input onChange={onChangeBroker} placeholder={'Брокер'} />
                <input onChange={onChangeTerminal} placeholder={'Терминал'} />
                <input onChange={onChangeTransport} placeholder={'Транспорт'} />
                <input onChange={onChangeNds} placeholder={'НДС'} />
                <input onChange={onChangeFees} placeholder={'Пошлина'} />
                <input onChange={onChangeOrderOne} placeholder={'Заказ №1'} />
                <input onChange={onChangeOrderOTwo} placeholder={'Заказ №2'} />
                <input onChange={onChangeOrderThree} placeholder={'Заказ №3'} />
                <input onChange={onChangeOrderFour} placeholder={'Заказ №4'} />
                <input onChange={onChangeOrderFive} placeholder={'Заказ №5'} />
            </div>
            <button onClick={calculate}>Расчитать</button></>
            


    </States.Provider>
}