import React from 'react';
import ClassNames from 'classnames';

import { Block, Btn,
         Card, CardHeader, CardContent, CardFooter,
         Divider,
         Icon, Image,
         List, ListItem,
         Text } from 'react-essence';

class SilkBlogMagazine extends React.Component {

  render() {
    return (
      <Block className={'e-background-blue-100'}>
        <Block classes={'silkBlogMagazine e-container e-padding-top-25'}>
          <Text type={'h1'} classes={'e-text-center e-display-1 e-text-blue-300'}> Blog / Magazine </Text>
          <Block classes={'e-row'}>
            <Block classes={'brick brick-9 flex col-direction space-between'}>
              <Card classes={'bg-mountain flex top-bottom card-no-border e-no-margin'}>
                <CardHeader classes={'e-text-center full-w'}>
                  <Btn label={'food&drink'} ripple={true} type={'default'} classes={'e-text-grey-100 e-text-uppercase explore-btn'} />
                </CardHeader>
                <CardContent classes={'half-w e-text-center'}>
                  <Text type={'h1'} classes={'e-text-capitalize e-text-white e-display-2'}><b>Stop gratuitous UI Animation</b></Text>
                  <Text type={'p'} classes={'e-text-center e-subhead e-text-grey-200'}>
                    Lorem ipsum dolor sit amet, nulla vidisse impedit vix et. Nam rebum explicari an, vidit nusquam vulputate sea.
                  </Text>
                  <Btn label={'read more'} ripple={true} classes={'e-text-grey-100 e-text-uppercase explore-btn'} />
                </CardContent>
                <CardFooter className={'full-w e-text-center'}>
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
                </CardFooter>
              </Card>

              <Block classes={'e-row flex space-between'}>
                <Block classes={'brick brick-4 e-no-margin'}>
                  <Card className={'e-background-white e-no-margin e-no-padding'}>
                    <CardHeader classes={'e-no-padding relative'}>
                      <Btn label={'travel'} ripple={true} type={'default'} classes={'e-text-grey-100 e-text-uppercase explore-btn btn-position'} />
                      <Image src={'assets/img/road.png'} classes={'e-img-rsp'}/>
                    </CardHeader>
                    <CardContent>
                     <Text type={'h3'} classes={'e-text-left e-title'}> Best of Romania 2015: Revealing what roks </Text>
                     <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-600 e-padding-top-15'}> I whipped the Scotch tape from my pocket and said </Text>
                    </CardContent>
                    <CardFooter className={'e-text-left e-background-grey-100'}>
                      <Text type={'a'} classes={'e-text-center e-body2'}>
                        <Icon name={"action-favorite-outline"} className={"e-text-grey-600 v-align"} />
                      </Text>
                      <Text type={'span'} classes={'e-text-center e-text-grey-600 e-body2 padding-r-15'}> 345</Text>
                      <Text type={'a'} classes={'e-text-center e-body2'}>
                        <Icon name={"communication-messenger"} className={"e-text-grey-600 v-align"} />
                      </Text>
                      <Text type={'span'} classes={'e-text-center e-text-grey-600 e-body2 padding-r-15'}> 19</Text>
                      <Text type={'a'} classes={'e-text-center e-body2'}>
                        <Icon name={"image-panorama-fisheye"} className={"e-text-grey-600 v-align"} />
                      </Text>
                      <Text type={'span'} classes={'e-text-center e-text-grey-600 e-body2 padding-r-15'}> 3 hours ago</Text>
                    </CardFooter>
                  </Card>
                </Block>
                <Block classes={'brick brick-8 e-no-margin flex'}>
                  <Card classes={'e-no-padding e-no-margin e-background-white card-img flex'}>
                    <CardContent className={'flex space-between grow'}>
                      <Block classes={'brick-8 e-no-margin flex space-between'}>
                        <Card className={'e-background-white e-no-margin flex col-direction space-between'}>
                          <CardContent>
                            <Btn label={'cars & moto'} ripple={true} type={'default'} classes={'e-text-orange-A400 e-text-uppercase explore-btn orange'} />
                            <Text type={'strong'} classes={'e-text-left e-title e-padding-top-15 show'}> Lorem ipsum dolor sit amet, vel alia nominati efficiendi </Text>
                            <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-600 e-padding-top-15'}>Lorem ipsum dolor sit amet, vel alia nominati efficiendi id, alterum impedit fuisset quo no, ius id sumo solum percipitur. Vim ex deleniti scaevola contentiones. Harum cotidieque mea et, assum scaevola quo ei.</Text>
                          </CardContent>
                          <CardFooter>
                            <Text type={'a'} classes={'e-text-center e-body2'}>
                              <Icon name={"action-favorite-outline"} className={"e-text-grey-600 v-align"} />
                            </Text>
                            <Text type={'span'} classes={'e-text-center e-text-grey-600 e-body2 padding-r-15'}> 345</Text>
                            <Text type={'a'} classes={'e-text-center e-body2'}>
                              <Icon name={"communication-messenger"} className={"e-text-grey-600 v-align"} />
                            </Text>
                            <Text type={'span'} classes={'e-text-center e-text-grey-600 e-body2 padding-r-15'}> 19</Text>
                            <Text type={'a'} classes={'e-text-center e-body2'}>
                              <Icon name={"image-panorama-fisheye"} className={"e-text-grey-600 v-align"} />
                            </Text>
                            <Text type={'span'} classes={'e-text-center e-text-grey-600 e-body2 padding-r-15'}> 3 hours ago</Text>
                          </CardFooter>
                        </Card>
                      </Block>
                      <Block classes={'brick-4 e-no-margin bg-offroad'}>
                      </Block>
                    </CardContent>
                  </Card>
                </Block>
              </Block>
            </Block>
            <Block classes={'brick brick-3'}>
              <Card className={'e-background-white e-no-margin'}>
                <CardHeader className={'border-b'}>
                  <Text type={'strong'} classes={'e-text-left e-subhead e-text-uppercase e-no-margin'}> News </Text>
                </CardHeader>
                <CardContent className={'duster-card'}>
                  <Image src={'assets/img/duster.jpg'} height={'150px'} width={'100%'} />
                  <List type={'navigation'}>
                    <ListItem>
                      <Text type={'span'} classes={'e-text-center e-text-grey-600 e-body2 padding-r-15'}> 3 hours ago</Text>
                      <Text type={'h3'} classes={'e-text-left e-title'}> Lorem ipsum dolor sit amet, vel alia nominati efficiendi id. </Text>
                      <Divider classes={'thin e-background-grey-100'} />
                    </ListItem>
                    <ListItem>
                      <Text type={'span'} classes={'e-text-center e-text-grey-600 e-body2 padding-r-15'}> 3 hours ago</Text>
                      <Text type={'h3'} classes={'e-text-left e-title'}> Lorem ipsum dolor sit amet, vel alia nominati efficiendi id. </Text>
                      <Divider classes={'thin e-background-grey-100'} />
                    </ListItem>
                    <ListItem>
                      <Text type={'span'} classes={'e-text-center e-text-grey-600 e-body2 padding-r-15'}> 3 hours ago</Text>
                      <Text type={'h3'} classes={'e-text-left e-title'}> Lorem ipsum dolor sit amet, vel alia nominati efficiendi id. </Text>
                      <Divider classes={'thin e-background-grey-100'} />
                    </ListItem>
                    <ListItem>
                      <Text type={'span'} classes={'e-text-center e-text-grey-600 e-body2 padding-r-15'}> 3 hours ago</Text>
                      <Text type={'h3'} classes={'e-text-left e-title'}> Lorem ipsum dolor sit amet, vel alia nominati efficiendi id. </Text>
                      <Divider classes={'thin e-background-grey-100'} />
                    </ListItem>
                    <ListItem>
                      <Text type={'span'} classes={'e-text-center e-text-grey-600 e-body2 padding-r-15'}> 3 hours ago</Text>
                      <Text type={'h3'} classes={'e-text-left e-title'}> Lorem ipsum dolor sit amet, vel alia nominati efficiendi id. </Text>
                      <Divider classes={'thin e-background-grey-100'} />
                    </ListItem>
                  </List>
                </CardContent>
                <CardFooter classes={'e-background-grey-900'}>
                  <Text type={'p'} classes={'e-text-center e-body1 e-text-grey-100 e-text-uppercase e-no-margin'}> all news </Text>
                </CardFooter>
              </Card>
            </Block>
          </Block>

          <Block classes={'e-row'}>
            <Block classes={'brick brick-9'}>
              <Block classes={' e-row flex'}>
                <Block classes={'brick brick-4'}>
                  <Card className={'e-background-white e-no-margin e-no-padding'}>
                    <CardHeader classes={'e-no-padding relative'}>
                      <Image src={'assets/img/balea.png'} classes={'e-img-rsp'}/>
                    </CardHeader>
                    <CardContent>
                      <Btn label={'food & drink'} ripple={true} type={'default'} classes={'e-text-pink-700 e-text-uppercase explore-btn pink'} />
                      <Text type={'h3'} classes={'e-text-left e-title'}> Best of Romania 2015: Revealing what roks </Text>
                    </CardContent>
                  </Card>
                </Block>
                <Block classes={'brick brick-4'}>
                  <Card className={'e-background-white e-no-margin'}>
                    <CardContent classes={'bg-style e-text-left flex start top-bottom'}>
                      <Block>
                        <Btn label={'style'} ripple={true} type={'default'} classes={'e-text-grey-100 e-text-uppercase explore-btn'} />
                      </Block>
                      <Block>
                        <Text type={'h3'} classes={'e-text-left e-title e-text-white e-padding-top-15'}>How to Trim Out of Control Musthache </Text>
                        <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-200 e-padding-top-15'}> I whipped the Scotch tape from my pocket and said </Text>
                      </Block>
                    </CardContent>
                    <CardFooter>
                      <Block classes={'flex start'}>
                        <Text type={'a'}>
                          <Image src={'assets/img/profile.jpg'} alt={'Star Wars'} classes={'e-avatar'}/>
                        </Text>
                        <Block classes={'e-text-left'}>
                          <Text type={'p'} classes={'e-no-margin'}>Johnny Brava</Text>
                          <Text type={'span'} classes={'e-text-left e-caption'}>3 hours ago</Text>
                        </Block>
                      </Block>
                    </CardFooter>
                  </Card>
                </Block>
                <Block classes={'brick brick-4'}>
                  <Card classes={'bg-trans e-no-margin'}>
                    <CardContent className={'e-text-center flex top-bottom'}>
                      <Block>
                        <Btn label={'travel'} ripple={true} type={'default'} classes={'e-text-grey-100 e-text-uppercase explore-btn'} />
                      </Block>
                      <Block>
                        <Text type={'h3'} classes={'e-title e-text-white e-padding-top-15'}>Best of Romania 2015: Revealing what roks </Text>
                        <Text type={'p'} classes={'e-body1 e-text-grey-200 e-padding-top-15'}> I whipped the Scotch tape from my pocket and said </Text>
                      </Block>
                      <Block>
                        <Divider classes={'thinnest e-background-grey-400'} />
                        <Text type={'a'} classes={'e-text-center e-body2'}>
                          <Icon name={"action-favorite-outline"} className={"e-text-grey-300 v-align"} />
                        </Text>
                        <Text type={'span'} classes={'e-text-center e-text-grey-300 e-body2 padding-r-15'}> 345</Text>
                        <Text type={'a'} classes={'e-text-center e-body2'}>
                          <Icon name={"communication-messenger"} className={"e-text-grey-300 v-align"} />
                        </Text>
                        <Text type={'span'} classes={'e-text-center e-text-grey-300 e-body2 padding-r-15'}> 19</Text>
                        <Text type={'a'} classes={'e-text-center e-body2'}>
                          <Icon name={"image-panorama-fisheye"} className={"e-text-grey-300 v-align"} />
                        </Text>
                        <Text type={'span'} classes={'e-text-center e-text-grey-300 e-body2 padding-r-15'}> 3 hours ago</Text>
                      </Block>
                    </CardContent>
                  </Card>
                </Block>
              </Block>
              <Block classes={'e-row'}>
                <Block classes={'brick brick-8'}>
                  <Card classes={'e-background-deep-orange-400 e-no-margin'}>
                    <CardContent classes={'flex space-between e-no-padding'}>
                      <Block classes={'padding-16'}>
                        <Btn label={'style'} ripple={true} type={'default'} classes={'e-text-grey-100 e-text-uppercase explore-btn'} />
                        <Text type={'h3'} classes={'e-text-left e-display-1 e-text-white e-padding-top-15'}> The Women of 2015 in Their Splandour  </Text>
                        <Text type={'p'} classes={'e-body1 e-text-grey-200 e-padding-top-15'}>Lorem ipsum dolor sit amet, vel alia nominati efficiendi id, alterum impedit fuisset quo no, ius id sumo solum percipitur. </Text>
                        <Block classes={'two-btn e-margin-top-25'}>
                          <Btn label={'read more'} ripple={true} classes={'e-text-grey-100 e-no-margin e-text-uppercase'} />
                          <Btn label={'start slideshow'} ripple={true} classes={'e-text-grey-100 e-no-margin e-text-uppercase'} />
                        </Block>
                      </Block>
                      <Block classes={'e-background-deep-orange-400 flex e-v-end'}>
                        <Image src={'assets/img/girl.png'} height={'370'}/>
                      </Block>
                    </CardContent>
                  </Card>
                </Block>
                <Block classes={'brick brick-4'}>
                  <Card className={'bg-culture e-no-margin'}>
                    <CardHeader>
                      <Btn label={'culture'} ripple={true} type={'default'} classes={'e-text-grey-100 e-text-uppercase explore-btn'} />
                    </CardHeader>
                    <CardContent classes={'flex end'}>
                      <Text type={'h3'} classes={'e-text-left e-text-white e-title'}> Best of Romania 2015: Revealing what roks </Text>
                    </CardContent>
                    <CardFooter>
                      <Text type={'span'} classes={'e-text-center e-text-grey-300 e-body2 padding-r-15'}>by Ninna Ricci</Text>
                    </CardFooter>
                  </Card>
                </Block>
              </Block>
            </Block>
            <Block classes={'brick brick-3 grow'}>
              <Card className={'e-background-white e-no-margin'}>
                <CardHeader className={'border-b e-text-center'}>
                  <Text type={'strong'} classes={'e-text-center e-subhead e-text-uppercase e-no-margin'}>Latest</Text>
                </CardHeader>
                <CardContent className={'card-h-latest'}>
                  <List type={'navigation'}>
                    <ListItem className={'e-text-center'}>
                      <Btn label={'food & drink'} ripple={true} type={'default'} classes={'e-text-pink-700 e-text-uppercase explore-btn pink'} />
                      <Text type={'h3'} classes={'e-title e-padding-top-15'}> Lorem ipsum dolor sit amet, vel alia nominati efficiendi id. </Text>
                      <Text type={'span'} classes={'e-text-grey-600 e-body2 padding-r-15'}> Johnny Brava</Text>
                      <Divider classes={'thin e-background-grey-100'} />
                    </ListItem>
                    <ListItem className={'e-text-center'}>
                      <Btn label={'sport'} ripple={true} type={'default'} classes={'e-text-green-600 e-text-uppercase explore-btn green'} />
                      <Text type={'h3'} classes={'e-title e-padding-top-15'}> Lorem ipsum dolor sit amet, vel alia nominati efficiendi id. </Text>
                      <Text type={'span'} classes={'e-text-grey-600 e-body2 padding-r-15'}> Johnny Brava</Text>
                      <Divider classes={'thin e-background-grey-100'} />
                    </ListItem>
                    <ListItem className={'e-text-center'}>
                      <Btn label={'cars & moto'} ripple={true} type={'default'} classes={'e-text-orange-A400 e-text-uppercase explore-btn orange'} />
                      <Text type={'h3'} classes={'e-title e-padding-top-15'}> Lorem ipsum dolor sit amet, vel alia nominati efficiendi id. </Text>
                      <Text type={'span'} classes={'e-text-grey-600 e-body2 padding-r-15'}> Johnny Brava</Text>
                      <Divider classes={'thin e-background-grey-100'} />
                    </ListItem>
                    <ListItem className={'e-text-center'}>
                      <Btn label={'style'} ripple={true} type={'default'} classes={'e-text-blue-600 e-text-uppercase explore-btn blue'} />
                      <Text type={'h3'} classes={'e-title e-padding-top-15'}> Lorem ipsum dolor sit amet, vel alia nominati efficiendi id. </Text>
                      <Text type={'span'} classes={'e-text-grey-600 e-body2 padding-r-15'}> Johnny Brava</Text>
                    </ListItem>
                  </List>
                </CardContent>
                <CardFooter classes={'e-background-grey-900'}>
                  <Text type={'p'} classes={'e-text-center e-body1 e-text-grey-100 e-text-uppercase e-no-margin'}>show more</Text>
                </CardFooter>
              </Card>
            </Block>
          </Block>

          <Block classes={'e-row'}>
            <Block classes={'brick brick-12'}>
              <Card classes={'e-background-white e-no-margin'}>
               <CardContent classes={'flex'}>
                 <Block classes={'flex margin-r-15'}>
                   <Image src={'assets/img/castel1.png'} height={'75px'} className={'margin-r-15'} />
                   <Block>
                     <Text type={'p'} classes={'e-text-left e-subhead e-text-deep-purple-700 e-text-uppercase'}> Travel </Text>
                     <Text type={'strong'} classes={'e-text-left e-subhead'}>Lorem ipsum dolor sit amet, ad vide ipsum delicatissimi sed. </Text>
                   </Block>
                 </Block>
                 <Block classes={'flex margin-r-15'}>
                   <Image src={'assets/img/castel1.png'} height={'75px'} className={'margin-r-15'} />
                   <Block>
                     <Text type={'p'} classes={'e-text-left e-subhead e-text-deep-purple-700 e-text-uppercase'}> Travel </Text>
                     <Text type={'strong'} classes={'e-text-left e-subhead'}>Lorem ipsum dolor sit amet, ad vide ipsum delicatissimi sed. </Text>
                   </Block>
                 </Block>
                 <Block classes={'flex margin-r-15'}>
                   <Image src={'assets/img/castel1.png'} height={'75px'} className={'margin-r-15'} />
                   <Block>
                     <Text type={'p'} classes={'e-text-left e-subhead e-text-deep-purple-700 e-text-uppercase'}> Travel </Text>
                     <Text type={'strong'} classes={'e-text-left e-subhead'}>Lorem ipsum dolor sit amet, ad vide ipsum delicatissimi sed. </Text>
                   </Block>
                 </Block>
               </CardContent>
              </Card>
            </Block>
          </Block>

          <Block classes={'e-row border'}>
            <Block classes={'brick brick-3 border'}>
              <Card classes={'e-no-margin bg-chair'}>
                <CardContent className={'e-text-center'}>
                  <Block>
                    <Btn label={'travel'} ripple={true} type={'default'} classes={'e-text-grey-100 e-text-uppercase explore-btn'} />
                  </Block>
                  <Block>
                    <Text type={'h3'} classes={'e-title e-text-white e-padding-top-15'}>Best of Romania 2015: Revealing what roks </Text>
                    <Text type={'p'} classes={'e-body1 e-text-grey-200 e-padding-top-15'}> I whipped the Scotch tape from my pocket and said </Text>
                  </Block>
                  <Block classes={'e-text-center'}>
                    <Text type={'span'} classes={'e-text-center e-body1 e-text-grey-300'}>By Johnny Brava </Text>
                  </Block>
                </CardContent>
              </Card>
            </Block>
            <Block classes={'brick brick-9 e-h-start e-v-end border'}>
              <Card>
                <CardContent>
                   <Block className={'half-w'}>

                   </Block>
                   <Block className={'half-w'}>
                   </Block>
                </CardContent>
              </Card>
            </Block>
          </Block>

          <Block classes={'e-row border'}>
            <Block classes={'brick brick-6 e-h-end e-v-end border'}>brick-6</Block>
            <Block classes={'brick brick-6 e-h-start e-v-end border'}>brick-6</Block>
          </Block>

          <Block classes={'e-row border'}>
            <Block classes={'brick brick-3 border'}>brick-3</Block>
            <Block classes={'brick brick-3 border'}>brick-3</Block>
            <Block classes={'brick brick-3 border'}>brick-3</Block>
            <Block classes={'brick brick-3 border'}>brick-3</Block>
          </Block>

          <Block classes={'e-row border'}>
            <Block classes={'brick brick-3 e-h-start e-v-center border'}>brick-3</Block>
            <Block classes={'brick brick-3 e-h-center e-v-center border'}>brick-3</Block>
            <Block classes={'brick brick-6 e-h-end e-v-center border'}>brick-6</Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

module.exports = SilkBlogMagazine;
