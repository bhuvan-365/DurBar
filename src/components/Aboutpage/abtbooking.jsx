import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './datepicker.css'; // Custom styles to match your theme



const peopleOptions = [
    '1 Person',
    '2 People',
    '3 People',
    '4 People',
    '5 People',
    '6 People',
    '7 People',
    '8 People',
    '9 People',
    '10 People',
];

const generateTimeSlots = () => {
    const times = [];
    let hour = 0;
    let minute = 0;

    while (hour < 12 || (hour === 12 && minute === 0)) {
        const ampm = hour < 12 ? 'AM' : 'PM';
        const displayHour = hour === 0 ? 12 : hour;
        const displayMinute = minute === 0 ? '00' : minute;
        times.push(`${displayHour}:${displayMinute} ${ampm}`);
        minute += 30;
        if (minute === 60) {
            minute = 0;
            hour++;
        }
    }

    return times;
};

const BookTable = () => {
    const [person, setPerson] = useState('1 Person');
    const [showPersonDropdown, setShowPersonDropdown] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('12:00 AM');
    const [showTimeDropdown, setShowTimeDropdown] = useState(false);

    const timeSlots = generateTimeSlots();

    return (
        <>
            <section className="relative bg-[#111d22] py-32 text-white text-center">
                <svg className='absolute' xmlns="http://www.w3.org/2000/svg" width="224.136" height="259.25"><path fill="none" stroke="#9A7D57" stroke-width="1.5" stroke-miterlimit="10" d="M59.649 23.735L-.405 58.472m0 0l61.352 35.511 59.834-34.631m61.557 104.892L60.946 93.982-.412 129.466m0 .001l61.358 35.514 120.965-70.015m-60.704 104.893L60.946 164.98-.406 200.467m.001.001l60.48 35.007M-.408 45.049L38.218 22.99-.408.938m-.003 115.07l38.629-22.059L-.403 71.913m-.003 115.129l38.624-22.056-38.621-22.035m-.008 115.132l38.629-22.099-38.621-22.035M40.591 82.201H58.03l41.521-23.713-41.577-23.72H40.591m0 118.431H58.03l41.521-23.713-41.578-23.721H40.591m0 118.432H58.03l41.521-23.713-41.578-23.721H40.591m61.332-59.103h17.439l41.521-23.711-41.578-23.723h-17.383m.001 118.471h17.439l41.521-23.711-41.578-23.723h-17.383m61.335 11.936h17.439l41.521-23.713-41.578-23.721h-17.383M-.406 31.404l14.737-8.418-14.739-8.41m.003 87.826l14.736-8.418-14.742-8.411m-.001 87.83l14.743-8.421-14.742-8.41m.008 87.824l14.734-8.416-14.742-8.411M20.038 70.305h34.934l20.693-11.818-20.723-11.825H20.038m0 94.641h34.934l20.693-11.818-20.723-11.825H20.038m0 94.641h34.934l20.693-11.818-20.723-11.824H20.038m61.332-82.893h34.934l20.693-11.82-20.723-11.822H81.37m0 94.679h34.934l20.693-11.82-20.723-11.822H81.37m61.334-11.858h34.934l20.693-11.818-20.723-11.824h-34.904M55.79 58.484H-.261m56.051 70.998H-.261M55.79 200.48H-.261M117.122 93.982H61.071m56.051 70.998H61.071m117.383-35.498h-56.051"></path></svg>
                {/* Heading */}
                <p className="text-[#c9ab81] text-sm font2 tracking-wide mb-2">Reservations</p>
                <div className="flex justify-center items-center gap-4 mb-6">
                    <div className="decor">
                        <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                            <path fill="none" stroke="#9C7C57" d="M40.881 8.576L20.562.591.244 8.576" />
                            <path fill="none" stroke="#9C7C57" d="M40.881.591L20.562 8.576.243.591" />
                        </svg>
                    </div>
                    <h2 className="text-5xl font-semibold tracking-[0.4em] text-[#C9AB81] ">BOOK A TABLE</h2>
                    <div className="decor">
                        <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                            <path fill="none" stroke="#9C7C57" d="M40.881 8.576L20.562.591.244 8.576" />
                            <path fill="none" stroke="#9C7C57" d="M40.881.591L20.562 8.576.243.591" />
                        </svg>
                    </div>
                </div>

                {/* Form */}
                <div className="flex flex-wrap justify-center gap-10 text-left mt-20">
                    {/* Person Dropdown */}
                    <div className="relative w-[180px] h-11">
                        <button
                            onClick={() => setShowPersonDropdown(!showPersonDropdown)}
                            className="w-full border border-[#c9ab81] px-4 py-2 bg-transparent text-left"
                        >
                            {person}
                        </button>
                        {showPersonDropdown && (
                            <ul className="absolute z-10 w-full bg-[#0b1315] border border-[#c9ab81] mt-1 max-h-60 overflow-y-auto">
                                {peopleOptions.map((p, i) => (
                                    <li
                                        key={i}
                                        onClick={() => {
                                            setPerson(p);
                                            setShowPersonDropdown(false);
                                        }}
                                        className="px-4 py-2 hover:bg-[#1b1b1b] cursor-pointer"
                                    >
                                        {p}
                                    </li>
                                ))}
                            </ul>
                        )}
                        <p className="text-xs text-[#a2a2a2] mt-1">*Powered by OpenTable</p>
                    </div>

                    {/* Date Picker */}
                    <div className="relative w-[180px] h-11">
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            dateFormat="MM/dd/yyyy"
                            className="w-full border border-[#c9ab81] px-4 py-2 bg-transparent text-white"
                            calendarClassName="custom-datepicker"
                        />
                    </div>

                    {/* Time Picker */}
                    <div className="relative w-[180px] h-11">
                        <button
                            onClick={() => setShowTimeDropdown(!showTimeDropdown)}
                            className="w-full border border-[#c9ab81] px-4 py-2 bg-transparent text-left"
                        >
                            {selectedTime}
                        </button>
                        {showTimeDropdown && (
                            <ul className="absolute z-10 w-full bg-[#0b1315] border border-[#c9ab81] mt-1 max-h-60 overflow-y-auto">
                                {timeSlots.map((time, i) => (
                                    <li
                                        key={i}
                                        onClick={() => {
                                            setSelectedTime(time);
                                            setShowTimeDropdown(false);
                                        }}
                                        className="px-4 py-2 hover:bg-[#1b1b1b] cursor-pointer"
                                    >
                                        {time}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Button */}
                    <button className="border border-[#c9ab81] px-4 py-2 text-[#c9ab81] hover:bg-[#c9ab81] hover:text-black transition h-11">
                        BOOK NOW
                    </button>
                </div>
            </section>
            <section className='py-36 bg-[#0b1315] flex justify-center items-center flex-col gap-7'>
                <div className="logo">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="34.875px" height="46.938px" viewBox="0 0 34.875 46.938" enable-background="new 0 0 34.875 46.938" xml:space="preserve"><polyline fill="none" stroke="#C9AB81" stroke-miterlimit="10" points="0.5,0.003 0.5,36.438 22.875,36.438 "></polyline><polyline fill="none" stroke="#C9AB81" stroke-miterlimit="10" points="6.5,5.003 6.5,41.438 28.875,41.438 "></polyline><polyline fill="none" stroke="#C9AB81" stroke-miterlimit="10" points="12.5,10.003 12.5,46.438 34.875,46.438 "></polyline></svg>
                </div>
                <div className='text-white flex justify-center items-center gap-3    flex-col my-7 text-xl'>
                    <div className="name">Laurent Restaurant & Fine dining, 71 Madison Ave</div>
                    <div className="add">10013 New York, 914-309-7030, reservations@laurent.com</div>
                    <div className="time">Open: 09:00 am – 01:00 pm </div>
                </div>
                <div className="links flex justify-center items-center gap-3 flex-col">
                    <a href="#" className='text-white text-xl '>Facebook</a>
                    <a href="#" className='text-white text-xl'>Instagram</a>
                    <a href="#" className='text-white text-xl'>Trip Advisor</a>
                </div>

            </section>
        </>
    );
};

export default BookTable;