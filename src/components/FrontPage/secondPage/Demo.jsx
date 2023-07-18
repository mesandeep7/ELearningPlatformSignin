import React, { useState } from 'react';

const Login = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
    setError('');
  };

  const handleOtpVerification = () => {
    if (otp === '000000') {
      setIsOtpVerified(true);
      setError('');
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  const handleResendOtp = () => {
    // Logic to resend OTP
    setError('');
  };

  return (
    <div>
      {!isOtpVerified ? (
        <div>
          <h2>Log in</h2>
          <p>We have sent an OTP on your number</p>
          <div>
            <input
              type="text"
              value={otp}
              onChange={handleOtpChange}
              placeholder="Enter OTP"
            />
            <button onClick={handleOtpVerification}>Verify OTP</button>
            {error && <p>{error}</p>}
            <p>
              Resend OTP or Call{' '}
              <a href="mailto:help@unacademy.com">help@unacademy.com</a> if you are having trouble.
            </p>
          </div>
        </div>
      ) : (
        <div>
          <h2>Welcome!</h2>
          <p>Over 10 crore learners trust us for their preparation.</p>
          <p>Learn from 2,000+ India's top educators.</p>
          <p>Access 3,00,000+ live classes, test series, courses, and more for free.</p>
        </div>
      )}
    </div>
  );
};

export default Login;