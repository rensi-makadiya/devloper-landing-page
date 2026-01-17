// components/common/Button.jsx
export const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '' 
}) => {
  const variants = {
    primary: 'btn-primary',
    gradient: 'btn-gradient',
    secondary: 'btn-secondary'
  }
  
  return (
    <button 
      className={`btn ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}