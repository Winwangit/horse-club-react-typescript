import style from '../css-modules/Footer.module.css'
const Footer = ()=>{
    return (
    <footer className={style.footer}>
      <p className={style.footer_text}>
        Built with lots of &hearts; by
        <a href="https://github.com/Winwangit" target="_blank"> Winfred Wanjiku</a>
      </p>
    </footer>
    )
};

export default Footer;
    