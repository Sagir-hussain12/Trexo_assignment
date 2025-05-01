import './design1.css'
const Design1 = () => {
  return (
    <div className="onboarding-container">
      <div className="content-section">
        <h1 className="main-heading">Open. Activate. Bank—all in minutes</h1>
        <p className="subheading">Set up your account instantly and start banking hassle-free.</p>
        
        <div className="features-list">
          <div className="feature-item">
            <span className="arrow">→</span>
            <span className="feature-text">No minimum balance requirement</span>
          </div>
          <div className="feature-item">
            <span className="arrow">→</span>
            <span className="feature-text">Instant account opening with Aadhaar and PAN</span>
          </div>
          <div className="feature-item">
            <span className="arrow">→</span>
            <span className="feature-text">Convenient KYC with video verification</span>
          </div>
          <div className="feature-item">
            <span className="arrow">→</span>
            <span className="feature-text">Free virtual debit card</span>
          </div>
          <div className="feature-item">
            <span className="arrow">→</span>
            <span className="feature-text">Physical debit card delivered with an Insta kit</span>
          </div>
        </div>
      </div>
      
      <div className="steps-section">
        <div className="steps-container">
          <div className="step-line"></div>
          
          <div className="step-item">
            <div className="step-number">1</div>
            <div className="step-text">Step 1: Signup with mobile number</div>
          </div>
          
          <div className="step-item">
            <div className="step-number">2</div>
            <div className="step-text">Step 2: Enter your PAN Card Details</div>
          </div>
          
          <div className="step-item">
            <div className="step-number">3</div>
            <div className="step-text">Step 3: Setup your Savings Account (Jupiter PRO)</div>
          </div>
          
          <div className="step-item">
            <div className="step-number">4</div>
            <div className="step-text">Step 4: Activate your account with KYC</div>
          </div>
          
          <div className="step-item">
            <div className="step-number">5</div>
            <div className="step-text">Step 5: Start using Trexo!</div>
          </div>
          
          <div className="arrow-shape"></div>
          <div className="arrow-shape2"></div>
        </div>
      </div>
      
    </div>
  );
};

export default Design1;