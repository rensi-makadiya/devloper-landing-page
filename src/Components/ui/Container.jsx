// components/common/Container.jsx
export const Container = ({ children, className = '' }) => {
  return <div className={`container ${className}`}>{children}</div>
}