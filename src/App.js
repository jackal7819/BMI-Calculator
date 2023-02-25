import { useState } from 'react';

const App = () => {
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [bmi, setBmi] = useState('');
    const [message, setMessage] = useState('Enter weight & height');

    const calcBmi = (event) => {
        event.preventDefault();

        if (weight < 1 || height < 1 || isNaN(weight) || isNaN(height)) {
            alert('Please enter a valid weight and height');
        } else {
            let bmi = (weight / height / height) * 10000;
            setBmi(bmi.toFixed(1));

            if (bmi < 25) {
                setMessage('You are underweight');
            } else if (bmi >= 25 && bmi < 30) {
                setMessage('You are a healthy weight');
            } else {
                setMessage('You are overweight');
            }
        }
    };

    const reload = () => {
        window.location.reload();
    };

    let imgSrc;

    if (bmi < 1) {
        imgSrc = null;
    } else {
        if (bmi < 25) {
            imgSrc = require('./assets/underweight.png');
        } else if (bmi >= 25 && bmi < 30) {
            imgSrc = require('./assets/healthy.png');
        } else {
            imgSrc = require('./assets/overweight.png');
        }
    }

    return (
        <div className='app'>
            <div className='container'>
                <h1 className='center'>BMI Calculator</h1>
                <form onSubmit={calcBmi}>
                    <div>
                        <label>Weight (kg)</label>
                        <input
                            value={weight}
                            onChange={(event) => setWeight(event.target.value)}
                        />
                    </div>
                    <div>
                        <label>Height (cm)</label>
                        <input
                            value={height}
                            onChange={(event) => setHeight(event.target.value)}
                        />
                    </div>
                    <div>
                        <button className='btn' type='submit'>
                            Submit
                        </button>
                        <button
                            className='btn btn-outline'
                            onClick={reload}
                            type='submit'>
                            Reload
                        </button>
                    </div>
                </form>

                <div className='center'>
                    <h2>Your BMI is: {bmi}</h2>
                    <p>{message}</p>
                </div>

                <div className='img-container'>
                    <img src={imgSrc} alt='' />
                </div>
            </div>
        </div>
    );
};

export default App;
