import React from 'react';
import ClassNames from 'classnames';

import { Btn, AppBar, Block, Text, Utils, Menu, List, ListItem} from 'react-essence';

class SilkHeader extends React.Component {

    render() {
        return (
        	<AppBar classes={'e-background-indigo-800'}>
        		<Block className={'e-container'}>
        			<Block className={'brick-12 e-no-margin'}>
						<List type={'inline'}>
							<ListItem>
								<Text type={'a'} href={'#Home'} className={'e-text-uppercase e-text-white'}>Blog/Magazine</Text>
							</ListItem>
              <ListItem>
								<Text type={'a'} href={'#Home'} className={'e-text-uppercase e-text-white'}>Ecommerce</Text>
							</ListItem>
              <ListItem>
								<Text type={'a'} href={'#Home'} className={'e-text-uppercase e-text-white'}>Media</Text>
							</ListItem>
              <ListItem>
								<Text type={'a'} href={'#Home'} className={'e-text-uppercase e-text-white'}>Widgets</Text>
							</ListItem>
              <ListItem>
								<Text type={'a'} href={'#Home'} className={'e-text-uppercase e-text-white'}>Forms</Text>
							</ListItem>
              <ListItem>
								<Text type={'a'} href={'#Home'} className={'e-text-uppercase e-text-white'}>Navigation</Text>
							</ListItem>
              <ListItem>
								<Text type={'a'} href={'#Home'} className={'e-text-uppercase e-text-white'}>Articles</Text>
							</ListItem>
              <ListItem>
								<Text type={'a'} href={'#Home'} className={'e-text-uppercase e-text-white'}>Headers/Footers</Text>
							</ListItem>
						</List>
					</Block>
				</Block>
			</AppBar>
        );
    }
}

module.exports = SilkHeader;
