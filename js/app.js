import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

/* Use of components */

// Essence core
import {Block} from 'react-essence';

// Components
import SilkHeader from './components/header';
import SilkBlogMagazine from './components/blogmagazine';
import SilkCommerce from './components/commerce';
import SilkMedia from './components/media';
import SilkWidgets from './components/widgets';
import SilkForms from './components/forms';
import SilkNavigation from './components/navigation';
import SilkArticles from './components/articles';
import SilkHeadersFooters from './components/headersfooters';
import SilkFooter from './components/footer';

class Silk extends React.Component {
	render() {
        return(
        	<Block>
        		<SilkHeader />
						<SilkBlogMagazine />
						<SilkCommerce />
						<SilkMedia />
						<SilkWidgets />
						<SilkForms />
						<SilkNavigation />
						<SilkArticles />
						<SilkHeadersFooters />
            <SilkFooter />
        	</Block>
        );
    }
}

ReactDOM.render(
	<Block>
		<Silk />
	</Block>
	,
	document.querySelector('.app')
);
