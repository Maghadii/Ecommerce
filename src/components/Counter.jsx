import React, { useState, useEffect } from 'react';

const Counter = () => {
    const countDownDate = new Date("Jan 5, 2025 15:37:25").getTime();
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            if (distance < 0) {
                clearInterval(timer);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(timer);
    }, [countDownDate]);

    return (
        <div className="countdown">
            <ul className='p-0 m-0 d-flex gap-3 align-items-center'>
                <li className="countdown__days js-days">
                    Days
                    <h2>{timeLeft.days}</h2>
                </li>
                <li className='double-dote'>:</li>
                <li className="countdown__hours js-hours">
                    Hours
                    <h2>{timeLeft.hours}</h2>
                </li>
                <li className='double-dote'>:</li>
                <li className="countdown__minutes js-minutes">
                    Minutes
                    <h2>{timeLeft.minutes}</h2>
                </li>
                <li className='double-dote'>:</li>
                <li className="countdown__seconds js-seconds">
                    Seconds
                    <h2>{timeLeft.seconds}</h2>
                </li>
            </ul>
        </div>
    );
};

export default Counter;
