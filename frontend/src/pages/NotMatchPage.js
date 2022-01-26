import React from 'react';
import { Link } from 'react-router-dom';
import style from './styles.module.css';

const NotMatchPage = () => {
    return (
        <div>
            <section className={style.page_404}>
	<div className="container">
		<div className="row">	
		<div className="col-sm-12 ">
		<div className="col-sm-10 col-sm-offset-1  text-center">
		<div className={style.four_zero_four_bg}>
			<h1 className={style.four_zero_four_bg_h1}>404</h1>
		
		<img src="" alt="" />
		</div>
		
		<div className={style.contant_box_404}>
		<h3 className={style.four_zero_four_bg_h3}>
		Look like you're lost
		</h3>
		
		<p>the page you are looking for not avaible!</p>
		
		<Link to="/" className={style.link_404}>Go to Home</Link>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
        </div>
    );
};

export default NotMatchPage;