import React, { useState } from 'react';
import './BookNow.css';
import bookingBg from '../assets/booking-bg.png';
import PricingCards from '../components/PricingCards';
import BookNowSocialProof from '../components/BookNowSocialProof';

const BookNow = () => {
    const [viewDate, setViewDate] = useState(new Date(2026, 5, 1));
    const [selectedDay, setSelectedDay] = useState(3);
    const [selectedTime, setSelectedTime] = useState("11:00 AM");

    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: ''
    });

    const timeSlots = ["09:00 AM", "11:00 AM", "01:00 PM", "03:00 PM"];
    const availableDates = [3, 4, 6, 9, 10, 11, 15, 16, 17, 18, 19, 22, 23, 24, 25, 26, 29, 30];

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleDayClick = (day) => {
        if (availableDates.includes(day)) {
            setSelectedDay(day);
        }
    };

    return (
        <div className="page book-now-page">
            <section className="booking-hero-section">
                <div className="booking-background-wrapper">
                    <div className="booking-bg-image" style={{ backgroundImage: `url(${bookingBg})` }}></div>
                    <div className="booking-bg-overlay"></div>
                </div>

                <div className="book-now-container centered">
                    <div className="info-column centered-content">
                        <h1 className="select-title">SELECT YOUR WALKTHROUGH APPOINTMENT</h1>

                        <ul className="info-list centered-list">
                            <li>Expert Guidance – Our design consultant can join your session for strategic layout & build insight <span className="highlight">$160/hr</span></li>
                            <li>Our system automatically reserves a 2-hour window by default</li>
                            <li>Your $200 deposit is fully refundable with a minimum of 24 hours' notice.</li>
                            <li>You can review as many floor plans as needed during your session.</li>
                            <li>Session length is approximately 90-120 minutes.</li>
                        </ul>

                        <div className="booking-widget centered-widget square-widget shadow-2xl">
                            <div className="widget-header">
                                <span className="subtitle">Walkthrough Booking Options</span>
                                <h2>Walkthrough booking</h2>
                                <div className="pay-note">
                                    <span className="icon">≡</span>
                                    <p>Pay a $200 deposit now and lock in your preferred date and time. Balance to be paid on the day of your session.</p>
                                </div>
                            </div>

                            <div className="booking-form-area">
                                <div className="calendar-section reduced">
                                    <h3 className="section-title">1. Select Date & Time</h3>
                                    <div className="calendar-container square">
                                        <div className="calendar-header-nav">
                                            <button className="nav-btn" onClick={handlePrevMonth}>‹</button>
                                            <span className="month-label">{months[currentMonthIndex]} {currentYear}</span>
                                            <button className="nav-btn active" onClick={handleNextMonth}>›</button>
                                        </div>
                                        <div className="real-calendar-grid">
                                            <div className="weekday">Mo</div>
                                            <div className="weekday">Tu</div>
                                            <div className="weekday">We</div>
                                            <div className="weekday">Th</div>
                                            <div className="weekday">Fr</div>
                                            <div className="weekday">Sa</div>
                                            <div className="weekday">Su</div>
                                            {[...Array(firstDayIndex)].map((_, i) => <div key={`empty-${i}`} className="day-cell padding"></div>)}
                                            {[...Array(daysInMonth)].map((_, i) => {
                                                const day = i + 1;
                                                const isAvailable = availableDates.includes(day);
                                                const isSelected = selectedDay === day;
                                                return (
                                                    <div
                                                        key={day}
                                                        className={`day-cell ${isAvailable ? 'available' : 'disabled'} ${isSelected ? 'selected' : ''}`}
                                                        onClick={() => handleDayClick(day)}
                                                    >
                                                        <span className="day-number">{day}</span>
                                                        {isAvailable && !isSelected && <div className="avail-indicator"></div>}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div className="time-slots-mini">
                                            {timeSlots.map(time => (
                                                <button
                                                    key={time}
                                                    className={`time-chip ${selectedTime === time ? 'active' : ''}`}
                                                    onClick={() => setSelectedTime(time)}
                                                >
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="user-details-section">
                                    <h3 className="section-title">2. Your Details</h3>
                                    <div className="booking-inputs">
                                        <div className="input-group">
                                            <label>Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Enter your name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="input-group">
                                            <label>Mobile Number</label>
                                            <input
                                                type="tel"
                                                name="mobile"
                                                placeholder="Enter mobile number"
                                                value={formData.mobile}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="input-group">
                                            <label>Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Enter email address"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button className="book-submit-btn square">
                                Confirm Booking for {months[currentMonthIndex]} {selectedDay}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Added Pricing Plans */}
            <div className="book-plans-section">
                <div className="book-plans-title-area">
                    <h2 className="book-plans-title">Walk-Through Sessions</h2>
                </div>
                <PricingCards />
            </div>

            {/* Use dedicated BookNowSocialProof to avoid affecting Pricing page */}
            <div className="book-social-proof-wrapper">
                <BookNowSocialProof />
            </div>
        </div>
    );
};

export default BookNow;
