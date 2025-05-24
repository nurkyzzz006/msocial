import scss from './Footer.module.scss'; 
const Footer = () => {
     return (
      <div id={scss.Footer}>
        <div className='container'>
         <div className={scss.content}>
           Footer 
         </div>
        </div>
      </div>
    );
};
export default Footer;