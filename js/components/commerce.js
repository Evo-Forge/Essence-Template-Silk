import React from 'react';
import ClassNames from 'classnames';

import { Block,
        Btn,
        Card, CardHeader, CardContent, CardFooter,
        Divider,
        Icon,
        Image,
        List, ListItem,
        Menu,
        Slider,
        Text, } from 'react-essence';

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
                      <Text className={'e-text-black'}>Profile</Text>
                      <Text className={'e-text-black'}>Settings</Text>
                      <Text className={'e-text-black'}>Logout</Text>
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
            <Block classes={'brick brick-3'}>brick-3</Block>
            <Block classes={'brick brick-3'}>brick-3</Block>
            <Block classes={'brick brick-3'}>brick-3</Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

module.exports = SilkCommerce;
