import React from 'react';
import ClassNames from 'classnames';

import { Block, Btn,
        Card, CardHeader, CardContent, CardFooter, Chip,
        Divider,
        Icon, Image, Input,
        List, ListItem,
        Menu,
        Slider,
        Tab, Text } from 'react-essence';

var ChipNew = {
  name: 'ChipNew',
  text: [<span className={'e-text-white'}>new</span>],
  deletable: false,
};
var ChipExclusive = {
  name: 'ChipExclusive',
  text: [<span className={'e-text-white'}>exclusive</span>],
  deletable: false,
};
var ChipExclusiveBlack = {
  name: 'ChipExclusiveBlack',
  text: [<span className={'e-text-white'}>exclusive</span>],
  deletable: false,
};

var tabs = {
 'header': [
   { 'context': (<Text classes={'e-text-grey-900'}>Description</Text>) },
   { 'context': (<Text classes={'e-text-grey-900'}>Shipping</Text>) },
   { 'context': (<Text classes={'e-text-grey-900'}>Sizing</Text>) },
   { 'context': (<Text classes={'e-text-grey-900'}>Reviews</Text>) }
  ],
  'rows': [
   (<Block>
      <Text type={'p'} classes={'e-text-left e-body1 e-padding-top-15'}>
        Lorem ipsum dolor sit amet, te unum legendos persequeris vix, duo ullum malorum adolescens id. Te duis virtute per, forensibus dissentiet te eos. Id cum nisl tritani prompta, solum dicant graece vis in, qui in prima quodsi scripta. Vim dictas pertinax et.
      </Text>
      <Block classes={'brick-6'}>
        <List classes={'flex space-between top-bottom'}>
          <ListItem>Lorem ipsum</ListItem>
          <ListItem>Lorem ipsum</ListItem>
          <ListItem>Lorem ipsum</ListItem>
          <ListItem>Lorem ipsum</ListItem>
        </List>
      </Block>
      <Block classes={'flex start'}>
        <Block className={'margin-r-15'}>
          <Text type={'span'} classes={'e-text-left e-subhead show e-text-uppercase'}>Colors </Text>
          <Block classes={'flex start'}>
            <Btn ripple={false} type={'fab-mini'} className={'fab-mini fab-look e-background-brown-600'} />
            <Btn ripple={false} type={'fab-mini'} className={'fab-mini fab-look e-background-deep-orange-800'} />
            <Btn ripple={false} type={'fab-mini'} className={'fab-mini fab-look e-background-teal-600'} />
          </Block>
        </Block>
        <Block>
          <Text type={'span'} classes={'e-text-left e-subhead show e-text-uppercase'}>Size </Text>
          <Block classes={'flex start'}>
            <Btn label={'38'} ripple={false} type={'fab-mini'} className={'fab-mini fab-look e-background-white'} />
            <Btn label={'39'} ripple={false} type={'fab-mini'} className={'fab-mini fab-look e-background-white'} />
            <Btn label={'40'} ripple={false} type={'fab-mini'} className={'fab-mini fab-look e-text-white e-background-black'} />
            <Btn label={'41'} ripple={false} type={'fab-mini'} className={'fab-mini fab-look e-background-white'} />
            <Btn label={'42'} ripple={false} type={'fab-mini'} className={'fab-mini fab-look e-background-white'} />
            <Btn label={'43'} ripple={false} type={'fab-mini'} className={'fab-mini fab-look e-background-white'} />
          </Block>
        </Block>
      </Block>
      <Block classes={'e-padding-top-15 flex start align-center'}>
        <Text type={'span'} classes={'e-text-left e-title e-text-blue-700 margin-r-15'}>
          <Text type={'strong'}> $320 </Text>
        </Text>
        <Text type={'span'} classes={'e-text-center e-body1 e-text-grey-600 sell'}> $420 </Text>
      </Block>
      <Block classes={'flex start align-center'}>
        <Text type={'span'} classes={'e-text-left e-button margin-r-15 margin-t-7'}> Quantity </Text>
        <Input type={'number'} name={'label'} placeholder={'1'} hint={'1'} min="0" max="999" classes={'input-look margin-r-15'}/>
        <Block classes={'two-btn-cart e-background-grey-900 margin-r-15 margin-t-7'}>
          <Btn icon={"action-shopping-cart"} ripple={true} classes={'e-text-grey-100 e-no-margin e-text-uppercase'} />
          <Btn label={'add to cart'} ripple={true} classes={'e-text-grey-100 e-no-margin e-text-uppercase'} />
        </Block>
      </Block>
    </Block>),
   (<Text>This is the context for Tab 2</Text>),
   (<Text>This is the context for Tab 3</Text>),
   (<Text>This is the context for Tab 4</Text>)
 ]
};

class SilkCommerce extends React.Component {

