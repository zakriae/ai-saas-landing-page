import ButtonSvg from '../assets/svg/ButtonSvg.tsx'

type ButtonProps = {
  className: string;
  href?: string;
  //onClick?: () => void;
  children: React.ReactNode; 
  //px: number;
  white?: boolean;

}
const Button = ({className, href,children, white=false}: ButtonProps) => {
  const classes = `button relative infline-flex items-center justify-center
  h-11 transition-colors hover:text-color-1 px-7 ${white ? 'text-n-8' : 'text-n-1'} ${className||''}`
  const spanClasses = `relative z-10`
 const renderButton = () => (<>
  <button className={classes}><span className={spanClasses}>{children}</span>{ ButtonSvg(false)}</button>
  
                                </>);
 const renderLink = () => (
  <a href={href} className={classes}>
   <span className={spanClasses}>{children}</span>
   {ButtonSvg(false)}
  </a>
 )
  return href ? renderLink() : renderButton();
}

export default Button


  