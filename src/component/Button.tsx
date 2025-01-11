import ButtonSvg from '../assets/svg/ButtonSvg.tsx'

type ButtonProps = {
  className?: string;
  href?: string;
  onClick?: () => void;
  children?: React.ReactNode; 
  //px: number;
  white?: boolean;

}
const Button = ({className, href,children, white=false, onClick}: ButtonProps) => {
  const classes = `button relative inline-flex items-center justify-center
  h-11 transition-colors hover:text-color-1 px-6 ${white ? 'text-n-8' : 'text-n-1'} ${className||''}`
  const spanClasses = `relative z-10`
 const renderButton = () => (<>
  <button className={classes} onClick={onClick}><span className={spanClasses}>{children}</span>{ ButtonSvg(false)}</button>
   </>);
 const renderLink = () => (
  <a href={href} className={classes} onClick={onClick}>
   <span className={spanClasses}>{children}</span>
   {ButtonSvg(white)}
  </a>
 )
  return href ? renderLink() : renderButton();
}

export default Button


  