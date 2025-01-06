// import React, { useState, useEffect } from 'react';
// import { TextField, Button, Typography, Box } from '@mui/material';

// const OTPComponent = () => {
//     const [otp, setOtp] = useState(["", "", "", ""]); // Stores OTP digits
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [timeLeft, setTimeLeft] = useState(60); // 60 seconds countdown

//     useEffect(() => {
//         // Countdown timer for OTP validity
//         const timer = timeLeft > 0 && setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
//         if (timeLeft === 0) {
//             clearInterval(timer);
//         }
//         return () => clearInterval(timer); // Cleanup the interval when the component unmounts
//     }, [timeLeft]);

//     // Handle OTP input changes
//     const handleChange = (e, index) => {
//         const value = e.target.value;
//         if (/[^0-9]/.test(value)) return; // Only allow numeric values
//         const newOtp = [...otp];
//         newOtp[index] = value;
//         setOtp(newOtp);

//         // Move focus to the next input field when a digit is entered
//         if (value && index < otp.length - 1) {
//             document.getElementById(`otp-input-${index + 1}`).focus();
//         }
//     };

//     // Handle form submission
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);

//         // Join the OTP array to a string
//         const otpString = otp.join("");

//         // Example OTP validation logic (replace with actual API call)
//         if (otpString === "1234") {
//             alert("OTP verified successfully!");
//         } else {
//             alert("Invalid OTP. Please try again.");
//         }

//         setIsSubmitting(false);
//     };

//     return (
//         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
//             <Typography variant="h4" sx={{ mb: 2 }}>Enter OTP</Typography>
//             <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                 <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
//                     {otp.map((digit, index) => (
//                         <TextField
//                             key={index}
//                             id={`otp-input-${index}`}
//                             value={digit}
//                             onChange={(e) => handleChange(e, index)}
//                             inputProps={{ maxLength: 1 }}
//                             variant="outlined"
//                             sx={{ width: 50, height: 50, fontSize: 20, textAlign: 'center' }}
//                             disabled={isSubmitting || timeLeft === 0}
//                             autoFocus={index === 0}
//                         />
//                     ))}
//                 </Box>
//                 <Button
//                     type="submit"
//                     variant="contained"
//                     color="primary"
//                     sx={{ width: '100px', mb: 2 }}
//                     disabled={isSubmitting || otp.some((digit) => digit === "") || timeLeft === 0}
//                 >
//                     {isSubmitting ? "Verifying..." : "Verify OTP"}
//                 </Button>
//             </form>

//             {timeLeft > 0 ? (
//                 <Typography variant="body2">Time left: {timeLeft} seconds</Typography>
//             ) : (
//                 <Typography variant="body2" color="error">OTP expired. Please request a new one.</Typography>
//             )}
//         </Box>
//     );
// };

// export default OTPComponent;

