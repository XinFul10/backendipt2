import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
    const [showServices, setShowServices] = useState(false);

    const onSubmit = (ev) => {
        ev.preventDefault();
    };

    const toggleServices = (ev) => {
        ev.preventDefault();
        setShowServices((prev) => !prev);
    };

    const backgroundImageUrl = "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80";

    const backgroundStyle = {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: `linear-gradient(rgba(62,39,35,0.75), rgba(62,39,35,0.75)), url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: `"Merriweather", Georgia, "Palatino Linotype", "Book Antiqua", Palatino, serif`,
        color: '#f4f1ea',
        padding: '0 20px 40px',
    };

    const navStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 40px',
        backgroundColor: 'rgba(62,39,35,0.85)',
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
        fontWeight: '600',
        fontSize: '1rem',
        color: '#f4f1ea',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backdropFilter: 'saturate(180%) blur(10px)'
    };

    const navLeftStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '24px'
    };

    const navLinksStyle = {
        display: 'flex',
        gap: '20px'
    };

    const navLinkItemStyle = {
        cursor: 'pointer',
        color: '#d2c5b2',
        textDecoration: 'none',
        transition: 'color 0.3s ease'
    };

    const navLinkItemHoverStyle = {
        color: '#f4f1ea',
        textDecoration: 'underline'
    };

    const logoStyle = {
        fontWeight: '700',
        fontSize: '1.6rem',
        fontFamily: "'Georgia', serif",
        color: '#d2b48c',
        userSelect: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
    };

    const logoIconStyle = {
        fontSize: '1.8rem',
        transform: 'rotate(-10deg)'
    };

    const mainContentStyle = {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '40px'
    };

    const formStyle = {
        backgroundColor: 'rgba(245, 240, 235, 0.85)',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 8px 32px 0 rgba(62, 39, 35, 0.37)',
        width: '100%',
        maxWidth: '400px',
        boxSizing: 'border-box',
        color: '#3e271f',
        fontWeight: '500',
        animation: 'fadeInDown 0.8s ease forwards'
    };

    const inputStyle = {
        width: '100%',
        padding: '12px 15px',
        margin: '10px 0',
        borderRadius: '5px',
        border: '1.5px solid #a28c79',
        fontSize: '1rem',
        outline: 'none',
        boxSizing: 'border-box',
        fontFamily: `"Georgia", serif`,
        color: '#3e271f',
        backgroundColor: '#faf7f2'
    };

    const buttonStyle = {
        width: '100%',
        padding: '12px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#6b4f3b',
        color: 'white',
        fontWeight: '700',
        fontSize: '1.1rem',
        cursor: 'pointer',
        marginTop: '16px',
        boxShadow: '0 4px 8px rgba(107, 79, 59, 0.6)',
        transition: 'background-color 0.3s ease'
    };

    const buttonHoverStyle = {
        backgroundColor: '#8c6b4a'
    };

    return (
        <div style={backgroundStyle}>

            <style>
                {`
                @keyframes slideUp {
                    from { transform: translateY(100%); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                @keyframes fadeInDown {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                `}
            </style>

            <nav style={navStyle}>
                <div style={navLeftStyle}>
                    <div style={{ ...logoStyle, fontSize: '1.4rem' }}>Library System</div>
                    <div style={navLinksStyle}>
                        <a
                            href="#"
                            onClick={toggleServices}
                            style={navLinkItemStyle}
                            onMouseEnter={e => e.currentTarget.style.color = navLinkItemHoverStyle.color}
                            onMouseLeave={e => e.currentTarget.style.color = navLinkItemStyle.color}
                        >Our Services</a>
                        <a
                            href="#about"
                            style={navLinkItemStyle}
                            onMouseEnter={e => e.currentTarget.style.color = navLinkItemHoverStyle.color}
                            onMouseLeave={e => e.currentTarget.style.color = navLinkItemStyle.color}
                        >About Us</a>
                        <a
                            href="#help"
                            style={navLinkItemStyle}
                            onMouseEnter={e => e.currentTarget.style.color = navLinkItemHoverStyle.color}
                            onMouseLeave={e => e.currentTarget.style.color = navLinkItemStyle.color}
                        >Help</a>
                    </div>
                </div>
                <div style={logoStyle}>
                    <span role="img" aria-label="book" style={logoIconStyle}>📚</span>
                    <span>Libra</span>
                </div>
            </nav>

            <main style={mainContentStyle}>
                {/* Login Form */}
                {!showServices && (
                    <div style={formStyle}>
                        <form onSubmit={onSubmit}>
                            <h1 style={{ marginBottom: '24px', fontWeight: '700', fontSize: '1.8rem' }}>Login to your Library Account</h1>
                            <input style={inputStyle} type="email" placeholder="Email" />
                            <input style={inputStyle} type="password" placeholder="Password" />
                            <button
                                style={buttonStyle}
                                onMouseOver={e => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                                onMouseOut={e => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                            >
                                Sign in
                            </button>
                            <p style={{ marginTop: '20px', color: '#5a4632', fontStyle: 'italic' }}>
                                You don't have an account? <Link to="/signup" style={{ color: '#7c6447', textDecoration: 'underline' }}>Create Account</Link>
                            </p>
                        </form>
                    </div>
                )}

                {showServices && (
                    <div
                        style={{
                            backgroundColor: '#e3dcd2',
                            color: '#3e271f',
                            padding: '40px',
                            borderRadius: '10px',
                            boxShadow: '0 8px 32px 0 rgba(62, 39, 35, 0.37)',
                            maxWidth: '600px',
                            animation: 'slideUp 0.7s ease forwards'
                        }}
                    >
                        <h2>Our Services</h2>
                        <p>We offer a variety of services to meet your needs.</p>
                        <ul style={{ margin: '20px 0' }}>
                            <li>📚 Service 1: Description of service 1</li>
                            <li>💻 Service 2: Description of service 2</li>
                            <li>🔖 Service 3: Description of service 3</li>
                        </ul>
                        <button
                            onClick={() => setShowServices(false)}
                            style={{
                                ...buttonStyle,
                                marginTop: '20px',
                                backgroundColor: '#5e4330'
                            }}
                        >
                            Return
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
}