  render() {
    return (
      <Block className={'e-background-deep-purple-100'}>
        <Block classes={'silkCommerce e-container e-padding-top-25'}>
          <Text type={'h1'} classes={'e-text-center e-display-1 e-text-deep-purple-300'}> Ecommerce </Text>
          <Block classes={'e-row'}>
            <Block classes={'brick brick-12'}>
              <Card classes={'e-background-light-green-400 card-h'}>
                <CardContent classes={'flex'}>
                  <Block classes={'brick-5 e-text-right'}>
                    <Image src={'assets/img/woman.png'} height={'386px'}/>
                  </Block>
                  <Block className={'brick-2 e-text-center flex col-direction justify-end'}>
                    <Block className={'e-margin-bottom-25'}>
                      <Text type={'a'} classes={'e-text-center e-caption'}>
                        <Icon name={"image-lens"} className={"e-text-grey-200"} />
                      </Text>
                      <Text type={'a'} classes={'e-text-center e-caption'}>
                        <Icon name={"image-lens"} className={"e-text-grey-200 v-align style-i-off"} />
                      </Text>
                      <Text type={'a'} classes={'e-text-center e-caption'}>
                        <Icon name={"image-lens"} className={"e-text-grey-200 v-align style-i-off"} />
                      </Text>
                    </Block>
                  </Block>
                  <Block classes={'brick-5 flex col-direction'}>
                    <Text type={'h1'} classes={'e-text-left e-text-white e-display-2 e-no-margin'}> Hella narwhal </Text>
                    <Text type={'h1'} classes={'e-text-left e-text-white e-display-2 e-no-margin'}> Cosby swea. </Text>
                    <Text type={'p'} classes={'e-text-left e-text-white e-body1 e-margin-top-15'}>
                      Lorem ipsum dolor sit amet, his rebum veniam at, ut feugiat maiorum accommodare ius, eos at dicat adolescens.
                    </Text>
                    <Block>
                      <Btn label={'shop now'} ripple={true} classes={'e-text-grey-100 e-text-uppercase e-no-margin e-margin-top-15 explore-btn'} />
                    </Block>
                  </Block>
                </CardContent>
              </Card>
            </Block>
          </Block>

          <Block classes={'e-row'}>
            <Block classes={'brick brick-12'}>
              <Card classes={'bg-boots card-h flex'}>
                <CardContent classes={'flex space-between grow'}>
                  <Block classes={'brick-2 flex col-direction'}>
                    <Text type={'a'} classes={'e-text-left e-display-2'}>
                      <Icon name={"hardware-keyboard-arrow-left"} className={"e-text-white"} />
                    </Text>
                  </Block>
                  <Block classes={'brick-8 e-text-center flex col-direction justify-end'}>
                    <Block classes={'flex col-direction grow'}>
                      <Text type={'p'} classes={'e-text-center e-text-white e-headline e-margin-top-50'}> Spring/Summer </Text>
                      <Text type={'h1'} classes={'e-text-center e-text-white e-display-2 e-no-margin'}> Diemmese SS16 Colection </Text>
                      <Block>
                        <Btn label={'watch collection'} ripple={true} classes={'e-text-grey-100 e-text-uppercase e-no-margin e-margin-top-15 explore-btn'} />
                      </Block>
                    </Block>
                    <Block className={'e-margin-top-25 e-margin-bottom-25'}>
                      <Text type={'a'} classes={'e-text-center e-caption'}>
                        <Icon name={"image-lens"} className={"e-text-grey-200"} />
                      </Text>
                      <Text type={'a'} classes={'e-text-center e-caption'}>
                        <Icon name={"image-lens"} className={"e-text-grey-200 v-align style-i-off"} />
                      </Text>
                      <Text type={'a'} classes={'e-text-center e-caption'}>
                        <Icon name={"image-lens"} className={"e-text-grey-200 v-align style-i-off"} />
                      </Text>
                    </Block>
                  </Block>
                  <Block classes={'brick-2 flex col-direction'}>
                    <Text type={'a'} classes={'e-display-2 e-text-right'}>
                      <Icon name={"hardware-keyboard-arrow-right"} className={"e-text-white"} />
                    </Text>
                  </Block>
                </CardContent>
              </Card>
            </Block>
          </Block>

          <Block classes={'e-row'}>
            <Block classes={'brick brick-3'}>
              <Card classes={'card-h e-background-white flex col-direction'}>
                <CardHeader classes={'border-b'}>
                  <Block classes={'flex space-between '}>
                    <Text type={'strong'} classes={'e-text-center e-body2 e-no-margin e-text-black e-text-uppercase'}> men </Text>
                    <Text type={'strong'} classes={'e-text-center e-body2 e-no-margin e-text-grey-600 e-text-uppercase'}> all </Text>
                  </Block>
                </CardHeader>
                <CardContent classes={'e-no-padding grow'}>
                  <Block classes={'flex space-between padding-16 border-b'}>
                    <Text type={'strong'} classes={'e-text-center e-body2 e-no-margin e-text-black e-text-uppercase'}> blazers </Text>
                    <Text type={'strong'} classes={'e-text-center e-body2 e-no-margin e-text-grey-600 e-text-uppercase'}>
                      <Icon name={"hardware-keyboard-arrow-right"} className={"e-text-black"} />
                    </Text>
                  </Block>
                  <Block classes={'flex space-between padding-16 border-b'}>
                    <Text type={'strong'} classes={'e-text-center e-body2 e-no-margin e-text-black e-text-uppercase'}> jeans </Text>
                    <Text type={'strong'} classes={'e-text-center e-body2 e-no-margin e-text-grey-600 e-text-uppercase'}>
                      <Icon name={"hardware-keyboard-arrow-down"} className={"e-text-black"} />
                    </Text>
                  </Block>
                  <Block classes={'flex space-between padding-list border-b e-background-grey-100'}>
                    <Text type={'strong'} classes={'e-text-center e-body2 e-no-margin e-text-grey-600'}>All Jeans </Text>
                  </Block>
                  <Block classes={'flex space-between padding-list border-b e-background-grey-100'}>
                    <Text type={'strong'} classes={'e-text-center e-body2 e-no-margin e-text-grey-600'}>Straight </Text>
                  </Block>
                  <Block classes={'flex space-between padding-list border-b e-background-grey-100'}>
                    <Text type={'strong'} classes={'e-text-center e-body2 e-no-margin e-text-grey-600'}>Slim Jeans </Text>
                  </Block>
                  <Block classes={'flex space-between padding-list border-b e-background-grey-100'}>
                    <Text type={'strong'} classes={'e-text-center e-body2 e-no-margin e-text-grey-600'}>Selvedge Denim </Text>
                  </Block>
                  <Block classes={'flex space-between padding-16'}>
                    <Text type={'strong'} classes={'e-text-center e-body2 e-no-margin e-text-black e-text-uppercase'}> Knitwear </Text>
                  </Block>
                </CardContent>
              </Card>
            </Block>

            <Block classes={'brick brick-3 flex col-direction space-between'}>
              <Card classes={'e-background-white flex col-direction grow'}>
                <CardHeader className={'border-b'}>
                  <Block classes={'flex space-between'}>
                    <Text type={'strong'} classes={'e-text-center e-body2 e-no-margin e-text-black e-text-uppercase'}>Clothing sizes </Text>
                    <Text type={'strong'} classes={'e-text-center e-body2 e-no-margin e-text-grey-600 e-text-uppercase'}> all </Text>
                  </Block>
                </CardHeader>
                <CardContent className={'e-no-padding grow flex space-around'}>
                  <Block classes={'brick-2 e-text-center grow flex align-center border-r'}>
                    <Text type={'a'} classes={'e-text-center e-body1'}>S </Text>
                  </Block>
                  <Block classes={'brick-2 e-text-center grow flex align-center border-r'}>
                    <Text type={'a'} classes={'e-text-center e-body1'}>M </Text>
                  </Block>
                  <Block classes={'brick-2 e-text-center grow flex align-center border-r'}>
                    <Text type={'a'} classes={'e-text-center e-body1'}>L </Text>
                  </Block>
                  <Block classes={'brick-2 e-text-center grow flex align-center border-r'}>
                    <Text type={'a'} classes={'e-text-center e-body1'}>XL </Text>
                  </Block>
                  <Block classes={'brick-2 e-text-center grow flex align-center'}>
                    <Text type={'a'} classes={'e-text-center e-body1'}>XXL </Text>
                  </Block>
                </CardContent>
              </Card>

              <Card classes={'e-background-white'}>
                <CardHeader classes={'border-b'}>
                  <Block classes={'flex space-between '}>
                    <Text type={'strong'} classes={'e-text-center e-body2 e-no-margin e-text-black e-text-uppercase'}>colors </Text>
                    <Text type={'strong'} classes={'e-text-center e-body2 e-no-margin e-text-grey-600 e-text-uppercase'}> all </Text>
                  </Block>
                </CardHeader>
                <CardContent classes={'e-no-padding'}>
                  <Block>
                    <Text type={'a'} classes={'e-text-left e-body1 colors padding-list border-b border-r'}>
                      <Icon name={"image-brightness-1"} className={"e-text-black"} />
                      Black
                    </Text>
                    <Text type={'a'} classes={'e-text-left e-body1 colors padding-list border-b'}>
                      <Icon name={"image-brightness-1"} className={"e-text-pink-500"} />
                      Pink
                    </Text>
                    <Text type={'a'} classes={'e-text-left e-body1 colors padding-list border-b border-r'}>
                      <Icon name={"image-brightness-1"} className={"e-text-blue-600"} />
                      Blue
                    </Text>
                    <Text type={'a'} classes={'e-text-left e-body1 colors padding-list border-b'}>
                      <Icon name={"image-brightness-1"} className={"e-text-yellow-700"} />
                      Gold
                    </Text>
                    <Text type={'a'} classes={'e-text-left e-body1 colors padding-list border-b border-r'}>
                      <Icon name={"image-brightness-1"} className={"e-text-brown-700"} />
                      Brown
                    </Text>
                    <Text type={'a'} classes={'e-text-left e-body1 colors padding-list border-b'}>
                      <Icon name={"image-brightness-1"} className={"e-text-purple-700"} />
                      Purple
                    </Text>
                    <Text type={'a'} classes={'e-text-left e-body1 colors padding-list border-b border-r'}>
                      <Icon name={"image-brightness-1"} className={"e-text-green-700"} />
                      Green
                    </Text>
                    <Text type={'a'} classes={'e-text-left e-body1 colors padding-list border-b'}>
                      <Icon name={"image-brightness-1"} className={"e-text-red-700"} />
                      Red
                    </Text>
                    <Text type={'a'} classes={'e-text-left e-body1 colors padding-list border-r'}>
                      <Icon name={"image-brightness-1"} className={"e-text-orange-700"} />
                      Orange
                    </Text>
                    <Text type={'a'} classes={'e-text-left e-body1 colors padding-list'}>
                      <Icon name={"image-brightness-1"} className={"e-text-grey-100"} />
                      White
                    </Text>
                  </Block>
                </CardContent>
              </Card>
            </Block>

            <Block classes={'brick brick-3 flex col-direction space-between'}>
              <Block classes={'flex space-between e-margin-bottom-25'}>
                <Block classes={'flex start'}>
                  <Btn icon={"action-shopping-cart"} ripple={true} type={'fab-mini'} className={'fab-mini e-background-white e-text-grey-600 e-no-margin'} />
                  <Block>
                    <Text type={'sup'} classes={'e-text-center e-body1 e-background-blue-600 e-text-white circle-badge badge-position'}>2</Text>
                  </Block>
                </Block>
                <Block>
                  <Block classes={'two-btn-cart e-background-white'}>
                    <Btn icon={"action-shopping-cart"} ripple={true} classes={'e-text-grey-600 e-no-margin e-text-uppercase'} />
                    <Btn label={'2 items in cart'} ripple={true} classes={'e-no-margin e-text-uppercase'} />
                  </Block>
                </Block>
              </Block>
              <Block classes={'arrow-up'}>
              </Block>
              <Card classes={'e-background-white flex col-direction grow'}>
                <CardContent classes={'e-no-padding grow flex col-direction space-around'}>
                  <Block classes={'flex padding-list'}>
                    <Image src={'assets/img/jacket.png'} height={'85px'} width={'75px'} className={'margin-r-15'} />
                    <Block>
                      <Text type={'strong'} classes={'e-text-left e-subhead'}> Reversible Leather</Text>
                      <Text type={'strong'} classes={'e-text-left e-subhead'}> Bomber Jacket</Text>
                      <Text type={'p'} classes={'e-text-left e-subhead e-text-grey-600'}> $180 </Text>
                    </Block>
                  </Block>
                  <Divider classes={'thinnest e-background-grey-100'} />
                  <Block className={' flex padding-list'}>
                    <Image src={'assets/img/jacket2.png'} height={'85px'} width={'75px'} className={'margin-r-15'} />
                    <Block>
                      <Text type={'strong'} classes={'e-text-left e-subhead'}> Reversible Leather</Text>
                      <Text type={'strong'} classes={'e-text-left e-subhead'}> Bomber Jacket</Text>
                      <Text type={'p'} classes={'e-text-left e-subhead e-text-grey-600'}> $180 </Text>
                    </Block>
                  </Block>
                </CardContent>
                <CardFooter classes={'e-text-center'}>
                  <Text type={'p'} classes={'e-text-center e-body1 e-text-grey-600'}>
                    Total:
                    <Text type={'strong'} classes={'e-text-center e-subhead'}> $360 </Text>
                  </Text>
                  <Block>
                    <Btn label={'Check out'} ripple={true} type={'button'} classes={'e-text-black e-text-uppercase e-no-margin explore-btn'} />
                  </Block>
                </CardFooter>
              </Card>
            </Block>

            <Block classes={'brick brick-3 flex col-direction space-between'}>
              <Card className={'e-background-white'}>
                <CardHeader className={'border-b'}>
                  <Text type={'strong'} classes={'e-text-center e-body2 e-no-margin e-text-black e-text-uppercase'}>Price range </Text>
                </CardHeader>
                <CardContent>
                  <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-600 e-margin-bottom-15'}> Your price:
                    <Text type={'strong'} classes={'e-text-center e-body1'}> > $50 </Text>
                  </Text>
                  <Slider discrete={true} step={10} start={0}/>
                </CardContent>
              </Card>

              <Card className={'e-background-white flex col-direction space-between grow'}>
                <CardHeader className={'border-b'}>
                  <Block classes={'flex space-between'}>
                    <Text type={'strong'} classes={'e-text-center e-body2 e-no-margin e-text-black e-text-uppercase'}>brends </Text>
                    <Text type={'strong'} classes={'e-text-center e-body2 e-no-margin e-text-grey-600 e-text-uppercase'}> all </Text>
                  </Block>
                </CardHeader>
                <CardContent classes={'grow e-no-padding'}>
                  <Block classes={'over-card scroll-style'}>
                    <Block>
                      <Block classes={'padding-list border-b'}>
                        <Text type={'a'} classes={'e-text-center e-body2 e-no-margin e-text-grey-600'}>A.P.C </Text>
                      </Block>
                      <Block classes={'padding-list border-b'}>
                        <Text type={'a'} classes={'e-text-center e-body2 e-no-margin e-text-grey-600'}>Acme </Text>
                      </Block>
                      <Block classes={'padding-list border-b'}>
                        <Text type={'a'} classes={'e-text-center e-body2 e-no-margin e-text-grey-600'}>Accessories </Text>
                      </Block>
                      <Block classes={'padding-list border-b'}>
                        <Text type={'a'} classes={'e-text-center e-body2 e-no-margin e-text-grey-600'}>Addidas </Text>
                      </Block>
                      <Block classes={'padding-list border-b'}>
                        <Text type={'a'} classes={'e-text-center e-body2 e-no-margin e-text-grey-600'}>BlueMoon </Text>
                      </Block>
                      <Block classes={'padding-list border-b'}>
                        <Text type={'a'} classes={'e-text-center e-body2 e-no-margin e-text-grey-600'}>Bricks </Text>
                      </Block>
                      <Block classes={'padding-list border-b'}>
                        <Text type={'a'} classes={'e-text-center e-body2 e-no-margin e-text-grey-600'}>Cameleon </Text>
                      </Block>
                      <Block classes={'padding-list border-b'}>
                        <Text type={'a'} classes={'e-text-center e-body2 e-no-margin e-text-grey-600'}>Denim </Text>
                      </Block>
                    </Block>
                  </Block>
                </CardContent>
              </Card>
            </Block>
          </Block>

          <Block classes={'e-row'}>
            <Block classes={'brick brick-12'}>
              <Card classes={'e-background-white card-menu'}>
                <CardContent classes={'e-no-padding flex space-between'}>
                  <Block classes={'border-r padding-16 e-text-left line-h-2'}>
                    <Icon name={"device-multitrack-audio"} className={"e-text-grey-600"} />
                    <Menu type={'cover'} placeholder={'Filters'} classes={'e-text-uppercase'}>
                      <Text className={'e-text-black'}>Sizes</Text>
                      <Text className={'e-text-black'}>Sells</Text>
                      <Text className={'e-text-black'}>Colors</Text>
                    </Menu>
                  </Block>
                  <Block classes={'padding-16 border-r e-text-center grow'}>
                    <Text type={'span'} classes={'e-text-center e-body1 e-text-grey-600 margin-r-15'}> Sort By: </Text>
                    <Menu type={'cover'} placeholder={'Price:Low-High'} classes={'e-background-grey-900 e-text-white padding-menu menu-look'}>
                      <Text className={'e-text-black'}>Price:Best Sells</Text>
                      <Text className={'e-text-black'}>Price:Discount</Text>
                      <Text className={'e-text-black'}>Price:High-Low</Text>
                    </Menu>
                  </Block>
                  <Block classes={'padding-list border-r e-text-center grow line-h-3'}>
                    <Text type={'span'} classes={'e-text-center e-body1 e-text-grey-600 margin-r-15'}> Items per page: </Text>
                    <Btn label={'20'} ripple={false} type={'fab-mini'} classes={'fab-mini e-background-white fab-look'} />
                    <Btn label={'50'} ripple={false} type={'fab-mini'} classes={'fab-mini e-background-white fab-look'} />
                    <Btn label={'90'} ripple={false} type={'fab-mini'} classes={'fab-mini e-background-grey-900 e-text-white fab-look'} />
                  </Block>
                  <Block classes={'padding-16 e-text-right grow line-h-2'}>
                    <Btn label={'clear all'} ripple={true} type={'button'} classes={'e-text-black e-text-uppercase e-no-margin explore-btn'} />
                  </Block>
                </CardContent>
              </Card>
            </Block>
          </Block>

          <Block classes={'e-row'}>
          <Block classes={'brick brick-12'}>
            <Card classes={'e-background-indigo-A100 card-h'}>
              <CardContent classes={'e-no-padding flex'}>
                <Block classes={'brick-4'}>
                  <Image src={'assets/img/make-up.png'} classes={'img-rotate'}/>
                </Block>
                <Block classes={'flex col-direction brick-4'}>
                  <Text type={'h1'} classes={'e-text-center e-display-2 e-text-white'}>Accessories </Text>
                  <Text type={'p'} classes={'e-text-center e-body1 e-text-white'}> Lorem ipsum dolor sit amet, facer falli invidunt eu nec.</Text>
                </Block>
                <Block classes={'brick-4'}>
                  <Image src={'assets/img/bags.png'} />
                </Block>
              </CardContent>
            </Card>
          </Block>
          </Block>

          <Block classes={'e-row'}>
            <Block classes={'brick brick-3'}>
              <Card className={'e-background-white card-h flex'}>
                <CardContent classes={' grow flex col-direction space-between'}>
                  <Block>
                    <Text type={'h3'} classes={'e-text-center'}> Reversible Leather </Text>
                    <Text type={'h3'} classes={'e-text-center'}> Bomber Jacket</Text>
                    <Text type={'p'} classes={'e-text-center e-body1 e-text-grey-600'}> Lorem ipsum dolor sit amet </Text>
                  </Block>
                  <Block className={'e-text-center'}>
                    <Image src={'assets/img/jacket.png'} height={'220px'} />
                  </Block>
                  <Text type={'p'} classes={'e-text-center e-body1'}>
                    <Text type={'small'} classes={'e-text-center e-body1 sell e-text-grey-600'}> $360 </Text>
                    $180
                  </Text>
                </CardContent>
              </Card>
            </Block>
            <Block classes={'brick brick-3'}>
              <Card className={'e-background-white card-h flex'}>
                <CardContent classes={'grow flex col-direction space-between e-text-center'}>
                  <Chip data={ChipNew} classes={'e-text-uppercase'}/>
                  <Block className={'e-text-center'}>
                    <Image src={'assets/img/bags.png'} height={'220px'} />
                  </Block>
                  <Block>
                    <Text type={'h3'} classes={'e-text-center'}> Reversible Leather </Text>
                    <Text type={'h3'} classes={'e-text-center'}> Bomber Jacket</Text>
                    <Text type={'p'} classes={'e-text-center e-body1 e-text-grey-600'}> Lorem ipsum dolor sit amet </Text>
                  </Block>
                  <Text type={'p'} classes={'e-text-center e-body1'}> $360
                  </Text>
                </CardContent>
              </Card>
            </Block>
            <Block classes={'brick brick-3'}>
              <Card className={'e-background-white card-h flex col-direction'}>
                <CardContent classes={'grow flex col-direction space-between e-text-center e-background-grey-100'}>
                  <Block className={'e-text-center'}>
                    <Image src={'assets/img/jacket2.png'} height={'220px'} />
                  </Block>
                </CardContent>
                <CardFooter>
                <Block classes={'flex space-between'}>
                  <Text type={'p'} classes={'e-text-center e-title'}> Reversible Leather </Text>
                  <Text type={'p'} classes={'e-text-center e-title'}> $360</Text>
                </Block>
                <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-600'}> Lorem ipsum dolor sit amet </Text>
                <Block>
                  <Icon name={"action-star-rate"} className={"e-text-yellow-A700 e-title"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-A700 e-title"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-A700 e-title"} />
                  <Icon name={"action-star-rate"} className={"e-text-grey-300 e-title"} />
                  <Icon name={"action-star-rate"} className={"e-text-grey-300 e-title"} />
                </Block>
                </CardFooter>
              </Card>
            </Block>
            <Block classes={'brick brick-3'}>
            <Card className={'e-background-white card-h flex'}>
              <CardContent classes={'grow flex col-direction space-between'}>
                <Block>
                  <Text type={'h3'} classes={'e-text-center'}> Romanian Most Stylish Outdoor</Text>
                </Block>
                <Block className={'e-text-center'}>
                  <Image src={'assets/img/jacket.png'} height={'220px'} />
                </Block>
                <Block className={'e-text-center'}>
                  <Text type={'a'} classes={'e-text-center e-body1'}>
                    <Icon name={"image-brightness-1"} className={"e-text-indigo-500"} />
                  </Text>
                  <Text type={'a'} classes={'e-text-center e-body1'}>
                    <Icon name={"image-brightness-1"} className={"e-text-deep-purple-600"} />
                  </Text>
                  <Text type={'a'} classes={'e-text-center e-body1'}>
                    <Icon name={"image-brightness-1"} className={"e-text-teal-700"} />
                  </Text>
                </Block>
                <Text type={'p'} classes={'e-text-center e-body1'}>$180 </Text>
              </CardContent>
            </Card>
            </Block>
          </Block>

          <Block classes={'e-row'}>
            <Block classes={'brick brick-6'}>
              <Card classes={'bg-tshirt e-background-white card-h flex'}>
                <CardContent classes={'grow flex col-direction'}>
                  <Block classes={'brick-7 flex col-direction'}>
                    <Block>
                      <Chip data={ChipExclusive} classes={'e-text-uppercase'}/>
                    </Block>
                    <Text type={'h3'} classes={'e-text-left e-display-1 e-text-black e-padding-top-15'}> The Men of 2015 in Their Splandour  </Text>
                    <Text type={'p'} classes={'e-body1 e-text-grey-600 e-padding-top-15'}>Lorem ipsum dolor sit amet, vel alia nominati efficiendi id, alterum impedit fuisset quo no, ius id sumo solum percipitur. </Text>
                    <Block classes={'two-btn-cart e-margin-top-25 brick-8'}>
                      <Btn label={'$125'} ripple={false} classes={'e-text-black e-no-margin e-text-uppercase'} />
                      <Btn label={'add to chart'} ripple={false} classes={'e-text-black e-no-margin e-text-uppercase'} />
                    </Block>
                  </Block>
                </CardContent>
              </Card>
            </Block>
            <Block classes={'brick brick-3'}>
              <Card classes={'e-background-teal-300 flex card-h'}>
                <CardContent classes={'brick-8 flex top-bottom'}>
                  <Chip data={ChipExclusiveBlack} classes={'e-text-uppercase'}/>
                  <Image src={'assets/img/shoes.png'} height={'150px'} alt={'shoes'}/>
                  <Text type={'h3'} classes={'e-text-center e-text-white e-title'}> Lorem ipsum dolor sit amet </Text>
                  <Btn label={'$152'} ripple={true} classes={'flat e-background-teal-300 e-text-white e-text-uppercase explore-btn'} />
                </CardContent>
              </Card>
            </Block>
            <Block classes={'brick brick-3'}>
              <Card classes={'e-background-white card-h flex col-direction'}>
                <CardContent classes={'grow'}>
                  <Text type={'h3'} classes={'e-text-center'}> Reversible Leather </Text>
                  <Text type={'h3'} classes={'e-text-center'}> Bomber Jacket</Text>
                  <Text type={'p'} classes={'e-text-center e-body1 e-text-grey-600'}> Lorem ipsum dolor sit amet </Text>
                  <Block className={'e-text-center'}>
                    <Image src={'assets/img/make-up.png'} height={'200px'} />
                  </Block>
                </CardContent>
                <CardFooter classes={'e-background-grey-900 e-text-center'}>
                 <Text type={'strong'} classes={'e-text-center e-body2 e-no-margin e-text-grey-100 e-text-uppercase v-align-tt'}> $135 </Text>
                </CardFooter>
              </Card>
            </Block>
          </Block>

          <Block classes={'e-row'}>
            <Block classes={'brick brick-12'}>
              <Card classes={'e-background-white'}>
                <CardHeader className={'border-b card-h-padding'}>
                  <Block classes={'flex space-between'}>
                    <Text type={'strong'} classes={'e-text-left e-body2 e-no-margin e-text-black e-text-uppercase'}> Related items </Text>
                    <Block classes={'navigation-btn'}>
                      <Btn icon={"hardware-keyboard-arrow-left"} ripple={false} type={'default'} classes={'e-text-grey-900 e-no-margin'} />
                      <Btn icon={"hardware-keyboard-arrow-right"} ripple={false} type={'default'} classes={'e-text-grey-900 e-no-margin'} />
                    </Block>
                  </Block>
                </CardHeader>
                <CardContent classes={'flex space-between'}>
                  <Block classes={'brick brick-3 flex'}>
                    <Image src={'assets/img/jacket.png'} height={'95px'} width={'75px'} className={'margin-r-15'} />
                    <Block>
                      <Text type={'strong'} classes={'e-text-left e-subhead'}> Reversible Leather</Text>
                      <Text type={'strong'} classes={'e-text-left e-subhead'}> Bomber Jacket</Text>
                      <Text type={'p'} classes={'e-text-left e-subhead e-text-grey-600'}> Lorem ipsum dolor sit amet</Text>
                      <Text type={'strong'} classes={'e-text-left e-subhead'}> $180</Text>
                    </Block>
                  </Block>
                  <Block classes={'brick brick-3 flex'}>
                    <Image src={'assets/img/jacket2.png'} height={'95px'} width={'75px'} className={'margin-r-15'} />
                    <Block>
                      <Text type={'strong'} classes={'e-text-left e-subhead'}> Reversible Leather</Text>
                      <Text type={'strong'} classes={'e-text-left e-subhead'}> Bomber Jacket</Text>
                      <Text type={'p'} classes={'e-text-left e-subhead e-text-grey-600'}> Lorem ipsum dolor sit amet</Text>
                      <Text type={'strong'} classes={'e-text-left e-subhead'}> $180</Text>
                    </Block>
                  </Block>
                  <Block classes={'brick brick-3 flex'}>
                    <Image src={'assets/img/jacket.png'} height={'95px'} width={'75px'} className={'margin-r-15'} />
                    <Block>
                      <Text type={'strong'} classes={'e-text-left e-subhead'}> Reversible Leather</Text>
                      <Text type={'strong'} classes={'e-text-left e-subhead'}> Bomber Jacket</Text>
                      <Text type={'p'} classes={'e-text-left e-subhead e-text-grey-600'}> Lorem ipsum dolor sit amet</Text>
                      <Text type={'strong'} classes={'e-text-left e-subhead'}> $180</Text>
                    </Block>
                  </Block>
                  <Block classes={'brick brick-3 flex'}>
                    <Image src={'assets/img/jacket2.png'} height={'95px'} width={'75px'} className={'margin-r-15'} />
                    <Block>
                      <Text type={'strong'} classes={'e-text-left e-subhead'}> Reversible Leather</Text>
                      <Text type={'strong'} classes={'e-text-left e-subhead'}> Bomber Jacket</Text>
                      <Text type={'p'} classes={'e-text-left e-subhead e-text-grey-600'}> Lorem ipsum dolor sit amet</Text>
                      <Text type={'strong'} classes={'e-text-left e-subhead'}> $180</Text>
                    </Block>
                  </Block>
                </CardContent>
              </Card>
            </Block>
          </Block>

          <Block classes={'e-row'}>
            <Block classes={'brick brick-12'}>
            <Card classes={'e-background-white'}>
              <CardContent classes={'e-no-padding flex space-between'}>
                <Block classes={'brick-6 e-no-margin'}>
                  <Image src={'assets/img/dress.jpg'} alt={'dress'} classes={'e-img-rsp full-w margin-b-img'} />
                </Block>
                <Block classes={'brick-6 e-no-margin e-text-left grow flex col-direction space-between'}>
                  <Block classes={'padding-16 border-b grow flex col-direction space-around e-margin-top-15'}>
                    <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-600 e-text-uppercase'}> Spring-Summer collection </Text>
                    <Text type={'h3'} classes={'e-text-left e-display-1 e-text-black'}> Military Brown Skirt </Text>
                    <Block classes={'flex space-between'}>
                      <Text type={'span'} classes={'e-text-left e-title'}> $165</Text>
                      <Block>
                        <Icon name={"action-star-rate"} className={"e-text-yellow-A700 e-title"} />
                        <Icon name={"action-star-rate"} className={"e-text-yellow-A700 e-title"} />
                        <Icon name={"action-star-rate"} className={"e-text-yellow-A700 e-title"} />
                        <Icon name={"action-star-rate"} className={"e-text-grey-300 e-title"} />
                        <Icon name={"action-star-rate"} className={"e-text-grey-300 e-title"} />
                      </Block>
                    </Block>
                    <Block classes={'flex space-between line-h-2'}>
                      <Btn label={'description'} ripple={true} type={'button'} classes={'e-text-white e-background-grey-900 e-button e-no-margin explore-btn'} />
                      <Btn label={'shopping'} ripple={true} type={'button'} classes={'e-text-black e-button e-no-margin explore-btn'} />
                      <Btn label={'sizes'} ripple={true} type={'button'} classes={'e-text-black e-button e-no-margin explore-btn'} />
                      <Btn label={'reviews'} ripple={true} type={'button'} classes={'e-text-black e-button e-no-margin explore-btn'} />
                    </Block>
                    <Text type={'p'} classes={'e-text-left e-body1'}>
                      Lorem ipsum dolor sit amet, te unum legendos persequeris vix, duo ullum malorum adolescens id. Te duis virtute per, forensibus dissentiet te eos. Id cum nisl tritani prompta, solum dicant graece vis in, qui in prima quodsi scripta. Vim dictas pertinax et.
                    </Text>
                    <Block classes={'flex space-between'}>
                      <Block classes={'brick-6'}>
                        <Text type={'span'} classes={'e-text-left e-subhead show e-text-uppercase'}>Colors </Text>
                        <Block classes={'flex start'}>
                          <Btn ripple={false} type={'fab-mini'} className={'fab-mini fab-look e-background-brown-600'} />
                          <Btn ripple={false} type={'fab-mini'} className={'fab-mini fab-look e-background-deep-orange-800'} />
                          <Btn ripple={false} type={'fab-mini'} className={'fab-mini fab-look e-background-teal-600'} />
                          <Btn ripple={false} type={'fab-mini'} className={'fab-mini fab-look e-background-blue-grey-800'} />
                        </Block>
                      </Block>
                      <Block classes={'brick-6'}>
                        <Text type={'span'} classes={'e-text-left e-subhead show e-text-uppercase'}>Size </Text>
                        <Block classes={'flex start'}>
                          <Btn label={'S'} ripple={false} type={'fab-mini'} className={'fab-mini fab-look e-background-white'} />
                          <Btn label={'M'} ripple={false} type={'fab-mini'} className={'fab-mini fab-look e-text-white e-background-black'} />
                          <Btn label={'L'} ripple={false} type={'fab-mini'} className={'fab-mini fab-look e-background-white'} />
                          <Btn label={'XL'} ripple={false} type={'fab-mini'} className={'fab-mini fab-look e-background-white'} />
                        </Block>
                      </Block>
                    </Block>
                  </Block>
                  <Block classes={'padding-16 e-background-grey-100 flex start'}>
                    <Block classes={'two-btn-cart e-background-blue-600 margin-r-15'}>
                      <Btn icon={"action-shopping-cart"} ripple={true} classes={'e-text-grey-100 e-no-margin e-text-uppercase'} />
                      <Btn label={'add to cart'} ripple={true} classes={'e-text-grey-100 e-no-margin e-text-uppercase'} />
                    </Block>
                    <Block classes={'two-btn-cart e-background-white'}>
                      <Btn icon={"action-favorite"} ripple={true} classes={'e-text-grey-600 e-no-margin e-text-uppercase'} />
                      <Btn label={'add to wishlist'} ripple={true} classes={'e-no-margin e-text-uppercase'} />
                    </Block>
                  </Block>
                </Block>
              </CardContent>
            </Card>
            </Block>
          </Block>

          <Block classes={'e-row'}>
            <Block classes={'brick brick-12'}>
              <Card classes={'e-background-white'}>
                <CardContent classes={'e-no-padding flex space-between'}>
                  <Block classes={'brick-6 e-no-margin border-r padding-16 tab-display'}>
                    <Text type={'h3'} classes={'e-text-left e-display-1 e-text-black e-margin-top-15'}> Black Sport Shoe </Text>
                    <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-600 e-text-uppercase'}> Spring-Summer collection </Text>
                    <Tab
                      data={tabs}
                      classes={'e-background-white e-text-grey-50 e-margin-top-15'}
                      indicator={'e-background-grey-500'}/>
                  </Block>
                  <Block classes={'brick-6 e-no-margin padding-16 flex top-bottom space-between align-center'}>
                    <Block classes={'brick-12'}>
                      <Image src={'assets/img/pearshoe.jpg'} classes={'e-img-rsp full-w'} />
                    </Block>
                    <Block classes={'brick-3'}>
                      <Image src={'assets/img/backshoe.jpg'} classes={'e-img-rsp full-w'} />
                    </Block>
                    <Block classes={'brick-3'}>
                      <Image src={'assets/img/bigshoe.jpg'} classes={'e-img-rsp full-w'} />
                    </Block>
                    <Block classes={'brick-3'}>
                      <Image src={'assets/img/pearshoe.jpg'} classes={'e-img-rsp full-w img-active'} height={'136px'}/>
                    </Block>
                    <Block classes={'brick-3'}>
                      <Image src={'assets/img/bigshoe.jpg'} classes={'e-img-rsp full-w'} />
                    </Block>
                  </Block>
                </CardContent>
              </Card>
            </Block>
          </Block>

          <Block classes={'e-row'}>
            <Block classes={'brick brick-12'}>
            <Card classes={'e-background-white card-h flex'}>
              <CardContent classes={'e-no-padding grow flex'}>
                <Block classes={'brick-3 padding-16 grow e-background-grey-100 e-no-margin border-r flex col-direction space-between'}>
                  <Block>
                    <Text type={'h3'} classes={'e-text-left e-display-1 e-text-black e-margin-top-15'}> Most loved items </Text>
                    <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-600'}> Lorem ipsum dolor sit amet, albucius scaevola ea mea, aeque putent vis in. Facete definitiones concludaturque sit te, eos purto corrumpit ea, at nec suas quot fabellas. Ne cibo sale sed. </Text>
                  </Block>
                  <Block classes={'flex space-between align-center'}>
                    <Block classes={'navigation-btn'}>
                      <Btn icon={"hardware-keyboard-arrow-left"} ripple={false} type={'default'} classes={'e-text-grey-900 e-no-margin'} />
                      <Btn icon={"hardware-keyboard-arrow-right"} ripple={false} type={'default'} classes={'e-text-grey-900 e-no-margin'} />
                    </Block>
                    <Text type={'span'} classes={'e-text-right e-body1 e-text-grey-600'}> 3/5 </Text>
                  </Block>
                </Block>
                <Block classes={'brick-3 padding-16 flex col-direction space-between border-r e-no-margin'}>
                  <Text type={'h3'} classes={'e-text-center'}> Reversible Leather </Text>
                  <Text type={'p'} classes={'e-text-center e-body1 e-text-grey-600'}> Lorem ipsum dolor sit amet </Text>
                  <Block className={'e-text-center'}>
                    <Image src={'assets/img/jacket.png'} height={'220px'} />
                  </Block>
                  <Text type={'p'} classes={'e-text-center e-body1'}>
                    <Text type={'strong'}>$360 </Text>
                  </Text>
                </Block>
                <Block classes={'brick-3 padding-16 flex col-direction space-between border-r e-no-margin'}>
                  <Text type={'h3'} classes={'e-text-center'}> Reversible Leather </Text>
                  <Text type={'p'} classes={'e-text-center e-body1 e-text-grey-600'}> Lorem ipsum dolor sit amet </Text>
                  <Block className={'e-text-center'}>
                    <Image src={'assets/img/jacket2.png'} height={'220px'} />
                  </Block>
                  <Text type={'p'} classes={'e-text-center e-body1'}>
                    <Text type={'strong'}>$360 </Text>
                  </Text>
                </Block>
                <Block classes={'brick-3 padding-16 flex col-direction space-between border-r e-no-margin'}>
                  <Text type={'h3'} classes={'e-text-center'}> Reversible Leather </Text>
                  <Text type={'p'} classes={'e-text-center e-body1 e-text-grey-600'}> Lorem ipsum dolor sit amet </Text>
                  <Block className={'e-text-center'}>
                    <Image src={'assets/img/tshirt.png'} height={'220px'} />
                  </Block>
                  <Text type={'p'} classes={'e-text-center e-body1'}>
                    <Text type={'strong'}>$360 </Text>
                  </Text>
                </Block>
              </CardContent>
            </Card>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

module.exports = SilkCommerce;
