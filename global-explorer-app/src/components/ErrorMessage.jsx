import "./ErrorMessage.css";

export default function ErrorMessage({ message, retry }) {
  return (
    <div className="error-container">
      <div className="error-icon">⚠️</div>
      <p className="error-message">{message}</p>
      {retry && (
        <button onClick={retry} className="retry-btn">
          Try Again
        </button>
      )}
    </div>
  );
}
