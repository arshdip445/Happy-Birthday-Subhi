import React, { useState, useEffect } from "react";
import './LoveLetter.css';

function LoveLetter() {
  const [typedText, setTypedText] = useState("");
  const loveMessage = `तुम्हें जन्मदिन की ढेर सारी शुभकामनाएँ शुभी ! तुम्हारी मुस्कान और तुम्हारा साथ मेरे लिए दुनिया से भी बढ़कर हैं। आज के इस खास दिन, मैं बस यही चाहता हूँ कि तुम हमेशा खुश रहो, और तुम्हारी ज़िन्दगी हर दिन एक नई शुरुआत हो।

  जैसे रश्मिरथी में कर्ण ने कहा था, "जो नहीं रुकता, वही इतिहास बनाता है," वैसे ही तुम भी अपनी मेहनत से अपनी दुनिया बदल सकती हो। कर्ण की तरह, तुम्हारे अंदर भी वो ताकत है, जो कभी हार नहीं मानती और अपने लक्ष्य को पाने के लिए हर कठिनाई को पार करती है।
  
  दिनकर जी ने अपनी कविता में यह भी कहा था, "अच्छे कर्मों से ही बनती है एक महानता की पहचान," और यही तुम्हारा रास्ता है। तुम बस एक बात याद रखो — निरंतरता और कड़ी मेहनत ही तुम्हें तुम्हारे सपनों तक ले जाएंगे। जब तुम खुद को थकान महसूस करो, तो बस याद रखना कि तुम्हारे अंदर वो शक्ति है, जो दुनिया को बदल सकती है।
  
  तुम्हारी सफलता में कोई संदेह नहीं है, क्योंकि तुममें वो महानता और मेहनत है जो हर मुश्किल को पार करने के बाद बड़ी मंजिल तक पहुँचती है। आज तुम्हारे इस खास दिन पर, मैं यही कामना करता हूँ कि तुम हर दिन अपने सपनों की ओर बढ़ो, और कभी भी खुद को रुकने मत देना।
  
   तुम मेरी प्रेरणा हो, और मैं हमेशा तुम्हारे साथ हूं, तुम्हारे सपनों को पूरा होते  देखता हु।`;

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < loveMessage.length) {
        setTypedText((prev) => prev + loveMessage[index]);
        index += 1;
      } else {
        clearInterval(typingInterval); // Stop the interval when finished
      }
    }, 50); // Adjust typing speed (50ms per letter)

    return () => clearInterval(typingInterval); // Cleanup interval when component unmounts
  }, []);

  return (
    <div className="love-letter-container">
      <div className="notepad">
        <h2 className="letter-title">प्रेम पत्र</h2>
        <div className="letter-content">
          <p>{typedText}<span className="typing-cursor">|</span></p>
        </div>
      </div>
    </div>
  );
}

export default LoveLetter;
