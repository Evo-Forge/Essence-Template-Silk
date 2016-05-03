import React from 'react';
import ClassNames from 'classnames';

import { Block, Btn,
         Card, CardHeader, CardContent, CardFooter,
         Divider,
         Icon, Image,
         List, ListItem,
         Paper,
         Text } from 'react-essence';

class SilkBlogMagazine extends React.Component {

  render() {
    return (
      <Block className={'e-background-blue-100'}>
        <Block classes={'silkBlogMagazine e-container e-padding-top-25'}>
          <Text type={'h1'} classes={'e-text-center e-display-1 e-text-blue-300'}> Blog / Magazine </Text>
          <Block classes={'e-row'}>
            <Block classes={'brick brick-9'}>
              <Card classes={'bg-mountain flex top-bottom card-h'}>
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
                <CardFooter className={'full-w e-text-center no-border'}>
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

              <Block classes={'flex space-between'}>
                <Block classes={'brick brick-4 e-no-margin e-no-padding'}>
                  <Card className={'e-background-white'}>
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

                <Block classes={'brick brick-8 e-no-margin e-no-padding flex'}>
                  <Card classes={'e-background-white card-img flex card-h'}>
                    <CardContent className={'flex space-between'}>
                      <Block classes={'brick-8 e-no-margin'}>
                        <Card className={'e-background-white e-no-margin card-h flex col-direction space-between top-bottom'}>
                          <CardContent className={'grow flex col-direction'}>
                            <Block>
                              <Btn label={'cars & moto'} ripple={true} type={'default'} classes={'e-text-orange-A400 e-text-uppercase explore-btn orange'} />
                            </Block>
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
              <Card className={'e-background-white'}>
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
              <Block classes={'flex space-between'}>
                <Block classes={'brick brick-4 e-no-margin e-no-padding'}>
                  <Card className={'e-background-white card-h'}>
                    <CardHeader classes={'e-no-padding relative'}>
                      <Image src={'assets/img/balea.png'} classes={'e-img-rsp'}/>
                    </CardHeader>
                    <CardContent>
                      <Btn label={'food & drink'} ripple={true} type={'default'} classes={'e-text-pink-700 e-text-uppercase explore-btn pink'} />
                      <Text type={'h3'} classes={'e-text-left e-title'}> Best of Romania 2015: Revealing what roks </Text>
                    </CardContent>
                  </Card>
                </Block>

                <Block classes={'brick brick-4 e-no-margin e-no-padding'}>
                  <Card className={'e-background-white card-h flex col-direction'}>
                    <CardContent classes={'bg-style e-text-left grow flex start top-bottom'}>
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

                <Block classes={'brick brick-4 e-no-margin e-no-padding'}>
                  <Card classes={'bg-trans card-h flex'}>
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

              <Block classes={'flex space-between'}>
                <Block classes={'brick brick-8 e-no-margin e-no-padding'}>
                  <Card classes={'e-background-deep-orange-400 card-h'}>
                    <CardContent classes={'flex space-between e-no-padding'}>
                      <Block classes={'padding-16 flex col-direction'}>
                        <Block>
                          <Btn label={'style'} ripple={true} type={'default'} classes={'e-text-grey-100 e-text-uppercase explore-btn'} />
                        </Block>
                        <Text type={'h3'} classes={'e-text-left e-display-1 e-text-white e-padding-top-15'}> The Women of 2015 in Their Splandour  </Text>
                        <Text type={'p'} classes={'e-body1 e-text-grey-200 e-padding-top-15'}>Lorem ipsum dolor sit amet, vel alia nominati efficiendi id, alterum impedit fuisset quo no, ius id sumo solum percipitur. </Text>
                        <Block classes={'two-btn e-margin-top-25'}>
                          <Btn label={'read more'} ripple={true} classes={'e-text-grey-100 e-no-margin e-text-uppercase'} />
                          <Btn label={'start slideshow'} ripple={true} classes={'e-text-grey-100 e-no-margin e-text-uppercase'} />
                        </Block>
                      </Block>
                      <Block classes={'e-background-deep-orange-400 flex e-v-end'}>
                        <Image src={'assets/img/girl.png'} className={'card-h'}/>
                      </Block>
                    </CardContent>
                  </Card>
                </Block>

                <Block classes={'brick brick-4 e-no-margin e-no-padding'}>
                  <Card className={'bg-culture card-h flex col-direction'}>
                    <CardHeader classes={'grow'}>
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

            <Block classes={'brick brick-3 flex'}>
              <Card className={'e-background-white flex col-direction'}>
                <CardHeader className={'border-b e-text-center'}>
                  <Text type={'strong'} classes={'e-text-center e-subhead e-text-uppercase e-no-margin'}>Latest</Text>
                </CardHeader>
                <CardContent className={'grow'}>
                  <List type={'navigation'}>
                    <ListItem className={'e-text-center'}>
                      <Btn label={'food & drink'} ripple={true} type={'default'} classes={'e-text-pink-700 e-text-uppercase explore-btn pink'} />
                      <Text type={'h3'} classes={'e-title e-padding-top-15'}> Lorem ipsum dolor sit amet, vel alia nominati efficiendi id. </Text>
                      <Text type={'span'} classes={'e-text-grey-600 e-body2 show e-margin-top-15'}> Johnny Brava</Text>
                      <Divider classes={'thin e-background-grey-100'} />
                    </ListItem>
                    <ListItem className={'e-text-center'}>
                      <Btn label={'sport'} ripple={true} type={'default'} classes={'e-text-green-600 e-text-uppercase explore-btn green margin-t-8'} />
                      <Text type={'h3'} classes={'e-title e-padding-top-15'}> Lorem ipsum dolor sit amet, vel alia nominati efficiendi id. </Text>
                      <Text type={'span'} classes={'e-text-grey-600 e-body2 show e-margin-top-15'}> Johnny Brava</Text>
                      <Divider classes={'thin e-background-grey-100'} />
                    </ListItem>
                    <ListItem className={'e-text-center'}>
                      <Btn label={'cars & moto'} ripple={true} type={'default'} classes={'e-text-orange-A400 e-text-uppercase explore-btn orange margin-t-8'} />
                      <Text type={'h3'} classes={'e-title e-padding-top-15'}> Lorem ipsum dolor sit amet, vel alia nominati efficiendi id. </Text>
                      <Text type={'span'} classes={'e-text-grey-600 e-body2 show e-margin-top-15'}> Johnny Brava</Text>
                      <Divider classes={'thin e-background-grey-100'} />
                    </ListItem>
                    <ListItem className={'e-text-center'}>
                      <Btn label={'style'} ripple={true} type={'default'} classes={'e-text-blue-600 e-text-uppercase explore-btn blue margin-t-8'} />
                      <Text type={'h3'} classes={'e-title e-padding-top-15'}> Lorem ipsum dolor sit amet, vel alia nominati efficiendi id. </Text>
                      <Text type={'span'} classes={'e-text-grey-600 e-body2 show e-margin-top-15'}> Johnny Brava</Text>
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
              <Card classes={'e-background-white'}>
               <CardContent classes={'flex'}>
                 <Block classes={'flex margin-r-15'}>
                   <Image src={'assets/img/castel1.png'} height={'75px'} width={'75px'} className={'margin-r-15'} />
                   <Block>
                     <Text type={'p'} classes={'e-text-left e-subhead e-text-deep-purple-700 e-text-uppercase'}> Travel </Text>
                     <Text type={'strong'} classes={'e-text-left e-subhead'}>Lorem ipsum dolor sit amet, ad vide ipsum delicatissimi sed. </Text>
                   </Block>
                 </Block>
                 <Block classes={'flex margin-r-15'}>
                   <Image src={'assets/img/cetate.png'} height={'75px'} width={'75px'} className={'margin-r-15'} />
                   <Block>
                     <Text type={'p'} classes={'e-text-left e-subhead e-text-deep-purple-700 e-text-uppercase'}> Travel </Text>
                     <Text type={'strong'} classes={'e-text-left e-subhead'}>Lorem ipsum dolor sit amet, ad vide ipsum delicatissimi sed. </Text>
                   </Block>
                 </Block>
                 <Block classes={'flex margin-r-15'}>
                   <Image src={'assets/img/peles.png'} height={'75px'} width={'75px'} className={'margin-r-15'} />
                   <Block>
                     <Text type={'p'} classes={'e-text-left e-subhead e-text-deep-purple-700 e-text-uppercase'}> Travel </Text>
                     <Text type={'strong'} classes={'e-text-left e-subhead'}>Lorem ipsum dolor sit amet, ad vide ipsum delicatissimi sed. </Text>
                   </Block>
                 </Block>
               </CardContent>
              </Card>
            </Block>
          </Block>

          <Block classes={'e-row'}>
            <Block classes={'brick brick-3'}>
              <Card classes={'bg-chair card-h flex'}>
                <CardContent className={'e-text-center flex top-bottom'}>
                  <Block>
                    <Btn label={'travel'} ripple={true} type={'default'} classes={'e-text-grey-100 e-text-uppercase explore-btn'} />
                  </Block>
                  <Block>
                    <Text type={'h3'} classes={'e-title e-text-white e-padding-top-15'}>Best of Romania 2015: Revealing what roks </Text>
                    <Text type={'p'} classes={'e-body1 e-text-grey-200 e-padding-top-15'}> I whipped the Scotch tape from my pocket and said </Text>
                  </Block>
                  <Block classes={'e-text-center'}>
                    <Text type={'em'} classes={'e-text-center e-body1 e-text-grey-300'}>By
                      <Text type={'strong'} classes={'e-text-center e-body1 e-text-grey-300'}> Johnny Brava </Text>
                    </Text>
                  </Block>
                </CardContent>
              </Card>
            </Block>

            <Block classes={'brick brick-9'}>
              <Card classes={'card-h e-background-white'}>
                <CardContent classes={'e-no-padding flex'}>
                  <Block className={'half-w padding-16 e-background-white flex col-direction'}>
                    <Block classes={'grow flex col-direction'}>
                      <Block>
                        <Btn label={'sport'} ripple={true} type={'default'} classes={'e-text-green-600 e-text-uppercase explore-btn orange'} />
                      </Block>
                      <Text type={'strong'} classes={'e-text-left e-title e-padding-top-15 show'}> Lorem ipsum dolor sit amet, vel alia nominati efficiendi </Text>
                      <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-600 e-padding-top-15'}>Lorem ipsum dolor sit amet, vel alia nominati efficiendi id, alterum impedit fuisset quo no, ius id sumo solum percipitur. Vim ex deleniti scaevola contentiones. Harum cotidieque mea et, assum scaevola quo ei.</Text>
                    </Block>
                    <Block>
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
                      </Block>
                    </Block>
                  <Block className={'half-w e-img-rsp'}>
                    <Image src={'assets/img/sport.jpg'} width={'100%'} className={'card-h margin-b-img'}/>
                  </Block>
                </CardContent>
              </Card>
            </Block>
          </Block>

          <Block classes={'e-row'}>
            <Block classes={'brick brick-6'}>
              <Card className={'e-background-white'}>
                <CardHeader classes={'flex space-between border-b'}>
                  <Block>
                    <Text type={'strong'} classes={'e-text-left e-subhead e-text-uppercase e-no-margin'}>Most recent</Text>
                  </Block>
                  <Block classes={'navigation-btn'}>
                    <Btn icon={"hardware-keyboard-arrow-left"} ripple={true} type={'default'} classes={'e-text-grey-900 e-no-margin e-background-white'} />
                    <Btn icon={"hardware-keyboard-arrow-right"} ripple={true} type={'default'} classes={'e-text-grey-900 e-no-margin e-background-white'} />
                  </Block>
                </CardHeader>
                <CardContent classes={'flex'}>
                  <Block classes={'border-r margin-r-15'}>
                    <Text type={'h3'} classes={'e-title e-text-black'}>Best of Romania 2015: Revealing what roks </Text>
                    <Block className={'e-margin-top-25'}>
                      <Text type={'a'} classes={'e-text-center e-body2'}>
                        <Icon name={"communication-messenger"} className={"e-text-grey-600 v-align"} />
                      </Text>
                      <Text type={'span'} classes={'e-text-center e-text-grey-600 e-body2 padding-r-15'}> 19</Text>
                      <Text type={'a'} classes={'e-text-center e-body2'}>
                        <Icon name={"image-panorama-fisheye"} className={"e-text-grey-600 v-align"} />
                      </Text>
                      <Text type={'span'} classes={'e-text-center e-text-grey-600 e-body2 padding-r-15'}> 3 hours ago</Text>
                    </Block>
                  </Block>
                  <Block>
                    <Text type={'h3'} classes={'e-title e-text-black'}>Lorem ipsum dolor sit amet, ex putent.</Text>
                    <Block className={'e-margin-top-25'}>
                      <Text type={'a'} classes={'e-text-center e-body2'}>
                        <Icon name={"communication-messenger"} className={"e-text-grey-600 v-align"} />
                      </Text>
                      <Text type={'span'} classes={'e-text-center e-text-grey-600 e-body2 padding-r-15'}> 19</Text>
                      <Text type={'a'} classes={'e-text-center e-body2'}>
                        <Icon name={"image-panorama-fisheye"} className={"e-text-grey-600 v-align"} />
                      </Text>
                      <Text type={'span'} classes={'e-text-center e-text-grey-600 e-body2 padding-r-15'}> 3 hours ago</Text>
                    </Block>
                  </Block>
                </CardContent>
              </Card>
            </Block>

            <Block classes={'brick brick-6 flex'}>
              <Card className={'bg-nadia grow flex col-direction'}>
                <CardHeader>
                  <Btn label={'sport'} ripple={true} type={'default'} classes={'e-text-grey-100 e-text-uppercase explore-btn'} />
                </CardHeader>
                <CardContent classes={'half-w flex grow'}>
                  <Text type={'h3'} classes={'e-text-left e-text-white e-title'}> Best of Romania Sport: Revealing what roks </Text>
                </CardContent>
                <CardFooter className={'no-border'}>
                  <Text type={'a'} classes={'e-text-center e-body2'}>
                    <Icon name={"action-favorite-outline"} className={"e-text-grey-100 v-align"} />
                  </Text>
                  <Text type={'span'} classes={'e-text-center e-text-grey-100 e-body2 padding-r-15'}> 345</Text>
                  <Text type={'a'} classes={'e-text-center e-body2'}>
                    <Icon name={"communication-messenger"} className={"e-text-grey-100 v-align"} />
                  </Text>
                  <Text type={'span'} classes={'e-text-center e-text-grey-100 e-body2 padding-r-15'}> 19</Text>
                  <Text type={'a'} classes={'e-text-center e-body2'}>
                    <Icon name={"image-panorama-fisheye"} className={"e-text-grey-100 v-align"} />
                  </Text>
                  <Text type={'span'} classes={'e-text-center e-text-grey-100 e-body2 padding-r-15'}> 3 hours ago</Text>
                </CardFooter>
              </Card>
            </Block>
          </Block>

          <Block classes={'e-row'}>
            <Block classes={'brick brick-3'}>
              <Card classes={'e-background-blue-600 flex card-h'}>
                <CardContent classes={'width-80 flex top-bottom'}>
                  <Text type={'p'} classes={'e-text-center e-subhead e-text-grey-200 e-text-uppercase'}> Style </Text>
                  <Text type={'h3'} classes={'e-text-center e-text-white e-title'}> Lorem ipsum dolor sit amet </Text>
                  <Image src={'assets/img/shoes.png'} height={'150px'} />
                  <Btn label={'read more'} ripple={true} classes={'raised e-background-blue-400 e-text-grey-100 e-text-uppercase explore-btn no-border'} />
                </CardContent>
              </Card>
            </Block>

            <Block classes={'brick brick-3'}>
              <Card classes={'e-background-pink-600 flex card-h'}>
                <CardContent classes={'width-80 flex top-bottom'}>
                  <Text type={'p'} classes={'e-text-center e-subhead e-text-grey-200 e-text-uppercase'}> food & drink </Text>
                  <Text type={'h3'} classes={'e-text-center e-text-white e-title'}> Lorem ipsum dolor sit amet </Text>
                  <Image src={'assets/img/food.png'} height={'150px'} />
                  <Btn label={'read more'} ripple={true} classes={'raised e-background-pink-400 e-text-grey-100 e-text-uppercase explore-btn no-border'} />
                </CardContent>
              </Card>
            </Block>

            <Block classes={'brick brick-3'}>
              <Card classes={'e-background-green-600 flex card-h'}>
                <CardContent classes={'width-80 flex top-bottom'}>
                  <Text type={'p'} classes={'e-text-center e-subhead e-text-grey-200 e-text-uppercase'}>sport </Text>
                  <Text type={'h3'} classes={'e-text-center e-text-white e-title'}> Lorem ipsum dolor sit amet </Text>
                  <Image src={'assets/img/ball.png'} height={'150px'} />
                  <Btn label={'read more'} ripple={true} classes={'raised e-background-green-400 e-text-grey-100 e-text-uppercase explore-btn no-border'} />
                </CardContent>
              </Card>
            </Block>

            <Block classes={'brick brick-3'}>
              <Card classes={'e-background-deep-purple-600 flex card-h'}>
                <CardContent classes={'width-80 flex top-bottom'}>
                  <Text type={'p'} classes={'e-text-center e-subhead e-text-grey-200 e-text-uppercase'}>travel </Text>
                  <Text type={'h3'} classes={'e-text-center e-text-white e-title'}> Lorem ipsum dolor sit amet </Text>
                  <Image src={'assets/img/ballon.png'} height={'150px'} />
                  <Btn label={'read more'} ripple={true} classes={'raised e-background-deep-purple-400 e-text-grey-100 e-text-uppercase explore-btn no-border'} />
                </CardContent>
              </Card>
            </Block>
          </Block>

          <Block classes={'e-row'}>
            <Block classes={'brick brick-3'}>
              <Card classes={'e-background-white card-h flex'}>
                <CardContent className={'flex'}>
                  <Block classes={'e-text-black e-background-white border flex col-direction space-between e-text-center padding-16'}>
                    <Block className={'width-80 margin-auto'}>
                      <Text type={'p'} classes={'e-text-center e-subhead e-text-uppercase'}>Quote </Text>
                      <Icon name={"editor-format-quote"} className={"e-text-grey-600 e-text-center e-display-2 padding-16"} />
                      <Text type={'strong'} classes={'show e-text-center e-text-black e-title'}> A problem is a chance for you to do your best </Text>
                    </Block>
                    <Block>
                      <Divider classes={'thin medium e-background-grey-300 margin-auto'} />
                      <Text type={'p'} classes={'e-text-center e-subhead e-text-uppercase'}>Duke Ellington </Text>
                    </Block>
                  </Block>
                </CardContent>
              </Card>
            </Block>

            <Block classes={'brick brick-3'}>
              <Card classes={'full-w e-background-white card-h flex col-direction'}>
                <CardHeader>
                  <Text type={'p'} classes={'e-text-center e-subhead e-text-uppercase'}>Interview </Text>
                </CardHeader>
                <CardContent classes={'e-text-center'}>
                  <Image src={'assets/img/profile.jpg'} height={'180px'} classes={'circle'} />
                </CardContent>
                <CardFooter classes={'e-text-center no-border'}>
                  <Text type={'em'} classes={'e-text-center e-subhead e-text-grey-600'}>An
                    <Text type={'strong'} classes={'e-text-center e-subhead e-text-black'}> Johnny Brava </Text>
                  </Text>
                  <Text type={'em'} classes={'e-text-center e-body1 e-text-grey-600 show'}> Visual Designer </Text>
                </CardFooter>
              </Card>
            </Block>

            <Block classes={'brick brick-6'}>
              <Card classes={'full-w e-background-white card-h'}>
                <CardContent classes={'e-no-padding relative'}>
                  <Btn icon={"av-play-arrow"} ripple={true} type={'default'} classes={'e-text-grey-100 e-text-uppercase video center'} />
                  <Image src={'assets/img/motor.jpg'} classes={'e-img-rsp full-w'} />
                </CardContent>
                <CardFooter classes={'no-border'}>
                  <Btn label={'cars & moto'} ripple={true} type={'default'} classes={'e-text-orange-A400 e-text-uppercase explore-btn orange'} />
                  <Text type={'a'} classes={'e-text-center e-subhead'}>
                    <Icon name={"av-videocam"} className={"e-text-grey-400 v-align-middle"} />
                  </Text>
                  <Text type={'h3'} classes={'e-text-left e-text-black e-title'}>Lorem ipsum dolor sit amet, ex putent recusabo lobortis quo </Text>
                </CardFooter>
              </Card>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

module.exports = SilkBlogMagazine;
