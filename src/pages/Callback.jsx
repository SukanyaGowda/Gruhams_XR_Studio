import React, { useState } from 'react';
import './Callback.css';
import brightStudioBg from '../assets/callback-bright-bg.png';
import ReviewCarousel from '../components/ReviewCarousel';

const Callback = () => {
    const [viewDate, setViewDate] = useState(new Date(2026, 5, 1));
    const [selectedDay, setSelectedDay] = useState(3);
    const [selectedTime, setSelectedTime] = useState(null);

    const availableDates = [2, 3, 4, 9, 10, 11, 15, 16, 17, 20, 22, 23, 24];
    const timeSlots = ["09:00 AM", "10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM"];

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (year, month) => {
        const firstDay = new Date(year, month, 1).getDay();
        return firstDay === 0 ? 6 : firstDay - 1;
    };

    const handlePrevMonth = () => {
        setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
    };

    const currentYear = viewDate.getFullYear();
    const currentMonthIndex = viewDate.getMonth();
    const daysInMonth = getDaysInMonth(currentYear, currentMonthIndex);
    const firstDayIndex = getFirstDayOfMonth(currentYear, currentMonthIndex);

    return (
        <div className="callback-master-wrapper">
            <div
                className="callback-page"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url(${brightStudioBg})`
                }}
            >
                <div className="callback-container">
                    <span className="clarity-call-tag">15 Minute Clarity Call</span>
                    <h1 className="callback-title">LET US CALL YOU BACK.</h1>

                    <div className="callback-widget">
                        <h2 className="widget-main-title">Clarity Call</h2>

                        <div className="info-box-callback">
                            <div className="info-item">
                                <span>🕒 15 min</span>
                            </div>
                            <div className="info-item">
                                <span>📅 {months[currentMonthIndex]} {selectedDay}, {currentYear}</span>
                            </div>
                            <div className="info-item">
                                <span>🌍 India/Bengaluru (GMT+5:30)</span>
                            </div>
                            <div className="info-item">
                                <span>💬 Request a Callback</span>
                            </div>
                        </div>

                        <div className="selection-area">
                            <div className="calendar-col">
                                <h3 className="area-title">Select Date & Time</h3>
                                <div className="mini-calendar-dark">
                                    <div className="calendar-nav">
                                        <button className="nav-arr" onClick={handlePrevMonth}>‹</button>
                                        <span className="month-display">{months[currentMonthIndex]} {currentYear}</span>
                                        <button className="nav-arr" onClick={handleNextMonth}>›</button>
                                    </div>
                                    <div className="cal-grid-dark">
                                        {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(d => (
                                            <div key={d} className="day-name">{d}</div>
                                        ))}
                                        {[...Array(firstDayIndex)].map((_, i) => <div key={`empty-${i}`} className="day-num padding"></div>)}
                                        {[...Array(daysInMonth)].map((_, i) => {
                                            const day = i + 1;
                                            const isAvailable = availableDates.includes(day) || currentMonthIndex !== 5;
                                            const isSelected = selectedDay === day;
                                            return (
                                                <div
                                                    key={day}
                                                    className={`day-num ${isAvailable ? 'available-dot' : ''} ${isSelected ? 'active-day' : ''}`}
                                                    onClick={() => setSelectedDay(day)}
                                                >
                                                    {day}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div className="time-col">
                                <div className="time-slots-callback" style={{ marginTop: '2rem' }}>
                                    <p style={{ fontSize: '0.8rem', fontWeight: 800, marginBottom: '1rem', color: '#D4AF37' }}>AVAILABLE SLOTS:</p>
                                    {timeSlots.map(time => (
                                        <button
                                            key={time}
                                            className={`time-btn-callback ${selectedTime === time ? 'selected-time' : ''}`}
                                            onClick={() => setSelectedTime(time)}
                                        >
                                            {time}
                                        </button>
                                    ))}

                                    <div style={{ marginTop: '2rem' }}>
                                        <button className="gold-button-pill" style={{ width: '100%', padding: '1rem', borderRadius: '4px', fontSize: '1rem' }}>
                                            CONFIRM CALLBACK
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* NEW: Automated Google Review Carousel */}
            <ReviewCarousel />
        </div>
    );
};

export default Callback;
